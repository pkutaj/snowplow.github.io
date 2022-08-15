"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[98148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"RDB Transformer 3.0.x",date:"2022-05-27",sidebar_position:100},o=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/rdb-transformer-previous-versions/rdb-transformer-3-0-0/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/rdb-transformer-previous-versions/rdb-transformer-3-0-0/index",title:"RDB Transformer 3.0.x",description:"An example of the minimal required config for the Spark transformer can be found here and a more detailed one here.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/rdb-transformer-previous-versions/rdb-transformer-3-0-0/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/rdb-transformer-previous-versions/rdb-transformer-3-0-0",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/rdb-transformer-previous-versions/rdb-transformer-3-0-0/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/rdb-transformer-previous-versions/rdb-transformer-3-0-0/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:100,frontMatter:{title:"RDB Transformer 3.0.x",date:"2022-05-27",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"RDB Transformer Previous Versions",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/rdb-transformer-previous-versions/"},next:{title:"Loading transformed data",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/"}},d={},s=[{value:"<strong>Spark transformer only</strong>",id:"spark-transformer-only",level:2},{value:"<strong>Stream transformer only</strong>",id:"stream-transformer-only",level:2},{value:"<strong>Common settings</strong>",id:"common-settings",level:2},{value:"<strong>Deduplication (Spark transformer only)</strong>",id:"deduplication-spark-transformer-only",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An example of the minimal required config for the Spark transformer can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.batch.config.minimal.hocon"},"here")," and a more detailed one ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.batch.config.reference.hocon"},"here"),"."),(0,r.kt)("p",null,"An example of the minimal required config for the stream transformer can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.kinesis.config.minimal.hocon"},"here")," and a more detailed one ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.kinesis.config.reference.hocon"},"here"),"."),(0,r.kt)("p",null,"This is a complete list of the options that can be configured:"),(0,r.kt)("h2",{id:"spark-transformer-only"},(0,r.kt)("strong",{parentName:"h2"},"Spark transformer only")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. S3 URI of the enriched archive. It must be populated separately with ",(0,r.kt)("inlineCode",{parentName:"td"},"run=YYYY-MM-DD-hh-mm-ss")," directories.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"runInterval.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies interval to process.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"runInterval.sinceTimestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Start processing after this timestamp.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"runInterval.sinceAge")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. A duration that specifies the maximum age of folders that should get processed. If ",(0,r.kt)("inlineCode",{parentName:"td"},"sinceAge")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"sinceTimestamp")," are both specified, then the latest value of the two determines the earliest folder that will be processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"runInterval.until")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Process until this timestamp.")))),(0,r.kt)("h2",{id:"stream-transformer-only"},(0,r.kt)("strong",{parentName:"h2"},"Stream transformer only")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"input.type")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The only supported values are ",(0,r.kt)("inlineCode",{parentName:"td"},"kinesis")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"file"),". The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"kinesis"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"input.appName")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. KCL app name. The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"snowplow-rdb-transformer"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"input.streamName")),(0,r.kt)("td",{parentName:"tr",align:null},"Required for ",(0,r.kt)("inlineCode",{parentName:"td"},"kinesis"),". Enriched Kinesis stream name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"input.region")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS region of the Kinesis stream. Optional if it can be resolved with ",(0,r.kt)("a",{parentName:"td",href:"https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/regions/providers/DefaultAwsRegionProviderChain.html"},"AWS region provider chain"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"input.position")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Kinesis position: ",(0,r.kt)("inlineCode",{parentName:"td"},"LATEST")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"TRIM_HORIZON"),". The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"LATEST"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"windowing")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Frequency to emit shredding complete message. The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"10 minutes"),".")))),(0,r.kt)("h2",{id:"common-settings"},(0,r.kt)("strong",{parentName:"h2"},"Common settings")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"output.path")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. S3 URI of the transformed output.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"output.compression")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. One of ",(0,r.kt)("inlineCode",{parentName:"td"},"NONE")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"GZIP"),". The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"GZIP"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"output.region")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS region of the S3 bucket. Optional if it can be resolved with ",(0,r.kt)("a",{parentName:"td",href:"https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/regions/providers/DefaultAwsRegionProviderChain.html"},"AWS region provider chain"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queue.type")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Type of the message queue. Can be either ",(0,r.kt)("inlineCode",{parentName:"td"},"sqs")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"sns"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queue.queueName")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if queue type is ",(0,r.kt)("inlineCode",{parentName:"td"},"sqs"),". Name of the SQS queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queue.topicArn")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if queue type is ",(0,r.kt)("inlineCode",{parentName:"td"},"sns"),". ARN of the SNS topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queue.region")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS region of the SQS queue or SNS topic. Optional if it can be resolved with ",(0,r.kt)("a",{parentName:"td",href:"https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/regions/providers/DefaultAwsRegionProviderChain.html"},"AWS region provider chain"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"formats.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Schema-specific format settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"formats.transformationType")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Type of transformation, either ",(0,r.kt)("inlineCode",{parentName:"td"},"shred")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"widerow"),". See ",(0,r.kt)("a",{parentName:"td",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/#shredded-data"},"Shredded data")," and ",(0,r.kt)("a",{parentName:"td",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/#wide-row-format"},"Wide row format"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"formats.default")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Either ",(0,r.kt)("inlineCode",{parentName:"td"},"TSV")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON"),". Data format produced by default. ",(0,r.kt)("inlineCode",{parentName:"td"},"TSV")," is recommended as it enables table autocreation, but requires an Iglu Server to be available with known schemas (including Snowplow schemas). ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON")," does not require an Iglu Server, but requires Redshift JSONPaths to be configured and does not support table autocreation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"formats.tsv")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. List of Iglu URIs, but can be set to empty list ",(0,r.kt)("inlineCode",{parentName:"td"},"[]")," which is the default. If ",(0,r.kt)("inlineCode",{parentName:"td"},"default")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON")," this list of schemas will still be shredded into ",(0,r.kt)("inlineCode",{parentName:"td"},"TSV"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"formats.json")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. List of Iglu URIs, but can be set to empty list ",(0,r.kt)("inlineCode",{parentName:"td"},"[]")," which is the default. If ",(0,r.kt)("inlineCode",{parentName:"td"},"default")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"TSV")," this list of schemas will still be shredded into ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"formats.skip")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. List of Iglu URIs, but can be set to empty list ",(0,r.kt)("inlineCode",{parentName:"td"},"[]")," which is the default. Schemas for which loading can be skipped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.sentry.dsn")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. For tracking runtime exceptions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"validations.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Criteria to validate events against.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"validations.minimumTimestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"This is currently the only validation criterion. It checks that all timestamps in the event are older than a specific point in time, eg ",(0,r.kt)("inlineCode",{parentName:"td"},"2021-11-18T11:00:00.00Z"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"featureFlags.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Enable features that are still in beta, or which aim to enable smoother upgrades.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"featureFlags.legacyMessageFormat")),(0,r.kt)("td",{parentName:"tr",align:null},"This currently the only feature flag. Setting this to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," allows you to use a new version of the transformer with an older version of the loader.")))),(0,r.kt)("h2",{id:"deduplication-spark-transformer-only"},(0,r.kt)("strong",{parentName:"h2"},"Deduplication (Spark transformer only)")),(0,r.kt)("p",null,"The below settings exist for the purposes of benchmarking only and we strongly discourage changing the preset defaults:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deduplication.synthetic.type")),(0,r.kt)("td",{parentName:"tr",align:null},"Can be ",(0,r.kt)("inlineCode",{parentName:"td"},"NONE")," (disable), ",(0,r.kt)("inlineCode",{parentName:"td"},"BROADCAST")," (default) and ",(0,r.kt)("inlineCode",{parentName:"td"},"JOIN")," (different low-level implementations).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deduplication.synthetic.cardinality")),(0,r.kt)("td",{parentName:"tr",align:null},"Do not deduplicate pairs with less-or-equal cardinality. The default is 1.")))))}m.isMDXComponent=!0}}]);