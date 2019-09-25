importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0021df06003437cf962e.js",
    "revision": "e7fcfe69463408971f8548b8e1686559"
  },
  {
    "url": "/_nuxt/134901106a14f4721bc7.js",
    "revision": "464f184a7f506156cdb126cc5f61d36d"
  },
  {
    "url": "/_nuxt/1e95f3987314c90d2ef9.js",
    "revision": "294213e05f423b9c2e9fe4946a041399"
  },
  {
    "url": "/_nuxt/24ec9a1ab66ab22f4be4.js",
    "revision": "bf65e372f0de7f0a8e31e2c1f14b28e0"
  },
  {
    "url": "/_nuxt/4cf4ec82a4143fbe1994.js",
    "revision": "533ed2faec32a3108bdf4fd7d0a10c49"
  },
  {
    "url": "/_nuxt/4cfcf3dad97a2870761c.js",
    "revision": "95732e35047a631c1cc5aa07065f4487"
  },
  {
    "url": "/_nuxt/5cddab288aa2b8ebb18f.js",
    "revision": "f5b59061e165eac02322bf7211ed2817"
  },
  {
    "url": "/_nuxt/74388f546a11be649675.js",
    "revision": "57d3eea5592d399c7eb8bb9fc23d8e97"
  },
  {
    "url": "/_nuxt/b7d44b90453e36bbfbdd.js",
    "revision": "617ee2a6c9b38dae89478923cb3ac5d7"
  },
  {
    "url": "/_nuxt/d6714e98c21c98379140.js",
    "revision": "a3fe8e69f3895981d320a719fe35255a"
  }
], {
  "cacheId": "mde-js-site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
