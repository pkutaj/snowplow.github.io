"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[20609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,u=m["".concat(c,".").concat(g)]||m[g]||d[g]||a;return n?r.createElement(u,o(o({ref:t},s),{},{components:n})):r.createElement(u,o({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Upgrading to Newer Versions",date:"2022-04-21",sidebar_position:100},o=void 0,l={unversionedId:"migrated/collecting-data/collecting-from-own-applications/c-tracker/upgrading-to-newer-versions/index",id:"migrated/collecting-data/collecting-from-own-applications/c-tracker/upgrading-to-newer-versions/index",title:"Upgrading to Newer Versions",description:"This page gives instructions for upgrading to newer versions of the C++ tracker.",source:"@site/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/upgrading-to-newer-versions/index.md",sourceDirName:"migrated/collecting-data/collecting-from-own-applications/c-tracker/upgrading-to-newer-versions",slug:"/migrated/collecting-data/collecting-from-own-applications/c-tracker/upgrading-to-newer-versions/",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/upgrading-to-newer-versions/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:100,frontMatter:{title:"Upgrading to Newer Versions",date:"2022-04-21",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Client Sessions",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/client-sessions/"},next:{title:"API Documentation",permalink:"/docsite-poc.github.io/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/api-docs/"}},c={},p=[{value:"Upgrading to v1.0.0",id:"upgrading-to-v100",level:2},{value:"Upgrading to v0.3.0",id:"upgrading-to-v030",level:2},{value:"Upgrading to v0.2.0",id:"upgrading-to-v020",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page gives instructions for upgrading to newer versions of the C++ tracker."),(0,i.kt)("h2",{id:"upgrading-to-v100"},"Upgrading to v1.0.0"),(0,i.kt)("p",null,"The package added support for the cmake build system. You may make use of this and import the package in your cmake build configuration. Importing source code by copying files is still supported. However, please note that the code was moved from the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"src"),"\xa0folder to the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"include"),"\xa0folder and you will need to import the sqlite3 and nlohmann/json dependencies on your own and update their location in\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"include/snowplow/thirdparty/sqlite3.hpp"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"include/snowplow/thirdparty/json.hpp"),"\xa0files. See instructions on\xa0",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/setup/"},"the Setup page"),"\xa0for more information."),(0,i.kt)("p",null,"This version changed how the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Tracker"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Emitter"),"\xa0instances are initialized and introduced the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Snowplow::create_tracker()"),"\xa0API. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/c-tracker/initialisation/"},"the\xa0page about")," initialization\xa0to learn more about the new API. The\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Tracker::init()"),"\xa0calls should be replaced with\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Snowplow::create_tracker()"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Tracker::instance()"),"\xa0with\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Snowplow::get_tracker(namespace)"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Snowplow::get_default_tracker()"),"."),(0,i.kt)("p",null,"Also note that the default protocol has changed from HTTP to HTTPS."),(0,i.kt)("h2",{id:"upgrading-to-v030"},"Upgrading to v0.3.0"),(0,i.kt)("p",null,"There are a few breaking changes in this release. Please make sure to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Remove the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"Tracker::"),"\xa0prefix when referring to event types, e.g., use\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"ScreenViewEvent()"),"\xa0instead of\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"Tracker::ScreenViewEvent()"),"."),(0,i.kt)("li",{parentName:"ol"},"Use the common\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"tracker->track(event)"),"\xa0function to track events (instead of\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"tracker->track_self_describing_event(event)"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"tracker->track_screen_view(event)"),", ...)."),(0,i.kt)("li",{parentName:"ol"},"Use the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"event.set_context(context)"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"event.set_true_timestamp(tt)"),"\xa0setters instead of accessing\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"event.contexts"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"event.true_timestamp"),"\xa0directly."),(0,i.kt)("li",{parentName:"ol"},"Event IDs are no longer accessible from the event objects but are returned from the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"tracker->track(event)"),"\xa0function."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Emitter"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"ClientSession"),"\xa0no longer accept database path string for storage but require an instance of\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"SqliteStorage"),"\xa0(or other storage implementation, see the docs)."),(0,i.kt)("li",{parentName:"ol"},"Use\xa0",(0,i.kt)("inlineCode",{parentName:"li"},'#include "snowplow.hpp"'),"\xa0to import all public APIs of the tracker instead of including individual files.")),(0,i.kt)("h2",{id:"upgrading-to-v020"},"Upgrading to v0.2.0"),(0,i.kt)("p",null,"This version adds a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"snowplow"),"\xa0namespace to all tracker components. You will need to import specific or all types from the namespace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"using namespace snowplow;\n")),(0,i.kt)("p",null,"The constructor for\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ClientSession"),"\xa0also changed, dropping the last argument for\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"check_interval"),"\xa0that is no longer necessary. Simply remove the last argument when creating an instance of\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ClientSession"),"."))}d.isMDXComponent=!0}}]);