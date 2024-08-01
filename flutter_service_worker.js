'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2c8c1d9287099ab5c270f5c6b66b381e",
"assets/AssetManifest.bin.json": "e66e3771e479a29fbc858ff4ee5e3569",
"assets/AssetManifest.json": "103d945d570922d2535d9d21fd298f07",
"assets/assets/fonts/Inconsolata-Bold.ttf": "e156a118727053f0f6072d0ee05a48eb",
"assets/assets/fonts/Inconsolata-Regular.ttf": "f78a1ec600555b4cff33d243d3db476e",
"assets/assets/fonts/WelcomeToFuture1-E4Xnl.ttf": "3b7c8c95509604e95c975534cf1372de",
"assets/assets/images/1.png": "a062c31b611271f0370df1a5d4eac006",
"assets/assets/images/BDR.png": "9d45fccbe103b926d84e2e816c7b0801",
"assets/assets/images/Certificates/AE.png": "f1e3f7989ed7e3c9944a52eead5d7629",
"assets/assets/images/Certificates/EH.jpg": "bc0dc536c8f1256084fb8042c23a7de7",
"assets/assets/images/Certificates/gcs.png": "1026f97a9d66bb2ea2d4d0911e164486",
"assets/assets/images/Certificates/gl.jpg": "d638bc9ff45bf0e608fef9b53692ab53",
"assets/assets/images/Certificates/incs.png": "ac1dd4b24c1f9d7d1bcdf3812dce0fdd",
"assets/assets/images/Dramaz.png": "676185ff023bf4ba1899fccfdbb2ff05",
"assets/assets/images/Hellen.png": "3c4c1bcb83f703c8c57ddf01ac9355b6",
"assets/assets/images/Passport.jpg": "8115cb9c3e225abb6acaf1c8a2ef6687",
"assets/assets/images/password.png": "7eda4ae5e35388521addac0c8d6122f1",
"assets/assets/images/pattern.jpg": "7f857fa3409b36a2329c125405a04075",
"assets/assets/images/skills/AS.gif": "84dc35fb8eaec63093ed7b147575e566",
"assets/assets/images/skills/cpp.png": "0ae6cf38dfa918d5c07ea197da38cfda",
"assets/assets/images/skills/CT.gif": "51bd69248e474205040f575c27cbbdff",
"assets/assets/images/skills/cyberforencis.gif": "28e2a6fafab7ece00452103b711fa1d8",
"assets/assets/images/skills/eh.png": "a81e8d8bd3c0914b998b6cc4285afe78",
"assets/assets/images/skills/linux.png": "e200ecc89b82b8f87eaed04123101cd6",
"assets/assets/images/skills/mysql.gif": "f58fefccea809436cc53bd5ffa26e878",
"assets/assets/images/skills/networking.gif": "df8d89917a5964678fa87bd12313c340",
"assets/assets/images/skills/PS.gif": "f9ff904d59405b37c1ba2492423248c6",
"assets/assets/images/skills/python.gif": "04c944c66a8c20f4ad78467f78dc64a2",
"assets/assets/images/Social%2520media/github.png": "54c04e3f462dab0c2fbbf83c676c21f5",
"assets/assets/images/Social%2520media/linkedin.png": "d2b6c44104204eb1644c41e0382b9656",
"assets/assets/images/Social%2520media/whatsapp.gif": "b7d82e3c02136d794cc3210a9dd86b5d",
"assets/assets/images/Social%2520media/whatsapp.png": "03cb1f51bc80a0aa476358049ec3f5c8",
"assets/assets/images/Stabit.png": "36eec99e4f6daa234688d003f24af443",
"assets/assets/images/WS.png": "d1d5f96d04912e3cfaddc0f595706577",
"assets/FontManifest.json": "ee78ae81719eb9148210956364de5d07",
"assets/fonts/MaterialIcons-Regular.otf": "118eb3af3cd023f2f66cad947a02b696",
"assets/NOTICES": "61193f82d24ef465bf71a07bea94c321",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2af98c76014ba8d1419068706a0327db",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "917c0b8f822b00821d043d5c6f640bd8",
"/": "917c0b8f822b00821d043d5c6f640bd8",
"main.dart.js": "f8b5c1cb6f0596da475321985e878caa",
"manifest.json": "f7a6f1dc5a133bfec30b36d7f240ec2b",
"version.json": "47b7f3bd4cefe2733371189eb2989012"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
