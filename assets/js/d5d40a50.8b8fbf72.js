"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[16225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),w=i,g=u["".concat(c,".").concat(w)]||u[w]||l[w]||r;return n?o.createElement(g,a(a({ref:t},d),{},{components:n})):o.createElement(g,a({ref:t},d))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={title:"Indicative",date:"2020-02-26",sidebar_position:0},a=void 0,s={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/index",title:"Indicative",description:"Indicative is a specialist customer and product analytics tool. You can setup Snowplow to stream your event data directly into Indicative for analysis.",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:0,frontMatter:{title:"Indicative",date:"2020-02-26",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Using the Elasticsearch Loader",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/using-the-elasticsearch-loader/"},next:{title:"Setup guide",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/indicative/indicative-relay/"}},c={},p=[],d={toc:p};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Indicative is a specialist customer and product analytics tool. You can setup Snowplow to stream your event data directly into Indicative for analysis."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-indicative-relay"},"Snowplow Indicative Relay")," is an AWS Lambda function that reads Snowplow enriched events from a Kinesis Stream and transfers them to Indicative. It processes events in batches, whose size depends on your AWS Lambda configuration."))}l.isMDXComponent=!0}}]);