"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[48904],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),g=o,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||n;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var r=a(87462),o=(a(67294),a(3905));const n={title:"Databricks loader",date:"2022-05-27",sidebar_position:300},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/databricks-loader/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/databricks-loader/index",title:"Databricks loader",description:"Setting up Databricks",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/databricks-loader/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/databricks-loader",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/databricks-loader/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/databricks-loader/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:300,frontMatter:{title:"Databricks loader",date:"2022-05-27",sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Snowflake loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader/"},next:{title:"Monitoring",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/monitoring/"}},s={},d=[{value:"Setting up Databricks",id:"setting-up-databricks",level:2},{value:"Downloading the artefact",id:"downloading-the-artefact",level:3},{value:"Configuring <code>rdb-loader-databricks</code>",id:"configuring-rdb-loader-databricks",level:3},{value:"Running the Databricks loader",id:"running-the-databricks-loader",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setting-up-databricks"},"Setting up Databricks"),(0,o.kt)("p",null,"The following resources need to be created:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.databricks.com/administration-guide/cloud-configurations/aws/instance-profiles.html"},"AWS instance profile")," for giving permission to Databricks cluster to access S3 buckets securely"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.databricks.com/administration-guide/cloud-configurations/aws/instance-profiles.html#step-5-add-the-instance-profile-to-databricks"},"Databricks cluster")," configured with the instance profile created above"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.databricks.com/dev-tools/api/latest/authentication.html"},"Databricks access token"))),(0,o.kt)("h3",{id:"downloading-the-artefact"},"Downloading the artefact"),(0,o.kt)("p",null,"The asset is published as a jar file attached to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/releases"},"Github release notes")," for each version."),(0,o.kt)("p",null,"It's also available as a Docker image on Docker Hub under ",(0,o.kt)("inlineCode",{parentName:"p"},"snowplow/rdb-loader-databricks:4.2.0"),"."),(0,o.kt)("h3",{id:"configuring-rdb-loader-databricks"},"Configuring ",(0,o.kt)("inlineCode",{parentName:"h3"},"rdb-loader-databricks")),(0,o.kt)("p",null,"The loader takes two configuration files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"config.hocon")," file with application settings"),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("inlineCode",{parentName:"li"},"iglu_resolver.json")," file with the resolver configuration for your ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu"},"Iglu")," schema registry.")),(0,o.kt)("p",null,"An example of the minimal required config for the Databricks loader can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/databricks.config.minimal.hocon"},"here")," and a more detailed one ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/databricks.config.reference.hocon"},"here"),". For details about each setting, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/"},"configuration reference"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-resolver/"},"here")," for details on how to prepare the Iglu resolver file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," All self-describing schemas for events processed by RDB Loader ",(0,o.kt)("strong",{parentName:"p"},"must")," be hosted on ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},"Iglu Server")," 0.6.0 or above. ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/"},"Iglu Central")," is a registry containing Snowplow-authored schemas. If you want to use them alongside your own, you will need to add it to your resolver file. Keep it mind that it could override your own private schemas if you give it higher priority. For details on this see ",(0,o.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/important-changes-to-iglu-centrals-api-for-schema-lists/5720#how-will-this-affect-my-snowplow-pipeline-3"},"here"),"."),(0,o.kt)("h3",{id:"running-the-databricks-loader"},"Running the Databricks loader"),(0,o.kt)("p",null,"The two config files need to be passed in as base64-encoded strings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run snowplow/rdb-loader-databricks:4.2.0 \\\n  --iglu-config $RESOLVER_BASE64 \\\n  --config $CONFIG_BASE64\n")))}c.isMDXComponent=!0}}]);