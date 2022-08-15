"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[37571],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),h=i,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||r;return t?o.createElement(d,a(a({ref:n},s),{},{components:t})):o.createElement(d,a({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=t(87462),i=(t(67294),t(3905));const r={title:"(deprecated) Beam Enrich",date:"2020-11-09",sidebar_position:0},a=void 0,p={unversionedId:"migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/index",id:"migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/index",title:"(deprecated) Beam Enrich",description:"Beam Enrich is built on top of\xa0Apache Beam and it runs on\xa0GCP's Dataflow. It can be run from anywhere, as long as it can communicate with Dataflow and have enough permissions to create a Dataflow job. For example, run it as a Kubernetes job or from a Compute Engine instance.",source:"@site/docs/migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/index.md",sourceDirName:"migrated/pipeline-components-and-applications/enrichment-components/beam-enrich",slug:"/migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:0,frontMatter:{title:"(deprecated) Beam Enrich",date:"2020-11-09",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Enrichment",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/"},next:{title:"enrich-pubsub (GCP) and enrich-kinesis (AWS)",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/enrichment-components/enrich-pubsub/"}},c={},l=[{value:"Run Beam Enrich",id:"run-beam-enrich",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Beam Enrich specific options",id:"beam-enrich-specific-options",level:3},{value:"Dataflow options",id:"dataflow-options",level:3}],s={toc:l};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Beam Enrich is built on top of\xa0",(0,i.kt)("a",{parentName:"p",href:"https://beam.apache.org/"},"Apache Beam")," and it runs on\xa0",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/"},"GCP's Dataflow"),". It can be run from anywhere, as long as it can communicate with Dataflow and have enough permissions to create a Dataflow job. For example, run it as a ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/"},"Kubernetes")," job or from a ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/"},"Compute Engine")," instance."),(0,i.kt)("h2",{id:"run-beam-enrich"},"Run Beam Enrich"),(0,i.kt)("p",null,"Beam Enrich is published ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/snowplow/beam-enrich"},"on Docker Hub"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull snowplow/beam-enrich:2.0.5\n")),(0,i.kt)("p",null,"The docker container can be run with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run \\\n  -v $PWD/config:/snowplow/config \\\n  -e GOOGLE_APPLICATION_CREDENTIALS=/snowplow/config/credentials.json \\ # if running outside GCP\n  snowplow/beam-enrich:latest \\\n  --runner=DataFlowRunner \\\n  --project=project-id \\\n  --streaming=true \\\n  --zone=europe-west2-a \\\n  --gcpTempLocation=gs://location/ \\\n  --job-name=beam-enrich \\\n  --raw=projects/project/subscriptions/raw-topic-subscription \\\n  --enriched=projects/project/topics/enriched-topic \\\n  --bad=projects/project/topics/bad-topic \\\n  --pii=projects/project/topics/pii-topic \\\n  --resolver=/snowplow/config/iglu_resolver.json \\\n  --enrichments=/snowplow/config/enrichments\n")),(0,i.kt)("p",null,"Alternatively, you can download and run\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/enrich/releases"},"a jar file from the github release"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar beam-enrich-2.0.5.jar \\\n  -runner=DataFlowRunner \\\n  --project=project-id \\\n  --streaming=true \\\n  --zone=europe-west2-a \\\n  --gcpTempLocation=gs://location/ \\\n  --job-name=beam-enrich \\\n  --raw=projects/project/subscriptions/raw-topic-subscription \\\n  --enriched=projects/project/topics/enriched-topic \\\n  --bad=projects/project/topics/bad-topic \\\n  --pii=projects/project/topics/pii-topic \\\n  --resolver=/snowplow/config/iglu_resolver.json \\\n  --enrichments=/snowplow/config/enrichments\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration",(0,i.kt)("a",{parentName:"h2",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/setting-up-beam-enrich/#configuration"})),(0,i.kt)("h3",{id:"beam-enrich-specific-options"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/setting-up-beam-enrich#beam-enrich-specific-options"}),"Beam Enrich specific options",(0,i.kt)("a",{parentName:"h3",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/setting-up-beam-enrich/#beam-enrich-specific-options"})),(0,i.kt)("p",null,"Beam Enrich comes with a set of predefined CLI options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--job-name"),", the name of the job as it will appear in the Dataflow console"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--raw=projects/{project}/subscriptions/{raw-topic-subscription}"),"\xa0which describes the input PubSub subscription Beam Enrich will consume from"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--enriched=projects/{project}/topics/{enriched-topic}"),"\xa0which is the PubSub topic the successfully enriched events will be sinked to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--bad=projects/{project}/topics/{bad-topic}"),", the PubSub topic where events that have failed enrichment will end up"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--pii=projects/{project}/topics/{pii-topic}"),", the PubSub topic where events resulting from the PII enrichment will end up, optional"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--resolver=iglu_resolver.json"),", the necessary Iglu resolver to lookup the schemas in your data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--enrichments=enrichments"),"\xa0the optional directory containing the enrichments that need to be performed")),(0,i.kt)("p",null,"It\u2019s important to note that every enrichment relying on local files will need to have the necessary files stored in\xa0",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"Google Cloud Storage"),", e.g. the IP lookups enrichment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.snowplow/ip_lookups/jsonschema/2-0-0",\n  "data": {\n    "name": "ip_lookups",\n    "vendor": "com.snowplowanalytics.snowplow",\n    "enabled": true,\n    "parameters": {\n      "geo": {\n        "database": "GeoLite2-City.mmdb",\n        "uri": "gs://gcs-bucket/maxmind"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"dataflow-options"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/setting-up-beam-enrich#dataflow-options"}),"Dataflow options",(0,i.kt)("a",{parentName:"h3",href:"/docs/migrated/pipeline-components-and-applications/enrichment-components/beam-enrich/setting-up-beam-enrich/#dataflow-options"})),(0,i.kt)("p",null,"To run on Dataflow, Beam Enrich will rely on a set of additional configuration options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--runner=DataFlowRunner"),"\xa0which specifies that we want to run on Dataflow"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--project={project}"),", the name of the GCP project"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--streaming=true"),"\xa0to notify Dataflow that we\u2019re running a streaming application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--zone=europe-west2-a"),", the zone where the Dataflow nodes (effectively\xa0",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/"},"GCP Compute Engine"),"\xa0nodes) will be launched"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--region=europe-west2"),", the region where the Dataflow job will be launched"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--gcpTempLocation=gs://location/"),", the GCS bucket where temporary files necessary to run the job (e.g. JARs) will be stored")),(0,i.kt)("p",null,"The list of all the options can be found at\xa0",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options"},"https://cloud.google.com/dataflow/pipelines/specifying-exec-params#setting-other-cloud-pipeline-options"),"."))}m.isMDXComponent=!0}}]);