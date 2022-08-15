"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[84158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(g,i(i({ref:t},l),{},{components:r})):a.createElement(g,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905)),o=r(41481);const i={title:"Optional timestamp argument",date:"2021-04-07",sidebar_position:1e3},c=void 0,s={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/optional-timestamp-argument/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/optional-timestamp-argument/index",title:"Optional timestamp argument",description:"Each\xa0track...()\xa0method supports an optional timestamp property; this allows you to manually override the timestamp attached to this event. The timestamp should be in milliseconds since the Unix epoch.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/optional-timestamp-argument/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/optional-timestamp-argument",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/optional-timestamp-argument/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/optional-timestamp-argument/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:1e3,frontMatter:{title:"Optional timestamp argument",date:"2021-04-07",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Advanced Usage",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/"},next:{title:"Tracker Information",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/advanced-usage/tracker-information/"}},p={},l=[],m={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.ZP,{mdxType:"Block5966"}),(0,n.kt)("p",null,"Each\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"track...()"),"\xa0method supports an optional timestamp property; this allows you to manually override the timestamp attached to this event. The timestamp should be in milliseconds since the Unix epoch."),(0,n.kt)("p",null,"If you do not pass this timestamp in as an argument, then the JavaScript Tracker will use the current time to be the timestamp for the event."),(0,n.kt)("p",null,"Here is an example tracking a self describing event and supplying the optional timestamp argument."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"trackSelfDescribingEvent({\n  event: {\n    schema: 'iglu:com.acme/event/jsonschema/1-0-0', \n    data: { type: 'user_action' }\n  }, \n  timestamp: 1368725287000\n});\n")),(0,n.kt)("p",null,"Timestamp is counted in milliseconds since the Unix epoch \u2013 the same format as generated by\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"new Date().getTime()"),"."),(0,n.kt)("p",null,"Also you can attach a true timestamp to the event, replacing the device timestamp. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"trackSelfDescribingEvent({\n  event: {\n    schema: 'iglu:com.acme/event/jsonschema/1-0-0', \n    data: { type: 'user_action' }\n  },\n  timestamp: { type: 'ttm', value: 1368725287000 }\n});\n")),(0,n.kt)("p",null,"Above will attach\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"ttm"),"\xa0(",(0,n.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-your-pipeline/canonical-event/#212_Date_time_fields"},(0,n.kt)("inlineCode",{parentName:"a"},"true_tstamp")),") parameter instead of default\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"dtm"),". You can also use, plain number or\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"{ type: 'dtm', value: stamp }"),"\xa0to send\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"`dvce_created_tstamp`"),"."))}d.isMDXComponent=!0},41481:(e,t,r)=>{r.d(t,{ZP:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]};function i(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/snowplow/snowplow-javascript-tracker?include_prereleases&sort=semver&style=flat",alt:null}))))}i.isMDXComponent=!0}}]);