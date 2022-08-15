"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[92530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=i,f=u["".concat(l,".").concat(g)]||u[g]||p[g]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),i=(a(67294),a(3905)),r=a(21863);const o={toc:[{value:"Authorization",id:"authorization",level:2}]};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"Before you can invoke the Failed Events API, you will need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-the-snowplow-console/managing-console-api-authentication/"},"authenticate with an API key"),"."))}s.isMDXComponent=!0;const l={title:"Accessing failed event aggregates via the API",date:"2020-06-12",sidebar_position:3e3},c=void 0,d={unversionedId:"managing-data-quality/failed-events/accessing-failed-event-aggregates-via-the-api/index",id:"managing-data-quality/failed-events/accessing-failed-event-aggregates-via-the-api/index",title:"Accessing failed event aggregates via the API",description:'As discussed in the section "Failed events in the Console", it is possible to view aggregates of failed events when you have turned on the respective optional functionality. This view makes it possible to quickly identify where most failed events are originating from -- as in what is the related app ID, what is the schema field that is misrepresented, etc. The API that powers this overview is publicly available and can be invoked with a valid token to feed your own monitoring systems if you wish.',source:"@site/docs/managing-data-quality/failed-events/accessing-failed-event-aggregates-via-the-api/index.md",sourceDirName:"managing-data-quality/failed-events/accessing-failed-event-aggregates-via-the-api",slug:"/managing-data-quality/failed-events/accessing-failed-event-aggregates-via-the-api/",permalink:"/docs/managing-data-quality/failed-events/accessing-failed-event-aggregates-via-the-api/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/failed-events/accessing-failed-event-aggregates-via-the-api/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:3e3,frontMatter:{title:"Accessing failed event aggregates via the API",date:"2020-06-12",sidebar_position:3e3},sidebar:"tutorialSidebar",previous:{title:"Setting up data quality alerts",permalink:"/docs/managing-data-quality/failed-events/setting-up-data-quality-alerts/"},next:{title:"Querying failed events in Athena and BigQuery",permalink:"/docs/managing-data-quality/failed-events/failed-events-in-athena-and-bigquery/"}},p={},u=[{value:"Available operations and data returned",id:"available-operations-and-data-returned",level:2}],g={toc:u};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.ZP,{mdxType:"Block3003"}),(0,i.kt)("p",null,"As discussed in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/managing-data-quality/failed-events-in-the-ui/"},'section "Failed events in the Console"'),", it is possible to view aggregates of failed events when you have turned on the respective optional functionality. This view makes it possible to quickly identify where most failed events are originating from -- as in what is the related app ID, what is the schema field that is misrepresented, etc. The API that powers this overview is publicly available and can be invoked with a valid token to feed your own monitoring systems if you wish."),(0,i.kt)(s,{mdxType:"Block6507"}),(0,i.kt)("h2",{id:"available-operations-and-data-returned"},"Available operations and data returned"),(0,i.kt)("p",null,"A full specification of the API can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://console.snowplowanalytics.com/api/msc/v1/docs/index.html?url=/api/msc/v1/docs/docs.yaml#/Metrics/getOrganizationsOrganizationidMetricsV1PipelinesPipelineidFailed-events"},"our swagger docs"),". It is worth pointing out that, as is the case in the UI, the data returned only contains schema validation errors and enrichment failures."))}f.isMDXComponent=!0},21863:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),i=(a(67294),a(3905));const r={toc:[]};function o(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Note"),(0,i.kt)("p",null,"This documentation is for pipeline versions R118+. If you are unsure of which version your pipeline is running, please contact support."))}o.isMDXComponent=!0}}]);