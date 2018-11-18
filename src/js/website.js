// if (typeof navigator.serviceWorker !== 'undefined') {
//   navigator.serviceWorker.register('js/sw.js');
// }

fetch('https://geoip-db.com/json/', {
  method: "GET",
  mode: "cors",
  credentials: 'omit',
  cache: "no-cache",
  redirect: "follow", // manual, *follow, error
  referrer: "no-referrer", // no-referrer, *client
})
.then(res => {
  if (res.ok) return res.json();
  throw new Error('Network response was not ok.');
})
.then(res => {
  var tracking = lib.piyamaskolla.tracking['@__VERSION__'];
  tracking.track('1', res)
  .then(res => {
    console.log('hello, there');
  });
})
.catch(error => {
  console.error(error);
});
  


console.log();