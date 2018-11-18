if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('js/sw.js');
}

fetch('https://geoip-db.com/jsonp', {
  method: "GET",
  cache: "no-cache",
  redirect: "follow", // manual, *follow, error
  referrer: "no-referrer", // no-referrer, *client
})
.then(res => {
  if (res.ok) return res.json();
  throw new Error('Network response was not ok.');
})
.then(res => {
  console.log('result', res);
})
.catch(error => {
  console.error(error);
});
  
var tracking = lib.piyamaskolla.tracking['@__VERSION__'];
tracking.track()
.then(res => {
  console.log(res);
});

console.log();