"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[54200],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=p(a),u=r,m=f["".concat(i,".").concat(u)]||f[u]||c[u]||n;return a?o.createElement(m,l(l({ref:t},d),{},{components:a})):o.createElement(m,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}f.displayName="MDXCreateElement"},35297:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=a(87462),r=(a(67294),a(3905));const n={title:"Snowflake loader",date:"2022-04-05",sidebar_position:20},l=void 0,s={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader/index",title:"Snowflake loader",description:"There are two ways to set up the necessary Snowflake resources and run the loader:",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/snowflake-loader/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:20,frontMatter:{title:"Snowflake loader",date:"2022-04-05",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Redshift loader",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/redshift-loader/"},next:{title:"Databricks loader",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/databricks-loader/"}},i={},p=[{value:"Using the Terraform modules",id:"using-the-terraform-modules",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Usage",id:"usage",level:3},{value:"Manual setup and deployment",id:"manual-setup-and-deployment",level:2},{value:"Setting up Snowflake",id:"setting-up-snowflake",level:3},{value:"Creating Snowflake stage for transformed events",id:"creating-snowflake-stage-for-transformed-events",level:4},{value:"Downloading the artefact",id:"downloading-the-artefact",level:3},{value:"Configuring <code>rdb-loader-snowflake</code>",id:"configuring-rdb-loader-snowflake",level:3},{value:"Running the Snowflake loader",id:"running-the-snowflake-loader",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are two ways to set up the necessary Snowflake resources and run the loader:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using our dedicated open source Terraform modules to create the resources and deploy the loader on EC2"),(0,r.kt)("li",{parentName:"ul"},"creating the resources and running the application manually.")),(0,r.kt)("p",null,"We recommend the first way."),(0,r.kt)("h2",{id:"using-the-terraform-modules"},"Using the Terraform modules"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Terraform >= 1.0.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://registry.terraform.io/modules/snowplow-devops/target/snowflake/latest"},(0,r.kt)("inlineCode",{parentName:"a"},"terraform-snowflake-target")," module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://registry.terraform.io/modules/snowplow-devops/snowflake-loader-setup/aws/latest"},(0,r.kt)("inlineCode",{parentName:"a"},"terraform-aws-snowflake-loader-setup")," module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://registry.terraform.io/modules/snowplow-devops/snowflake-loader-ec2/aws/latest"},(0,r.kt)("inlineCode",{parentName:"a"},"terraform-aws-snowflake-loader-ec2")," module"))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform-snowflake-target")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform-aws-snowflake-loader-setup")," modules create the necessary Snowflake resources to run the loader. The outputs of these modules become inputs to the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform-aws-snowflake-loader-ec2")," module."),(0,r.kt)("p",null,"Stitching these modules together is described ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow-devops/terraform-aws-snowflake-loader-ec2/blob/master/README.md"},"here"),"."),(0,r.kt)("p",null,"We also have full pipeline deployment examples ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/quickstart-examples"},"here"),", including a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/quickstart-examples/tree/main/terraform/aws/pipeline/secure/snowflake"},"deployment example")," for a pipeline with Snowflake as destination. This lets you see how all the Terraform modules are used in a full pipeline deployment."),(0,r.kt)("h2",{id:"manual-setup-and-deployment"},"Manual setup and deployment"),(0,r.kt)("h3",{id:"setting-up-snowflake"},"Setting up Snowflake"),(0,r.kt)("p",null,"The following resources need to be created:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Snowflake loader ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/sql/create-user.html"},"user")),(0,r.kt)("li",{parentName:"ul"},"Snowflake loader ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/sql/create-role.html"},"role")),(0,r.kt)("li",{parentName:"ul"},"Snowflake ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/sql/create-warehouse.html"},"warehouse")),(0,r.kt)("li",{parentName:"ul"},"Snowflake ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/sql/create-database.html"},"database")),(0,r.kt)("li",{parentName:"ul"},"Snowflake ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/sql/create-schema.html"},"schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"events")," table in the same schema (see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/modules/snowflake-loader/src/main/resources/atomic-def.sql"},"here")," for the schema)"),(0,r.kt)("li",{parentName:"ul"},"Snowflake ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/sql/create-storage-integration.html"},"storage integration")),(0,r.kt)("li",{parentName:"ul"},"Snowflake ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/sql/create-file-format.html"},"file format")),(0,r.kt)("li",{parentName:"ul"},"Snowflake ",(0,r.kt)("a",{parentName:"li",href:"https://docs.snowflake.com/en/sql-reference/sql/create-stage.html"},"stage")," to load transformed events.")),(0,r.kt)("h4",{id:"creating-snowflake-stage-for-transformed-events"},"Creating Snowflake stage for transformed events"),(0,r.kt)("p",null,"The Snowflake stage is the most complicated one to create from the resources listed above."),(0,r.kt)("p",null,"To create a Snowflake stage, you need a Snowflake database, Snowflake schema, Snowflake storage integration, Snowflake file format, and the S3 path to the transformed events bucket."),(0,r.kt)("p",null,"You can follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-load-s3-config-storage-integration.html"},"this tutorial")," to create the storage integration."),(0,r.kt)("p",null,"Assuming you created the other required resources for it, you can create the Snowflake stage by following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/sql/create-stage.html"},"this document"),"."),(0,r.kt)("h3",{id:"downloading-the-artefact"},"Downloading the artefact"),(0,r.kt)("p",null,"The asset is published as a jar file attached to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/releases"},"Github release notes")," for each version."),(0,r.kt)("p",null,"It's also available as a Docker image on Docker Hub under ",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow/rdb-loader-snowflake:4.2.0"),"."),(0,r.kt)("h3",{id:"configuring-rdb-loader-snowflake"},"Configuring ",(0,r.kt)("inlineCode",{parentName:"h3"},"rdb-loader-snowflake")),(0,r.kt)("p",null,"The loader takes two configuration files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"config.hocon")," file with application settings"),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"iglu_resolver.json")," file with the resolver configuration for your ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu"},"Iglu")," schema registry.")),(0,r.kt)("p",null,"An example of the minimal required config for the Snowflake loader can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/snowflake.config.minimal.hocon"},"here")," and a more detailed one ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/snowflake.config.reference.hocon"},"here"),". For details about each setting, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/"},"configuration reference"),"."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"here")," for details on how to prepare the Iglu resolver file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," All self-describing schemas for events processed by RDB Loader ",(0,r.kt)("strong",{parentName:"p"},"must")," be hosted on ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},"Iglu Server")," 0.6.0 or above. ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/"},"Iglu Central")," is a registry containing Snowplow-authored schemas. If you want to use them alongside your own, you will need to add it to your resolver file. Keep it mind that it could override your own private schemas if you give it higher priority. For details on this see ",(0,r.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/important-changes-to-iglu-centrals-api-for-schema-lists/5720#how-will-this-affect-my-snowplow-pipeline-3"},"here"),"."),(0,r.kt)("h3",{id:"running-the-snowflake-loader"},"Running the Snowflake loader"),(0,r.kt)("p",null,"The two config files need to be passed in as base64-encoded strings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ docker run snowplow/rdb-loader-snowflake:4.2.0 \\\n  --iglu-config $RESOLVER_BASE64 \\\n  --config $CONFIG_BASE64\n")))}c.isMDXComponent=!0}}]);