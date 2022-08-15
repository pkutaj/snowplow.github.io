"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[74719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Initialization",date:"2020-02-26",sidebar_position:20},l=void 0,o={unversionedId:"collecting-data/collecting-from-own-applications/php-tracker/initialization/index",id:"collecting-data/collecting-from-own-applications/php-tracker/initialization/index",title:"Initialization",description:"To instantiate a new Tracker instance we need to make sure the Snowplow Tracker classes are available.",source:"@site/docs/collecting-data/collecting-from-own-applications/php-tracker/initialization/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/php-tracker/initialization",slug:"/collecting-data/collecting-from-own-applications/php-tracker/initialization/",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/initialization/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/php-tracker/initialization/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:20,frontMatter:{title:"Initialization",date:"2020-02-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/setup/"},next:{title:"Subjects",permalink:"/docs/collecting-data/collecting-from-own-applications/php-tracker/subjects/"}},c={},p=[{value:"Creating a Tracker",id:"creating-a-tracker",level:3},{value:"<code>emitters</code>",id:"emitters",level:4},{value:"<code>subject</code>",id:"subject",level:4},{value:"<code>namespace</code>",id:"namespace",level:4},{value:"<code>app_id</code>",id:"app_id",level:4},{value:"<code>encode_base64</code>",id:"encode_base64",level:4}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To instantiate a new Tracker instance we need to make sure the Snowplow Tracker classes are available."),(0,r.kt)("p",null,"Include these class aliases in your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Snowplow\\Tracker\\Tracker;\nuse Snowplow\\Tracker\\Subject;\nuse Snowplow\\Tracker\\Emitters\\SyncEmitter;\n")),(0,r.kt)("p",null,"We can now create our Emitter, Subject and Tracker objects."),(0,r.kt)("h3",{id:"creating-a-tracker"},"Creating a Tracker"),(0,r.kt)("p",null,"The most basic Tracker instance will only require you to provide the type of Emitter and the URI of the collector to which the Tracker will log events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$emitter = new SyncEmitter($collector_uri, "http", "POST", 10, false);\n$subject = new Subject();\n$tracker = new Tracker($emitter, $subject);\n')),(0,r.kt)("p",null,"Other Tracker arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emitters")),(0,r.kt)("td",{parentName:"tr",align:null},"The emitter to which events are sent"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subject")),(0,r.kt)("td",{parentName:"tr",align:null},"The user being tracked"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Subject()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the tracker instance"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app_id")),(0,r.kt)("td",{parentName:"tr",align:null},"The application ID"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encode_base64")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable\xa0",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Base64"},"base 64 encoding")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True"))))),(0,r.kt)("p",null,"Another example using all of the allowed arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$tracker = new Tracker($emitter, $subject, "cf", "cf29ea", true);\n')),(0,r.kt)("h4",{id:"emitters"},(0,r.kt)("inlineCode",{parentName:"h4"},"emitters")),(0,r.kt)("p",null,"This can be either a single emitter or an array of emitters. The tracker will send events to all of these emitters, which will, in turn, send them on to a collector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$emitter1 = new SyncEmitter($collector_uri);\n$emitter2 = new CurlEmitter($collector_uri, false, "GET", 2);\n\n$emitter_array = array($emitter1, $emitter2);\n\n// Tracker Init\n$subject = new Subject();\n$tracker1 = ($emitter1, $subject); # Single Emitter\n$tracker2 = ($emitter_array, $subject); # Array of Emitters\n')),(0,r.kt)("h4",{id:"subject"},(0,r.kt)("inlineCode",{parentName:"h4"},"subject")),(0,r.kt)("p",null,"The user which the Tracker will track. This will give your events user-specific data such as timezone and language. You change the subject of your tracker at any time by calling\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"updateSubject($new_subject_object)"),". All events sent from this Tracker will now have the new subject information attached."),(0,r.kt)("h4",{id:"namespace"},(0,r.kt)("inlineCode",{parentName:"h4"},"namespace")),(0,r.kt)("p",null,"If provided, the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),"\xa0argument will be attached to every event fired by the new tracker. This allows you to later identify which tracker fired which event if you have multiple trackers running."),(0,r.kt)("h4",{id:"app_id"},(0,r.kt)("inlineCode",{parentName:"h4"},"app_id")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"app_id"),"\xa0argument lets you set the application ID to any string."),(0,r.kt)("h4",{id:"encode_base64"},(0,r.kt)("inlineCode",{parentName:"h4"},"encode_base64")),(0,r.kt)("p",null,"By default, unstructured events and custom contexts are encoded into Base64 to ensure that no data is lost or corrupted. You can turn encoding on or off using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"encode_base64"),"\xa0argument."))}d.isMDXComponent=!0}}]);