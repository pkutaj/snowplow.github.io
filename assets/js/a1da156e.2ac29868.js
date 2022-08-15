"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[4601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Iglu Clients",date:"2021-03-26",sidebar_position:40},l=void 0,o={unversionedId:"migrated/pipeline-components-and-applications/iglu/iglu-clients/index",id:"migrated/pipeline-components-and-applications/iglu/iglu-clients/index",title:"Iglu Clients",description:"Iglu clients are used for interacting with Iglu server repos and for resolving schemas in embedded and remote Iglu schema repositories.",source:"@site/docs/migrated/pipeline-components-and-applications/iglu/iglu-clients/index.md",sourceDirName:"migrated/pipeline-components-and-applications/iglu/iglu-clients",slug:"/migrated/pipeline-components-and-applications/iglu/iglu-clients/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-clients/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:40,frontMatter:{title:"Iglu Clients",date:"2021-03-26",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Iglu Resolver",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-resolver/"},next:{title:"ObjC client",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/iglu-clients/objc-client/"}},c={},p=[{value:"Technical architecture",id:"technical-architecture",level:2},{value:"Available Iglu clients",id:"available-iglu-clients",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Iglu clients are used for interacting with Iglu server repos and for resolving schemas in embedded and remote Iglu schema repositories."),(0,i.kt)("h2",{id:"technical-architecture"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/iglu/wiki/Iglu-clients#technical-architecture"}),"Technical architecture"),(0,i.kt)("p",null,"In this diagram we show an Iglu client resolving a schema from Iglu Central, one embedded repository and a further two remote HTTP repositories:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(46321).Z,width:"413",height:"382"})),(0,i.kt)("p",null,"For more information on the rules governing resolving schemas from multiple repositories, see\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/schema-resolution/"},"Schema resolution"),"."),(0,i.kt)("h2",{id:"available-iglu-clients"},"Available Iglu clients"),(0,i.kt)("p",null,"There are currently three Iglu client libraries implemented:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Repo server")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Status")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-scala-client"},"Scala client")),(0,i.kt)("td",{parentName:"tr",align:null},"An Iglu client and resolver for Scala"),(0,i.kt)("td",{parentName:"tr",align:null},"Production-ready")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-objc-client"},"Objc client")),(0,i.kt)("td",{parentName:"tr",align:null},"An Iglu client and resolver for OSX"),(0,i.kt)("td",{parentName:"tr",align:null},"Unsupported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/snowplow/iglu-ruby-client"},"Ruby client")),(0,i.kt)("td",{parentName:"tr",align:null},"An Iglu client and resolver for Ruby and JRuby"),(0,i.kt)("td",{parentName:"tr",align:null},"Unsupported")))))}u.isMDXComponent=!0},46321:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/iglu-clients-2a639a6f765d5146f869eb947a42f15c.png"}}]);