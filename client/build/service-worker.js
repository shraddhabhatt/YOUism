"use strict";var precacheConfig=[["/index.html","b0bf0ea28dcfed0a6743e0e66505402d"],["/static/css/main.6d951e7e.css","8424a5c09d1c551841fea3b6e0f07f0d"],["/static/js/main.615a1967.js","9be752e30804ae4341afc1e8fb6c5063"],["/static/media/act3.e4d86c2b.jpg","e4d86c2ba72ac01758f689311491c236"],["/static/media/career.1d3e7c05.jpg","1d3e7c05d2b252591185f4f89467fdc6"],["/static/media/career1.1a8301ff.jpg","1a8301ff261c4bdfa759cb7eb688749b"],["/static/media/career2.95caae93.jpg","95caae931d443f3e8a8af9fd9c2cc459"],["/static/media/career3.cd89f4fa.jpg","cd89f4fa475823739c9c5eab8854a88e"],["/static/media/click.612cd3ad.webp","612cd3ad8c372d50d2a6c5bf4a158e67"],["/static/media/donate.6412c29a.jpg","6412c29ae0cbc9a5ffe6d394fcbd3c67"],["/static/media/drawify.6088ab89.jpg","6088ab891b3951bda4ab9750fdbd7535"],["/static/media/events4.df858925.jpg","df858925871f6bf30cbc4b54b1ebe50f"],["/static/media/footer7.d3cfb861.png","d3cfb861451418e9d0cc1e6494b9f5f8"],["/static/media/game2.fb97b11c.jpg","fb97b11c6243105a60e67c8edae60234"],["/static/media/game3.0052ed17.jpg","0052ed177c1bd8b7143e121f4a1a8f05"],["/static/media/guest.a846447f.png","a846447f1117a4378d24d7cf0cac5a87"],["/static/media/h1.de033be5.png","de033be5cbb657619afa4299d5bc5782"],["/static/media/h3.2cbe7e36.jpg","2cbe7e3689fef6fc7879b4ebe854973e"],["/static/media/h4.1996eb21.jpg","1996eb21d0f5b480553d6c1e9254d05d"],["/static/media/img1.2160dfad.jpg","2160dfadf11cb13333432c42a0f65328"],["/static/media/kids2.e94ff045.png","e94ff045f526b53a98b9f62c1076794a"],["/static/media/logo.fd5f82d0.png","fd5f82d04e6d02cd70024cecaaff574f"],["/static/media/p1.9327f837.jpg","9327f8378bd0c4c24a45a90b572e995b"],["/static/media/parallax2.74a1b789.jpg","74a1b789eddfb2961e4c113d0e32c41b"],["/static/media/s1.92bfe282.jpg","92bfe28204927f0a853d5de904e3ca90"],["/static/media/s2.5e733c4d.jpg","5e733c4d72bb447e5e106186a4c74024"],["/static/media/s3.624c985d.jpg","624c985da067ba4125fa2740fbf7ce59"],["/static/media/s4.d581f6f7.jpg","d581f6f704280840cdc27ed717eb1ca1"],["/static/media/s5.022711d9.jpg","022711d9ca5d48d9503806409a30767f"],["/static/media/volunteer.2a614c52.png","2a614c52bb7fec7dc103ed707e5a239f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});