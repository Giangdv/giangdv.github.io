"use strict";var precacheConfig=[["/index.html","c35196b77de4b7c5af9fb1b0374116c5"],["/static/css/main.88a21586.css","c28b34080972465f9c95cc8432fc5264"],["/static/js/main.c95e2d5a.js","c09721adcfc22ae66b8420b520d778a9"],["/static/media/carousel_example_1.280b5e9b.png","280b5e9b3fe16a5774fb698afe988e16"],["/static/media/logo.9ed5b784.png","9ed5b7842dc7d920bb3a5a4f45cdc9cc"],["/static/media/onboarding1.f4e88fc1.png","f4e88fc1e9f495872d812a6660896b76"],["/static/media/onboarding2.75947a19.png","75947a1971d7e559581c584a6c2164a3"],["/static/media/onboarding3.939e824e.png","939e824e9c8e9205f4dd283fdda4b871"],["/static/media/onboarding4.3def31bd.png","3def31bd6c3cc110137e07db043fcd85"],["/static/media/product_example_1.dbd49d80.png","dbd49d805ecca8787aad22b61713c1af"],["/static/media/product_example_2.89484b7a.png","89484b7accbcea1df00ce9c57b9ef468"],["/static/media/product_example_3.8cd1c342.png","8cd1c342a4d96c0a2d43bc0a8c741def"],["/static/media/product_example_4.f9b25aec.png","f9b25aec07fedca41dbd12efb213a148"],["/static/media/product_example_5.c9d4f788.png","c9d4f788fd6a9d9d436cf027011ac9ad"],["/static/media/product_example_6.2026c98b.png","2026c98b7066b3436935bb2f483a77bf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});