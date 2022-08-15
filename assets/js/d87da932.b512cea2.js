"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[39443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(67294),o=n(86010),a=n(52802),i=n(39960),c=n(13919),l=n(95999);const s="cardContainer_fWXF",p="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},n)}function m(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",p),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function g(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:n}=e;const o=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:o,title:n.label,description:null==i?void 0:i.description})}function A(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){let{items:t,className:n}=e;return r.createElement("section",{className:(0,o.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(A,{item:e})))))}},36875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(12317),i=n(52991),c=n(52802);const l={title:"Golang Tracker",date:"2020-02-26",sidebar_position:170},s=void 0,p={unversionedId:"collecting-data/collecting-from-own-applications/golang-tracker/index",id:"collecting-data/collecting-from-own-applications/golang-tracker/index",title:"Golang Tracker",description:"The\xa0Snowplow Golang Tracker\xa0allows you to track Snowplow events from your Golang apps and servers.",source:"@site/docs/collecting-data/collecting-from-own-applications/golang-tracker/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/golang-tracker",slug:"/collecting-data/collecting-from-own-applications/golang-tracker/",permalink:"/docs/collecting-data/collecting-from-own-applications/golang-tracker/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/golang-tracker/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:170,frontMatter:{title:"Golang Tracker",date:"2020-02-26",sidebar_position:170},sidebar:"tutorialSidebar",previous:{title:"Pixel Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/pixel-tracker/"},next:{title:"Setup",permalink:"/docs/collecting-data/collecting-from-own-applications/golang-tracker/setup/"}},d={},u=[],m={toc:u};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{mdxType:"Block2895"}),(0,o.kt)("p",null,"The\xa0Snowplow Golang Tracker\xa0allows you to track Snowplow events from your Golang apps and servers."),(0,o.kt)("p",null,"There are three basic types of object you will create when using the Snowplow Golang Tracker: subjects, emitters, and trackers."),(0,o.kt)("p",null,"A subject represents a user whose events are tracked. A tracker constructs events and sends them to an emitter. The emitter then sends the event to the endpoint you configure; a valid Snowplow Collector."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"READ ME"),": As sending and processing of events is done asynchronously it is advised to create the Tracker as a singleton object. This is due to the fact that all events are first persistently stored in a local Sqlite3 database; if multiple Trackers are created there is the possibility of duplicate sending of events and overt consumption of resources."),(0,o.kt)("p",null,"See\xa0",(0,o.kt)("a",{parentName:"p",href:"http://blog.ralch.com/tutorial/design-patterns/golang-singleton/"},"here for instructions"),"\xa0on building a Singleton in Golang."),(0,o.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0},12317:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-from-own-applications/tracker-maintenance-classification/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?style=flat&label=Snowplow&message=Actively%20Maintained&color=6638b8&labelColor=9ba0aa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAeFBMVEVMaXGXANeYANeXANZbAJmXANeUANSQAM+XANeMAMpaAJhZAJeZANiXANaXANaOAM2WANVnAKWXANZ9ALtmAKVaAJmXANZaAJlXAJZdAJxaAJlZAJdbAJlbAJmQAM+UANKZANhhAJ+EAL+BAL9oAKZnAKVjAKF1ALNBd8J1AAAAKHRSTlMAa1hWXyteBTQJIEwRgUh2JjJon21wcBgNfmc+JlOBQjwezWF2l5dXzkW3/wAAAHpJREFUeNokhQOCA1EAxTL85hi7dXv/E5YPCYBq5DeN4pcqV1XbtW/xTVMIMAZE0cBHEaZhBmIQwCFofeprPUHqjmD/+7peztd62dWQRkvrQayXkn01f/gWp2CrxfjY7rcZ5V7DEMDQgmEozFpZqLUYDsNwOqbnMLwPAJEwCopZxKttAAAAAElFTkSuQmCC",alt:"Actively Maintained"}))))}i.isMDXComponent=!0}}]);