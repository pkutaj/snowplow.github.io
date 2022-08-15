"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[80747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(6085);const i={title:"Setup Validation and Enrich",date:"2020-02-26",sidebar_position:40},s=void 0,l={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/index",title:"Setup Validation and Enrich",description:"Stream Enrich is an application which:",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-validation-enrich/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:40,frontMatter:{title:"Setup Validation and Enrich",date:"2020-02-26",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Setup Webhooks",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-webhooks/"},next:{title:"Setup Destinations",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/"}},c={},d=[{value:"Install, configure and run Stream Enrich",id:"install-configure-and-run-stream-enrich",level:2},{value:"Add any desired Enrichments",id:"add-any-desired-enrichments",level:2},{value:"Sink the enriched data to S3 from Kinesis",id:"sink-the-enriched-data-to-s3-from-kinesis",level:2}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(79262).Z,width:"699",height:"125"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich"},"Stream Enrich")," is an application which:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Reads")," raw Snowplow events off a stream populated by the Stream Collector"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Validates")," each raw event"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Enriches")," each event (e.g. infers the location of the user from his/her IP address)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Writes")," the enriched Snowplow event to another stream")),(0,r.kt)("p",null,"This guide covers how to setup Stream Enrich."),(0,r.kt)("h2",{id:"install-configure-and-run-stream-enrich"},"Install, configure and run Stream Enrich"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/enrichment-components/stream-enrich/"},"Stream Enrich reference")," describes how to install, run, and configure the application."),(0,r.kt)("h2",{id:"add-any-desired-enrichments"},"Add any desired Enrichments"),(0,r.kt)(o.ZP,{mdxType:"Block1303"}),(0,r.kt)("p",null,"Each enrichment is enabled by configuring a JSON config file (one per enrichment), loading these into DynamoDB and then passing the location of the configs in DynamoDB to stream enrich on running it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--enrichments")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/enrichment-components/stream-enrich/run-stream-enrich/"},"argument as documented"),"."),(0,r.kt)("h2",{id:"sink-the-enriched-data-to-s3-from-kinesis"},"Sink the enriched data to S3 from Kinesis"),(0,r.kt)("p",null,"Now that you have Stream Enrich running, you should have validated, enriched data being output into a Kinesis stream."),(0,r.kt)("p",null,"The next step is to ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/load-data-to-s3/"},"setup the Snowplow S3 loader")," to sink this data to S3."),(0,r.kt)("p",null,"Instructions on how to load the data into other data stores e.g. Redshift, SnowflakeDB and Elastic can be found under ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/"},"Destinations")))}p.isMDXComponent=!0},6085:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow offers a large number of enrichments that can be used to enhance your event data. An enrichment either updates or populates fields of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/atomic/jsonschema/1-0-0"},"atomic")," event or adds a ",(0,r.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/"},"self-describing")," context to ",(0,r.kt)("inlineCode",{parentName:"p"},"[derived_contexts](https://github.com/snowplow/snowplow-scala-analytics-sdk/blob/2.1.0/src/main/scala/com.snowplowanalytics.snowplow.analytics.scalasdk/Event.scala#L165).")),(0,r.kt)("p",null,"The order of enrichments is hard-coded and cannot be changed, below table lists available enrichments in order they are executed."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Enrichment")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Description"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/iab-enrichment/"},"IAB")),(0,r.kt)("td",null,"Use the IAB/ABC International Spiders and Bots List to determine whether an event was produced by a user or a robot/spider based on its' IP address and user agent.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"User Agent utils"),(0,r.kt)("td",null,"Deprecated - please consider switching to YAUAA.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/ua-parser-enrichment/"},"UA parser")),(0,r.kt)("td",null,"Parse the useragent and attach detailed useragent information to each event.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/currency-conversion-enrichment/"},"Currency conversion")),(0,r.kt)("td",null,"Convert the values of all transactions to a specified base currency using Open Exchange Rates. To use it, you need an Open Exchange Rates account.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/referrer-parser-enrichment/"},"Referer parser")),(0,r.kt)("td",null,"Extracts attribution data from referer URLs.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/campaign-attribution-enrichment/","data-type":"docs","data-id":"421"},"Campaign attribution")),(0,r.kt)("td",null,"Choose which querystring parameters will be used to generate the marketing campaign fields.",(0,r.kt)("em",null," If you do not enable the campaign_attribution enrichment, those fields will not be populated."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/event-fingerprint-enrichment/"},"Event fingerprint")),(0,r.kt)("td",null,"Generate a fingerprint for the event using a hash of client-set fields. Helpful for deduplicating events.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/cookie-extractor-enrichment/","data-type":"docs","data-id":"426"},"Cookie extractor")),(0,r.kt)("td",null,"Specify cookies that you want to extract if found.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/http-header-extractor-enrichment/"},"HTTP Header extractor")),(0,r.kt)("td",null,"Specify headers that you want to extract via a regex pattern, if found each extracted header will be attached to your event.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Weather Enrichment"),(0,r.kt)("td",null,"Unavailable since Enrich 1.4.x.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/yauaa-enrichment/"},"YAUAA")),(0,r.kt)("td",null,"Parse and analyze the user agent string of an event and extract as many relevant attributes as possible using YAUAA API.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/ip-lookup-enrichment/","data-type":"docs","data-id":"416"},"IP lookups")),(0,r.kt)("td",null,"Lookup useful data based on a user's IP address using the MaxMind database.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{"data-type":"docs","data-id":"419",href:"/docs/enriching-your-data/available-enrichments/custom-javascript-enrichment/"},"JavaScript")),(0,r.kt)("td",null,"Write a JavaScript function which is executed for each event.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/custom-sql-enrichment/"},"SQL Query")),(0,r.kt)("td",null,"Perform dimension widening on a Snowplow event via your own internal relational database.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/custom-api-request-enrichment/","data-type":"docs","data-id":"431"},"API Request")),(0,r.kt)("td",null,"Perform dimension widening on a Snowplow event via your own or third-party proprietary http(s) API.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/ip-anonymization-enrichment/","data-type":"docs","data-id":"424"},"IP anonymization")),(0,r.kt)("td",null,'Anonymize the IP addresses found in the user_ipaddress field by replacing a certain number of octets with "x"s.')),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/enriching-your-data/available-enrichments/pii-pseudonymization-enrichment/"},"PII Pseudonymization")),(0,r.kt)("td",null,"Better protect the privacy rights of data subjects by psuedoanonymizing collected data.")))))}i.isMDXComponent=!0},79262:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/snowplow-aws-pipeline-enrich-3830b3fb3be004407b2881d34d056cf9.png"}}]);