if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>a(e,c),o={module:{uri:c},exports:r,require:t};s[c]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/GefQr0GUiTSEA3eVZMkIy/_buildManifest.js",revision:"118305351d059d4fc31b0725f85a013f"},{url:"/_next/static/GefQr0GUiTSEA3eVZMkIy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/851-6fdfe66898bf74ec.js",revision:"6fdfe66898bf74ec"},{url:"/_next/static/chunks/framework-2c16ac744b6cdea6.js",revision:"2c16ac744b6cdea6"},{url:"/_next/static/chunks/main-4de58260dc732e35.js",revision:"4de58260dc732e35"},{url:"/_next/static/chunks/pages/_app-0544fe1cb4c119e4.js",revision:"0544fe1cb4c119e4"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/index-76a1f879d43a21dc.js",revision:"76a1f879d43a21dc"},{url:"/_next/static/chunks/pages/pt-1e9936e908f35167.js",revision:"1e9936e908f35167"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f164db4954bac6ec.js",revision:"f164db4954bac6ec"},{url:"/_next/static/css/ae011297c84db925.css",revision:"ae011297c84db925"},{url:"/favicon.ico",revision:"2eed76d75d7c083a5fc7fd7f3cbd84ee"},{url:"/fonts/HelveticaNeue/HelveticaNeueBold.otf",revision:"b3ac1bd5e427f84b07373609c6e63d4a"},{url:"/fonts/HelveticaNeue/HelveticaNeueLight.otf",revision:"bfbaeacd0e20bdc3d9bb57e417b5e693"},{url:"/fonts/HelveticaNeue/HelveticaNeueMedium.otf",revision:"3de700a4650f63d566ee3e19cf1d1511"},{url:"/imgs/eu.png",revision:"28c5640f2bd952fb1b7a0e6a08cb8ec0"},{url:"/imgs/eu.webp",revision:"1c558a9f3e177474aa8869920f39b12f"},{url:"/imgs/works/altogiro.png",revision:"1f07413bfb614e7e298cd3ac85e22ea6"},{url:"/imgs/works/altogiro.webp",revision:"ea2645dc50a0b6f22798734d5d1b1623"},{url:"/imgs/works/bateriasgalileu.png",revision:"84d078222f09be072c75784e1c0a3512"},{url:"/imgs/works/bateriasgalileu.webp",revision:"28758042b12b999090fbaafd9fe4db58"},{url:"/imgs/works/bubowl.png",revision:"c00daa419045db95d3c179ddd82878e4"},{url:"/imgs/works/bubowl.webp",revision:"0ab588ece58e00bf7d29573337a70317"},{url:"/imgs/works/ene2ese.png",revision:"b57002ac987591aec2cf2ec9b1537082"},{url:"/imgs/works/ene2ese.webp",revision:"98a4f841a1b786297adee12afda01df2"},{url:"/imgs/works/farmrio.png",revision:"31c2929e98e29f6cfb524b6ae04e227c"},{url:"/imgs/works/farmrio.webp",revision:"a5d5cee3f8b189bb9888f79efad3fedc"},{url:"/imgs/works/jeansclub.png",revision:"d3c36426755020e2cd21471397d0cb17"},{url:"/imgs/works/jeansclub.webp",revision:"c085c950a746bdd3e86b10072160036d"},{url:"/imgs/works/libercomunicacaovisual.png",revision:"ffb1c36d150bb404a109b7b3bd6b2ccb"},{url:"/imgs/works/libercomunicacaovisual.webp",revision:"fd5ae2f1aecd52325e81082e8298d53c"},{url:"/imgs/works/pantaspaladar.png",revision:"e605dce6f2a7ac5eb094292516ee4693"},{url:"/imgs/works/pantaspaladar.webp",revision:"ea65cf10746860e101e2123ce6a827a1"},{url:"/imgs/works/shopdoscabelos.png",revision:"9e256157cc720a71acac9770c2ab4b1c"},{url:"/imgs/works/shopdoscabelos.webp",revision:"45039a3de344fca4032c861a333840af"},{url:"/manifest.json",revision:"c286f6c841db93e656fd6cd500d903e1"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/robots.txt",revision:"d750ee10e14f3fca18bd9a9a880d8660"},{url:"/sitemap.xml",revision:"f1eae444217aa8311b5984e40a582ae7"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
