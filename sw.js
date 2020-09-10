importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('title').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.php',
       '/app/views/layouts/default.php',
       '/public/img/miniLogo.png',
       '/public/img/logo.png',
       '/public/js/main.js',
       '/public/css/style.css',
       '/public/css/mobileStyle.css'
     ]);
   })
 );
});

 // Кэширование запросов с родительской страници
self.addEventListener('fetch', function(event) {

  console.log(event.request.url);
  
  event.respondWith(
  
    caches.match(event.request).then(function(response) {
      
      return response || fetch(event.request);
      
    })
  );
});