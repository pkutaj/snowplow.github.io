"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[73613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Initialization",date:"2020-02-26",sidebar_position:20},o=void 0,c={unversionedId:"migrated/collecting-data/collecting-from-own-applications/unity-tracker/initialization/index",id:"migrated/collecting-data/collecting-from-own-applications/unity-tracker/initialization/index",title:"Initialization",description:"Assuming you have completed the\xa0Unity Tracker Setup\xa0for your project, you are now ready to initialize the Unity Tracker.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/initialization/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/unity-tracker/initialization",slug:"/migrated/collecting-data/collecting-from-own-applications/unity-tracker/initialization/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/initialization/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:20,frontMatter:{title:"Initialization",date:"2020-02-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/setup/"},next:{title:"Tracker",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/unity-tracker/tracker/"}},l={},p=[{value:"Importing the library",id:"importing-the-library",level:3},{value:"Creating a tracker",id:"creating-a-tracker",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Assuming you have completed the\xa0Unity Tracker Setup\xa0for your project, you are now ready to initialize the Unity Tracker."),(0,i.kt)("h3",{id:"importing-the-library"},"Importing the library"),(0,i.kt)("p",null,"Add the following\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"using"),"\xa0lines to the top of your\xa0",(0,i.kt)("inlineCode",{parentName:"p"},".cs"),"\xa0scripts to access the Tracker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using SnowplowTracker;\nusing SnowplowTracker.Emitters;\nusing SnowplowTracker.Events;\n")),(0,i.kt)("p",null,"You should now be able to setup the Tracker!"),(0,i.kt)("h3",{id:"creating-a-tracker"},"Creating a tracker"),(0,i.kt)("p",null,"To instantiate a Tracker in your code (can be global or local to the process being tracked) simply instantiate the Tracker interface with the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create Emitter and Tracker\nIEmitter e1 = new AsyncEmitter ("com.collector.acme")\nTracker t1 = new Tracker(e1, "Namespace", "AppId");\n\n// Start the Tracker\nt1.StartEventTracking();\n')))}u.isMDXComponent=!0}}]);