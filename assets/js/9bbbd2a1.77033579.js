"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[44527],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=i.createContext({}),c=function(e){var t=i.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(o),d=n,f=h["".concat(p,".").concat(d)]||h[d]||u[d]||a;return o?i.createElement(f,r(r({ref:t},l),{},{components:o})):i.createElement(f,r({ref:t},l))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},63215:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=o(87462),n=(o(67294),o(3905));const a={title:"Right to be Forgotten Spark Application",date:"2021-03-26",sidebar_position:1010},r=void 0,s={unversionedId:"pipeline-components-and-applications/right-to-be-forgotten-spark-application/index",id:"pipeline-components-and-applications/right-to-be-forgotten-spark-application/index",title:"Right to be Forgotten Spark Application",description:'R2F is a stand-alone spark job that removes rows from the enriched events which contain specific PII identifiers. It is intended to enable Snowplow users to easily remove data about a specific user, when the data subject has requested it under the "right to be forgotten" rights in GDPR.',source:"@site/docs/pipeline-components-and-applications/right-to-be-forgotten-spark-application/index.md",sourceDirName:"pipeline-components-and-applications/right-to-be-forgotten-spark-application",slug:"/pipeline-components-and-applications/right-to-be-forgotten-spark-application/",permalink:"/docs/pipeline-components-and-applications/right-to-be-forgotten-spark-application/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/right-to-be-forgotten-spark-application/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:1010,frontMatter:{title:"Right to be Forgotten Spark Application",date:"2021-03-26",sidebar_position:1010},sidebar:"tutorialSidebar",previous:{title:"Piinguin technical documentation",permalink:"/docs/pipeline-components-and-applications/piinguin/piinguin-technical-documentation/"},next:{title:"Right to be Forgotten Spark Application Setup Guide",permalink:"/docs/pipeline-components-and-applications/right-to-be-forgotten-spark-application/right-to-be-forgotten-spark-application-setup-guide/"}},p={},c=[{value:"Setup Guide",id:"setup-guide",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Data Loss",id:"data-loss",level:3},{value:"Size of removal criteria file",id:"size-of-removal-criteria-file",level:3}],l={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'R2F is a stand-alone spark job that removes rows from the enriched events which contain specific PII identifiers. It is intended to enable Snowplow users to easily remove data about a specific user, when the data subject has requested it under the "right to be forgotten" rights in GDPR.'),(0,n.kt)("p",null,'From the point of view of a user deploying snowplow, this job falls under the new category of "housekeeping" jobs, which are background tasks, meant to optimise or, in this case, clean up data.'),(0,n.kt)("p",null,"In terms of data protection this implements the right of data subjects to request erasure of their data, as it is specified under Article 17 of the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.eugdpr.org/"},"GDPR"),"."),(0,n.kt)("h2",{id:"setup-guide"},"Setup Guide"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/right-to-be-forgotten-spark-application/right-to-be-forgotten-spark-application-setup-guide/"},"the setup guide")," for running and configuring the app."),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("h3",{id:"data-loss"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/snowplow-incubator/right-to-be-forgotten-spark-job/wiki/Technical-documentation#data-loss"}),"Data Loss"),(0,n.kt)("p",null,"There is an argument called\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"maximum-matching-proportion"),"\xa0which is a safeguard for the case that you have chosen a value as removal criterion that corresponds to many rows."),(0,n.kt)("p",null,"This is a very coarse filter that will only catch the worst cases where that happens. So far we haven't identified a generic enough solution to catch for sure all cases where the user has made a mistake like that but there are some ideas about other safeguards (and of course new ideas are welcome, so please submit a\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/right-to-be-forgotten-spark-job/issues"},"new issue on github"),"\xa0if you have one). Until other measures are implemented in R2F it is sensible to have some other measures in place to catch that issue downstream (for instance a weekly or monthly sanity check in the target database)."),(0,n.kt)("p",null,"Of course in order to recover from such an issue you need to have a backup of the data which is hard to do while also meeting the requirement to erase all data for a certain client. One solution is to keep the old archive in another bucket or prefix (in the case of S3) which will automatically expire through some sort of object life cycle policy and/or versioning. Whichever solution to this problem you choose, we would like to hear about your experience on\xa0",(0,n.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/"},"discourse"),"."),(0,n.kt)("h3",{id:"size-of-removal-criteria-file"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/snowplow-incubator/right-to-be-forgotten-spark-job/wiki/Technical-documentation#size-of-removal-criteria-file"}),"Size of removal criteria file"),(0,n.kt)("p",null,"It is assumed that the file is small enough to fit in memory in each executor. Back of the envelope calculations show that this is a reasonable assumption. If that is not the case for you please submit a\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowplow-incubator/right-to-be-forgotten-spark-job/issues"},"new issue on github"),"\xa0or even better a PR. This assumption simplifies the code but also should make execution very fast."))}u.isMDXComponent=!0}}]);