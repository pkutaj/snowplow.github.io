"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[81183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(a),k=r,u=m["".concat(l,".").concat(k)]||m[k]||d[k]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Tracker Callbacks",date:"2020-02-26",sidebar_position:0},i=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/callbacks/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/callbacks/index",title:"Tracker Callbacks",description:"Documentation for latest release",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/callbacks/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/callbacks",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/callbacks/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/callbacks/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/callbacks/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:0,frontMatter:{title:"Tracker Callbacks",date:"2020-02-26",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Optional timestamp argument",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/optional-timestamp-argument/"},next:{title:"Getting the most out of performance timing",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v2/advanced-usage/getting-the-most-out-of-performance-timing/"}},l={},s=[{value:"Methods which can be used from within a callback",id:"methods-which-can-be-used-from-within-a-callback",level:2},{value:"<code>getDomainUserId</code>",id:"getdomainuserid",level:4},{value:"<code>getDomainUserInfo</code>",id:"getdomainuserinfo",level:4},{value:"<code>getUserId</code>",id:"getuserid",level:4},{value:"<code>getCookieName</code>",id:"getcookiename",level:4},{value:"<code>getPageViewId</code>",id:"getpageviewid",level:4}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Documentation for latest release"),(0,r.kt)("p",null,"The documentation listed here is for Version 2 of the JavaScript Tracker. Version 3 is now available and upgrading is recommended."),(0,r.kt)("p",null,"-"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/"},"Documentation for Version 3")),(0,r.kt)("p",null,"-"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/v2-to-v3-migration-guide/"},"v2 to v3 Migration Guide")),(0,r.kt)("p",null,"If you call ",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow")," with a function as the argument, the function will be executed when sp.js loads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow(function () {\n  console.log("sp.js has loaded");\n});\n')),(0,r.kt)("p",null,"Or equivalently:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow(function (x) {\n  console.log(x);\n}, "sp.js has loaded");\n')),(0,r.kt)("p",null,"The callback you provide is executed as a method on the internal\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackerDictionary"),"\xa0object. This means that you can access the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackerDictionary"),"\xa0using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Configure a tracker instance named \"cf\"\nsnowplow('newTracker', 'sp', '{{COLLECTOR_URL}}', {\n appId: 'snowplowExampleApp'\n});\n\n// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var domainUserId = sp.getDomainUserId();\n console.log(domainUserId);\n})\n")),(0,r.kt)("p",null,"The callback function should not be a method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// TypeError: Illegal invocation\nsnowplow(console.log, "sp.js has loaded");\n')),(0,r.kt)("p",null,"will not work, because the value of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\xa0in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"console.log"),"\xa0function will be\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackerDictionary"),"\xa0rather than\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"console"),"."),(0,r.kt)("p",null,"You can get around this problem using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototoype.bind"),"\xa0as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow(console.log.bind(console), "sp.js has loaded");\n')),(0,r.kt)("p",null,"For more on execution context in JavaScript, see the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},"MDN page"),"."),(0,r.kt)("h2",{id:"methods-which-can-be-used-from-within-a-callback"},"Methods which can be used from within a callback"),(0,r.kt)("h4",{id:"getdomainuserid"},(0,r.kt)("inlineCode",{parentName:"h4"},"getDomainUserId")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getDomainUserId"),"\xa0method returns the user ID stored in the first-party cookie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var domainUserId = sp.getDomainUserId();\n console.log(domainUserId);\n})\n")),(0,r.kt)("h4",{id:"getdomainuserinfo"},(0,r.kt)("inlineCode",{parentName:"h4"},"getDomainUserInfo")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getDomainUserInfo"),"\xa0method returns all the information stored in first-party cookie in an array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var domainUserInfo = sp.getDomainUserInfo();\n console.log(domainUserInfo);\n})\n")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"domainUserInfo"),"\xa0variable will contain an array with 7 elements:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A string set to\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"'1'"),"\xa0if this is the user's first session and\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"'0'"),"\xa0otherwise"),(0,r.kt)("li",{parentName:"ol"},"The domain user ID"),(0,r.kt)("li",{parentName:"ol"},"The timestamp at which the cookie was created"),(0,r.kt)("li",{parentName:"ol"},"The number of times the user has visited the site"),(0,r.kt)("li",{parentName:"ol"},"The timestamp for the current visit"),(0,r.kt)("li",{parentName:"ol"},"The timestamp of the last visit"),(0,r.kt)("li",{parentName:"ol"},"The session id")),(0,r.kt)("h4",{id:"getuserid"},(0,r.kt)("inlineCode",{parentName:"h4"},"getUserId")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getUserId"),"\xa0method returns the user ID which you configured using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"setUserId()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var userId = sp.getUserId();\n console.log(userId);\n})\n")),(0,r.kt)("h4",{id:"getcookiename"},(0,r.kt)("inlineCode",{parentName:"h4"},"getCookieName")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getCookieName"),"\xa0method returns the complete cookie name for the domain or session cookie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var cookieName = sp.getCookieName('id');\n console.log(cookieName);\n})\n")),(0,r.kt)("p",null,"The argument corresponds to the basename of the cookie: 'id' for the domain cookie, 'ses' for the session cookie."),(0,r.kt)("h4",{id:"getpageviewid"},(0,r.kt)("inlineCode",{parentName:"h4"},"getPageViewId")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getPageViewId"),"\xa0method returns the page view id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var pageViewId = sp.getPageViewId();\n console.log(pageViewId);\n})\n")))}d.isMDXComponent=!0}}]);