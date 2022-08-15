"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[71142],{3905:(e,r,o)=>{o.d(r,{Zo:()=>l,kt:()=>g});var n=o(67294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function s(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?s(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=n.createContext({}),p=function(e){var r=n.useContext(d),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},l=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var o=e.components,t=e.mdxType,s=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(o),g=t,m=c["".concat(d,".").concat(g)]||c[g]||u[g]||s;return o?n.createElement(m,a(a({ref:r},l),{},{components:o})):n.createElement(m,a({ref:r},l))}));function g(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=o.length,a=new Array(s);a[0]=c;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var p=2;p<s;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},7984:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=o(87462),t=(o(67294),o(3905));const s={title:"2.0.0 Upgrade Guide",date:"2021-12-01",sidebar_position:-10},a=void 0,i={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/2-0-0-upgrade-guide/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/2-0-0-upgrade-guide/index",title:"2.0.0 Upgrade Guide",description:"RDB Loader 2.0.0 brings ability to send shredding complete messages from Shredder to SNS topic and splits configs of RDB Loader and RDB Shredder. From now on, Loader and Shredder will not use same config.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/2-0-0-upgrade-guide/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/2-0-0-upgrade-guide",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/2-0-0-upgrade-guide/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/2-0-0-upgrade-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/2-0-0-upgrade-guide/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:-10,frontMatter:{title:"2.0.0 Upgrade Guide",date:"2021-12-01",sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"Upgrade Guides",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/"},next:{title:"1.2.0 Upgrade Guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/"}},d={},p=[{value:"Assets",id:"assets",level:2},{value:"Sending shredding complete messages from Shredder to SNS",id:"sending-shredding-complete-messages-from-shredder-to-sns",level:2},{value:"New separate configs",id:"new-separate-configs",level:2}],l={toc:p};function u(e){let{components:r,...o}=e;return(0,t.kt)("wrapper",(0,n.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"RDB Loader 2.0.0 brings ability to send shredding complete messages from Shredder to SNS topic and splits configs of RDB Loader and RDB Shredder. From now on, Loader and Shredder will not use same config."),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/snowplow-rdb-loader-2-0-0-released/6034"},"Official announcement")),(0,t.kt)("h2",{id:"assets"},"Assets"),(0,t.kt)("p",null,"RDB Shredder is published on S3:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"s3://snowplow-hosted-assets-eu-central-1/4-storage/rdb-shredder/snowplow-rdb-shredder-2.0.0.jar"))),(0,t.kt)("p",null,"RDB Loader and RDB Stream Shredder distributed as Docker images, published on DockerHub:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"snowplow/snowplow-rdb-loader:"),"2.0.0"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"snowplow/snowplow-rdb-stream-shredder:"),"2.0.0")),(0,t.kt)("h2",{id:"sending-shredding-complete-messages-from-shredder-to-sns"},"Sending shredding complete messages from Shredder to SNS"),(0,t.kt)("p",null,"Shredding complete message can be sent to SNS topic with following queue configuration:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'"queue": {\n  "type": "sns",\n  "topicArn": "arn:aws:sns:eu-central-1:123456789:test-sns-topic",\n  "region": "eu-central-1"\n}\n')),(0,t.kt)("h2",{id:"new-separate-configs"},"New separate configs"),(0,t.kt)("p",null,"RDB Loader and RDB Shredder were using the same config HOCON until version 2.0.0. Starting from 2.0.0, they will use separate configs. Reference docs for new configs can be found on the following pages:"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/configuration-reference/"},"RDB Loader configuration")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader/rdb-shredder-configuration-reference/"},"RDB Shredder configuration")))}u.isMDXComponent=!0}}]);