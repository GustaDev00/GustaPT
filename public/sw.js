if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/3JBu3aYXAMZU27nsmBENp/_buildManifest.js",revision:"7f3aea4998ea735df7931562053a98df"},{url:"/_next/static/3JBu3aYXAMZU27nsmBENp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/framework-2c16ac744b6cdea6.js",revision:"2c16ac744b6cdea6"},{url:"/_next/static/chunks/main-23780bd03af23815.js",revision:"23780bd03af23815"},{url:"/_next/static/chunks/pages/_app-62c5878ba8fa3de4.js",revision:"62c5878ba8fa3de4"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/index-32d8c02c159d9cda.js",revision:"32d8c02c159d9cda"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f164db4954bac6ec.js",revision:"f164db4954bac6ec"},{url:"/_next/static/css/f518ce178360a715.css",revision:"f518ce178360a715"},{url:"/favicon.ico",revision:"2eed76d75d7c083a5fc7fd7f3cbd84ee"},{url:"/fonts/HelveticaNeue/HelveticaNeueBold.otf",revision:"b3ac1bd5e427f84b07373609c6e63d4a"},{url:"/fonts/HelveticaNeue/HelveticaNeueLight.otf",revision:"bfbaeacd0e20bdc3d9bb57e417b5e693"},{url:"/fonts/HelveticaNeue/HelveticaNeueMedium.otf",revision:"3de700a4650f63d566ee3e19cf1d1511"},{url:"/imgs/altogiro.png",revision:"1f07413bfb614e7e298cd3ac85e22ea6"},{url:"/imgs/bateriasgalileu.png",revision:"84d078222f09be072c75784e1c0a3512"},{url:"/imgs/bubowl.png",revision:"c00daa419045db95d3c179ddd82878e4"},{url:"/imgs/ene2ese.png",revision:"b57002ac987591aec2cf2ec9b1537082"},{url:"/imgs/farmrio.png",revision:"31c2929e98e29f6cfb524b6ae04e227c"},{url:"/imgs/jeansclub.png",revision:"d3c36426755020e2cd21471397d0cb17"},{url:"/imgs/libercomunicacaovisual.png",revision:"ffb1c36d150bb404a109b7b3bd6b2ccb"},{url:"/imgs/pantaspaladar.png",revision:"e605dce6f2a7ac5eb094292516ee4693"},{url:"/imgs/shopdoscabelos.png",revision:"9e256157cc720a71acac9770c2ab4b1c"},{url:"/manifest.json",revision:"c286f6c841db93e656fd6cd500d903e1"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/robots.txt",revision:"d750ee10e14f3fca18bd9a9a880d8660"},{url:"/sitemap.xml",revision:"a75d1552ecb29f2f01e5278512f0c875"},{url:"/svgs/Grupo 15.png",revision:"e6a89922513063128d43ba1e253446d1"},{url:"/svgs/Grupo 16.png",revision:"1106641e48170cfdfa5987f3802675fc"},{url:"/svgs/Grupo 17.png",revision:"c652ebb082fbfa418fa917a26f102539"},{url:"/svgs/Icon material-outline-keyboard-voice.png",revision:"bdb861b18dc520fc123e7ea43d88fce5"},{url:"/svgs/d4b71549c2c20546caf5930c9427b354.png",revision:"94363fee820c7332cffc3e8c6ad140fc"},{url:"/svgs/e70d01d02942587a378f464a680c4649.png",revision:"03b8ce2beca8db1f859f971c829d7c43"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
