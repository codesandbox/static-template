var cacheName = 'EPT-v3';
var appShellFiles = [
  './',
  './index.html',
  './favicon.ico',
  './fonts/BRLNSDB.css',
  './fonts/BRLNSDB.eot',
  './fonts/BRLNSDB.otf',
  './fonts/BRLNSDB.svg',
  './fonts/BRLNSDB.ttf',
  './fonts/BRLNSDB.woff',
  './sfx/audio-button.m4a',
  './sfx/audio-button.mp3',
  './sfx/audio-button.ogg',
  './sfx/music-bitsnbites-liver.m4a',
  './sfx/music-bitsnbites-liver.mp3',
  './sfx/music-bitsnbites-liver.ogg',
  './img/main/icons/icon-32.png',
  './img/main/icons/icon-64.png',
  './img/main/icons/icon-96.png',
  './img/main/icons/icon-128.png',
  './img/main/icons/icon-168.png',
  './img/main/icons/icon-192.png',
  './img/main/icons/icon-256.png',
  './img/main/icons/icon-512.png',
  './js/phaser.3.18.1.min.js',
  './js/plugins/webfont.js',
  './js/tart.js',
  './js/Boot.js',
  './js/Preloader.js',
  './js/MainMenu.js',
  './js/Settings.js',
  './js/Story.js',
  './js/Game.js',
  './img/main/background.png',
  './img/main/banner-beer.png',
  './img/main/button-achievements.png',
  './img/main/button-back.png',
  './img/main/button-beer.png',
  './img/main/button-continue.png',
  './img/main/button-credits.png',
  './img/main/button-home.png',
  './img/main/button-mainmenu.png',
  './img/main/button-music-off.png',
  './img/main/button-music-on.png',
  './img/main/button-pause.png',
  './img/main/button-settings.png',
  './img/main/button-sound-off.png',
  './img/main/button-sound-on.png',
  './img/main/button-start.png',
  './img/main/button-tryagain.png',
  './img/main/clickme.png',
  './img/main/enclave-phaser-template.png',
  './img/main/fork.png',
  './img/main/loading-background.png',
  './img/main/logo-enclave.png',
  './img/main/overlay.png',
  './img/main/particle.png',
  './img/main/pattern.png',
  './img/main/title.png'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(appShellFiles);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});