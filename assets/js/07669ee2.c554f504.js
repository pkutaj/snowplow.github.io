"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[32711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,k=u["".concat(l,".").concat(h)]||u[h]||g[h]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Versioning your data structures",date:"2020-02-25",sidebar_position:90},o=void 0,s={unversionedId:"migrated/understanding-tracking-design/versioning-your-data-structures/index",id:"migrated/understanding-tracking-design/versioning-your-data-structures/index",title:"Versioning your data structures",description:"Snowplow is designed to make it easy for you to change your tracking design in a safe and backwards-compatible way as your organisational data needs evolve.",source:"@site/docs/migrated/understanding-tracking-design/versioning-your-data-structures/index.md",sourceDirName:"migrated/understanding-tracking-design/versioning-your-data-structures",slug:"/migrated/understanding-tracking-design/versioning-your-data-structures/",permalink:"/docsite-poc.github.io/docs/migrated/understanding-tracking-design/versioning-your-data-structures/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:90,frontMatter:{title:"Versioning your data structures",date:"2020-02-25",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Managing data structures in the console",permalink:"/docsite-poc.github.io/docs/migrated/understanding-tracking-design/managing-data-structures/"},next:{title:"Collecting data with Trackers and Webhooks",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/"}},l={},d=[{value:"Why is versioning important?",id:"why-is-versioning-important",level:2},{value:"How do I version?",id:"how-do-i-version",level:2},{value:"Breaking and non-breaking changes",id:"breaking-and-non-breaking-changes",level:3},{value:"Should I choose breaking or non-breaking?",id:"should-i-choose-breaking-or-non-breaking",level:3},{value:"Overwriting schemas",id:"overwriting-schemas",level:3},{value:"Incrementing the middle digit",id:"incrementing-the-middle-digit",level:3}],c={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow is designed to make it easy for you to change your tracking design in a safe and backwards-compatible way as your organisational data needs evolve."),(0,r.kt)("p",null,"Data structures are used to describe the structure your data should be delivered in. The structure itself is described by a ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/understanding-schemas-and-validation/"},"JSON schemas"),". Each schema carries a version number expressed as three numeric digits. As your schema evolves, all previous versions of that schema remain available to ensure backwards-compatibility."),(0,r.kt)("h2",{id:"why-is-versioning-important"},"Why is versioning important?"),(0,r.kt)("p",null,"As well as good practice, versioning has an important role in telling Snowplow Loaders how to handle the changes when loading into your data warehouse(s)."),(0,r.kt)("p",null,"For example, for certain changes there will be a need to create new columns, update columns or even create whole new tables. For this reason, it's important you understand when your change is breaking and version correctly."),(0,r.kt)("h2",{id:"how-do-i-version"},"How do I version?"),(0,r.kt)("h3",{id:"breaking-and-non-breaking-changes"},"Breaking and non-breaking changes"),(0,r.kt)("p",null,"In Data Structures UI at the point of publishing a schema you'll be asked to select which version you'd like to create. There are two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Non-breaking")," - a non-breaking change is backward compatible with historical data and increments the ",(0,r.kt)("inlineCode",{parentName:"li"},"patch")," number i.e.\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"1-0-0"),"\xa0->\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"1-0-1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Breaking")," - a breaking change is not backwards compatible with historical data and increments the ",(0,r.kt)("inlineCode",{parentName:"li"},"model")," number i.e.\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"1-0-0"),"\xa0->\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"2-0-0"),".")),(0,r.kt)("h3",{id:"should-i-choose-breaking-or-non-breaking"},"Should I choose breaking or non-breaking?"),(0,r.kt)("p",null,"Different data warehouses handle schema evolution slightly differently. Use the table below as a guide to how to handle versioning in Data Structures for your warehouse."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("strong",null,"Redshift")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("strong",null,"Snowflake, BigQuery & Databricks"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Add / remove / rename an optional field")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("span",{class:"has-inline-color has-black-color"},"Non-breaking")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},"Non-breaking")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("strong",null,"Add / remove / rename")," a required field")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("span",{class:"has-inline-color has-vivid-red-color"},"Breaking")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("span",{class:"has-inline-color has-vivid-red-color"},"Breaking"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Change a field from optional to required")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("span",{class:"has-inline-color has-vivid-red-color"},"Breaking")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("span",{class:"has-inline-color has-vivid-red-color"},"Breaking"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Change a field from required to optional")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("span",{class:"has-inline-color has-vivid-red-color"},"Breaking")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},"Non-breaking")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Change the type of an existing field")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("span",{class:"has-inline-color has-vivid-red-color"},"Breaking")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("span",{class:"has-inline-color has-vivid-red-color"},"Breaking"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Change the size of an existing field")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,r.kt)("span",{class:"has-inline-color has-vivid-red-color"}),(0,r.kt)("span",{class:"has-inline-color has-black-color"},"Non-breaking")),(0,r.kt)("td",{class:"has-text-align-center","data-align":"center"},"Non-breaking")))),(0,r.kt)("h3",{id:"overwriting-schemas"},"Overwriting schemas"),(0,r.kt)("p",null,"Wherever possible we would advise always versioning the schema when making a change. However in cases where this isn't possible, Snowplow does allow you to overwrite a schema on your development environment, that is making a change and keeping the version the same."),(0,r.kt)("p",null,"Overwriting in your Production environment is forbidden due to the technology that auto-adjusts your tables, so when you promote an overwritten version to the Production environment you are required to increase the version as Breaking or Non-Breaking."),(0,r.kt)("h3",{id:"incrementing-the-middle-digit"},"Incrementing the middle digit"),(0,r.kt)("p",null,"For particular workflows you may want to make use of the middle digital as part of your versioning strategy. For simplicity, the UI allows only breaking or non-breaking changes."),(0,r.kt)("p",null,"Should you wish to use the middle versioning digit this is possible ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrated/understanding-tracking-design/managing-data-structures-via-the-api/"},"via the Data Structures API"),"."))}g.isMDXComponent=!0}}]);