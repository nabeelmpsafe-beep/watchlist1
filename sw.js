var C='uswl-v1',A=['./','./index.html','./manifest.webmanifest','./icon-192.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(A)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}))});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
e.respondWith(fetch(r).then(function(n){var cp=n.clone();caches.open(C).then(function(c){c.put(r,cp)});return n}).catch(function(){return caches.match(r)}))});
