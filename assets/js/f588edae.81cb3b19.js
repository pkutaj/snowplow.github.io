"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[8405],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(t),m=r,d=h["".concat(c,".").concat(m)]||h[m]||u[m]||o;return t?i.createElement(d,a(a({ref:n},p),{},{components:t})):i.createElement(d,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2543:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const o={title:"Managing enrichments in the console",date:"2020-02-15",sidebar_position:10},a=void 0,l={unversionedId:"enriching-your-data/configuring-enrichments/index",id:"enriching-your-data/configuring-enrichments/index",title:"Managing enrichments in the console",description:"Snowplow Console enables you to manage the Enrichments that run on each of your environments.",source:"@site/docs/enriching-your-data/configuring-enrichments/index.md",sourceDirName:"enriching-your-data/configuring-enrichments",slug:"/enriching-your-data/configuring-enrichments/",permalink:"/docs/enriching-your-data/configuring-enrichments/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/enriching-your-data/configuring-enrichments/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:10,frontMatter:{title:"Managing enrichments in the console",date:"2020-02-15",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"What is the enrichment process?",permalink:"/docs/enriching-your-data/what-is-enrichment/"},next:{title:"Available enrichments",permalink:"/docs/enriching-your-data/available-enrichments/"}},c={},s=[{value:"View which Enrichments are running for an environment",id:"view-which-enrichments-are-running-for-an-environment",level:2},{value:"Enable /editing an Enrichment",id:"enable-editing-an-enrichment",level:2},{value:"Enable the enrichment on a sandbox environment",id:"enable-the-enrichment-on-a-sandbox-environment",level:3},{value:"Deploying an Enrichment configuration across environments",id:"deploying-an-enrichment-configuration-across-environments",level:2},{value:"Disable an Enrichment",id:"disable-an-enrichment",level:2}],p={toc:s};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow Console enables you to manage the Enrichments that run on each of your environments."),(0,r.kt)("p",null,"To start managing Enrichments, navigate to the environment you'd like to manage and select ",(0,r.kt)("em",{parentName:"p"},"Enrichments")," in the environment menu."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"view-which-enrichments-are-running-for-an-environment"},"View which Enrichments are running for an environment"),(0,r.kt)("p",null,"When you select navigate to the Enrichments screen you'll see a listing of all Enrichments and see their current status & last edited date for the environment."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(57458).Z,width:"1000",height:"660"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"enable-editing-an-enrichment"},"Enable /editing an Enrichment"),(0,r.kt)("p",null,"You can enable and edit enrichments on any environment, but we recommend the following workflow to test the configuration before deploying to a pipeline:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to a sandbox environment (Snowplow Mini)"),(0,r.kt)("li",{parentName:"ul"},"Enable and configure the Enrichment as required"),(0,r.kt)("li",{parentName:"ul"},"Send some events to your Snowplow Mini endpoint and validate the fields appear as expected in the event payload"),(0,r.kt)("li",{parentName:"ul"},"Deploy the configuration to your pipeline(s)")),(0,r.kt)("h3",{id:"enable-the-enrichment-on-a-sandbox-environment"},"Enable the enrichment on a sandbox environment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Navigate to a Snowplow Mini")," and locate the enrichment you wish to enable. In the listing select ",(0,r.kt)("em",{parentName:"p"},"Configure and enable / Edit configuration")," from the pop up menu, or click the ",(0,r.kt)("strong",{parentName:"p"},"Configure and enable / Edit config")," button when viewing the enrichment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On the configuration screen"),", edit the JSON configuration (",(0,r.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/available-enrichments/"},"refer to each individual enrichments documentation for support"),") and click ",(0,r.kt)("em",{parentName:"p"},"Validate.")),(0,r.kt)("p",null,"If your configuration is valid you will be given the option to ",(0,r.kt)("em",{parentName:"p"},"Publish")," the enrichment to the environment. If it is invalid you will be given validation errors to correct."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Publish")," your configuration")," to the environment and then test it by sending some events to the Mini endpoint."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(36703).Z,width:"1000",height:"660"})),(0,r.kt)("p",null,"Once you are happy with your configuration, follow ",(0,r.kt)("a",{parentName:"p",href:"#deploy"},"Deploying a configuration across environments")," to deploy the configuration to a pipeline."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"deploying-an-enrichment-configuration-across-environments"},"Deploying an Enrichment configuration across environments"),(0,r.kt)("p",null,"You will need to copy a configuration across environments when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you have followed our recommended ",(0,r.kt)("em",{parentName:"li"},"Edit / Enable")," workflow and wish to deploy your changes to a Pipeline"),(0,r.kt)("li",{parentName:"ul"},"you want to copy the configuration from one Snowplow Mini instance environment to another Snowplow Mini instance")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Navigate to the Snowplow Mini")," that you want to deploy from, and locate the Enrichment you want to deploy to another environment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Click ",(0,r.kt)("em",{parentName:"strong"},"Deploy"))," in either the pop-up menu on the Listing screen, or the button in the View Enrichment screen."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(22179).Z,width:"1000",height:"660"})),(0,r.kt)("p",null,"In the modal that appears, select which environments you wish to copy to and click ",(0,r.kt)("em",{parentName:"p"},"Deploy configuration.")),(0,r.kt)("p",null,"Important!"),(0,r.kt)("p",null,"Deployments to pipeline environments currently involve work performed by our Support team. You can expect your change to be live within 24 hours."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"disable-an-enrichment"},"Disable an Enrichment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Navigate to the environment")," that contains the Enrichment you wish to disable."),(0,r.kt)("p",null,"In the listing select ",(0,r.kt)("em",{parentName:"p"},"Disable enrichment")," from the pop up menu, or click the ",(0,r.kt)("strong",{parentName:"p"},"Disable")," button when viewing the enrichment."),(0,r.kt)("p",null,"Confirm that you wish to disable the enrichment."),(0,r.kt)("p",null,"Important!"),(0,r.kt)("p",null,"Disabling enrichments on pipeline environments currently involves work performed by our Support team. You can expect your change to be live within 24 hours."),(0,r.kt)("hr",null))}u.isMDXComponent=!0},22179:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/DisableEnrichment-8cfa72a8af5f0a9f305c4004a3c96dec.gif"},36703:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/EnableEnrichment-7a951efffc2fdafb17942dfb8c98f43d.gif"},57458:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/ViewEnrichments-45d4459eb75b5159280129175d277b04.gif"}}]);