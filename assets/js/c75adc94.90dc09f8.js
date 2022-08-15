"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[960],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(i,".").concat(m)]||c[m]||u[m]||s;return a?r.createElement(h,n(n({ref:t},d),{},{components:a})):r.createElement(h,n({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,n=new Array(s);n[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var p=2;p<s;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const s={title:"AWS and Postgres",date:"2022-05-10",sidebar_position:100},n=void 0,l={unversionedId:"migrated/open-source-quick-start/quick-start-installation-guide-on-aws/summary-of-what-you-have-deployed/aws-and-postgres/index",id:"migrated/open-source-quick-start/quick-start-installation-guide-on-aws/summary-of-what-you-have-deployed/aws-and-postgres/index",title:"AWS and Postgres",description:"Let\u2019s take a look at what is deployed on AWS upon running the quick start example script.",source:"@site/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-aws/summary-of-what-you-have-deployed/aws-and-postgres/index.md",sourceDirName:"migrated/open-source-quick-start/quick-start-installation-guide-on-aws/summary-of-what-you-have-deployed/aws-and-postgres",slug:"/migrated/open-source-quick-start/quick-start-installation-guide-on-aws/summary-of-what-you-have-deployed/aws-and-postgres/",permalink:"/docsite-poc.github.io/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-aws/summary-of-what-you-have-deployed/aws-and-postgres/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:100,frontMatter:{title:"AWS and Postgres",date:"2022-05-10",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"What is deployed on AWS?",permalink:"/docsite-poc.github.io/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-aws/summary-of-what-you-have-deployed/"},next:{title:"AWS and Snowflake",permalink:"/docsite-poc.github.io/docs/migrated/open-source-quick-start/quick-start-installation-guide-on-aws/summary-of-what-you-have-deployed/aws-and-snowflake/"}},i={},p=[{value:"<strong>Collector load balancer</strong>",id:"collector-load-balancer",level:4},{value:"<strong>Stream Collector</strong>",id:"stream-collector",level:4},{value:"<strong>Stream Enrich</strong>",id:"stream-enrich",level:4},{value:"<strong>Kinesis streams</strong>",id:"kinesis-streams",level:4},{value:"<strong>Iglu</strong>",id:"iglu",level:4},{value:"<strong>S3 loader</strong>",id:"s3-loader",level:4},{value:"S3 loader bucket",id:"s3-loader-bucket",level:4},{value:"<strong>Postgres loader</strong>",id:"postgres-loader",level:4},{value:"DynamoDB",id:"dynamodb",level:4},{value:"Have more questions? Take a look at our Quick Start FAQs or reach out to us on discourse!",id:"have-more-questions-take-a-look-at-our-quick-start-faqs-or-reach-out-to-us-on-discourse",level:5}],d={toc:p};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Let\u2019s take a look at what is deployed on AWS upon running the quick start example script.")),(0,o.kt)("p",null,"Note: you can very easily edit the script or run each of the terraform modules independantly, giving you the flexibility to design the topology of your pipeline according to your needs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(92502).Z,width:"1012",height:"570"})),(0,o.kt)("h4",{id:"collector-load-balancer"},(0,o.kt)("strong",{parentName:"h4"},"Collector load balancer")),(0,o.kt)("p",null,"This is an application load balancer (ELB) for your inbound HTTP/S traffic. Traffic is routed from the load balancer to the collector.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For further details on the resources, default and required input variables, and outputs see the ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/snowplow-devops/terraform-aws-alb"},"terraform-aws-alb module")," github repository.")),(0,o.kt)("h4",{id:"stream-collector"},(0,o.kt)("strong",{parentName:"h4"},"Stream Collector")),(0,o.kt)("p",null,"This is a Snowplow event collector that receives raw Snowplow events over HTTP, serializes them to a ",(0,o.kt)("a",{parentName:"p",href:"http://thrift.apache.org/"},"Thrift")," record format, and then writes them to Kinesis. More details can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/scala-stream-collector/"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Find out more about the Collector terraform module, and explore the full set of variables here: ",(0,o.kt)("a",{parentName:"em",href:"https://registry.terraform.io/modules/snowplow-devops/collector-kinesis-ec2/aws/latest"},"https://registry.terraform.io/modules/snowplow-devops/collector-kinesis-ec2/aws/latest"))),(0,o.kt)("h4",{id:"stream-enrich"},(0,o.kt)("strong",{parentName:"h4"},"Stream Enrich")),(0,o.kt)("p",null,"This is a Snowplow app written in scala which:\xa0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reads raw Snowplow events off a Kinesis stream populated by the Scala Stream Collector"),(0,o.kt)("li",{parentName:"ul"},"Validates each raw event"),(0,o.kt)("li",{parentName:"ul"},"Enriches each event (e.g. infers the location of the user from his/her IP address)"),(0,o.kt)("li",{parentName:"ul"},"Writes the enriched Snowplow event to another stream")),(0,o.kt)("p",null,"It is designed to be used downstream of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/scala-stream-collector/"},"Scala Stream Collector"),". More details can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/stream-enrich/"},"here"),".\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"FInd out more about the Enrich modules and explore the full set of variables available here: ",(0,o.kt)("a",{parentName:"em",href:"https://registry.terraform.io/modules/snowplow-devops/enrich-kinesis-ec2/aws/latest"},"https://registry.terraform.io/modules/snowplow-devops/enrich-kinesis-ec2/aws/latest"))),(0,o.kt)("h4",{id:"kinesis-streams"},(0,o.kt)("strong",{parentName:"h4"},"Kinesis streams")),(0,o.kt)("p",null,"Your kinesis streams are a key component of ensuring a non-lossy pipeline, providing crucial back-up, as well as serving as a mechanism to drive real time use cases from the enriched stream.\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FInd out more about the Kinesis stream module and explore the full set of variables available here: ",(0,o.kt)("a",{parentName:"strong",href:"https://registry.terraform.io/modules/snowplow-devops/kinesis-stream/aws/latest"},"https://registry.terraform.io/modules/snowplow-devops/enrich-kinesis-ec2/aws/latest"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Raw stream")),(0,o.kt)("p",null,"Collector payloads are written to this raw kinesis stream, before being picked up by the Enrich application.\xa0The S3 loader (raw) also reads from this raw stream and writes to the raw S3 folder."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enriched stream")),(0,o.kt)("p",null,"Events that have been validated and enriched by the Enrich application are written to this enriched stream. The S3 loader (enriched) reads from this enriched stream and writes to the enriched folder on S3."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bad 1 stream")),(0,o.kt)("p",null,"This bad stream is for events that the collector, enrich or S3 loader (raw and enriched) applications fail to process. An event can fail at the collector point due to, for instance, it being too large for the stream creating a size violation bad row, or it can fail during enrichment due to a schema violation or enrichment failure.\xa0 More details can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/managing-data-quality/failed-events/understanding-failed-events/"},"here"),".\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bad 2 stream")),(0,o.kt)("p",null,"This bad stream is for failed events generated by the S3 loader as it tries to write from the bad 1 stream to the bad folder on S3."),(0,o.kt)("h4",{id:"iglu"},(0,o.kt)("strong",{parentName:"h4"},"Iglu")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/iglu/"},"Iglu")," allows you to publish, test and serve schemas via an easy-to-use RESTful interface. It is split into a few services."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Iglu load balancer")),(0,o.kt)("p",null,"This load balances the inbound traffic and routes traffic to the Iglu Server.\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"_FInd out more about the application load balancer module and explore the full set of variables available here:")," ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/snowplow-devops/alb/aws/latest"},"https://registry.terraform.io/modules/snowplow-devops/alb/aws/latest"),"_"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Iglu Server")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/tree/master/2-repositories/iglu-server"},"Iglu Server")," serves requests for Iglu schemas stored in your schema registry.\xa0"),(0,o.kt)("p",null,"_",(0,o.kt)("em",{parentName:"p"},"Find out more about the Iglu Server module and explore the full set of variables available here:")," ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/snowplow-devops/iglu-server-ec2/aws/latest"},"https://registry.terraform.io/modules/snowplow-devops/iglu-server-ec2/aws/latest"),"_"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Iglu RDS")),(0,o.kt)("p",null,"This is the Iglu Server database where the Iglu schemas themselves are stored.\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Find out more about the RDS module and explore the full set of variables available here:")," ",(0,o.kt)("a",{parentName:"strong",href:"https://registry.terraform.io/modules/snowplow-devops/iglu-server-ec2/aws/latest"},"https://registry.terraform.io/modules/snowplow-devops/rds/aws/latest"))),(0,o.kt)("h4",{id:"s3-loader"},(0,o.kt)("strong",{parentName:"h4"},"S3 loader")),(0,o.kt)("p",null,"The Snowplow S3 Loaders consume records from your relevant ",(0,o.kt)("a",{parentName:"p",href:"http://aws.amazon.com/kinesis/"},"Amazon Kinesis")," streams (as outlined above) and writes them to ",(0,o.kt)("a",{parentName:"p",href:"http://aws.amazon.com/s3/"},"S3"),".\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Find out more about the S3 loader module and explore the full set of variables available here: ",(0,o.kt)("a",{parentName:"em",href:"https://registry.terraform.io/modules/snowplow-devops/s3-loader-kinesis-ec2/aws/latest"},"https://registry.terraform.io/modules/snowplow-devops/s3-loader-kinesis-ec2/aws/latest")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"S3 loader raw")),(0,o.kt)("p",null,"Responsible for reading from the raw stream (i.e. events from the collector that have not yet been validated or enriched) and writing to the raw folder on S3.\xa0Any events that have failed to be processed by the raw S3 loader get written to your bad-1 stream."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"S3 loader bad")),(0,o.kt)("p",null,"Responsible for reading from the bad-1 stream and writing to the bad folder on S3. Any events that fail to be processed by the bad S3 loader get written to the bad-2 stream."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"S3 loader enriched")),(0,o.kt)("p",null,"Responsible for reading from the enriched stream and writing to your enriched folder on S3. Any events that fail to be processed by the enriched S3 loader get written to the bad-1 stream."),(0,o.kt)("h4",{id:"s3-loader-bucket"},"S3 loader bucket"),(0,o.kt)("p",null,"Your S3 bucket where the raw, enriched and bad data gets written to by the S3 loader."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Find out more about the S3 bucket module and explore the full set of variables available here: ",(0,o.kt)("a",{parentName:"em",href:"https://registry.terraform.io/modules/snowplow-devops/s3-bucket/aws/latest"},"https://registry.terraform.io/modules/snowplow-devops/s3-bucket/aws/latest")))),(0,o.kt)("h4",{id:"postgres-loader"},(0,o.kt)("strong",{parentName:"h4"},"Postgres loader")),(0,o.kt)("p",null,"The Snowplow application responsible for reading the enriched and bad data and ",(0,o.kt)("a",{parentName:"p",href:"/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/snowplow-postgres-loader/"},"loading to Postgres.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Find out more about the S3 bucket module and explore the full set of variables available here:")," ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/snowplow-devops/postgres-loader-kinesis-ec2/aws/latest"},"https://registry.terraform.io/modules/snowplow-devops/postgres-loader-kinesis-ec2/aws/latest")),(0,o.kt)("h4",{id:"dynamodb"},"DynamoDB"),(0,o.kt)("p",null,"On the first run of each of the applications (Enrich, S3 loaders, Postgres loaders) the Kinesis Connectors Library creates a DynamoDB table to keep track of what they have consumed from the stream so far. Each Kinesis consumer maintains its own checkpoint information."),(0,o.kt)("p",null,"The DynamoDB autoscaling module enables autoscaling for a target DynamoDB table. Note that there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl_write_max_capacity")," variable which can be set to your expected RPS, but setting it high will of course incur more cost."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"You can find further details here: ",(0,o.kt)("a",{parentName:"em",href:"https://registry.terraform.io/modules/snowplow-devops/dynamodb-autoscaling/aws/latest"},"https://registry.terraform.io/modules/snowplow-devops/dynamodb-autoscaling/aws/latest"))),(0,o.kt)("h5",{id:"have-more-questions-take-a-look-at-our-quick-start-faqs-or-reach-out-to-us-on-discourse"},"Have more questions? Take a look at our ",(0,o.kt)("a",{parentName:"h5",href:"/docs/migrated/open-source-quick-start/quick-start-faqs/"},"Quick Start FAQs")," or reach out to us on ",(0,o.kt)("a",{parentName:"h5",href:"https://discourse.snowplowanalytics.com/"},"discourse"),"!"))}u.isMDXComponent=!0},92502:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-1-d312c1ab1d085c222fef569251d7acce.png"}}]);