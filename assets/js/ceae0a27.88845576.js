"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[6475],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>c});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(i),c=a,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return i?n.createElement(f,r(r({ref:t},d),{},{components:i})):n.createElement(f,r({ref:t},d))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},34385:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const o={title:"1.0.0 Configuration",date:"2021-07-16",sidebar_position:0},r=void 0,l={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/1-0-0-configuration/index",id:"pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/1-0-0-configuration/index",title:"1.0.0 Configuration",description:"The sink is configured using a HOCON file. These are the fields:",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/1-0-0-configuration/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/1-0-0-configuration",slug:"/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/1-0-0-configuration/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/1-0-0-configuration/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/1-0-0-configuration/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:0,frontMatter:{title:"1.0.0 Configuration",date:"2021-07-16",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Upgrade Guides",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/"},next:{title:"2.2.0 Upgrade Guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/upgrade-guides/2-2-0-upgrade-guide/"}},s={},p=[{value:"Monitoring",id:"monitoring",level:3}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The sink is configured using a HOCON file. These are the fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source"),": Choose kinesis or nsq as a source stream"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sink"),": Choose between kinesis or nsq as a sink stream for failed events"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aws.accessKey"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"aws.secretKey"),': Change these to your AWS credentials. You can alternatively leave them as "default", in which case the\xa0',(0,a.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html"},"DefaultAWSCredentialsProviderChain"),"\xa0will be used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.initialPosition"),': Where to start reading from the stream the first time the app is run. "TRIM',"_",'HORIZON" for as far back as possible, "LATEST" for as recent as possibly, "AT',"_",'TIMESTAMP" for after the specified timestamp.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.initialTimestamp"),': Timestamp for "AT',"_",'TIMESTAMP" initial position'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.maxRecords"),": Maximum number of records to read per GetRecords call"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.region"),": The Kinesis region name to use."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.appName"),": Unique identifier for the app which ensures that if it is stopped and restarted, it will restart at the correct location."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.customEndpoint"),": Optional endpoint url configuration to override aws kinesis endpoints. This can be used to specify local endpoints when using localstack."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kinesis.disableCloudWatch"),": Optional override to disable CloudWatch metrics for KCL"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsq.channelName"),": Channel name for NSQ source stream. If more than one application reading from the same NSQ topic at the same time, all of them must have unique channel name to be able to get all the data from the same topic."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsq.host"),": Hostname for NSQ tools"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsq.port"),": HTTP port number for nsqd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nsq.lookupPort"),": HTTP port number for nsqlookupd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stream.inStreamName"),": The name of the input stream of the tool which you choose as a source. This should be the stream to which your are writing records with the Scala Stream Collector."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streams.outStreamName"),": The name of the output stream of the tool which you choose as sink. This is stream where records are sent if the compression process fails."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streams.buffer.byteLimit"),": Whenever the total size of the buffered records exceeds this number, they will all be sent to S3."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streams.buffer.recordLimit"),": Whenever the total number of buffered records exceeds this number, they will all be sent to S3."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"streams.buffer.timeLimit"),": If this length of time passes without the buffer being flushed, the buffer will be flushed.\xa0",(0,a.kt)("strong",{parentName:"li"},"Note"),": With NSQ streams, only record limit is taken into account. Other two option will be ignored."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s3.region"),": The AWS region for the S3 bucket"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s3.bucket"),": The name of the S3 bucket in which files are to be stored"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s3.format"),": The format the app should write to S3 in (",(0,a.kt)("inlineCode",{parentName:"li"},"lzo"),"\xa0or\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"gzip"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s3.maxTimeout"),": The maximum amount of time the app attempts to PUT to S3 before it will kill itself")),(0,a.kt)("h3",{id:"monitoring"},"Monitoring"),(0,a.kt)("p",null,"It's possible to include Snowplow monitoring in the application. This is setup through the ",(0,a.kt)("inlineCode",{parentName:"p"},"monitoring")," section at the bottom of the config file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"monitoring.snowplow.collectorUri"),"\xa0your snowplow collector URI"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"monitoring.snowplow.appId"),"\xa0the app-id used in decorating the events sent")),(0,a.kt)("p",null,"To disable Snowplow monitoring, just remove the entire\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"monitoring"),"\xa0section from the config."))}m.isMDXComponent=!0}}]);