"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[16131],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21516:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Session",date:"2020-02-26",sidebar_position:70},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/unity-tracker/session/index",id:"collecting-data/collecting-from-own-applications/unity-tracker/session/index",title:"Session",description:"The Session object is responsible for maintaining persistent data around user sessions over the life-time of an application.",source:"@site/docs/collecting-data/collecting-from-own-applications/unity-tracker/session/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/unity-tracker/session",slug:"/collecting-data/collecting-from-own-applications/unity-tracker/session/",permalink:"/docs/collecting-data/collecting-from-own-applications/unity-tracker/session/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/unity-tracker/session/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:70,frontMatter:{title:"Session",date:"2020-02-26",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Subject",permalink:"/docs/collecting-data/collecting-from-own-applications/unity-tracker/subject/"},next:{title:"Event tracking",permalink:"/docs/collecting-data/collecting-from-own-applications/unity-tracker/event-tracking/"}},s={},c=[{value:"Constructor",id:"constructor",level:3},{value:"Functions",id:"functions",level:3},{value:"<code>SetBackground(bool)</code>",id:"setbackgroundbool",level:4}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Session object is responsible for maintaining persistent data around user sessions over the life-time of an application."),(0,o.kt)("h3",{id:"constructor"},"Constructor"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Argument Name")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Required?")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Default")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"foregroundTimeout")),(0,o.kt)("td",{parentName:"tr",align:null},"The time until a session expires in focus"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"600 (s)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"backgroundTimeout")),(0,o.kt)("td",{parentName:"tr",align:null},"The time until a session expires in back"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"300 (s)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"checkInterval")),(0,o.kt)("td",{parentName:"tr",align:null},"How often to validate the session timeout"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"15 (s)")))),(0,o.kt)("p",null,"A full Session construction should look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"Session session = new Session (1200, 600, 30);\n")),(0,o.kt)("p",null,"The timeout's refer to the length of time the session remains active after the last event is sent. As long as events are sent within this limit the session will not timeout."),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("h4",{id:"setbackgroundbool"},(0,o.kt)("inlineCode",{parentName:"h4"},"SetBackground(bool)")),(0,o.kt)("p",null,"Will set whether or not the application is in the background. It is up to the developer to set this metric if they wish to have a different timeout for foreground and background."))}u.isMDXComponent=!0}}]);