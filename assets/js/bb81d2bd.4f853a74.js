"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[97623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,w=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(w,s(s({ref:t},c),{},{components:r})):a.createElement(w,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Setup user access on Redshift",date:"2020-02-26",sidebar_position:20},s=void 0,i={unversionedId:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/set-up-user-access-on-redshift/index",id:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/set-up-user-access-on-redshift/index",title:"Setup user access on Redshift",description:"We recommend you setup access credentials for at least three different users:",source:"@site/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/set-up-user-access-on-redshift/index.md",sourceDirName:"migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/set-up-user-access-on-redshift",slug:"/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/set-up-user-access-on-redshift/",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/set-up-user-access-on-redshift/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:20,frontMatter:{title:"Setup user access on Redshift",date:"2020-02-26",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Setup the Snowplow database and events table",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/setup-the-snowplow-database-and-events-table/"},next:{title:"Update the search path for your Redshift cluster",permalink:"/docsite-poc.github.io/docs/migrated/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/update-the-search-path-for-your-redshift-cluster/"}},l={},u=[{value:"Creating a user for the RDB Loader",id:"creating-a-user-for-the-rdb-loader",level:3},{value:"Creating a read-only user",id:"creating-a-read-only-user",level:3},{value:"Creating a power user",id:"creating-a-power-user",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We recommend you setup access credentials for at least three different users:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#creating-a-user-for-the-rdb-loader"},"The RDB Loader")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#creating-a-read-only-user"},"A user with read-only access")," to the data, but write access on his / her own schema"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#creating-a-power-user"},"A power user")," with admin privileges")),(0,n.kt)("h3",{id:"creating-a-user-for-the-rdb-loader"},"Creating a user for the RDB Loader"),(0,n.kt)("p",null,"We recommend that you create a specific user in Redshift with ",(0,n.kt)("em",{parentName:"p"},"only")," the permissions required to load data into your Snowplow schema and run ",(0,n.kt)("inlineCode",{parentName:"p"},"vacuum")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"analyze")," against those tables, and use this user's credentials in the config to manage the automatic movement of data into the table. That way, in the event that the server storing storage targets configuration is hacked and the hacker gets access to those credentials, they cannot use them to do any harm to your other data in Redshift. To create a new user with restrictive permissions, log into Redshift, connect to the Snowplow database and execute the following SQL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE USER storageloader PASSWORD \'$storageloaderpassword\';\nGRANT USAGE ON SCHEMA atomic TO storageloader;\nGRANT INSERT ON TABLE "atomic"."events" TO storageloader;\n')),(0,n.kt)("p",null,"You can set the user name and password (",(0,n.kt)("inlineCode",{parentName:"p"},"storageloader")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"$storageloaderpassword")," in the example above) to your own values. Note them down: you will need them when you come to setup the storageLoader in the next phase of the your Snowplow setup."),(0,n.kt)("p",null,"It's important that both ",(0,n.kt)("inlineCode",{parentName:"p"},"vacuum")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"analyze")," are run on a regular basis. These can only be run by a superuser or the owner of the table. The latter is the more restricted solution, so we transfer ownership on all tables in atomic to the StoreLoader user. This can be done by running the following query against all tables in atomic:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ALTER TABLE atomic.events OWNER TO storageloader;\n")),(0,n.kt)("h3",{id:"creating-a-read-only-user"},"Creating a read-only user"),(0,n.kt)("p",null,"To create a new user who can read Snowplow data, but not modify it, connect to the Snowplow database and execute the following SQL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CREATE USER read_only PASSWORD '$read_only_user';\nGRANT USAGE ON SCHEMA atomic TO read_only;\nGRANT SELECT ON TABLE atomic.events TO read_only;\n")),(0,n.kt)("p",null,"The last query would need to be run for each table in atomic."),(0,n.kt)("p",null,"Lastly, we may want to let create a schema in Redshift where the read-only user can create his/ her own tables for analytics purposes, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SCHEMA scratchpad;\nGRANT ALL ON SCHEMA scratchpad TO read_only;\n")),(0,n.kt)("h3",{id:"creating-a-power-user"},"Creating a power user"),(0,n.kt)("p",null,"To create a power user that has super user privilages, connect to the Snowplow database in Redshift and execute the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER power_user createuser password '$poweruserpassword';\nGRANT ALL ON DATABASE snowplow TO power_user;\nGRANT ALL ON SCHEMA atomic TO power_user;\nGRANT ALL ON TABLE atomic.events TO power_user;\n")),(0,n.kt)("p",null,"Note that now you've created your different users, we recommend that you no longer use the credentials you created when you created the Redshift cluster originally."))}p.isMDXComponent=!0}}]);