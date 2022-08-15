"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[32839],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(o),f=n,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return o?r.createElement(d,i(i({ref:t},p),{},{components:o})):r.createElement(d,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2205:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={title:"Getting the domain user information from the Snowplow Cookie",date:"2020-03-03",sidebar_position:500},i=void 0,c={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/getting-the-userid-from-the-snowplow-cookie/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/getting-the-userid-from-the-snowplow-cookie/index",title:"Getting the domain user information from the Snowplow Cookie",description:"You can use the following function to extract the Domain User Information from the ID cookie:",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/getting-the-userid-from-the-snowplow-cookie/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/getting-the-userid-from-the-snowplow-cookie",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/getting-the-userid-from-the-snowplow-cookie/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/getting-the-userid-from-the-snowplow-cookie/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/getting-the-userid-from-the-snowplow-cookie/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:500,frontMatter:{title:"Getting the domain user information from the Snowplow Cookie",date:"2020-03-03",sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"How the tracker stores state",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/cookies-and-local-storage/how-the-tracker-stores-state/"},next:{title:"JavaScript Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/"}},s={},l=[],p={toc:l};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the following function to extract the Domain User Information from the ID cookie:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/*\n* Function to extract the Snowplow Domain User Information from the first-party cookie set by the Snowplow JavaScript Tracker\n*\n* @param string cookieName (optional) The value used for \"cookieName\" in the tracker constructor argmap\n* (leave blank if you did not set a custom cookie name)\n*\n* @return string or bool The ID string if the cookie exists or false if the cookie has not been set yet\n*/\nfunction getSnowplowDuid(cookieName) {\n  var cookieName = cookieName || '_sp_';\n  var matcher = new RegExp(cookieName + 'id\\\\.[a-f0-9]+=([^;]+);?');\n  var match = document.cookie.match(matcher);\n  var split = match[1].split('.');\n  if (match && match[1]) {\n    return { \n      'domain_userid': split[0], \n      'domain_sessionidx': split[2], \n      'domain_sessionid': split[5]\n    }\n  } else {\n    return false;\n  }\n}\n")),(0,n.kt)("p",null,"If you set a custom\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"cookieName"),"\xa0field in the argmap, pass that name into the function; otherwise call the function without arguments. Note that if the function is called before the cookie exists (i.e. when the user is visiting the page for the first time and sp.js has not yet loaded) if will return\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."))}m.isMDXComponent=!0}}]);