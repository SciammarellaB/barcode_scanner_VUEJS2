import {precacheAndRoute} from 'workbox-precaching'; 

self.__precacheManifest = [].concat(self.__precacheManifest || []);
precacheAndRoute(self.__WB_MANIFEST, {});

self.addEventListener("message", (event) => {
  if (event.data.action == "SKIP_WAITING") self.skipWaiting();
});