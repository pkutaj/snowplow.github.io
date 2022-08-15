"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[7948],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),g=n,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(30122);const i={title:"Loading tracker with the Snowplow tag",date:"2021-03-25",sidebar_position:1e3},c=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/loading/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/loading/index",title:"Loading tracker with the Snowplow tag",description:"There are two distributions of the JavaScript Tracker:",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/loading/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/loading",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/loading/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/loading/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:1e3,frontMatter:{title:"Loading tracker with the Snowplow tag",date:"2021-03-25",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Tracker Setup",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/"},next:{title:"Initialization options",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracker-setup/initialization-options/"}},s={},p=[],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"There are two distributions of the JavaScript Tracker:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sp.js")," is fully featured and is bundled with the majority of the available plugins."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sp.lite.js")," is a smaller distribution with no bundled plugins. Included is Page View, Self Describing and Structured Event tracking as well as Activity Tracking and Anonymous Tracking. All other features can be loaded as separate ",(0,n.kt)("a",{parentName:"li",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/plugins/"},"plugins"),".")),(0,n.kt)(o.ZP,{mdxType:"Block1508"}),(0,n.kt)("p",null,"Once the tracker is loaded via the tag, you can move on to initializing the tracker."))}u.isMDXComponent=!0},30122:(e,t,a)=>{a.d(t,{ZP:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={toc:[]};function i(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use the following tag to your page to load ",(0,n.kt)("inlineCode",{parentName:"p"},"sp.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<script type="text/javascript" async=1>\n;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[]; p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments) };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1; n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","{{URL to sp.js}}","snowplow"));\n<\/script>\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," We recommend self hosting ",(0,n.kt)("inlineCode",{parentName:"p"},"sp.js")," by following our Self hosting snowplow JS guides ",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-tracker/"},"here"),". The latest versions are currently available at\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},"GitHub"),"."),(0,n.kt)("p",null,"We also recommend renaming ",(0,n.kt)("inlineCode",{parentName:"p"},"sp.js")," as this file name is commonly blocked by adblockers. Renaming to a random string will help ensure the JavaScript Tracker is loaded as expected."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Important note regarding testing:")," If the URL to sp.js is protocol-relative i.e. beginning with // when fetching ",(0,n.kt)("inlineCode",{parentName:"p"},"sp.js"),". It will work if the your web page is using the \u201chttp\u201d or \u201chttps\u201d protocol. But if you are testing locally and loading your page from your filesystem using the \u201cfile\u201d protocol (so its URI looks something like \u201cfile:///home/joe/snowplow","_","test.html\u201d), the protocol-relative URL will also use that protocol, preventing the script from loading. To avoid this, change the URL to\xa0",(0,n.kt)("inlineCode",{parentName:"p"},'"http://.../sp.js"'),"\xa0when testing locally."),(0,n.kt)("p",null,"As well as loading the JavaScript Tracker, this tag creates a global function called \u201csnowplow\u201d which you use to access the Tracker. You can replace the string \u201csnowplow\u201d with the function name of your choice. This is encouraged: if there are two JavaScript trackers on the same page, there won\u2019t be any conflict between them as long as they have chosen different function names. The rest of the documentation will assume that the function is called \u201csnowplow\u201d."))}i.isMDXComponent=!0}}]);