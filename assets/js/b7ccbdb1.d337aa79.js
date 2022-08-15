"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[38328],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const i={title:"Setup Guide for AWS",date:"2021-12-16",sidebar_position:20},r=void 0,o={unversionedId:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-6/setup-guide-for-aws/index",id:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-6/setup-guide-for-aws/index",title:"Setup Guide for AWS",description:"Overview",source:"@site/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-6/setup-guide-for-aws/index.md",sourceDirName:"migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-6/setup-guide-for-aws",slug:"/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-6/setup-guide-for-aws/",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-6/setup-guide-for-aws/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:20,frontMatter:{title:"Setup Guide for AWS",date:"2021-12-16",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Control Plane API",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-6/control-plane-api/"},next:{title:"Setup Guide for GCP",permalink:"/docsite-poc.github.io/docs/migrated/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-12-6/setup-guide-for-gcp/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"large &amp; xlarge &amp; xxlarge",id:"large--xlarge--xxlarge",level:3},{value:"Security Group",id:"security-group",level:2},{value:"Choose AMI",id:"choose-ami",level:2},{value:"Choose Instance Type",id:"choose-instance-type",level:2},{value:"Configure Instance",id:"configure-instance",level:2},{value:"Add Storage",id:"add-storage",level:2},{value:"Tag Instance",id:"tag-instance",level:2},{value:"Configure Security Group",id:"configure-security-group",level:2},{value:"Review",id:"review",level:2}],u={toc:s};function d(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Snowplow Mini is, in essence, the Snowplow real time stack inside of a single image. It is an easily-deployable, single instance version of Snowplow that serves three use cases:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Giving a Snowplow consumer (e.g. an analyst / data team / marketing team) a way to quickly understand what Snowplow "does" i.e. what you put it at one end and take out of the other'),(0,l.kt)("li",{parentName:"ol"},"Giving developers new to Snowplow an easy way to start with Snowplow and understand how the different pieces fit together"),(0,l.kt)("li",{parentName:"ol"},"Giving people running Snowplow a quick way to debug tracker updates")),(0,l.kt)("p",null,"All setup for Snowplow Mini is done within the AWS Console and will incur small amounts of running costs, depending on the size of the EC2 instance you select."),(0,l.kt)("p",null,"We offer Snowplow Mini in 3 different sizes. To decide on which size of Snowplow Mini to choose, read on."),(0,l.kt)("h3",{id:"large--xlarge--xxlarge"},"large & xlarge & xxlarge"),(0,l.kt)("p",null,"Until ",(0,l.kt)("inlineCode",{parentName:"p"},"0.6.0"),", Snowplow Mini was being used inside AWS\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"t2.medium"),",\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"n1-standard-1"),"\xa0in GCP, instances and it served well for demonstration purposes. However, we observed that Snowplow Mini started exceeding its initial motivation and machine resources started to become an obstacle, causing issues with Elasticsearch etc. This is why, Mini is available at 3 different sizes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"large"),"\xa0: Same image published so far. Elasticsearch has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"4g"),"\xa0heap size and Snowplow apps has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"0.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"8g"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"xlarge"),"\xa0: Double the large image. Elasticsearch has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"8g"),"\xa0heap size and Snowplow apps has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"1.5g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"16g"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"xxlarge"),"\xa0: Double the xlarge image. Elasticsearch has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"16g"),"\xa0heap size and Snowplow apps has\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"3g"),"\xa0heap size. Recommended machine RAM is\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"32g"),".")),(0,l.kt)("p",null,"This service is available as an EC2 image within the AWS Community AMIs in the following regions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"large / t2.large"),(0,l.kt)("th",{parentName:"tr",align:null},"xlarge / t2.xlarge"),(0,l.kt)("th",{parentName:"tr",align:null},"xxlarge / t2.xxlarge"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-009a1d6f3cdc79df5"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0e1b33e69ad45308d"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-05042cb5acccb2431")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-northeast-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0852e34a4eb7d69e6"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0f82892b9c34188f3"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-003aa3243efa14d0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-south-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-08801862338eee4c7"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-02d6fd313305c80a3"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-003fc9a9bbb0fa174")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-southeast-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-09513a918310e5cd1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0b1dccc72081ab134"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-002859e99f439f074")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ap-southeast-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-03cfcbeaabab1d7b6"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-06c7f149a52014601"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-08f67a4cf04fcafe3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ca-central-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0de7a9257cd031eb3"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-055f003317625f128"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-04351978e36a0c26a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-central-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-09d507e6dc940fa21"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0a9c56e19c921dcd9"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-09dbd059d3b447766")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-west-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0bd095d8d349081ca"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0390c713b4961e39a"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-09adc9a332e82b4e7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eu-west-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0f5ec5ae7cc0e41a4"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-020c3bebfe933d861"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0beea426cfa878384")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sa-east-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0668c89191783d5f8"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0644dfec0ea950295"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-00d5126c4ea88c646")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-east-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0325b0c997f6f57ee"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0bd1aac98a20d14dc"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0f3c8b7b623103250")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-east-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0973715ae5d5adb8a"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-03fc97b1a03b7355e"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-00679a0be5a652f93")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-west-1"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-084a75de56b67e759"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-001cb30ba85f72c27"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0a3018e66bdd21e70")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us-west-2"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0cbbe71ea6813bf18"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-0f3b56055fa7bfaf7"),(0,l.kt)("td",{parentName:"tr",align:null},"ami-03031d525cfdc6cdb")))),(0,l.kt)("p",null,"The software stack installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Snowplow Stream Collector NSQ 2.2.1"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Stream Enrich NSQ 2.0.0"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Elasticsearch Loader 1.0.0"),(0,l.kt)("li",{parentName:"ul"},"Snowplow Iglu Server 0.6.1"),(0,l.kt)("li",{parentName:"ul"},"Elasticsearch-OSS 6.8.9"),(0,l.kt)("li",{parentName:"ul"},"Kibana-OSS 6.8.9"),(0,l.kt)("li",{parentName:"ul"},"Postgresql 9.5"),(0,l.kt)("li",{parentName:"ul"},"NSQ v1.2.0")),(0,l.kt)("p",null,"Note: All services are configured to start automatically so everything should happily survive restarts/shutdowns."),(0,l.kt)("p",null,"To understand the flow of data please refer to the following diagram:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"This image has an empty alt attribute; its file name is snowplow-mini-topology.jpg",src:a(12811).Z,width:"1051",height:"686"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IAM")),(0,l.kt)("p",null,"Create a role with the following configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 1: For ",(0,l.kt)("inlineCode",{parentName:"li"},"Select type of trusted entity")," , select ",(0,l.kt)("inlineCode",{parentName:"li"},"EC2")),(0,l.kt)("li",{parentName:"ul"},"Step 2.1: For ",(0,l.kt)("inlineCode",{parentName:"li"},"Attach permissions policies")," , create a policy with the following")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "Version" : "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "s3:GetObject",\n        "logs:CreateLogStream",\n        "logs:PutLogEvents"\n      ],\n      "Resource": ["*"]\n    }\n  ]\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 2.2: In step 2 of role creation, select the policy created in the previous step"),(0,l.kt)("li",{parentName:"ul"},"Step 3: Tags are optional"),(0,l.kt)("li",{parentName:"ul"},"Step 4: Fill in the role name and create it.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CloudWatch")),(0,l.kt)("p",null,"Create a log group named ",(0,l.kt)("inlineCode",{parentName:"p"},"snowplow-mini")," so that Mini can emit logs to this log group."),(0,l.kt)("p",null,"Mini will not function properly if a log group with that name isn't found."),(0,l.kt)("h2",{id:"security-group"},"Security Group"),(0,l.kt)("p",null,"In the EC2 Console UI select\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Security Groups"),"\xa0from the panel on the left."),(0,l.kt)("p",null,"Select the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Create Security Group"),"\xa0button and fill in the name, description and what VPC you want to attach it to."),(0,l.kt)("p",null,"You will then need to add the following InBound rules:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"snowplow-mini-security-group-setup",src:a(53015).Z,width:"1366",height:"768"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (80)"),(0,l.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,l.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (443)"),(0,l.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"0.0.0.0/0")),(0,l.kt)("li",{parentName:"ul"},"SSH (optional):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Custom TCP Rule | Port Range (22)"),(0,l.kt)("li",{parentName:"ul"},"CIDR range\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"{{ YOUR IP HERE }}/32"))))),(0,l.kt)("p",null,"For OutBound you can leave the default to allow everything out."),(0,l.kt)("h2",{id:"choose-ami"},"Choose AMI"),(0,l.kt)("p",null,"In the EC2 Console UI select the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Launch Instance"),"\xa0button then select the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Community AMIs"),"\xa0button. In the search bar enter\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"snowplow-mini-0.12.6"),"\xa0to find the needed AMI and then select it."),(0,l.kt)("h2",{id:"choose-instance-type"},"Choose Instance Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"0.12.6"),"\xa0AMI names explicitly specifies which instance type to use."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.12.6-large"),"\xa0needs\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"t2.large")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.12.6-xlarge"),"\xa0needs\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"t2.xlarge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0.12.6-xxlarge"),"\xa0needs\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"t2.2xlarge"))),(0,l.kt)("h2",{id:"configure-instance"},"Configure Instance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select the IAM role created above.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If you created your Security Group in a different VPC than the default you will need to select the same VPC in the Network field."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE"),": If you select a custom VPC ensure that you select\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Enable"),"\xa0for the Auto-assign Public IP option."),(0,l.kt)("h2",{id:"add-storage"},"Add Storage"),(0,l.kt)("p",null,"Depending on how long you intend to run Snowplow Mini and how much data you intend to send/store you will need to change the size of the block store accordingly."),(0,l.kt)("p",null,"For basic testing and debugging;"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"20-50 Gb should suffice for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"large")),(0,l.kt)("li",{parentName:"ul"},"50-100 Gb should suffice for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"xlarge")),(0,l.kt)("li",{parentName:"ul"},"100-200 Gb should suffice for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"xxlarge"))),(0,l.kt)("p",null,"We also recommend changing the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Volume Type"),"\xa0to GP2 from Magnetic for a smoother experience."),(0,l.kt)("h2",{id:"tag-instance"},"Tag Instance"),(0,l.kt)("p",null,"Add any tags you like here."),(0,l.kt)("h2",{id:"configure-security-group"},"Configure Security Group"),(0,l.kt)("p",null,"Select the Security Group you created in Step 2."),(0,l.kt)("h2",{id:"review"},"Review"),(0,l.kt)("p",null,"Press the\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Launch"),"\xa0button and select an existing key-pair, or create a new one, if you want to be able to SSH into the box."))}d.isMDXComponent=!0},53015:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security-groups-setup-8ceb1ae04baae89e38972cd4a38b0bde.png"},12811:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snowplow-mini-topology-95da73899375d477bfe132b2bcdb0e19.jpg"}}]);