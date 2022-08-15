"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[9456],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(h,o(o({ref:e},m),{},{components:a})):n.createElement(h,o({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13310:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Configuration",date:"2021-08-14",sidebar_position:50},o=void 0,l={unversionedId:"pipeline-components-and-applications/enrichment-components/enrich-pubsub/configuration-reference/index",id:"pipeline-components-and-applications/enrichment-components/enrich-pubsub/configuration-reference/index",title:"Configuration",description:"enrich-pubsub",source:"@site/docs/pipeline-components-and-applications/enrichment-components/enrich-pubsub/configuration-reference/index.md",sourceDirName:"pipeline-components-and-applications/enrichment-components/enrich-pubsub/configuration-reference",slug:"/pipeline-components-and-applications/enrichment-components/enrich-pubsub/configuration-reference/",permalink:"/docs/pipeline-components-and-applications/enrichment-components/enrich-pubsub/configuration-reference/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/enrichment-components/enrich-pubsub/configuration-reference/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:50,frontMatter:{title:"Configuration",date:"2021-08-14",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/docs/pipeline-components-and-applications/enrichment-components/enrich-pubsub/monitoring/"},next:{title:"(to be deprecated) Stream Enrich",permalink:"/docs/pipeline-components-and-applications/enrichment-components/stream-enrich/"}},p={},s=[{value:"enrich-pubsub",id:"enrich-pubsub",level:2},{value:"enrich-kinesis",id:"enrich-kinesis",level:2},{value:"Common parameters",id:"common-parameters",level:2},{value:"Enriched events validation against atomic schema",id:"enriched-events-validation-against-atomic-schema",level:2},{value:"Telemetry",id:"telemetry",level:2},{value:"Enrichments",id:"enrichments",level:2}],m={toc:s};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enrich-pubsub"},"enrich-pubsub"),(0,r.kt)("p",null,"A minimal configuration file can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/blob/master/config/config.pubsub.minimal.hocon"},"Github repo"),", as well as a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/blob/master/config/config.pubsub.extended.hocon"},"comprehensive one"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"input.subscription"),(0,r.kt)("th",{parentName:"tr",align:null},"Required. PubSub subscription identifier for the collector payloads.Example: projects/example-project/subscriptions/collectorPayloads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.parallelPullCount"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional. Number of threads used internally by permutive library to handle incoming messages. These threads do very little "work" apart from writing the message to a concurrent Queue.Default: 1')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.maxQueueSize"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional. Configures the "max outstanding element count" of PubSub. This is the principal way we control concurrency in the app; it puts an upper bound on the number of events in memory at once. An event counts towards this limit starting from when it received by the permutive library, until we ack it (after publishing to output). The value must be large enough that it does not cause the sink to block whilst it is waiting for a batch to be completed.Default: 3000')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.topic"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Name of the PubSub topic that will receive the enriched events.Example: projects/example-project/topics/enriched")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Enriched event fields to add as PubSub message attributes. For example, if this is ",'[ "app_id" ]'," then the enriched event's app_id field will be an attribute of the PubSub message, as well as being a field within the message data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.delayThreshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Delay threshold to use for batching. After this amount of time has elapsed, before maxBatchSize and maxBatchBytes have been reached, messages from the buffer will be sent.Default: 200 milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.maxBatchSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Maximum number of messages sent within a batch. When the buffer reaches this number of messages they are sent.Default: 1000 (PubSub maximum)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.maxBatchBytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Maximum number of bytes sent within a batch. When the buffer reaches this size messages are sent.Default: 8000000 (PubSub maximum is 10MB)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.topic"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Should be used in conjunction with the PII pseudonymization enrichment. When configured, enables an extra output topic for writing a pii_transformation event.Example: projects/test-project/topics/pii")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.attributes for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.delayThreshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.delayThreshold for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.maxBatchSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.maxBatchSize for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.maxBatchBytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.maxBatchBytes for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.topic"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Name of the PubSub topic that will receive the bad rows.Example: projects/example-project/topics/badrows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.delayThreshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.delayThreshold for bad rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.maxBatchSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.maxBatchSize for bad rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.maxBatchBytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.maxBatchBytes for bad rows")))),(0,r.kt)("h2",{id:"enrich-kinesis"},"enrich-kinesis"),(0,r.kt)("p",null,"A minimal configuration file can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/blob/master/config/config.kinesis.minimal.hocon"},"Github repo"),", as well as a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/blob/master/config/config.kinesis.extended.hocon"},"comprehensive one"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"input.appName"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional. Name of the application which the KCL daemon should assume. A DynamoDB table with this name will be created.Default: snowplow-enrich-kinesis"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.streamName"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Name of the Kinesis stream with the collector payloads to read from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.region"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Region where the Kinesis stream is located. This field is optional if it can be resolved with AWS region provider chain. It checks places like env variables, system properties, AWS profile file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.initialPosition.type"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Set the initial position to consume the Kinesis stream. Possible values:- LATEST: most recent data- TRIM_HORIZON: oldest available data- AT_TIMESTAMP: start from the record at or after the specified timestampDefault: TRIM_HORIZON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.initialPosition.timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for AT_TIMESTAMP.Example: 2020-07-17T10:00:00Z")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.retrievalMode.type"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Set the mode for retrieving records. Possible values:- Polling- FanOutDefault: Polling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.bufferSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Size of the internal buffer used when reading messages from Kinesis, each buffer holding up to maxRecords from above.Default: 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.customEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Endpoint url configuration to override aws kinesis endpoints. Can be used to specify local endpoint when using localstackExample: ",(0,r.kt)("a",{parentName:"td",href:"http://localhost:4566"},"http://localhost:4566"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.dynamodbCustomEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Endpoint url configuration to override aws dyanomdb endpoint for Kinesis checkpoints lease table. Can be used to specify local endpoint when using localstack.Example: ",(0,r.kt)("a",{parentName:"td",href:"http://localhost:4569"},"http://localhost:4569"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.cloudwatchCustomEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Endpoint url configuration to override aws cloudwatch endpoint for metrics. Can be used to specify local endpoint when using localstack.Example: ",(0,r.kt)("a",{parentName:"td",href:"http://localhost:4582"},"http://localhost:4582"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.retrievalMode.maxRecords"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for Polling. Maximum size of a batch returned by a call to getRecords. Records are checkpointed after a batch has been fully processed, thus the smaller maxRecords, the more often records can be checkpointed into DynamoDb, but possibly reducing the throughput.Default: 10000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.streamName"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Name of the Kinesis stream to write to the enriched events.Example: enriched")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.region"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as input.region for enriched events stream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.partitionKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. How the output stream will be partitioned in Kinesis. Events with the same partition key value will go to the same shard.Possible partition keys: event_id, event_fingerprint, domain_userid, network_userid, user_ipaddress, domain_sessionid, user_fingerprintRefer to this page to know what the possible partition keys correspond to.If not specified, the partition key will be a random UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.backoffPolicy.minBackoff"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Minimum backoff before retrying when writing fails.Default: 100 milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.backoffPolicy.maxBackoff"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Maximum backoff before retrying when writing fails.Default: 10 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.backoffPolicy.maxRetries"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Maximum number of retries.Default: 10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.recordLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Limits the number of events in a single PutRecords request. Several requests are made in parallel.Default: 500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.good.customEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. To use a custom Kinesis endpoint.Example: ",(0,r.kt)("a",{parentName:"td",href:"https://localhost:4566"},"https://localhost:4566"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.streamName"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Should be used in conjunction with the PII pseudonymization enrichment. When configured, enables an extra output stream for writing a pii_transformation event.Example: pii")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.region"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.region for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.partitionKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.partitionKey for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.backoffPolicy.minBackoff"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.backoffPolicy.minBackoff for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.backoffPolicy.maxBackoff"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.backoffPolicy.maxBackoff for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.backoffPolicy.maxRetries"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.backoffPolicy.maxRetries for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.recordLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.recordLimit for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.customEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.customEndpoint for pii events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.streamName"),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Name of the Kinesis stream to write to the bad rows.Example: bad")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.region"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.region for bad rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.backoffPolicy.minBackoff"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.backoffPolicy.minBackoff for bad rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.backoffPolicy.maxBackoff"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.backoffPolicy.maxBackoff for bad rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.backoffPolicy.maxRetries"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.backoffPolicy.maxRetries for bad rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.recordLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.recordLimit for bad rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.bad.customEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as output.good.customEndpoint for pii events")))),(0,r.kt)("h2",{id:"common-parameters"},"Common parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"concurrency.enrich"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional. Number of events that can get enriched at the same time within a chunk (events are processed by chunks in the app).Default: 256"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"concurrency.sink"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Number of chunks that can get sunk at the same time.Default for enrich-pubsub: 3Default for enrich-kinesis: 1 (WARNING for enrich-kinesis: if greater than 1, records can get checkpointed before they are sunk)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"assetsUpdatePeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Period after which enrich assets (e.g. the maxmind database for the IpLookups enrichment) should be checked for udpates. Assets will never be updated if this key is missing.Example: 7 days")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.sentry.dsn"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. To track runtime exceptions in Sentry.Example: ",(0,r.kt)("a",{parentName:"td",href:"http://sentry.acme.com"},"http://sentry.acme.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.statsd.hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Hostname of the StatsD server to send enrichment metrics (latency and event counts) to.Example: localhost")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.statsd.port"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Port of the StatsD server.Example: 8125")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.statsd.period"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. How frequently to report metricExample: 10 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.statsd.tags"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional. Key-value pairs attached to each metric sent to StatsD to provide contextual information.Example" { "env": "prod" }')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.statsd.prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Configures the prefix of StatsD metric names.Default: snowplow.enrich.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.stdout.period"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. If set, metrics will be printed in the logs with this frequence.Example: 10 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring.metrics.stdout.prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Prefix for the metrics appearing in the logs.Default: snowplow.enrich.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.disable"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Set to true to disable telemetry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Interval for the heartbeat eventExample: 1 hour")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.method"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. HTTP method used to send the heartbeat event.Possible values: GET or POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.collectorUri"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. hostname of the collector receiving the heartbeat event.Default: collector-g.snowplowanalytics.com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.collectorPort"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Port of the collector receiving the heartbeat event.Example: 443")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.secure"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Whether to use https or not.Default: true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.userProvidedId"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Identifier intended to tie events together across modules, infrastructure and apps when used consistently.Example: my_company")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.autoGeneratedId"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Intended to identify each independent module, and the infrastructure it controls")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.instanceId"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Unique for each instance of the app running within a module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.moduleName"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Name of the terraform module that deployed the app.Example: enrich-kinesis-ce")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"telemetry.moduleVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Version of the terraform module that deployed the app.Example: 1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"featureFlags.acceptInvalid"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Enrich 3.0.0 introduces the validation of the enriched events against atomic schema before emitting. If set to false, a bad row will be emitted instead of the enriched event if validation fails. If set to true, invalid enriched events will be emitted, as before. More details here.Default: false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"featureFlags.legacyEnrichmentOrder"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. In early versions of enrich-kinesis and enrich-pubsub (","<","= 3.1.5), the Javascript enrichment incorrectly ran before the currency, weather, and IP Lookups enrichments.Set this flag to true to keep the erroneous behaviour of those previous versions.Default: false")))),(0,r.kt)("p",null,"Instead of Kinesis or PubSub, it's also possible to read collector payloads from files on disk. This can be used for instance for testing purposes. In this case the configuration needs to be as below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"input.type"),(0,r.kt)("th",{parentName:"tr",align:null},"Should be FileSystem"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.dir"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory containing collector payloads encoded with Thrift")))),(0,r.kt)("p",null,"Likewise, it's possible to write enriched events, pii events and bad rows to files instead of PubSub or Kinesis."),(0,r.kt)("p",null,"To write enriched events to files:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"input.type"),(0,r.kt)("th",{parentName:"tr",align:null},"Should be FileSystem"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input.dir"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory containing collector payloads encoded with Thrift")))),(0,r.kt)("p",null,"To write pii events to files:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"output.pii.type"),(0,r.kt)("th",{parentName:"tr",align:null},"Should be FileSystem"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.file"),(0,r.kt)("td",{parentName:"tr",align:null},"File where pii events will be written")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.maxBytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Maximum size of a file in bytes. Triggers file rotation")))),(0,r.kt)("p",null,"To write bad rows to files:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"output.pii.type"),(0,r.kt)("th",{parentName:"tr",align:null},"Should be FileSystem"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.file"),(0,r.kt)("td",{parentName:"tr",align:null},"File where pii events will be written")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output.pii.maxBytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Maximum size of a file in bytes. Triggers file rotation")))),(0,r.kt)("h2",{id:"enriched-events-validation-against-atomic-schema"},"Enriched events validation against atomic schema"),(0,r.kt)("p",null,"Enriched events are expected to match ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/atomic/jsonschema/1-0-0"},"atomic")," schema.",(0,r.kt)("br",{parentName:"p"}),"\n","However, until 3.0.0, it was never checked that the enriched events emitted by enrich were valid.",(0,r.kt)("br",{parentName:"p"}),"\n","If an event is not valid against ",(0,r.kt)("inlineCode",{parentName:"p"},"atomic")," schema, a bad row should be emitted instead of the enriched event.",(0,r.kt)("br",{parentName:"p"}),"\n","However, this is a breaking change, and we want to give some time to users to adapt, in case today they are working downstream with enriched events that are not valid against ",(0,r.kt)("inlineCode",{parentName:"p"},"atomic"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For this reason, this new validation was added as a feature that can be deactivated like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"featureFlags": {\n  "acceptInvalid": true\n}\n')),(0,r.kt)("p",null,"In this case, enriched events that are not valid against ",(0,r.kt)("inlineCode",{parentName:"p"},"atomic")," schema will still be emitted as before, so that enrich 3.0.0 can be fully backward compatible.",(0,r.kt)("br",{parentName:"p"}),"\n","It will be possible to know if the new validation would have had an impact by 2 ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A new metric ",(0,r.kt)("inlineCode",{parentName:"li"},"invalid_enriched")," has been introducred.",(0,r.kt)("br",{parentName:"li"}),"It reports the number of enriched events that were not valid against ",(0,r.kt)("inlineCode",{parentName:"li"},"atomic")," schema. As the other metrics, it can be seen on stdout and/or StatsD."),(0,r.kt)("li",{parentName:"ol"},"Each time there is an enriched event invalid against ",(0,r.kt)("inlineCode",{parentName:"li"},"atomic")," schema, a line will be logged with the bad row (add ",(0,r.kt)("inlineCode",{parentName:"li"},"-Dorg.slf4j.simpleLogger.log.InvalidEnriched=debug")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"JAVA_OPTS")," to see it).")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptInvalid")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", a bad row will be emitted instead of the enriched event in case it's not valid against ",(0,r.kt)("inlineCode",{parentName:"p"},"atomic")," schema."),(0,r.kt)("p",null,"When we'll know that all our customers don't have any invalid enriched events any more, we'll remove the feature flags and it will be impossible to emit invalid enriched events."),(0,r.kt)("h2",{id:"telemetry"},"Telemetry"),(0,r.kt)("p",null,"Starting with version 3.0.0 of enrich, snowplow will be collecting the heartbeats with some meta-information about the application (schema ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/snowplow/iglu-central/master/schemas/com.snowplowanalytics.oss/oss_context/jsonschema/1-0-1"},"here"),"). This is done to help us to improve the product, we need to understand what is popular, so we could focus our development effort in the right place."),(0,r.kt)("p",null,"At the base, telemetry is sending the application name and version every hour. You can help us by providing ",(0,r.kt)("inlineCode",{parentName:"p"},"userProvidedId")," in the config file :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"telemetry" {\n  "userProvidedId": "myCompany"\n}\n')),(0,r.kt)("p",null,"Telemetry can be deactivated by putting the following section in the configuration file :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"telemetry": {\n  "disable": true\n}\n')),(0,r.kt)("h2",{id:"enrichments"},"Enrichments"),(0,r.kt)("p",null,"The list of the enrichments that can be configured can be found on ",(0,r.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/available-enrichments/"},"this page"),"."))}d.isMDXComponent=!0}}]);