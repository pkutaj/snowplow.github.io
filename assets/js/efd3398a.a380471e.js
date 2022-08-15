"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[90338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},74019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Setup",date:"2020-02-26",sidebar_position:10},i=void 0,l={unversionedId:"collecting-data/collecting-from-own-applications/golang-tracker/setup/index",id:"collecting-data/collecting-from-own-applications/golang-tracker/setup/index",title:"Setup",description:"Tracker compatibility",source:"@site/docs/collecting-data/collecting-from-own-applications/golang-tracker/setup/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/golang-tracker/setup",slug:"/collecting-data/collecting-from-own-applications/golang-tracker/setup/",permalink:"/docs/collecting-data/collecting-from-own-applications/golang-tracker/setup/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/golang-tracker/setup/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:10,frontMatter:{title:"Setup",date:"2020-02-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Golang Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/golang-tracker/"},next:{title:"Initialization",permalink:"/docs/collecting-data/collecting-from-own-applications/golang-tracker/initialization/"}},c={},p=[{value:"Tracker compatibility",id:"tracker-compatibility",level:2},{value:"3. Setup",id:"3-setup",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tracker-compatibility"},"Tracker compatibility"),(0,r.kt)("p",null,"The Snowplow Golang Tracker has been built and tested using Golang versions 1.9.x, 1.10.x, 1.11.x, 1.12.x and 1.13.x."),(0,r.kt)("h2",{id:"3-setup"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Golang-tracker-setup#3-setup"}),"3","."," Setup"),(0,r.kt)("p",null,"The Tracker is hosted on Github and versions of the Tracker can be fetched using\xa0",(0,r.kt)("a",{parentName:"p",href:"http://labix.org/gopkg.in"},"gopkg"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," As of version 2.2.1 you can also leverage\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"go modules"),"."),(0,r.kt)("p",null,"To get the package, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$host go get gopkg.in/snowplow/snowplow-golang-tracker.v2/tracker\n\nOR\n\n$host go get github.com/snowplow/snowplow-golang-tracker/v2/tracker # When using modules\n")),(0,r.kt)("p",null,"To import the package, add the following line to your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import "gopkg.in/snowplow/snowplow-golang-tracker.v2/tracker"\n\nOR\n\nimport "github.com/snowplow/snowplow-golang-tracker/v2/tracker" # When using modules\n')),(0,r.kt)("p",null,"The current version of the Snowplow Golang Tracker is 2.4.0."))}u.isMDXComponent=!0}}]);