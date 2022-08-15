"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[9540],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=d(o),u=n,g=f["".concat(s,".").concat(u)]||f[u]||c[u]||a;return o?r.createElement(g,i(i({ref:t},p),{},{components:o})):r.createElement(g,i({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},31410:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const a={title:"Redshift loader",date:"2022-04-05",sidebar_position:10},i=void 0,l={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/index",title:"Redshift loader",description:"Setting up Redshift",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:10,frontMatter:{title:"Redshift loader",date:"2022-04-05",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Loading transformed data",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/"},next:{title:"Snowflake loader",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader/"}},s={},d=[{value:"Setting up Redshift",id:"setting-up-redshift",level:2},{value:"Downloading the artefact",id:"downloading-the-artefact",level:2},{value:"Configuring <code>rdb-loader-redshift</code>",id:"configuring-rdb-loader-redshift",level:2},{value:"Running the Redshift loader",id:"running-the-redshift-loader",level:2}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"setting-up-redshift"},"Setting up Redshift"),(0,n.kt)("p",null,"Refer to our ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/"},"guide")," on how to setup and launch a Redshift cluster."),(0,n.kt)("h2",{id:"downloading-the-artefact"},"Downloading the artefact"),(0,n.kt)("p",null,"The asset is published as a jar file attached to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/releases"},"Github release notes")," for each version."),(0,n.kt)("p",null,"It's also available as a Docker image on Docker Hub under ",(0,n.kt)("inlineCode",{parentName:"p"},"snowplow/rdb-loader-redshift:4.2.0"),"."),(0,n.kt)("h2",{id:"configuring-rdb-loader-redshift"},"Configuring ",(0,n.kt)("inlineCode",{parentName:"h2"},"rdb-loader-redshift")),(0,n.kt)("p",null,"The loader takes two configuration files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("inlineCode",{parentName:"li"},"config.hocon")," file with application settings"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("inlineCode",{parentName:"li"},"iglu_resolver.json")," file with the resolver configuration for your ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu"},"Iglu")," schema registry.")),(0,n.kt)("p",null,"An example of the minimal required config for the Redshift loader can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/redshift.config.minimal.hocon"},"here")," and a more detailed one ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/redshift.config.reference.hocon"},"here"),". For details about each setting, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/"},"configuration reference"),"."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"here")," for details on how to prepare the Iglu resolver file."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," All self-describing schemas for events processed by RDB Loader ",(0,n.kt)("strong",{parentName:"p"},"must")," be hosted on ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},"Iglu Server")," 0.6.0 or above. ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/"},"Iglu Central")," is a registry containing Snowplow-authored schemas. If you want to use them alongside your own, you will need to add it to your resolver file. Keep it mind that it could override your own private schemas if you give it higher priority. For details on this see ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/important-changes-to-iglu-centrals-api-for-schema-lists/5720#how-will-this-affect-my-snowplow-pipeline-3"},"here"),"."),(0,n.kt)("h2",{id:"running-the-redshift-loader"},"Running the Redshift loader"),(0,n.kt)("p",null,"The two config files need to be passed in as base64-encoded strings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ docker run snowplow/rdb-loader-redshift:4.2.0 \\\n  --iglu-config $RESOLVER_BASE64 \\\n  --config $CONFIG_BASE64\n")))}c.isMDXComponent=!0}}]);