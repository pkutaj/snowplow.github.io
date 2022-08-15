"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[39636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(41481);const i={title:"Tracker Callbacks",date:"2021-03-26",sidebar_position:2e3},s=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/advanced-usage/tracker-callbacks/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/advanced-usage/tracker-callbacks/index",title:"Tracker Callbacks",description:"If you call snowplow with a function as the argument, the function will be executed when sp.js loads:",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/advanced-usage/tracker-callbacks/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/advanced-usage/tracker-callbacks",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/advanced-usage/tracker-callbacks/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/advanced-usage/tracker-callbacks/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:2e3,frontMatter:{title:"Tracker Callbacks",date:"2021-03-26",sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"Optional timestamp argument",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/advanced-usage/optional-timestamp-argument/"},next:{title:"Getting the most out of performance timing",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/advanced-usage/getting-the-most-out-of-performance-timing/"}},l={},p=[{value:"Methods which can be used from within a callback",id:"methods-which-can-be-used-from-within-a-callback",level:2},{value:"<code>getDomainUserId</code>",id:"getdomainuserid",level:4},{value:"<code>getDomainUserInfo</code>",id:"getdomainuserinfo",level:4},{value:"<code>getUserId</code>",id:"getuserid",level:4},{value:"<code>getCookieName</code>",id:"getcookiename",level:4},{value:"<code>getPageViewId</code>",id:"getpageviewid",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"Block5966"}),(0,r.kt)("p",null,"If you call ",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow")," with a function as the argument, the function will be executed when sp.js loads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow(function () {\n  console.log("sp.js has loaded");\n});\n')),(0,r.kt)("p",null,"Or equivalently:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow(function (x) {\n  console.log(x);\n}, "sp.js has loaded");\n')),(0,r.kt)("p",null,"The callback you provide is executed as a method on the internal\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackerDictionary"),"\xa0object. This means that you can access the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackerDictionary"),"\xa0using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Configure a tracker instance named \"sp\"\nsnowplow('newTracker', 'sp', '{{COLLECTOR_URL}', {\n appId: 'snowplowExampleApp'\n});\n\n// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var domainUserId = sp.getDomainUserId();\n console.log(domainUserId);\n})\n")),(0,r.kt)("p",null,"The callback function should not be a method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// TypeError: Illegal invocation\nsnowplow(console.log, "sp.js has loaded");\n')),(0,r.kt)("p",null,"This will not work because the value of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\xa0in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"console.log"),"\xa0function will be\xa0the ",(0,r.kt)("inlineCode",{parentName:"p"},"trackerDictionary"),"\xa0rather than\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"console"),"."),(0,r.kt)("p",null,"You can get around this problem using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototoype.bind"),"\xa0as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'snowplow(console.log.bind(console), "sp.js has loaded");\n')),(0,r.kt)("p",null,"For more on execution context in JavaScript, see the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},"MDN page"),"."),(0,r.kt)("h2",{id:"methods-which-can-be-used-from-within-a-callback"},"Methods which can be used from within a callback"),(0,r.kt)("h4",{id:"getdomainuserid"},(0,r.kt)("inlineCode",{parentName:"h4"},"getDomainUserId")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getDomainUserId"),"\xa0method returns the user ID stored in the first-party cookie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var domainUserId = sp.getDomainUserId();\n console.log(domainUserId);\n})\n")),(0,r.kt)("h4",{id:"getdomainuserinfo"},(0,r.kt)("inlineCode",{parentName:"h4"},"getDomainUserInfo")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getDomainUserInfo"),"\xa0method returns all the information stored in first-party cookie in an array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var domainUserInfo = sp.getDomainUserInfo();\n console.log(domainUserInfo);\n})\n")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"domainUserInfo"),"\xa0variable will contain an array with 11 elements:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A string set to\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"'1'"),"\xa0if this is the user's first session and\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"'0'"),"\xa0otherwise"),(0,r.kt)("li",{parentName:"ol"},"The domain user ID"),(0,r.kt)("li",{parentName:"ol"},"The timestamp at which the cookie was created"),(0,r.kt)("li",{parentName:"ol"},"The number of times the user has visited the site"),(0,r.kt)("li",{parentName:"ol"},"The timestamp for the current visit"),(0,r.kt)("li",{parentName:"ol"},"The timestamp of the last visit"),(0,r.kt)("li",{parentName:"ol"},"The session id"),(0,r.kt)("li",{parentName:"ol"},"ID of the previous session (since version 3.5)"),(0,r.kt)("li",{parentName:"ol"},"ID of the first event in the current session (since version 3.5)"),(0,r.kt)("li",{parentName:"ol"},"Device created timestamp of the first event in the current session (since version 3.5)"),(0,r.kt)("li",{parentName:"ol"},"Index of the last event in the session (used to inspect order of events) (since version 3.5)")),(0,r.kt)("h4",{id:"getuserid"},(0,r.kt)("inlineCode",{parentName:"h4"},"getUserId")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getUserId"),"\xa0method returns the user ID which you configured using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"setUserId()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var userId = sp.getUserId();\n console.log(userId);\n})\n")),(0,r.kt)("h4",{id:"getcookiename"},(0,r.kt)("inlineCode",{parentName:"h4"},"getCookieName")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getCookieName"),"\xa0method returns the complete cookie name for the domain or session cookie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var cookieName = sp.getCookieName('id');\n console.log(cookieName);\n})\n")),(0,r.kt)("p",null,"The argument corresponds to the basename of the cookie: 'id' for the domain cookie, 'ses' for the session cookie."),(0,r.kt)("h4",{id:"getpageviewid"},(0,r.kt)("inlineCode",{parentName:"h4"},"getPageViewId")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"getPageViewId"),"\xa0method returns the page view id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Access the tracker instance inside a callback\nsnowplow(function () {\n var sp = this.sp;\n var pageViewId = sp.getPageViewId();\n console.log(pageViewId);\n})\n")))}m.isMDXComponent=!0},41481:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/snowplow/snowplow-javascript-tracker?include_prereleases&sort=semver&style=flat",alt:null}))))}i.isMDXComponent=!0}}]);