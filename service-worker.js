/* globals importScripts:true */
/* globals workbox:true */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

workbox.core.setCacheNameDetails({
  prefix: 'TCV',
  suffix: 'v1'
})

// Emotes, Badges
workbox.routing.registerRoute(
  /^(https:\/\/static-cdn.jtvnw.net\/badges\/v1\/*|http:\/\/static-cdn.jtvnw.net\/emoticons\/v1\/*|http:\/\/cdn.frankerfacez.com\/*|http:\/\/cdn.betterttv.net\/emote\/*|)/,
  new workbox.strategies.CacheFirst({
    cacheName: 'badgesTwitchTv',
    cacheExpiration: {
      maxAgeSeconds: 60 * 60 * 3, // cache the content for 3 hours
      maxEntries: 40
    }
  })
)

// Global APIs
workbox.routing.registerRoute(
  /^(https:\/\/badges\.twitch\.tv\/v1\/badges\/global\/display|https:\/\/api\.betterttv\.net\/2\/emotes|https:\/\/api\.frankerfacez\.com\/v1\/set\/global)/,
  new workbox.strategies.CacheFirst({
    cacheName: 'badgesAPITwitchTv',
    cacheExpiration: {
      maxAgeSeconds: 60 * 60 * 3, // cache the content for 3 hours
      maxEntries: 40
    }
  })
)

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
)

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
  })
)

workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "a6df2f73507883d74e3577707fa1db28"
  },
  {
    "url": "index.html",
    "revision": "6ca9536a4bd2c868c02f1a48a03cc3fb"
  },
  {
    "url": "manifest.json",
    "revision": "f4cdbb27c59ae81067ccb3061c878db2"
  },
  {
    "url": "precache-manifest.85573730fe20bdf3a57d55c4d06d5147.js",
    "revision": "85573730fe20bdf3a57d55c4d06d5147"
  },
  {
    "url": "static/css/app.css",
    "revision": "1ed8b05166e0e1157ba0f9f0e5a64f70"
  },
  {
    "url": "static/css/bootstrap.min.css",
    "revision": "a15c2ac3234aa8f6064ef9c1f7383c37"
  },
  {
    "url": "static/css/bootstrap.min.css.map",
    "revision": "1ac01d0e0892441d8eb12356a5b7e5a4"
  },
  {
    "url": "static/css/main.42341871.chunk.css",
    "revision": "e02c169bb2b27c0c73427bbf746970b5"
  },
  {
    "url": "static/css/main.42341871.chunk.css.map",
    "revision": "c902f58e45463e7e5e97663f4a102ed0"
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
    "url": "static/js/2.ac82a2b0.chunk.js",
    "revision": "5ab6e0bcf809d4feef1a6f26c5ad0aeb"
  },
  {
    "url": "static/js/main.07bb77dd.chunk.js",
    "revision": "3454404c7ee0781be46c0f9d4e62e0c5"
  },
  {
    "url": "static/js/main.07bb77dd.chunk.js.map",
    "revision": "fa9a795b7b699c2e55fee3948fd3774b"
  },
  {
    "url": "static/js/runtime-main.d17e4adc.js",
    "revision": "735ee68de814ab2356d9ee63af2b122d"
  },
  {
    "url": "static/js/runtime-main.d17e4adc.js.map",
    "revision": "aa33ec3094eb89f183cef36e5fefb0b4"
  },
  {
    "url": "static/media/TwitchGlitchWhite.5f80eca1.svg",
    "revision": "5f80eca1d805425ff67f53ef32fd69af"
  }
])
