"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[51953],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),g=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=g(r),u=n,m=p["".concat(s,".").concat(u)]||p[u]||c[u]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var g=2;g<o;g++)i[g]=r[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},57404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var a=r(87462),n=(r(67294),r(3905));const o={title:"Iterable Tag for GTM SS",date:"2021-11-24",sidebar_position:500},i=void 0,l={unversionedId:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/index",id:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/index",title:"Iterable Tag for GTM SS",description:"The Iterable Tag for GTM SS allows events to be forwarded to Iterable. This Tag works best with events from the Snowplow Client, but can also construct Iterable events from other GTM SS Clients such as GAv4.",source:"@site/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/index.md",sourceDirName:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss",slug:"/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/index.md",tags:[],version:"current",lastUpdatedAt:1660584206,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:500,frontMatter:{title:"Iterable Tag for GTM SS",date:"2021-11-24",sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"Braze Tag Configuration",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/braze-tag-for-gtm-ss/braze-tag-configuration/"},next:{title:"Iterable Tag Configuration",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/iterable-tag-configuration/"}},s={},g=[{value:"Template Installation",id:"template-installation",level:2},{value:"Tag Manager Gallery",id:"tag-manager-gallery",level:3},{value:"Manual Installation",id:"manual-installation",level:3},{value:"Iterable Tag Setup",id:"iterable-tag-setup",level:2}],d={toc:g};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Iterable Tag for GTM SS allows events to be forwarded to Iterable. This Tag works best with events from the Snowplow Client, but can also construct Iterable events from other GTM SS Clients such as GAv4."),(0,n.kt)("p",null,"The tag is designed to work best with Self Describing Events, and atomic events, from a Snowplow Tracker, allowing for events to automatically be converted into an Iterable events, include Iterable Identity events. Additionally, any other client event properties can be included within the event properties or user properties of the Iterable event."),(0,n.kt)("h2",{id:"template-installation"},"Template Installation"),(0,n.kt)("p",null,"There are two methods to install the Iterable Tag."),(0,n.kt)("h3",{id:"tag-manager-gallery"},"Tag Manager Gallery"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From the Templates tab in GTM Server Side, click \u201cSearch Gallery\u201d in the Tag Templates section"),(0,n.kt)("li",{parentName:"ul"},"Search for \u201cIterable\u201d and select the official \u201cBy Snowplow\u201d tag"),(0,n.kt)("li",{parentName:"ul"},"Click Add to Workspace"),(0,n.kt)("li",{parentName:"ul"},"Accept the permissions dialog by clicking \u201cAdd\u201d")),(0,n.kt)("h3",{id:"manual-installation"},"Manual Installation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download\xa0",(0,n.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/snowplow/snowplow-gtm-server-side-iterable-tag/main/template.tpl"},"template.tpl"),"\xa0- Ctrl+S (Win) or Cmd+S (Mac) to save the file, or right click the link on this page and select \u201cSave Link As\u2026\u201d"),(0,n.kt)("li",{parentName:"ul"},"Create a new Tag in the Templates section of a Google Tag Manager Server container"),(0,n.kt)("li",{parentName:"ul"},"Click the More Actions menu, in the top right hand corner, and select Import"),(0,n.kt)("li",{parentName:"ul"},"Import\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"template.tpl"),"\xa0downloaded in Step 1"),(0,n.kt)("li",{parentName:"ul"},"Click Save")),(0,n.kt)("h2",{id:"iterable-tag-setup"},"Iterable Tag Setup"),(0,n.kt)("p",null,"With the template installed, you can now add the Iterable Tag to your GTM SS Container."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'From the Tag tab, select "New", then select the Iterable Tag as your Tag Configuration'),(0,n.kt)("li",{parentName:"ul"},"Select your desired Trigger for the events you wish to forward to Iterable"),(0,n.kt)("li",{parentName:"ul"},'Enter your Iterable API Key for a Standard Server Side integration. This can be generated from Iterable "Integrations -> API Keys" settings page'),(0,n.kt)("li",{parentName:"ul"},"Click Save")))}c.isMDXComponent=!0}}]);