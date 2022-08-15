"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[88782],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var l=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},s=Object.keys(t);for(l=0;l<s.length;l++)a=s[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(l=0;l<s.length;l++)a=s[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=l.createContext({}),c=function(t){var e=l.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=c(t.components);return l.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),h=c(a),k=n,u=h["".concat(i,".").concat(k)]||h[k]||p[k]||s;return a?l.createElement(u,r(r({ref:e},d),{},{components:a})):l.createElement(u,r({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,r=new Array(s);r[0]=h;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,r[1]=o;for(var c=2;c<s;c++)r[c]=a[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84482:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var l=a(87462),n=(a(67294),a(3905));const s={title:"Snowplow 22.01 Western Ghats",date:"2022-01-31",sidebar_position:99970},r=void 0,o={unversionedId:"migrated/pipeline-components-and-applications/version-compatibility-matrix/snowplow-22-01-western-ghats/index",id:"migrated/pipeline-components-and-applications/version-compatibility-matrix/snowplow-22-01-western-ghats/index",title:"Snowplow 22.01 Western Ghats",description:"Recommended Stack",source:"@site/docs/migrated/pipeline-components-and-applications/version-compatibility-matrix/snowplow-22-01-western-ghats/index.md",sourceDirName:"migrated/pipeline-components-and-applications/version-compatibility-matrix/snowplow-22-01-western-ghats",slug:"/migrated/pipeline-components-and-applications/version-compatibility-matrix/snowplow-22-01-western-ghats/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/version-compatibility-matrix/snowplow-22-01-western-ghats/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:99970,frontMatter:{title:"Snowplow 22.01 Western Ghats",date:"2022-01-31",sidebar_position:99970},sidebar:"tutorialSidebar",previous:{title:"Latest compatibility matrix",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/version-compatibility-matrix/latest-version-compatibility-matrix/"},next:{title:"Snowplow 21.08 North Cascades",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/version-compatibility-matrix/snowplow-21-08-north-cascades/"}},i={},c=[{value:"Recommended Stack",id:"recommended-stack",level:3},{value:"AWS",id:"aws",level:4},{value:"GCP",id:"gcp",level:4},{value:"Iglu",id:"iglu",level:4},{value:"<strong>Trackers</strong>",id:"trackers",level:4},{value:"<strong>Data Model</strong>ing",id:"data-modeling",level:4},{value:"SQL Runner",id:"sql-runner",level:5},{value:"dbt",id:"dbt",level:5},{value:"<strong>Testing</strong>",id:"testing",level:4},{value:"Analytics SDKs",id:"analytics-sdks",level:4}],d={toc:c};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,l.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"recommended-stack"},"Recommended Stack"),(0,n.kt)("p",null,"Please note, the ",(0,n.kt)("inlineCode",{parentName:"p"},"x")," indicates that we recommend always being on the latest patched version. Components which have been updated since the last release are ",(0,n.kt)("strong",{parentName:"p"},"highlighted"),"."),(0,n.kt)("h4",{id:"aws"},"AWS"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},(0,n.kt)("strong",null,"Stream Collector"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},(0,n.kt)("strong",null,"Stream Enrich"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},(0,n.kt)("strong",null,"Dataflow Runner"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Sqs2Kinesis")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"http://github.com/snowplow/stream-collector/releases"},"v2.4.5")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/stream-enrich/releases"},"v2.0.5")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/dataflow-runner/releases"},"v0.6.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/sqs2kinesis/releases/tag/1.0.0",target:"_blank",rel:"noreferrer noopener"},"v1.0.x"))))),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"S3 Loader"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"RDB Loader"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Snowflake Loader"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Elasticsearch",(0,n.kt)("br",null),"Loader")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-s3-loader/releases"},"v2.1.3")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-rdb-loader/releases"},"v2.1.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-snowflake-loader/releases"},"v0.9.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-elasticsearch-loader/releases"},"v1.0.5"))))),(0,n.kt)("h4",{id:"gcp"},"GCP"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"Stream Collector"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"Beam Enrich"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"Enrich PubSub"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"GCS Loader"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"BigQuery Stream Loader")))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/stream-collector/releases"},"v2.4.5")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/enrich/releases"},"v2.0.5")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/enrich/releases"},"v2.0.5")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-google-cloud-storage-loader/releases"},"v0.3.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-bigquery-loader/releases"},"v1.1.x"))))),(0,n.kt)("h4",{id:"iglu"},"Iglu"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Iglu Server"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"igluctl"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Iglu Central")))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/iglu-server/releases"},"v0.7.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/igluctl/releases/"},"v0.8.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/iglu-central/releases",target:"_blank",rel:"noreferrer noopener"},"R132"))))),(0,n.kt)("h4",{id:"trackers"},(0,n.kt)("strong",{parentName:"h4"},"Trackers")),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"JS (Web & Node)"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"Android"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},(0,n.kt)("strong",null,"iOS"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"React Native"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"Flutter"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"Java"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},".NET"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"Python")))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},"v3.3.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-android-tracker/releases"},"v3.0.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-objc-tracker/releases"},"v3.0.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-react-native-tracker/releases"},"v1.0.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-flutter-tracker/releases"},"v0.1.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-java-tracker/releases"},"v0.11.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-dotnet-tracker/releases"},"v1.1.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-python-tracker/releases"},"v0.10.x"))))),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"AMP"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"Roku"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Unity"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"PHP"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Golang"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"Scala"),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"Ruby"))),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},"C++")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"/docs/migrated/collecting-data/collecting-from-own-applications/google-amp-tracker/"},"v1.0.3")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-roku-tracker/releases"},"v0.2.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-unity-tracker/releases"},"v0.5.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-php-tracker/releases"},"v0.4.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-golang-tracker/releases"},"v2.4.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-scala-tracker/releases"},"v1.0.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-ruby-tracker/releases"},"v0.8.x")),(0,n.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-cpp-tracker/releases"},"v0.1.x"))))),(0,n.kt)("h4",{id:"data-modeling"},(0,n.kt)("strong",{parentName:"h4"},"Data Model"),"ing"),(0,n.kt)("h5",{id:"sql-runner"},"SQL Runner"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Redshift web model"),(0,n.kt)("td",null,"BigQuery web model"),(0,n.kt)("td",null,"Snowflake web model")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.2.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.0.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.0.x"))))),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Redshift mobile model"),(0,n.kt)("td",null,"BigQuery mobile model"),(0,n.kt)("td",null,"Snowflake mobile model")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.1.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.1.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/data-models/releases"},"v1.1.x"))))),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"SQL Runner")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/sql-runner/releases"},"v0.9.x"))))),(0,n.kt)("h5",{id:"dbt"},"dbt"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"dbt-snowplow-web"))),(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"dbt-snowplow-utils"))),(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("span",{class:"has-inline-color has-vivid-purple-color"},"dbt")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/dbt-snowplow-web/releases",target:"_blank",rel:"noreferrer noopener"},"v0.5.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/dbt-snowplow-utils/releases",target:"_blank",rel:"noreferrer noopener"},"v0.5.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/dbt-labs/dbt/releases"},"v1.0.x"))))),(0,n.kt)("h4",{id:"testing"},(0,n.kt)("strong",{parentName:"h4"},"Testing")),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("strong",null,(0,n.kt)("mark",{class:"has-inline-color has-vivid-purple-color"},"Mini"))),(0,n.kt)("td",null,"Micro")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-mini/releases"},"v0.13.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-micro/releases"},"v1.2.x"))))),(0,n.kt)("h4",{id:"analytics-sdks"},"Analytics SDKs"),(0,n.kt)("table",{class:"has-fixed-layout"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Scala"),(0,n.kt)("td",null,"JavaScript"),(0,n.kt)("td",null,"Python"),(0,n.kt)("td",null,".NET"),(0,n.kt)("td",null,"Golang")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-python-analytics-sdk/releases"},"v2.1.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow-incubator/snowplow-js-analytics-sdk/releases"},"v0.3.0")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-python-analytics-sdk/releases"},"v0.2.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-dotnet-analytics-sdk/releases"},"v0.2.x")),(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://github.com/snowplow/snowplow-golang-analytics-sdk/releases",target:"_blank",rel:"noreferrer noopener"},"v0.1.x"))))),(0,n.kt)("p",null,"We hope that the above provides clarity on our recommended stack, however if you have any questions or feedback please reach out to us on\xa0",(0,n.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/"},"discourse"),"."))}p.isMDXComponent=!0}}]);