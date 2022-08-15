"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[21590],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),g=r,w=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return o?n.createElement(w,s(s({ref:t},p),{},{components:o})):n.createElement(w,s({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},26874:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={title:"Installing the Elasticsearch Loader",date:"2020-02-26",sidebar_position:10},s=void 0,i={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/installing-the-elasticsearch-loader/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/installing-the-elasticsearch-loader/index",title:"Installing the Elasticsearch Loader",description:"Getting started",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/installing-the-elasticsearch-loader/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/installing-the-elasticsearch-loader",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/installing-the-elasticsearch-loader/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/installing-the-elasticsearch-loader/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:10,frontMatter:{title:"Installing the Elasticsearch Loader",date:"2020-02-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Configuring Elasticsearch",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/configuring-elasticsearch/"},next:{title:"Using the Elasticsearch Loader",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/elastic/using-the-elasticsearch-loader/"}},l={},c=[{value:"Getting started",id:"getting-started",level:3},{value:"Downloading the jarfile",id:"downloading-the-jarfile",level:3},{value:"Compiling from source",id:"compiling-from-source",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"You can choose to either:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the Elasticsearch Loader jarfile, ",(0,r.kt)("em",{parentName:"li"},"or:")),(0,r.kt)("li",{parentName:"ol"},"Compile it from source")),(0,r.kt)("h3",{id:"downloading-the-jarfile"},"Downloading the jarfile"),(0,r.kt)("p",null,"To get a local copy, you can download the executable jarfile directly from our Hosted Assets bucket on Amazon S3 - please see our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Hosted-assets"},"Hosted assets")," page for details."),(0,r.kt)("h3",{id:"compiling-from-source"},"Compiling from source"),(0,r.kt)("p",null,"Alternatively, you can build it from the source files. To do so, you will need ",(0,r.kt)("a",{parentName:"p",href:"https://www.scala-lang.org"},"scala")," and ",(0,r.kt)("a",{parentName:"p",href:"http://www.scala-sbt.org"},"sbt")," installed."),(0,r.kt)("p",null,"To do so, clone the Elasticsearch loader repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/snowplow/snowplow-elasticsearch-loader.git\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"sbt")," to resolve dependencies, compile the source, and build a fat JAR file with all dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ sbt "project http" assembly # if you want to use the HTTP API compatible with every ES versions.\n$ sbt "project tcp" assembly # if you want to use the transport API with a 5.x cluster\n$ sbt "project tcp2x" assembly # if you want to use the transport API with a 2.x cluster\n')),(0,r.kt)("p",null,"You will then find the fat jar in the corresponding directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"{http,tcp,tcp2x}/target/scala-2.11/snowplow-elasticsearch-loader-{http,tcp,tcp-2x}-0.10.0.jar"),". It is now ready to be deployed."))}d.isMDXComponent=!0}}]);