"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[81721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,g=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"RDB Loader 3.0.x",date:"2022-05-27",sidebar_position:10},o=void 0,l={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/rdb-loader-previous-versions/rdb-loader-3-0-x/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/rdb-loader-previous-versions/rdb-loader-3-0-x/index",title:"RDB Loader 3.0.x",description:"An example of the minimal required config for the Redshift loader can be found here and a more detailed one here.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/rdb-loader-previous-versions/rdb-loader-3-0-x/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/rdb-loader-previous-versions/rdb-loader-3-0-x",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/rdb-loader-previous-versions/rdb-loader-3-0-x/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/rdb-loader-previous-versions/rdb-loader-3-0-x/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/rdb-loader-previous-versions/rdb-loader-3-0-x/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:10,frontMatter:{title:"RDB Loader 3.0.x",date:"2022-05-27",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"RDB Loader Previous Versions",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/loading-transformed-data/rdb-loader-configuration-reference/rdb-loader-previous-versions/"},next:{title:"Previous versions",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/"}},d={},s=[{value:"<strong>Redshift Loader</strong> <code>storage</code> <strong>section</strong>",id:"redshift-loader-storage-section",level:2},{value:"<strong>Snowflake Loader</strong> <code>storage</code> <strong>section</strong>",id:"snowflake-loader-storage-section",level:2},{value:"<strong>Common loader settings</strong>",id:"common-loader-settings",level:2},{value:"<strong>Common monitoring settings</strong>",id:"common-monitoring-settings",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An example of the minimal required config for the Redshift loader can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/redshift.config.minimal.hocon"},"here")," and a more detailed one ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/redshift.config.reference.hocon"},"here"),"."),(0,r.kt)("p",null,"An example of the minimal required config for the Snowflake loader can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/snowflake.config.minimal.hocon"},"here")," and a more detailed one ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/snowflake.config.reference.hocon"},"here"),"."),(0,r.kt)("p",null,"Both applications use a common module for core functionality, so only the ",(0,r.kt)("inlineCode",{parentName:"p"},"storage")," sections are different in their config."),(0,r.kt)("p",null,"This is a complete list of the options that can be configured:"),(0,r.kt)("h2",{id:"redshift-loader-storage-section"},(0,r.kt)("strong",{parentName:"h2"},"Redshift Loader")," ",(0,r.kt)("inlineCode",{parentName:"h2"},"storage")," ",(0,r.kt)("strong",{parentName:"h2"},"section")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The only valid value is the default: ",(0,r.kt)("inlineCode",{parentName:"td"},"redshift"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Host name of Redshift cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Port of Redshift cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Redshift database which the data will be loaded to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"roleArn")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. AWS Role ARN allowing Redshift to load data from S3.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Redshift schema name, eg \u201catomic\u201d.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. DB user with permissions to load data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Password of DB user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"maxError")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Configures the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/redshift/latest/dg/copy-parameters-data-load.html#copy-maxerror"},"Redshift MAXERROR load option"),". The default is 10.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Custom JDBC configuration. The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},'{"ssl": true}'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.BlockingRowsMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.DisableIsValidQuery")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.DSILogLevel")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.FilterLevel")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.loginTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.loglevel")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.socketTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.ssl")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.sslMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.sslRootCert")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.tcpKeepAlive")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc.TCPKeepAliveMinutes")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Refer to the ",(0,r.kt)("a",{parentName:"td",href:"https://s3.amazonaws.com/redshift-downloads/drivers/jdbc/1.2.54.1082/Amazon+Redshift+JDBC+Connector+Install+Guide.pdf"},"Redshift JDBC driver reference"),".")))),(0,r.kt)("h2",{id:"snowflake-loader-storage-section"},(0,r.kt)("strong",{parentName:"h2"},"Snowflake Loader")," ",(0,r.kt)("inlineCode",{parentName:"h2"},"storage")," ",(0,r.kt)("strong",{parentName:"h2"},"section")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The only valid value is the default: ",(0,r.kt)("inlineCode",{parentName:"td"},"snowflake"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"snowflakeRegion")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. AWS Region used by Snowflake to access its endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Snowflake user with necessary role granted to load data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Snowflake role with permission to load data. If it is not provided, the default role in Snowflake will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Password of the Snowflake user. Can be plain text, or read from the EC2 parameter store (see below).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password.ec2ParameterStore.parameterName")),(0,r.kt)("td",{parentName:"tr",align:null},"Alternative way for passing in the user password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"account")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Target Snowflake account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"warehouse")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Snowflake warehouse which the SQL statements submitted by Snowflake Loader will run on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Snowflake database which the data will be loaded to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Target schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transformedStage")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. Snowflake stage for transformed events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"folderMonitoringStage")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders")," section is configured. Snowflake stage to load folder monitoring entries into temporary Snowflake table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appName")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Name passed as 'application' property while creating Snowflake connection. The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"Snowplow_OSS"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"maxError")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. A table copy statement will skip an input file when the number of errors in it exceeds the specified number. This setting is used during initial loading and thus can filter out only invalid JSONs (which is impossible situation if used with Transformer).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbcHost")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Host for the JDBC driver that has priority over automatically derived hosts. If it is not given, host will be created automatically according to given ",(0,r.kt)("inlineCode",{parentName:"td"},"snowflakeRegion"),".")))),(0,r.kt)("h2",{id:"common-loader-settings"},(0,r.kt)("strong",{parentName:"h2"},"Common loader settings")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"region")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional if it can be resolved with ",(0,r.kt)("a",{parentName:"td",href:"https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/regions/providers/DefaultAwsRegionProviderChain.html"},"AWS region provider chain"),". AWS region of the S3 bucket.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"messageQueue")),(0,r.kt)("td",{parentName:"tr",align:null},"Required. The name of the SQS queue used by the transformer and loader to communicate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jsonpaths")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. An S3 URI that holds JSONPath files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schedules.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Periodic schedules to stop loading, eg for Redshift maintenance window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schedules.noOperation.[*]")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"schedules")," section is configured. Array of objects which specifies no-operation windows.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schedules.noOperation.[*].name")),(0,r.kt)("td",{parentName:"tr",align:null},"Human-readable name of the no-op window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schedules.noOperation.[*].when")),(0,r.kt)("td",{parentName:"tr",align:null},"Cron expression with second granularity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schedules.noOperation.[*].duration")),(0,r.kt)("td",{parentName:"tr",align:null},"For how long the loader should be paused.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retryQueue.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Additional backlog of recently failed folders that could be automatically retried. Retry queue saves a failed folder and then re-reads the info from ",(0,r.kt)("inlineCode",{parentName:"td"},"shredding_complete")," S3 file. (Despite the legacy name of the message, which is required for backward compatibility, this also works with wide row format data.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retryQueue.period")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"retryQueue")," section is configured. How often batch of failed folders should be pulled into a discovery queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retryQueue.size")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"retryQueue")," section is configured. How many failures should be kept in memory. After the limit is reached new failures are dropped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retryQueue.maxAttempts")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"retryQueue")," section is configured. How many attempts to make for each folder. After the limit is reached new failures are dropped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retryQueue.interval")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"retryQueue")," section is configured. Artificial pause after each failed folder being added to the queue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retries.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Unlike ",(0,r.kt)("inlineCode",{parentName:"td"},"retryQueue")," these retries happen immediately, without proceeding to another message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retries.backoff")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"retries")," section is configured. Starting backoff period, eg '30 seconds'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retries.strategy")),(0,r.kt)("td",{parentName:"tr",align:null},"The only possible value is ",(0,r.kt)("inlineCode",{parentName:"td"},"EXPONENTIAL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retries.attempts")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. How many attempts to make before sending the message into retry queue. If missing, ",(0,r.kt)("inlineCode",{parentName:"td"},"cumulativeBound")," will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retries.cumulativeBound")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. When backoff reaches this delay, eg '1 hour', the loader will stop retrying. If both this and ",(0,r.kt)("inlineCode",{parentName:"td"},"attempts")," are not set, the loader will retry indefinitely.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeouts.loading")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. How long, eg '1 hour', ",(0,r.kt)("inlineCode",{parentName:"td"},"COPY")," statement execution can take before considering Redshift unhealthy. If no progress (ie, moving to a different subfolder) within this period, the loader will abort the transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeouts.nonLoading")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. How long, eg '10 mins', non-loading steps such as ",(0,r.kt)("inlineCode",{parentName:"td"},"ALTER TABLE")," can take before considering Redshift unhealthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeouts.sqsVisibility")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. The time window in which a message must be acknowledged. Otherwise it is considered abandoned. If a message has been pulled, but hasn't been acked, the time before it is again available to consumers is equal to this, eg '5 mins'. Another consequence is that if the loader has failed on processing a message, the next time it will get this (or anything) from the queue has this delay.")))),(0,r.kt)("h2",{id:"common-monitoring-settings"},(0,r.kt)("strong",{parentName:"h2"},"Common monitoring settings")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.webhook.endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. An HTTP endpoint where monitoring alerts should be sent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.webhook.tags")),(0,r.kt)("td",{parentName:"tr",align:null},'Optional. Custom key-value pairs which can be added to the monitoring webhooks. Eg, {"tag1": "label1"}.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.snowplow.appId")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. When using Snowplow tracking, set this ",(0,r.kt)("inlineCode",{parentName:"td"},"appId")," in the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.snowplow.collector")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Set to a collector URL to turn on Snowplow tracking.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.sentry.dsn")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. For tracking runtime exceptions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.metrics.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Send metrics to a StatsD server or stdout.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.metrics.statsd.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. For sending loading metrics (latency and event counts) to a StatsD server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.metrics.statsd.hostname")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.metrics.statsd")," section is configured. The host name of the StatsD server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.metrics.statsd.port")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.metrics.statsd")," section is configured. Port of the StatsD server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.metrics.statsd.tags")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Tags which are used to annotate the StatsD metric with any contextual information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.metrics.statsd.prefix")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Configures the prefix of StatsD metric names. The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"snoplow.rdbloader"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.metrics.stdout.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. For sending metrics to stdout.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.metrics.stdout.prefix")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Overrides the default metric prefix.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Configuration for periodic unloaded / corrupted folders checks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders.staging")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders")," section is configured. Path where loader could store auxiliary logs for folder monitoring. Loader should be able to write here, storage target should be able to load from here.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders.period")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders")," section is configured. How often to check for unloaded / corrupted folders.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders.since")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Specifies from when folder monitoring will start to monitor. Note that this is a duration, eg ",(0,r.kt)("inlineCode",{parentName:"td"},"7 days"),", relative to when the loader is launched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders.until")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Specifies until when folder monitoring will monitor. Note that this is a duration, eg ",(0,r.kt)("inlineCode",{parentName:"td"},"7 days"),", relative to when the loader is launched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders.transformerOutput")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders")," section is configured. Path to transformed archive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders.failBeforeAlarm")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.folders")," section is configured. How many times the check can fail before generating an alarm. Within the specified tolerance, failures will log a ",(0,r.kt)("inlineCode",{parentName:"td"},"WARNING")," instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.healthCheck.*")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Periodic DB health check, raising a warning if DB hasn't responded to ",(0,r.kt)("inlineCode",{parentName:"td"},"SELECT 1"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.healthCheck.frequency")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.healthCheck")," section is configured. How often to run a periodic DB health check.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.healthCheck.timeout")),(0,r.kt)("td",{parentName:"tr",align:null},"Required if ",(0,r.kt)("inlineCode",{parentName:"td"},"monitoring.healthCheck")," section is configured. How long to wait for a health check response.")))))}m.isMDXComponent=!0}}]);