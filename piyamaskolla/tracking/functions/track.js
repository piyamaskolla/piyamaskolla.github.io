const co = require('co');
const mongoose = require('mongoose');

let conn = null;
let db_uri = process.env.DB_URI;

/**
* A tracking function
* @returns {number}
*/
module.exports = (context, callback) => {
  // // Make sure to add this so you can re-use `conn` between function calls.
  // // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
  // context.callbackWaitsForEmptyEventLoop = false;
  
  run(context)
  .then(res => {
    callback(null, res);
    console.log('track called!');
  })
  .catch(error => callback(error));
};

function run(context) {
  return co(function*() {
    // Because `conn` is in the global scope, Lambda may retain it between
    // function calls thanks to `callbackWaitsForEmptyEventLoop`.
    // This means your Lambda function doesn't have to go through the
    // potentially expensive process of connecting to MongoDB every time.
    if (conn == null) {
      //console.log(process.env.NODE_ENV, db_uri);

      conn = yield mongoose.createConnection(db_uri, {
        // Buffering means mongoose will queue up operations if it gets
        // disconnected from MongoDB and send them when it reconnects.
        // With serverless, better to fail fast if not connected.
        bufferCommands: false, // Disable mongoose buffering
        bufferMaxEntries: 0, // and MongoDB driver buffering
        useNewUrlParser: true
      });
      
      const trackSchema = new mongoose.Schema({
          user_id:  {type: Number, required: true},
          user_agent: {type: String, required: true},
          ip_address: {type: String, required: true}
        },
        { timestamps: true }
      );
      conn.model('TrackLog', trackSchema);
    }
    
    const TrackLog = conn.model('TrackLog');
    let v = new TrackLog({
      user_id:  '1',
      user_agent: context.http.headers["user-agent"],
      ip_address: context.remoteAddress
    });
    yield v.save();

    let count = yield TrackLog.estimatedDocumentCount({});
    return count;
  });
}