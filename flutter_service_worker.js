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
"assets/assets/videos/BDR.mp4": "77d2c39f3392f2b2815ee5afd5ed4541",
"assets/FontManifest.json": "ee78ae81719eb9148210956364de5d07",
"assets/fonts/MaterialIcons-Regular.otf": "421b8c2a8ec999954444477725abf5c0",
"assets/NOTICES": "33a6067d18187898a5cf99cd05647537",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e714e4907544d876da6f94a9d35896ec",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"ICSE-Paper-Biology-2023.pdf": "66718449629028b24cd3044880dc9f0c",
"index.html": "917c0b8f822b00821d043d5c6f640bd8",
"/": "917c0b8f822b00821d043d5c6f640bd8",
"main.dart.js": "afcf95e21612ea72980510d4f7644f5b",
"manifest.json": "f7a6f1dc5a133bfec30b36d7f240ec2b",
"t.png": "7eda4ae5e35388521addac0c8d6122f1",
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
