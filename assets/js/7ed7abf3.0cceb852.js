"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[45410],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),o=r(86010),i=r(52802),a=r(39960),c=r(13919),l=r(95999);const s="cardContainer_fWXF",p="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},r)}function m(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",p),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",u),title:a},a))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:r}=e;const o=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:o,title:r.label,description:null==a?void 0:a.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{items:t,className:r}=e;return n.createElement("section",{className:(0,o.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},52269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),i=r(52991),a=r(52802);const c={title:"Tutorials",date:"2020-10-08",sidebar_position:40},l=void 0,s={unversionedId:"migrated/try-snowplow/recipes/index",id:"migrated/try-snowplow/recipes/index",title:"Tutorials",description:"",source:"@site/docs/migrated/try-snowplow/recipes/index.md",sourceDirName:"migrated/try-snowplow/recipes",slug:"/migrated/try-snowplow/recipes/",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/recipes/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:40,frontMatter:{title:"Tutorials",date:"2020-10-08",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Querying your Try Snowplow data",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/accessing-and-querying-your-try-snowplow-data/"},next:{title:"Tutorial: Web analytics",permalink:"/docsite-poc.github.io/docs/migrated/try-snowplow/recipes/recipe-web-analytics/"}},p={},u=[],d={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);