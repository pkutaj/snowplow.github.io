"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[6199],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return t?i.createElement(h,a(a({ref:n},p),{},{components:t})):i.createElement(h,a({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(87462),o=(t(67294),t(3905));const r={title:"Self-describing JSON Schemas",date:"2021-03-26",sidebar_position:30},a=void 0,s={unversionedId:"pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/index",id:"pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/index",title:"Self-describing JSON Schemas",description:"This page is adapted from the Snowplow Analytics blog post,\xa0Introducing self-describing JSONs.",source:"@site/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/index.md",sourceDirName:"pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas",slug:"/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:30,frontMatter:{title:"Self-describing JSON Schemas",date:"2021-03-26",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"SchemaVer",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/schemaver/"},next:{title:"Self describing JSONs",permalink:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/"}},c={},l=[],p={toc:l};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This page is adapted from the Snowplow Analytics blog post,\xa0",(0,o.kt)("a",{parentName:"em",href:"http://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/"},"Introducing self-describing JSONs"),".")),(0,o.kt)("p",null,"With the explosion of possible event types due to Snowplow going from a web analytics to a general event analytics platform, it became necessary to give some coherence to the events sent in to Snowplow. Snowplow dealing only with JSON, we chose to rely on JSON Schemas."),(0,o.kt)("p",null,"In addition to the usual JSON Schema we decided to make it self-describing by adding information we already knew about the schema such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vendor"),"\xa0which tells us who created this JSON Schema"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),"\xa0which is the JSON Schema's name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"format"),"\xa0in our case this will be a JSON Schema"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version"),"\xa0which is the JSON Schema's version (using\xa0",(0,o.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/iglu/schemaver/"},"SchemaVer"),")")),(0,o.kt)("p",null,"We encapsulated all this information in a\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"self"),"\xa0property."),(0,o.kt)("p",null,"As an example, we would go from this JSON Schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "$schema": "http://json-schema.org/schema#",\n    "type": "object",\n    "properties": {\n        "bannerId": {\n            "type": "string"\n        }\n    },\n    "required": ["bannerId"],\n    "additionalProperties": false\n}\n')),(0,o.kt)("p",null,"to this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "$schema": "http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",\n    "self": {\n        "vendor": "com.snowplowanalytics",\n        "name": "ad_click",\n        "format": "jsonschema",\n        "version": "1-0-0"\n    },\n    "type": "object",\n    "properties": {\n        "bannerId": {\n            "type": "string"\n        }\n    },\n    "required": ["bannerId"],\n    "additionalProperties": false\n}\n')),(0,o.kt)("p",null,"incorporating the aforementioned\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"self"),"\xa0property."),(0,o.kt)("p",null,"Notice that we also changed the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"$schema"),"\xa0property to\xa0",(0,o.kt)("a",{parentName:"p",href:"http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#"},"our own JSON Schema"),"\xa0which enforces the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"self"),"\xa0property."),(0,o.kt)("p",null,"To make our JSONs self-describing we still have to reference this JSON Schema in our JSONs. This process is described in\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/"},"Self-describing JSONs"),"."))}m.isMDXComponent=!0}}]);