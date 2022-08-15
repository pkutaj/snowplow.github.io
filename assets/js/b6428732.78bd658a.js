"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[23911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),k=a,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Initialization",date:"2020-02-26",sidebar_position:200},i=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/initialization/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/initialization/index",title:"Initialization",description:"Assuming you have completed the\xa0Node.js Tracker Setup\xa0for your project, you are now ready to initialize the Tracker.",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/initialization/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/initialization",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/initialization/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/initialization/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/initialization/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:200,frontMatter:{title:"Initialization",date:"2020-02-26",sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/setup/"},next:{title:"Configuration",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/configuration/"}},l={},s=[],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Assuming you have completed the\xa0",(0,a.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/node-js-tracker/node-js-tracker-0-3-0/setup/"},"Node.js Tracker Setup"),"\xa0for your project, you are now ready to initialize the Tracker."),(0,a.kt)("p",null,"Require the Node.js Tracker module into your code like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var snowplow = require('snowplow-tracker');\nvar emitter = snowplow.emitter;\nvar tracker = snowplow.tracker;\n")),(0,a.kt)("p",null,"First, initialize an emitter instance. This object will be responsible for how and when events are sent to Snowplow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var e = emitter(\n  'myscalastreamcollector.net', // Collector endpoint\n  'http', // Optionally specify a method - http is the default\n  8080, // Optionally specify a port\n  'POST', // Method - defaults to GET\n  5, // Only send events once n are buffered. Defaults to 1 for GET requests and 10 for POST requests.\n  function (error, body, response) { // Callback called for each request\n    if (error) {\n      console.log(\"Request to Scala Stream Collector failed!\");\n    }\n  },\n  { maxSockets: 6 } // Node.js agentOptions object to tune performance\n);\n")),(0,a.kt)("p",null,"Note that last emitter's argument\xa0",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#http_new_agent_options"},(0,a.kt)("inlineCode",{parentName:"a"},"agentOptions")),"\xa0is default configuration object for Node.js HTTP module. It required to constrain\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"maxSockets"),"\xa0for bulk loads, which otherwise can lead to event loss."),(0,a.kt)("p",null,"Initialise a tracker instance like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var t = tracker([e], 'myTracker', 'myApp', false);\n")),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"tracker"),"\xa0function takes four parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An array of emitters to which the tracker will hand Snowplow events"),(0,a.kt)("li",{parentName:"ul"},"An optional tracker\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"namespace"),"\xa0which will be attached to all events which the tracker fires, allowing you to identify their origin"),(0,a.kt)("li",{parentName:"ul"},"The\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"appId"),", or application ID"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"encodeBase64"),", which determines whether unstructured events and custom contexts will be base 64 encoded (by default they are).")))}d.isMDXComponent=!0}}]);