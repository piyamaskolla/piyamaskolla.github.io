const cssnano = require('cssnano').process;
const path = require('path');
const fs = require('fs');

let file = path.resolve('css', 'website.css');
cssnano(fs.readFileSync(file), {from: undefined}).then(result => {
  let filemin = path.resolve('css', 'website.min.css');
  fs.writeFileSync(filemin, result.css);
});
