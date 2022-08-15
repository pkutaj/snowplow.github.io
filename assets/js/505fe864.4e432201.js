"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[66837],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>g});var n=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function r(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var o=n.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},u=function(e){var o=s(e.components);return n.createElement(p.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},c=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=s(t),g=a,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||i;return t?n.createElement(m,l(l({ref:o},u),{},{components:t})):n.createElement(m,l({ref:o},u))}));function g(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var r={};for(var p in o)hasOwnProperty.call(o,p)&&(r[p]=o[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},91938:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const i={title:"Google Cloud Storage Loader",date:"2020-11-25",sidebar_position:500},l=void 0,r={unversionedId:"migrated/pipeline-components-and-applications/loaders-storage-targets/google-cloud-storage-loader/index",id:"migrated/pipeline-components-and-applications/loaders-storage-targets/google-cloud-storage-loader/index",title:"Google Cloud Storage Loader",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/google-cloud-storage-loader/index.md",sourceDirName:"migrated/pipeline-components-and-applications/loaders-storage-targets/google-cloud-storage-loader",slug:"/migrated/pipeline-components-and-applications/loaders-storage-targets/google-cloud-storage-loader/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/google-cloud-storage-loader/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:500,frontMatter:{title:"Google Cloud Storage Loader",date:"2020-11-25",sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"BigQuery Loader (0.3.x)",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/bigquery-loader/previous-versions/bigquery-loader-0-3-0/"},next:{title:"Elasticsearch Loader",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/loaders-storage-targets/elasticsearch-loader/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Technical details",id:"technical-details",level:2},{value:"See also:",id:"see-also",level:3},{value:"Setup guide",id:"setup-guide",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Cloud Storage Loader specific options",id:"cloud-storage-loader-specific-options",level:4},{value:"Dataflow options",id:"dataflow-options",level:4},{value:"Running",id:"running",level:3},{value:"Template",id:"template",level:4},{value:"ZIP archive",id:"zip-archive",level:4},{value:"Docker image",id:"docker-image",level:4},{value:"Additional information",id:"additional-information",level:4},{value:"Tests and debugging",id:"tests-and-debugging",level:3},{value:"Testing",id:"testing",level:4},{value:"Debugging",id:"debugging",level:4}],u={toc:s};function d(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Cloud Storage Loader is a\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/"},"Dataflow"),"\xa0job which dumps event from an input\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/pubsub/"},"PubSub"),"\xa0subscription into a\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"Cloud Storage"),"\xa0bucket."),(0,a.kt)("h2",{id:"technical-details"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Snowplow-Google-Cloud-Storage-Loader#technical-details"}),"Technical details"),(0,a.kt)("p",null,"Cloud Storage loader is built on top of\xa0",(0,a.kt)("a",{parentName:"p",href:"https://beam.apache.org/"},"Apache Beam"),"\xa0and its Scala wrapper\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spotify/scio"},"SCIO"),"."),(0,a.kt)("p",null,"It groups messages from an input PubSub subscription into configurable windows and write them out to Google Cloud Storage."),(0,a.kt)("p",null,"It also optionally partitions the output by date so that you can easily see what was outputted when in your cloud storage bucket, for example we could see the following hierarchy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gs://bucket/\n--2018\n----10\n------31\n--------18\n--------19\n--------20\n")),(0,a.kt)("p",null,"It can also compress the output data. For now, the supported output compressions are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gzip"),(0,a.kt)("li",{parentName:"ul"},"bz2"),(0,a.kt)("li",{parentName:"ul"},"none")),(0,a.kt)("p",null,"Do note, however, that bz2-compressed data cannot be loaded directly into BigQuery."),(0,a.kt)("p",null,"For now, it only runs on\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/"},"GCP's Dataflow"),"."),(0,a.kt)("h3",{id:"see-also"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Snowplow-Google-Cloud-Storage-Loader#see-also"}),"See also:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow-incubator/snowplow-google-cloud-storage-loader/"},"Repository"))),(0,a.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,a.kt)("h3",{id:"configuration"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#configuration"}),"Configuration"),(0,a.kt)("h4",{id:"cloud-storage-loader-specific-options"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#cloud-storage-loader-specific-options"}),"Cloud Storage Loader specific options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--inputSubscription=String"),"\xa0The Cloud Pub/Sub subscription to read from, formatted as projects/","[","PROJECT","]","/subscriptions/","[","SUB","]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--outputDirectory=String"),"\xa0The Cloud Storage directory to output files to, ends with /"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--outputFilenamePrefix=String"),"\xa0Default: output The Cloud Storage prefix to output files to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--shardTemplate=String"),"\xa0Default: -W-P-SSSSS-of-NNNNN The shard template which will be part of the filenames"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--outputFilenameSuffix=String"),"\xa0Default: .txt The suffix of the filenames written out"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--windowDuration=Int"),"\xa0Default: 5 The window duration in minutes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--compression=String"),"\xa0Default: none The compression used (gzip, bz2 or none), bz2 can't be loaded into BigQuery"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--numShards=int"),"\xa0Default: 1 The maximum number of output shards produced when writing")),(0,a.kt)("h4",{id:"dataflow-options"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#dataflow-options"}),"Dataflow options"),(0,a.kt)("p",null,"To run on Dataflow, Beam Enrich will rely on a set of additional configuration options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--runner=DataFlowRunner"),"\xa0which specifies that we want to run on Dataflow"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--project=[PROJECT]"),", the name of the GCP project"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--streaming=true"),"\xa0to notify Dataflow that we're running a streaming application"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--workerZone=europe-west2-a"),", the zone where the Dataflow nodes (effectively\xa0",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/"},"GCP Compute Engine"),"\xa0nodes) will be launched"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--region=europe-west2"),", the region where the Dataflow job will be launched"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--gcpTempLocation=gs://[BUCKET]/"),", the GCS bucket where temporary files necessary to run the job (e.g. JARs) will be stored")),(0,a.kt)("p",null,"The list of all the options can be found at\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options"},"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options"),"."),(0,a.kt)("h3",{id:"running"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#running"}),"Running"),(0,a.kt)("p",null,"Cloud Storage Loader comes as a ZIP archive, a Docker image or a\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/docs/templates/overview"},"Cloud Dataflow template"),", feel free to choose the one which fits your use case the most."),(0,a.kt)("h4",{id:"template"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#template"}),"Template"),(0,a.kt)("p",null,"You can run Dataflow templates using a variety of means:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the GCP console"),(0,a.kt)("li",{parentName:"ul"},"Using\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"gcloud")),(0,a.kt)("li",{parentName:"ul"},"Using the REST API")),(0,a.kt)("p",null,"Refer to\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/docs/templates/executing-templates"},"the documentation on executing templates"),"\xa0to know more."),(0,a.kt)("p",null,"Here, we provide an example using\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gcloud dataflow jobs run [JOB-NAME] \\\n  --gcs-location gs://sp-hosted-assets/4-storage/snowplow-google-cloud-storage-loader/0.5.0/SnowplowGoogleCloudStorageLoaderTemplate-0.5.0 \\\n  --parameters \\\n    inputSubscription=projects/[PROJECT]/subscriptions/[SUBSCRIPTION],\\\n    outputDirectory=gs://[BUCKET]/YYYY/MM/dd/HH/,\\ # partitions by date\n    outputFilenamePrefix=output,\\ # optional\n    shardTemplate=-W-P-SSSSS-of-NNNNN,\\ # optional\n    outputFilenameSuffix=.txt,\\ # optional\n    windowDuration=5,\\ # optional, in minutes\n    compression=none,\\ # optional, gzip, bz2 or none\n    numShards=1 # optional\n")),(0,a.kt)("h4",{id:"zip-archive"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#zip-archive"}),"ZIP archive"),(0,a.kt)("p",null,"You can find the archive hosted on\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/snowplow-google-cloud-storage-loader/releases/download/0.3.2/snowplow-google-cloud-storage-loader-0.3.2.zip"},"Github"),"."),(0,a.kt)("p",null,"Once unzipped the artifact can be run as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/snowplow-google-cloud-storage-loader \\\n  --runner=DataFlowRunner \\\n  --project=[PROJECT] \\\n  --streaming=true \\\n  --workerZone=europe-west2-a \\\n  --inputSubscription=projects/[PROJECT]/subscriptions/[SUBSCRIPTION] \\\n  --outputDirectory=gs://[BUCKET]/YYYY/MM/dd/HH/ \\ # partitions by date\n  --outputFilenamePrefix=output \\ # optional\n  --shardTemplate=-W-P-SSSSS-of-NNNNN \\ # optional\n  --outputFilenameSuffix=.txt \\ # optional\n  --windowDuration=5 \\ # optional, in minutes\n  --compression=none \\ # optional, gzip, bz2 or none\n  --numShards=1 # optional\n")),(0,a.kt)("p",null,"To display the help message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/snowplow-google-cloud-storage-loader --help\n")),(0,a.kt)("p",null,"To display documentation about Cloud Storage Loader-specific options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/snowplow-google-cloud-storage-loader --help=com.snowplowanalytics.storage.googlecloudstorage.loader.Options\n")),(0,a.kt)("h4",{id:"docker-image"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#docker-image"}),"Docker image"),(0,a.kt)("p",null,"You can find the image in\xa0",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/snowplow/snowplow-google-cloud-storage-loader"},"Docker Hub"),"."),(0,a.kt)("p",null,"A container can be run as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run \\\n  -v $PWD/config:/snowplow/config \\ # if running outside GCP\n  -e GOOGLE_APPLICATION_CREDENTIALS=/snowplow/config/credentials.json \\ # if running outside GCP\n  snowplow/snowplow-google-cloud-storage-loader:0.5.0 \\\n  --runner=DataFlowRunner \\\n  --jobName=[JOB-NAME] \\\n  --project=[PROJECT] \\\n  --streaming=true \\\n  --workerZone=[ZONE] \\\n  --inputSubscription=projects/[PROJECT]/subscriptions/[SUBSCRIPTION] \\\n  --outputDirectory=gs://[BUCKET]/YYYY/MM/dd/HH/ \\ # partitions by date\n  --outputFilenamePrefix=output \\ # optional\n  --shardTemplate=-W-P-SSSSS-of-NNNNN \\ # optional\n  --outputFilenameSuffix=.txt \\ # optional\n  --windowDuration=5 \\ # optional, in minutes\n  --compression=none \\ # optional, gzip, bz2 or none\n  --numShards=1 # optional\n")),(0,a.kt)("p",null,"To display the help message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run snowplow/snowplow-google-cloud-storage-loader:0.5.0 \\\n  --help\n")),(0,a.kt)("p",null,"To display documentation about Cloud Storage Loader-specific options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run snowplow/snowplow-google-cloud-storage-loader:0.5.0 \\\n  --help=com.snowplowanalytics.storage.googlecloudstorage.loader.Options\n")),(0,a.kt)("h4",{id:"additional-information"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#additional-information"}),"Additional information"),(0,a.kt)("p",null,"A full list of all the Beam CLI options can be found at:\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options"},"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options"),"."),(0,a.kt)("h3",{id:"tests-and-debugging"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#tests-and-debugging"}),"Tests and debugging"),(0,a.kt)("h4",{id:"testing"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#testing"}),"Testing"),(0,a.kt)("p",null,"The tests for this codebase can be run with\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"sbt test"),"."),(0,a.kt)("h4",{id:"debugging"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/setting-up-snowplow-google-cloud-storage-loader#debugging"}),"Debugging"),(0,a.kt)("p",null,"You can run the job locally and experiment with its different parts using the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spotify/scio/wiki/Scio-REPL"},"SCIO REPL"),"\xa0by running\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"sbt repl/run"),"."))}d.isMDXComponent=!0}}]);