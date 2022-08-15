"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[27050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const s={title:"Install EmrEtlRunner",date:"2020-02-26",sidebar_position:20},a=void 0,i={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/install-emretlrunner/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/install-emretlrunner/index",title:"Install EmrEtlRunner",description:"1\\. Assumptions",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/install-emretlrunner/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/install-emretlrunner",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/install-emretlrunner/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/install-emretlrunner/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/install-emretlrunner/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:20,frontMatter:{title:"Install EmrEtlRunner",date:"2020-02-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Setup EmrEtlRunner (pre-R35)",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/"},next:{title:"Configure EmrEtlRunner",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/setup-emretlrunner/configuring-emretlrunner/"}},l={},p=[{value:"1. Assumptions",id:"1-assumptions",level:2},{value:"2. Dependencies",id:"2-dependencies",level:2},{value:"2.1 Hardware",id:"21-hardware",level:3},{value:"2.2 Software",id:"22-software",level:3},{value:"2.3 EC2 key",id:"23-ec2-key",level:3},{value:"2.4 S3 locations",id:"24-s3-locations",level:3},{value:"3. Installation",id:"3-installation",level:2},{value:"4. Configuration",id:"4-configuration",level:2},{value:"Storage targets",id:"storage-targets",level:3},{value:"Iglu",id:"iglu",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-assumptions"},"1","."," Assumptions"),(0,r.kt)("p",null,"This guide assumes that you have administrator access to a Unix-based server (e.g. Ubuntu, OS X, Fedora) on which you can install EmrEtlRunner and schedule a regular cronjob."),(0,r.kt)("p",null,"You might wish to try out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Setting-up-EC2-instance-for-EmrEtlRunner-and-StorageLoader"},"steps")," showing you how an EC2 instance could be set up via ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cli/"},"AWS CLI"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"In theory EmrEtlRunner can be deployed onto a Windows-based server, using the Windows Task Scheduler instead of cron, but this has not been tested or documented.")),(0,r.kt)("h2",{id:"2-dependencies"},"2","."," Dependencies"),(0,r.kt)("h3",{id:"21-hardware"},"2.1 Hardware"),(0,r.kt)("p",null,"You will need to setup EmrEtlRunner on your own server. A number of people choose to do so on an EC2 instance (thereby keeping all of Snowplow in the Amazon Cloud). If you do so, please note that you ",(0,r.kt)("strong",{parentName:"p"},"must not use a ",(0,r.kt)("inlineCode",{parentName:"strong"},"t1.micro")," instance"),". You should at the very least use an ",(0,r.kt)("inlineCode",{parentName:"p"},"m1.small")," instance."),(0,r.kt)("h3",{id:"22-software"},"2.2 Software"),(0,r.kt)("p",null,"The EmrEtlRunner jar is available for download. For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Hosted-assets"},"Hosted assets")," page."),(0,r.kt)("p",null,"*"," If you prefer, an alternative Ruby manager such as chruby or rbenv should work fine too."),(0,r.kt)("h3",{id:"23-ec2-key"},"2.3 EC2 key"),(0,r.kt)("p",null,"You will also need an ",(0,r.kt)("strong",{parentName:"p"},"EC2 key pair")," setup in your Amazon EMR account."),(0,r.kt)("p",null,"For details on how to do this, please see ",(0,r.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/ElasticMapReduce/latest/DeveloperGuide/EMR_SetUp_KeyPair.html"},"Create a Key Pair"),". Make sure that you setup the EC2 key pair inside the region in which you will be running your ETL jobs."),(0,r.kt)("h3",{id:"24-s3-locations"},"2.4 S3 locations"),(0,r.kt)("p",null,"EmrEtlRunner processes data through three distinct states:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},":enriched")," - This is the location on S3 that the enriched data (outputed by the enricher into the enriched Kinesis stream) is then loaded onto S3. (Specified in the config file deployed in the snowplow-s3-loader.)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},":shredded")," - EmrEtlRunner runs 'RDB Shredder', which 'shreds' the JSONs found in enriched events into a CSV format suitable for loading into dedicated Redshift tables.")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},":enriched:in"),", specify the Amazon S3 path you configured"),(0,r.kt)("p",null,"For all other S3 locations, you can specify paths within a single S3 bucket that you setup now."),(0,r.kt)("p",null,"An example configuration for EmrEtlRunner is given ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/blob/master/3-enrich/emr-etl-runner/config/stream_config.yml.sample"},"here"),"."),(0,r.kt)("p",null,"Done? Right, now we can install EmrEtlRunner."),(0,r.kt)("h2",{id:"3-installation"},"3","."," Installation"),(0,r.kt)("p",null,"We host EmrEtlRunner on the distribution platform ",(0,r.kt)("a",{parentName:"p",href:"https://bintray.com/"},"JFrog Bintray"),". You can get a copy of it as shown below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": follow ",(0,r.kt)("a",{parentName:"p",href:"http://dl.bintray.com/snowplow/snowplow-generic/"},"this link")," to choose your version of the EmrEtlRunner. The distribution name follows the pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow_emr_{{RELEASE_VERSION}}.zip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget http://dl.bintray.com/snowplow/snowplow-generic/snowplow_emr_{{RELEASE_VERSION}}.zip\n")),(0,r.kt)("p",null,"The archive contains both EmrEtlRunner and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/1-Installing-the-StorageLoader"},"StorageLoader"),". Unzip the archive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ unzip snowplow_emr_{{RELEASE_VERSION}}.zip\n")),(0,r.kt)("p",null,"The archive should contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow-emr-etl-runner")," file."),(0,r.kt)("h2",{id:"4-configuration"},"4","."," Configuration"),(0,r.kt)("p",null,"EmrEtlRunner requires a YAML format configuration file to run. There is a configuration file template available in the Snowplow GitHub repository at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/blob/master/3-enrich/emr-etl-runner/config/stream_config.yml.sample"},(0,r.kt)("inlineCode",{parentName:"a"},"/3-enrich/emr-etl-runner/config/stream_config.yml.sample")),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/open-source/section-1/setup-destinations/setup-redshift/setup-emretlrunner/configuring-emretlrunner/"},"Common configuration")," more information on how to write this file."),(0,r.kt)("h3",{id:"storage-targets"},"Storage targets"),(0,r.kt)("p",null,"In order to load Redshift, in addition to configuring the config file described above, it is also necessary to provide a JSON file with the details of the Redshift cluster, database and schema to be loaded. An example is given ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/blob/master/4-storage/config/targets/redshift.json"},"here"),", and provided below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schema": "iglu:com.snowplowanalytics.snowplow.storage/redshift_config/jsonschema/2-1-0",\n    "data": {\n        "name": "AWS Redshift enriched events storage",\n        "host": "ADD HERE",\n        "database": "ADD HERE",\n        "port": 5439,\n        "sslMode": "DISABLE",\n        "username": "ADD HERE",\n        "password": "ADD HERE",\n        "roleArn": "ADD HERE",\n        "schema": "atomic",\n        "maxError": 1,\n        "compRows": 20000,\n        "sshTunnel": null,\n        "purpose": "ENRICHED_EVENTS"\n    }\n}\n')),(0,r.kt)("h3",{id:"iglu"},"Iglu"),(0,r.kt)("p",null,"Lastly, you will also need an Iglu resolver configuration file. This is where we list the schema repositories to use to retrieve JSON Schemas for validation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"iglu_resolver.[json](https://github.com/snowplow/snowplow/blob/master/3-enrich/config/iglu_resolver.json)")," file looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.snowplowanalytics.iglu/resolver-config/jsonschema/1-0-0",\n  "data": {\n    "cacheSize": 500,\n    "repositories": [\n      {\n        "name": "Iglu Central",\n        "priority": 0,\n        "vendorPrefixes": [ "com.snowplowanalytics" ],\n        "connection": {\n          "http": {\n            "uri": "http://iglucentral.com"\n          }\n        }\n      }\n      #custom section starts here --\x3e\n      ,\n      {\n       ...\n      }\n      #custom section ends here <--\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"You must add an extra entr(-y/ies) in the ",(0,r.kt)("inlineCode",{parentName:"p"},"repositories:")," array pointing to your own Iglu schema registry. If you are not submitting custom events and contexts and are not interested in shredding then there's no need in adding the custom section but the ",(0,r.kt)("inlineCode",{parentName:"p"},"iglu_resolver.json")," file is still required and is referenced with ",(0,r.kt)("inlineCode",{parentName:"p"},"--resolver")," option to EmrEtlRunner."),(0,r.kt)("p",null,"For more information on how to customize the ",(0,r.kt)("inlineCode",{parentName:"p"},"iglu_resolver.json")," file, please review the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu/wiki/Iglu-client-configuration"},"Iglu client configuration")," wiki page."))}c.isMDXComponent=!0}}]);