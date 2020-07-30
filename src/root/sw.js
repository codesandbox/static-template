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
  '/media/img/icons/icon-32.png',
  '/media/img/icons/icon-64.png',
  '/media/img/icons/icon-96.png',
  '/media/img/icons/icon-128.png',
  '/media/img/icons/icon-168.png',
  '/media/img/icons/icon-192.png',
  '/media/img/icons/icon-256.png',
  '/media/img/icons/icon-512.png',
  './js/root/phaser.3.18.1.min.js',
  './js/root/plugins/webfont.js',
  './js/root/start.js',
  './js/root/Boot.js',
  './js/root/Preloader.js',
  './js/root/MainMenu.js',
  './js/root/Settings.js',
  './js/root/Story.js',
  './js/games/Game.js',
  '/media/img/main/background.png',
  '/media/img/main/banner-beer.png',
  '/media/img/main/button-achievements.png',
  '/media/img/main/button-back.png',
  '/media/img/main/button-beer.png',
  '/media/img/main/button-continue.png',
  '/media/img/main/button-credits.png',
  '/media/img/main/button-home.png',
  '/media/img/main/button-mainmenu.png',
  '/media/img/main/button-music-off.png',
  '/media/img/main/button-music-on.png',
  '/media/img/main/button-pause.png',
  '/media/img/main/button-settings.png',
  '/media/img/main/button-sound-off.png',
  '/media/img/main/button-sound-on.png',
  '/media/img/main/button-start.png',
  '/media/img/main/button-tryagain.png',
  '/media/img/main/clickme.png',
  '/media/img/main/enclave-phaser-template.png',
  '/media/img/main/fork.png',
  '/media/img/main/loading-background.png',
  '/media/img/main/logo-enclave.png',
  '/media/img/main/overlay.png',
  '/media/img/main/particle.png',
  '/media/img/main/pattern.png',
  '/media/img/main/title.png'
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