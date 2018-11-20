// caches.keys().then(function(names) {
//   console.log(names);
//     for (let name of names)
//         caches.delete(name);
// });

var CACHE_NAME = 'v7.piyamaskolla.github.io';
var urlsToCache = [
  '/th/1378.jpg',
  '/img/1.jpg'
];
var cacheWhitelist = ['v7.piyamaskolla.github.io'];
    
function removePrevCache() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) { //console.log('cacheName', cacheName);
        if (cacheWhitelist.indexOf(cacheName) === -1) { //console.log('found', cacheName);
          return caches.delete(cacheName);
        }
      })
    );
  })
}

self.addEventListener('install', function(event) { //console.log('install v7');
  //self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        //console.log('install v7 Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) { //console.log('activate v7');
  event.waitUntil(
    removePrevCache()
  );
});

self.addEventListener('fetch', function(event) {

  // caches.keys().then(function(names) {
  //   //for (let name of names) caches.delete(name);
  //   for (let name of names) console.log(name);
  // });
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          //console.log('fetch Cache match and have response', 'v7', event.request.url);
          //removePrevCache();
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// The Util Function to hack URLs of intercepted requests
const getFixedUrl = (req) => {
  var now = Date.now()
  var url = new URL(req.url)

  // 1. fixed http URL
  // Just keep syncing with location.protocol
  // fetch(httpURL) belongs to active mixed content.
  // And fetch(httpRequest) is not supported yet.
  url.protocol = self.location.protocol

  // 2. add query for caching-busting.
  // Github Pages served with Cache-Control: max-age=600
  // max-age on mutable content is error-prone, with SW life of bugs can even extend.
  // Until cache mode of Fetch API landed, we have to workaround cache-busting with query string.
  // Cache-Control-Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=453190
  if (url.hostname === self.location.hostname) {
    url.search += (url.search ? '&' : '?') + 'cache-bust=' + now
  }
  return url.href
}