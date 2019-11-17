/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "45ae22c22223ae647d424f1e77afd134"
  },
  {
    "url": "index.html",
    "revision": "f82a6d574709b724a5e9cef9679cc418"
  },
  {
    "url": "manifest.json",
    "revision": "f4cdbb27c59ae81067ccb3061c878db2"
  },
  {
    "url": "precache-manifest.c8ffe439ac6de9a1f76051030016cba0.js",
    "revision": "c8ffe439ac6de9a1f76051030016cba0"
  },
  {
    "url": "static/css/app.css",
    "revision": "94406e44fd9865022be87b8d63c22418"
  },
  {
    "url": "static/css/bootstrap.min.css",
    "revision": "a15c2ac3234aa8f6064ef9c1f7383c37"
  },
  {
    "url": "static/css/main.42341871.chunk.css",
    "revision": "e02c169bb2b27c0c73427bbf746970b5"
  },
  {
    "url": "static/img/favicon.ico",
    "revision": "f565ca7caee50925bacfba08f8f5bee7"
  },
  {
    "url": "static/img/logo-144.png",
    "revision": "cd4449c2287d70abde25a78f4a3d902d"
  },
  {
    "url": "static/img/logo-192.png",
    "revision": "655c9f30a8088caf911e8db6070019d2"
  },
  {
    "url": "static/img/logo-240.png",
    "revision": "152c0f5b665d9e5b86cc1b35f655776e"
  },
  {
    "url": "static/img/logo-512.png",
    "revision": "9d57f308f3b6d727bcd6c4234d9f4822"
  },
  {
    "url": "static/js/2.e866cfc0.chunk.js",
    "revision": "17386c5035e7997036ad45c226af32b3"
  },
  {
    "url": "static/js/main.cd0e0e29.chunk.js",
    "revision": "24dbb3a823c025598f9d8019043ff996"
  },
  {
    "url": "static/js/runtime-main.d17e4adc.js",
    "revision": "735ee68de814ab2356d9ee63af2b122d"
  },
  {
    "url": "static/media/TwitchGlitchWhite.5f80eca1.svg",
    "revision": "5f80eca1d805425ff67f53ef32fd69af"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
