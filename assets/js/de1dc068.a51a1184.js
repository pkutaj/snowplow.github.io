"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[84169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const r={title:"Self describing JSONs",date:"2021-03-26",sidebar_position:50},a=void 0,c={unversionedId:"migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/index",id:"migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/index",title:"Self describing JSONs",description:"This page is adapted from the Snowplow Analytics blog post, Introducing self-describing JSONs.",source:"@site/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/index.md",sourceDirName:"migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons",slug:"/migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-jsons/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:50,frontMatter:{title:"Self describing JSONs",date:"2021-03-26",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Self-describing JSON Schemas",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},next:{title:"Iglu Core",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/iglu-core/"}},s={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This page is adapted from the Snowplow Analytics blog post, ",(0,o.kt)("a",{parentName:"em",href:"http://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/"},"Introducing self-describing JSONs"),".")),(0,o.kt)("p",null,"In this section, we will be describing the approach we chose to link together a JSON with its JSON Schema in order to make it self-describing. Instead of embedding the JSON Schema directly into the JSON itself which would be very wasteful in terms of space, we chose only to store a reference to its JSON Schema."),(0,o.kt)("p",null,"For example, let's say we have a JSON representing a click on an ad like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "bannerId": "4acd518feb82"\n}\n')),(0,o.kt)("p",null,"which is supposed to conform to this ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/self-describing-json-schemas/"},"self-describing JSON Schema"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "$schema": "http://json-schema.org/schema#",\n    "self": {\n        "vendor": "com.snowplowanalytics",\n        "name": "ad_click",\n        "format": "jsonschema",\n        "version": "1-0-0"\n    },\n    "type": "object",\n    "properties": {\n        "bannerId": {\n            "type": "string"\n        }\n    },\n    "required": ["bannerId"],\n    "additionalProperties": false\n}\n')),(0,o.kt)("p",null,"Our self-describing JSON will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "schema": "iglu:com.snowplowanalytics/ad_click/jsonschema/1-0-0",\n    "data": {\n        "bannerId": "4acd518feb82"\n    }\n}\n')),(0,o.kt)("p",null,"Notice the two main differences compared to our original JSON:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"There is a new ",(0,o.kt)("inlineCode",{parentName:"li"},"schema")," field located at the root of the JSON which contains (in a space-efficient format) all the information required to uniquely identify the associated JSON Schema. The schema's URI follows the following pattern:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(59318).Z,width:"709",height:"381"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The data contained in the original JSON has been encapsulated in a ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," field to prevent any accidental collisions should the JSON already have a ",(0,o.kt)("inlineCode",{parentName:"li"},"schema")," field")),(0,o.kt)("p",null,"This way, our JSON becomes de facto self-describing, embedding a link to its JSON Schema."),(0,o.kt)("p",null,"Back to ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/common-architecture/"},"Common architecture"),"."))}d.isMDXComponent=!0},59318:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/iglu-schema-key-bcb8f8d1b9814714ec9590690ebb4394.png"}}]);