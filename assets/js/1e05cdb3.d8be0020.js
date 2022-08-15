"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[11310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=s,w=d["".concat(l,".").concat(f)]||d[f]||c[f]||r;return n?o.createElement(w,a(a({ref:t},p),{},{components:n})):o.createElement(w,a({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(87462),s=(n(67294),n(3905));const r={title:"Set up an SQS buffer",date:"2021-08-04",sidebar_position:100},a=void 0,i={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/set-up-an-sqs-buffer/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/set-up-an-sqs-buffer/index",title:"Set up an SQS buffer",description:"The lack of auto-scaling in Kinesis results in throttled streams in case of traffic spikes and Stream Collector starts accumulating events to retry them later. If accumulation continues long enough, Stream Collector will run out of memory. To prevent the possibility of a broken collector, we decided to make it possible to configure an SQS buffer which can provide additional assurance during extreme traffic spikes.",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/set-up-an-sqs-buffer/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/set-up-an-sqs-buffer",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/set-up-an-sqs-buffer/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/set-up-an-sqs-buffer/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/set-up-an-sqs-buffer/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:100,frontMatter:{title:"Set up an SQS buffer",date:"2021-08-04",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"The Snowplow Collector on AWS",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-the-snowplow-collector/"},next:{title:"Setup Trackers",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-trackers/"}},l={},u=[{value:"Setting up the SQS queues",id:"setting-up-the-sqs-queues",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The lack of auto-scaling in Kinesis results in throttled streams in case of traffic spikes and Stream Collector starts accumulating events to retry them later. If accumulation continues long enough, Stream Collector will run out of memory. To prevent the possibility of a broken collector, we decided to make it possible to configure an SQS buffer which can provide additional assurance during extreme traffic spikes."),(0,s.kt)("p",null,"SQS is used to queue any message that Stream Collector failed to send to the Kinesis and the ",(0,s.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/sqs2kinesis/"},(0,s.kt)("inlineCode",{parentName:"a"},"sqs2kinesis")," application")," is then responsible for reading the messages from SQS and writing to Kinesis once it is ready. In the event of any AWS API glitches, there is a retry mechanism which retries sending the SQS queue 10 times."),(0,s.kt)("p",null,"The keys set up for the Kinesis stream are stored as SQS message attributes in order to preserve the information. Note, the SQS messages cannot be as big as Kinesis messages. The limit is 256kB per message, but we send the messages as Base64 encoded, so the limit goes down to 192kB for the original message."),(0,s.kt)("h4",{id:"setting-up-the-sqs-queues"},"Setting up the SQS queues"),(0,s.kt)("p",null,"(This section only applies to the case when SQS is used as a fallback sink when Kinesis is unavailable. If you are using SQS as the primary sink, then the settings below should be ignored and the ",(0,s.kt)("inlineCode",{parentName:"p"},"good")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"bad")," streams should be configured as normal under ",(0,s.kt)("inlineCode",{parentName:"p"},"streams.good")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"streams.bad")," respectively.)"),(0,s.kt)("p",null,"To start using this feature, you will first need to set up the SQS queues. Two separate queues are required for good (raw) events and bad events. The Collector then needs to be informed about the queue names, and this can be done by adding these as entries to ",(0,s.kt)("inlineCode",{parentName:"p"},"config.hocon:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sqsGoodBuffer = {good-sqs-queue-url}\nsqsBadBuffer = {bad-sqs-queue-url}\n")))}c.isMDXComponent=!0}}]);