"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[47473],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=m(a),u=r,s=k["".concat(p,".").concat(u)]||k[u]||c[u]||l;return a?n.createElement(s,i(i({ref:e},d),{},{components:a})):n.createElement(s,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},83902:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Tracking Events",date:"2020-02-26",sidebar_position:400},i=void 0,o={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/configuration-2/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/configuration-2/index",title:"Tracking Events",description:"Tracking specific events",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/configuration-2/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/configuration-2",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/configuration-2/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/configuration-2/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:400,frontMatter:{title:"Tracking Events",date:"2020-02-26",sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/node-js-tracker-0-3-0/configuration/"},next:{title:"Javascript Tracker Core",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/node-js-tracker/node-js-tracker/javascript-tracker-core/"}},p={},m=[{value:"Tracking specific events",id:"tracking-specific-events",level:2},{value:"Common",id:"common",level:3},{value:"Optional arguments",id:"optional-arguments",level:3},{value:"Custom contexts",id:"custom-contexts",level:3},{value:"Timestamps",id:"timestamps",level:3},{value:"Track screen views with\xa0<code>trackScreenView()</code>",id:"track-screen-views-withtrackscreenview",level:3},{value:"Track pageviews with\xa0<code>trackPageView()</code>",id:"track-pageviews-withtrackpageview",level:3},{value:"Track ecommerce transactions with\xa0<code>track-ecommerce-transaction()</code>",id:"track-ecommerce-transactions-withtrack-ecommerce-transaction",level:3},{value:"Track structured events with <code>trackStructEvent()</code>",id:"track-structured-events-with-trackstructevent",level:3},{value:"Track unstructured events with\xa0<code>trackUnstructEvent()</code>",id:"track-unstructured-events-withtrackunstructevent",level:3}],d={toc:m};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tracking-specific-events"},"Tracking specific events"),(0,r.kt)("p",null,"Snowplow has been built to enable you to track a wide range of events that occur when users interact with your websites and apps. We are constantly growing the range of functions available in order to capture that data more richly."),(0,r.kt)("p",null,"Tracking methods supported by the Node.js Tracker at a glance:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Function")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#screen-view"},(0,r.kt)("inlineCode",{parentName:"a"},"trackScreenView()"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track the user viewing a screen within the application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#page-view"},(0,r.kt)("inlineCode",{parentName:"a"},"trackPageView()"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track and record views of web pages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ecommerce-transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"trackEcommerceTransaction()"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track an ecommerce transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#struct-event"},(0,r.kt)("inlineCode",{parentName:"a"},"trackStructEvent()"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track a Snowplow custom structured event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#unstruct-event"},(0,r.kt)("inlineCode",{parentName:"a"},"trackUnstructEvent()"))),(0,r.kt)("td",{parentName:"tr",align:null},"Track a Snowplow custom unstructured event")))),(0,r.kt)("p",null,"Details of other tracking methods are available in the documentation for the\xa0",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/node-js-tracker/javascript-tracker-core/"},"tracker core"),"."),(0,r.kt)("h3",{id:"common"},"Common"),(0,r.kt)("p",null,"All events are tracked with specific methods on the tracker instance, of the form\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackXXX()"),", where\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"XXX"),"\xa0is the name of the event to track."),(0,r.kt)("h3",{id:"optional-arguments"},"Optional arguments"),(0,r.kt)("p",null,"Each tracker method has both default and optional arguments. If you don't want to provide a value for an optional argument, just pass\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\xa0and it will be ignored. For example, if you want to track a page view event with a referrer but without a title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"t.trackPageView('http://www.example.com', null, 'http://www.referer.com');\n")),(0,r.kt)("h3",{id:"custom-contexts"},"Custom contexts"),(0,r.kt)("p",null,"In short, custom contexts let you add additional information about the circumstances surrounding an event in the form of a JavaScript dictionary object. Each tracking method accepts an additional optional contexts parameter after all the parameters specific to that method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"t.trackPageView('myUrl', 'myPage', 'myReferrer', myCustomContexts);\n")),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"\xa0argument should consist of an array of one or more dictionaries. Each dictionary should be a self-describing JSON following the same pattern as an\xa0unstructured event."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important:"),"\xa0Even if only one custom context is being attached to an event, it still needs to be wrapped in an array."),(0,r.kt)("p",null,"If a visitor arrives on a page advertising a movie, the context dictionary might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.acme_company/movie_poster/jsonschema/2-1-1",\n  "data": {\n    "movie_name": "Solaris",\n    "poster_country": "JP"\n  }\n}\n')),(0,r.kt)("p",null,"This is how to fire a page view event with the above custom context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'t.trackPageView("http://www.films.com", "Homepage", null, [{\n  "schema": "iglu:com.acme_company/movie_poster/jsonschema/2-1-1",\n  "data": {\n    "movie_name": "Solaris",\n    "poster_country": "JP"\n  }\n}]);\n')),(0,r.kt)("p",null,"Note that even though there is only one custom context attached to the event, it still needs to be placed in an array."),(0,r.kt)("h3",{id:"timestamps"},"Timestamps"),(0,r.kt)("p",null,"Each\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"track...()"),"\xa0method supports an optional timestamp as its final argument, after the context argument; this allows you to manually override the timestamp attached to this event."),(0,r.kt)("p",null,"If you do not pass this timestamp in as an argument, then the Tracker will use the current time to be the timestamp for the event."),(0,r.kt)("p",null,"Here is an example tracking a structured event and supplying the optional timestamp argument. We can explicitly supply\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"s for the intervening arguments which are empty:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'t.trackStructEvent("game action", "save", null, null, null, 1368725287000);\n')),(0,r.kt)("p",null,"Timestamp is counted in milliseconds since the Unix epoch - the same format as generated by\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"new Date().getTime()"),"."),(0,r.kt)("h3",{id:"track-screen-views-withtrackscreenview"},"Track screen views with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"trackScreenView()")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackScreenView()"),"\xa0to track a user viewing a screen (or equivalent) within your app. Arguments are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Human-readable name for this screen"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for this screen"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the screen was viewed"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\xa0are not individually required, but you must provide at least one of them."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'t.trackScreenView("HUD > Save Game", "screen23", null, 1368725287000);\n')),(0,r.kt)("h3",{id:"track-pageviews-withtrackpageview"},"Track pageviews with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"trackPageView()")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackPageView()"),"\xa0to track a user viewing a page within your app. Arguments are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pageUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the page"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pageTitle")),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the page"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"referrer")),(0,r.kt)("td",{parentName:"tr",align:null},"The address which linked to the page"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the screen was viewed"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'t.trackPageView("www.example.com", "example", "www.referrer.com");\n')),(0,r.kt)("h3",{id:"track-ecommerce-transactions-withtrack-ecommerce-transaction"},"Track ecommerce transactions with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"track-ecommerce-transaction()")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackEcommerceTransaction()"),"\xa0to track an ecommerce transaction on the transaction level. Arguments:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orderId")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the eCommerce transaction"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"affiliation")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction affiliation"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"totalValue")),(0,r.kt)("td",{parentName:"tr",align:null},"Total transaction value"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"taxValue")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction tax value"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shipping")),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery cost charged"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"city")),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery address city"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery address state"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"country")),(0,r.kt)("td",{parentName:"tr",align:null},"Delivery address country"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"currency")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"items")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of items in the transaction"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the transaction event occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer")))),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"items"),"\xa0argument is an array of dictionaries. Each dictionary represents one item in the transaction. These are the keys which may appear in the dictionary:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Field")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"sku"')),(0,r.kt)("td",{parentName:"tr",align:null},"Item SKU"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"price"')),(0,r.kt)("td",{parentName:"tr",align:null},"Item price"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"quantity"')),(0,r.kt)("td",{parentName:"tr",align:null},"Item quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"name"')),(0,r.kt)("td",{parentName:"tr",align:null},"Item name"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"category"')),(0,r.kt)("td",{parentName:"tr",align:null},"Item category"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"context"')),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'t.trackEcommerceTransaction("order-456", null, 142, 20, 12.99, "London", null, "United Kingdom", [{\n    "sku": "pbz0026",\n    "price": 20,\n    "quantity": 1\n},\n{\n    "sku": "pbz0038",\n    "price": 15,\n    "quantity": 1\n}]);\n')),(0,r.kt)("h3",{id:"track-structured-events-with-trackstructevent"},"Track structured events with ",(0,r.kt)("inlineCode",{parentName:"h3"},"trackStructEvent()")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackStructEvent()"),"\xa0to track a custom event happening in your app which fits the Google Analytics-style structure of having up to five fields (with only the first two required):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"category")),(0,r.kt)("td",{parentName:"tr",align:null},"The grouping of structured events which this\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"action"),"\xa0belongs to"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the type of user interaction which this event involves"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Non-empty string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"A string to provide additional dimensions to the event data"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"property")),(0,r.kt)("td",{parentName:"tr",align:null},"A string describing the object or the action performed on it"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"A value to provide numerical data about the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the structured event occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'t.trackStructEvent("shop", "add-to-basket", null, "pcs", 2);\n')),(0,r.kt)("h3",{id:"track-unstructured-events-withtrackunstructevent"},"Track unstructured events with\xa0",(0,r.kt)("inlineCode",{parentName:"h3"},"trackUnstructEvent()")),(0,r.kt)("p",null,"Use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"trackUnstructEvent()"),"\xa0to track a custom event which consists of a name and an unstructured set of properties. This is useful when you want to track event types which are proprietary/specific to your business (i.e. not already part of Snowplow)."),(0,r.kt)("p",null,"The arguments are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Argument")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required?")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:null},"The properties of the event"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom context for the event"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tstamp")),(0,r.kt)("td",{parentName:"tr",align:null},"When the unstructured event occurred"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Positive integer")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'t.trackUnstructEvent({\n  "schema": "iglu:com.example_company/save-game/jsonschema/1-0-2",\n  "data": {\n    "save_id": "4321",\n    "level": 23,\n    "difficultyLevel": "HARD",\n    "dl_content": true\n  }\n})\n')),(0,r.kt)("p",null,"The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"properties"),"\xa0argument must be a dictionary with two fields:\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),".\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\xa0is a flat dictionary containing the properties of the unstructured event.\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"\xa0identifies the JSON schema against which\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\xa0should be validated."),(0,r.kt)("p",null,"For more on JSON schema, see the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/"},"blog post"),"."))}c.isMDXComponent=!0}}]);