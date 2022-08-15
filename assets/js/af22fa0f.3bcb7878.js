"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[1826],{3905:(r,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>k});var n=t(67294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function c(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var l=n.createContext({}),s=function(r){var e=n.useContext(l),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},p=function(r){var e=s(r.components);return n.createElement(l.Provider,{value:e},r.children)},d={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,o=r.originalType,l=r.parentName,p=c(r,["components","mdxType","originalType","parentName"]),u=s(t),k=a,g=u["".concat(l,".").concat(k)]||u[k]||d[k]||o;return t?n.createElement(g,i(i({ref:e},p),{},{components:t})):n.createElement(g,i({ref:e},p))}));function k(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=r,c.mdxType="string"==typeof r?r:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34277:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905)),o=t(41481);const i={title:"Error Tracking",date:"2021-04-07",sidebar_position:8e3},c=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/error-tracking/index",id:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/error-tracking/index",title:"Error Tracking",description:"This tracker plugin provides two ways of tracking exceptions: manual tracking of handled exceptions using\xa0trackError\xa0and automatic tracking of unhandled exceptions using\xa0enableErrorTracking.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/error-tracking/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/error-tracking",slug:"/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/error-tracking/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/error-tracking/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:8e3,frontMatter:{title:"Error Tracking",date:"2021-04-07",sidebar_position:8e3},sidebar:"tutorialSidebar",previous:{title:"Enhanced Ecommerce",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/enhanced-ecommerce/"},next:{title:"Form Tracking",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/plugins/form-tracking/"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Functions",id:"functions",level:3},{value:"Context",id:"context",level:3}],d={toc:p};function u(r){let{components:e,...t}=r;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(o.ZP,{mdxType:"Block5966"}),(0,a.kt)("p",null,"This tracker plugin provides two ways of tracking exceptions: manual tracking of handled exceptions using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"trackError"),"\xa0and automatic tracking of unhandled exceptions using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"enableErrorTracking"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm install @snowplow/browser-plugin-error-tracking")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn add @snowplow/browser-plugin-error-tracking")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pnpm add @snowplow/browser-plugin-error-tracking"))),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { newTracker, trackPageView } from '@snowplow/browser-tracker';\nimport { ErrorTrackingPlugin, enableErrorTracking } from '@snowplow/browser-plugin-error-tracking';\n\nnewTracker('sp1', '{{collector_url}}', { \n   appId: 'my-app-id', \n   plugins: [ ErrorTrackingPlugin() ],\n});\n\nenableErrorTracking();\n")),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("table",{class:"has-fixed-layout"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"trackError")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/javascript-tracker-v3/tracking-events/#trackError"},"Docum"),(0,a.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#trackError"},"entation"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"enableErrorTracking")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/browser-tracker-v3-reference/tracking-events/#enableErrorTracking"},"Documentation"))))),(0,a.kt)("h3",{id:"context"},"Context"),(0,a.kt)("p",null,"This plugin does not add any additional data to context of an event."))}u.isMDXComponent=!0},41481:(r,e,t)=>{t.d(e,{ZP:()=>i});var n=t(87462),a=(t(67294),t(3905));const o={toc:[]};function i(r){let{components:e,...t}=r;return(0,a.kt)("wrapper",(0,n.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/snowplow/snowplow-javascript-tracker?include_prereleases&sort=semver&style=flat",alt:null}))))}i.isMDXComponent=!0}}]);