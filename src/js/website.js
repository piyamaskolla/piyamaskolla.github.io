// if (typeof navigator.serviceWorker !== 'undefined') {
//   navigator.serviceWorker.register('js/sw.js');
// }

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
      //console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
    // navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
    //   console.log('ServiceWorker registration successful with scope: ', registration.scope);
    // }, function(err) {
    //   console.log('ServiceWorker registration failed: ', err);
    // });
  });
}

// fetch('https://geoip-db.com/json/', {
//   method: "GET",
//   mode: "cors",
//   credentials: 'omit',
//   cache: "no-cache",
//   redirect: "follow", // manual, *follow, error
//   referrer: "no-referrer", // no-referrer, *client
// })
// .then(res => {
//   if (res.ok) return res.json();
//   throw new Error('Network response was not ok.');
// })
// .then(res => {
//   var tracking = lib.piyamaskolla.tracking['@__VERSION__'];
//   tracking.track('1', res)
//   .then(res => {
//     console.log('hello, there');
//   });
// })
// .catch(error => {
//   console.error(error);
// });
