"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[32503],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return t?i.createElement(g,r(r({ref:n},d),{},{components:t})):i.createElement(g,r({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12009:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(87462),o=(t(67294),t(3905));const a={title:"Setting up Piinguin",date:"2021-03-26",sidebar_position:0},r=void 0,l={unversionedId:"pipeline-components-and-applications/piinguin/setting-up-piinguin/index",id:"pipeline-components-and-applications/piinguin/setting-up-piinguin/index",title:"Setting up Piinguin",description:"Both the Piinguin Server and the Piinguin Relay are currently only targeting AWS and they should be deployed in the same VPC.",source:"@site/docs/pipeline-components-and-applications/piinguin/setting-up-piinguin/index.md",sourceDirName:"pipeline-components-and-applications/piinguin/setting-up-piinguin",slug:"/pipeline-components-and-applications/piinguin/setting-up-piinguin/",permalink:"/docs/pipeline-components-and-applications/piinguin/setting-up-piinguin/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/piinguin/setting-up-piinguin/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:0,frontMatter:{title:"Setting up Piinguin",date:"2021-03-26",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Piinguin",permalink:"/docs/pipeline-components-and-applications/piinguin/"},next:{title:"Piinguin technical documentation",permalink:"/docs/pipeline-components-and-applications/piinguin/piinguin-technical-documentation/"}},p={},s=[{value:"Deploying piinguin",id:"deploying-piinguin",level:2},{value:"Piinguin deployment environment",id:"piinguin-deployment-environment",level:3},{value:"Deploying relay",id:"deploying-relay",level:2},{value:"Relay deployment environment",id:"relay-deployment-environment",level:3}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Both the Piinguin Server and the Piinguin Relay are currently only targeting AWS and they should be deployed in the same VPC."),(0,o.kt)("h2",{id:"deploying-piinguin"},"Deploying piinguin"),(0,o.kt)("p",null,"The simplest way to deploy Piinguin Server is to obtain the docker image by running the following on your docker host: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run snowplow/piinguin-server:0.1.1")," This will run the server on the default port ",(0,o.kt)("inlineCode",{parentName:"p"},"8080")," and will use the default DynamoDB table ",(0,o.kt)("inlineCode",{parentName:"p"},"piinguin"),". Both are configurable to other values using ",(0,o.kt)("inlineCode",{parentName:"p"},"PIINGUIN_PORT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PIINGUIN_DYNAMODB_TABLE"),", if needed. See the relevant ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-docker/tree/develop/piinguin-server"},"readme")," for more information."),(0,o.kt)("h3",{id:"piinguin-deployment-environment"},"Piinguin deployment environment"),(0,o.kt)("p",null,"As stated before, both the Relay and the Server need to reside in the same VPC. in addition the docker host needs to have sufficient access from IAM to run. You should create a service role and attach policies that will permit it to run following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-service.html"},"this guide"),"."),(0,o.kt)("p",null,"As the server writes its data to DynamoDB its will need to have access to it with a policy document such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "dynamodb:DeleteItem",\n                "dynamodb:GetItem",\n                "dynamodb:PutItem",\n                "dynamodb:Scan",\n                "dynamodb:UpdateItem"\n            ],\n            "Resource": "arn:aws:dynamodb:<region>:<account-id>:table/<table-name>"\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"deploying-relay"},"Deploying relay"),(0,o.kt)("p",null,"You can obtain the relay artifact from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Hosted-assets"},"our S3 public assets buckets")," appropriate for your region. In order for you to create an AWS Lambda function, please follow the detailed ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"},"developer guide"),". When you are creating the Lambda, you will need to specify as trigger the AWS Kinesis stream that contains your PII data. In addition you will need to have the VPC id where you are running the Piinguin Server and provide that in the form too. Finally in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment variables")," section you will need to add the PIINGUIN","_","HOST, PIINGUIN","_","PORT and PIINGUIN","_","TIMEOUT","_","SEC. The PIINGUIN","_","TIMEOUT","_","SEC value should be lower than the AWS Lambda timeout in order to get a meaningful error message if the client times out while communicating with the server. Here is an example of that configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PIINGUIN_HOST        = ec2-1-2-3-4.eu-west-1.compute.amazonaws.com\nPIINGUIN_PORT        = 8080\nPIINGUIN_TIMEOUT_SEC = 10\n")),(0,o.kt)("h3",{id:"relay-deployment-environment"},"Relay deployment environment"),(0,o.kt)("p",null,"As stated before, both the Relay and the Server need to reside in the same VPC. in addition the lambda needs to have sufficient access from IAM to run. You should create a service role and attach policies that will permit it to run following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-service.html"},"this guide"),". As all Lambda functions it needs to have permission to send its output to CloudWatch Logs so and example IAM policy that permits that is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "logs:CreateLogGroup",\n            "Resource": "arn:aws:logs:<region>:<account-id>:*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "logs:CreateLogStream",\n                "logs:PutLogEvents"\n            ],\n            "Resource": [\n                "arn:aws:logs:<region>:<account-id>:log-group:/aws/lambda/piinguin-relay:*"\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"As the Lambda will be reading its data form Kinesis it will also need to have permissions to do that with a policy document such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "kinesis:*",\n            "Resource": [\n                "arn:aws:kinesis:<region>:<account-id>:stream/<pii-events-stream-name>"\n            ]\n        }\n    ]\n}\n')))}u.isMDXComponent=!0}}]);