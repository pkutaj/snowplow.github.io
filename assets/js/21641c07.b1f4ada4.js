"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[45238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"RDB loader configuration reference",date:"2021-06-08",sidebar_position:380},i=void 0,l={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/configuration-reference/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/configuration-reference/index",title:"RDB loader configuration reference",description:"Shredder and loader use different configurations starting from 2.0.0. An example config for loader can be found here.",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/configuration-reference/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/configuration-reference",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/configuration-reference/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/configuration-reference/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:380,frontMatter:{title:"RDB loader configuration reference",date:"2021-06-08",sidebar_position:380},sidebar:"tutorialSidebar",previous:{title:"RDB loader monitoring",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/monitoring/"},next:{title:"RDB shredder configuration reference",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/rdb-shredder-configuration-reference/"}},d={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Shredder and loader use different configurations starting from 2.0.0. An example config for loader can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/2.0.0/config/loader.config.reference.hocon"},"here"),"."),(0,a.kt)("p",null,"This is a complete list of the options that can be configured"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"region"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional if it can be resolved with AWS region provider chain. AWS region of the S3 bucket."))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"messageQueue"),(0,a.kt)("td",{parentName:"tr",align:null},"Required. A SQS topic name used by the shredder and loader to communicate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jsonpaths"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. A S3 URI that holds JSONPath files.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.host"),(0,a.kt)("td",{parentName:"tr",align:null},"Required. Host name of redshift.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.port"),(0,a.kt)("td",{parentName:"tr",align:null},"Required. Port of redshift.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.database"),(0,a.kt)("td",{parentName:"tr",align:null},"Required. Name of the database.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.roleArn"),(0,a.kt)("td",{parentName:"tr",align:null},"Required. WS Role ARN allowing Redshift to load data from S3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.schema"),(0,a.kt)("td",{parentName:"tr",align:null},'Required. Redshift schema name, e.g. "atomic"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.username"),(0,a.kt)("td",{parentName:"tr",align:null},"Required. DB user with permission to load data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.password"),(0,a.kt)("td",{parentName:"tr",align:null},"Required. Password of DB user")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.blockingRows"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.disableIsValidQuery"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.dsiLogLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.filterLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.loginTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.logLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.socketTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.ssl"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.sslMode"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.sslRootCert"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.tcpKeepAlive"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.jdbc.tcpKeepAliveMinutes"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the Redshift JDBC driver reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage.maxError"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Configures the Redshift MAXERROR load option. Default value 10.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.webhook.endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. An http endpoint where monitoring alerts should be sent.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.webhook.tags"),(0,a.kt)("td",{parentName:"tr",align:null},'Optional. Custom key-value pairs which can be added to the monitoring webhooks. E.g. {"tag1": "label1"}')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.snowplow.appId"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. When using Snowplow tracking, set this appId in the event.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.snowplow.collector"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Set to a collector url to turn on snowplow tracking.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.sentry.dsn"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. For tracking runtime exceptions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.statsd.hostname"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional, for sending loading metrics (latency and event counts) to a","\xa0","statsd server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.statsd.port"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional, port of the statsd server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.statsd.tags"),(0,a.kt)("td",{parentName:"tr",align:null},"E.g.","\xa0",'{ "key1": "value1", "key2": "value2" }. Tags are used to annotate the statsd metric with any contextual information.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.statsd.prefix"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional, default \u201csnoplow.rdbloader\u201d. Configures the prefix of statsd metric names.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.folders.staging"),(0,a.kt)("td",{parentName:"tr",align:null},"Required if folder monitoring section included in the config. Configuration for periodic unloaded/corrupted folders checks. Path where Loader could store auxiliary logs. Loader should be able to write here, Redshift should be able to load from here")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.folders.period"),(0,a.kt)("td",{parentName:"tr",align:null},"Required if folder monitoring section included in the config. How often to check for unloaded/corrupted folders.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.folders.since"),(0,a.kt)("td",{parentName:"tr",align:null},"Required if folder monitoring section included in the config. Specifies until when folder monitoring will monitor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.folders.until"),(0,a.kt)("td",{parentName:"tr",align:null},"Required if folder monitoring section included in the config. Specifies from when folder monitoring will start to monitor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.folders.shredderOutput"),(0,a.kt)("td",{parentName:"tr",align:null},"Required if folder monitoring section included in the config. Path to shredded archive.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.healthCheck.frequencyadded in 2.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. How often to run a periodic DB health check, which raises a warning if DB does not respond to a SELECT 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"monitoring.healthCheck.timeoutadded in 2.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. How long to wait for a health check response.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"retryQueue.periodadded in 2.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional. Configures a backlog of recently failed folders that could be automatically retried. period is how often a batch of failed folders should be pulled into a discovery queue.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"retryQueue.sizeadded in 2.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Required if retryQueue section is included. How many failures should be kept in memory. After the limit is reached, new failures are dropped.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"retryQueue.maxAttemptsadded in 2.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Required if retryQueue section is included. How many attempts to make for each folder. After the limit is reached new failures are dropped.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"retryQueue.intervaladded in 2.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Required if retryQueue section is included. Artificial pause after each failed folder before being added to the retry queue.")))))}u.isMDXComponent=!0}}]);