"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[90038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Tutorial: basic tracking design and setup",date:"2020-02-27",sidebar_position:30},r=void 0,l={unversionedId:"migrated/tutorials/tutorial-basic-tracking-design-and-setup/index",id:"migrated/tutorials/tutorial-basic-tracking-design-and-setup/index",title:"Tutorial: basic tracking design and setup",description:"Let's take an example of collecting data for the filling out of a form there are several data points that we want to make sure we get right and therefore want to be explicit in defining their schema.",source:"@site/docs/migrated/tutorials/tutorial-basic-tracking-design-and-setup/index.md",sourceDirName:"migrated/tutorials/tutorial-basic-tracking-design-and-setup",slug:"/migrated/tutorials/tutorial-basic-tracking-design-and-setup/",permalink:"/docsite-poc.github.io/docs/migrated/tutorials/tutorial-basic-tracking-design-and-setup/",draft:!1,tags:[],version:"current",lastUpdatedAt:1660568250,formattedLastUpdatedAt:"Aug 15, 2022",sidebarPosition:30,frontMatter:{title:"Tutorial: basic tracking design and setup",date:"2020-02-27",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Tutorial: first and last touch attribution with SQL",permalink:"/docsite-poc.github.io/docs/migrated/tutorials/tutorial-first-and-last-touch-attribution/"},next:{title:"Tutorial: Integrating Javascript tags with Enhanced E-commerce",permalink:"/docsite-poc.github.io/docs/migrated/tutorials/tutorial-integrating-javascript-tags-with-enhanced-e-commerce/"}},s={},c=[{value:"Create the schema",id:"create-the-schema",level:3},{value:"Adding properties",id:"adding-properties",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:3},{value:"<code>additionalProperties: false</code>",id:"additionalproperties-false",level:5},{value:"Uploading your schema",id:"uploading-your-schema",level:3},{value:"A note on validating our schema",id:"a-note-on-validating-our-schema",level:4},{value:"2. Testing Your Schema",id:"2-testing-your-schema",level:2},{value:"HTML",id:"html",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Initializing the tracker",id:"initializing-the-tracker",level:4},{value:"Setting up tracking",id:"setting-up-tracking",level:4},{value:"Testing the tracking",id:"testing-the-tracking",level:4}],m={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's take an example of collecting data for the filling out of a form there are several data points that we want to make sure we get right and therefore want to be explicit in defining their schema."),(0,i.kt)("p",null,"Example form on a website:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screen Shot 2018-12-05 at 13.27.58",src:n(44558).Z,width:"588",height:"542"})),(0,i.kt)("h3",{id:"create-the-schema"},"Create the schema"),(0,i.kt)("p",null,"First let's create the skeleton for our schema that will describe the structure of the data we want to capture from this form."),(0,i.kt)("p",null,"We'll give it the following details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We'll set name to ",(0,i.kt)("inlineCode",{parentName:"li"},"basic_form_tracking")),(0,i.kt)("li",{parentName:"ul"},"And give it a description of ",(0,i.kt)("inlineCode",{parentName:"li"},"Schema for tracking our demo form"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema" : "http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",\n    "description": "Schema for tracking our demo form",\n    "self": {\n        "vendor": "com.snowplowanalytics",      \n    "name": "basic_form_tracking",                      \n    "format": "jsonschema",\n    "version": "1-0-0"\n    },\n    "type": "object",\n    "properties": { \n        ...\n    },\n    "additionalProperties": false\n}\n')),(0,i.kt)("h3",{id:"adding-properties"},"Adding properties"),(0,i.kt)("p",null,'If we take the first field \u201cFirst Name" and assume that the form owner makes the decisions that:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The name of the field should be \u2018form1","_","first","_","name\u2019 (so everyone knows how to find it in the database later)"),(0,i.kt)("li",{parentName:"ol"},"Values entered should be a string (text)"),(0,i.kt)("li",{parentName:"ol"},"The string should have a minimum of two characters (to avoid initials) and a maximum of 100 characters."),(0,i.kt)("li",{parentName:"ol"},"This field is required.")),(0,i.kt)("p",null,"Therefore in the schema for this data structure we would display these decisions as properties of the field and specify this field as required:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "properties": {\n        "form1_first_name": {\n            "type": "string",\n            \u201cminLength": 2,\n            "maxLength": 100\n        },\n    },\n    "required": [\n        "form1_first_name"\n    ]\n...\n')),(0,i.kt)("p",null,"For the second form field the form owner might decide:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The name of the field should be \u201cform1","_","contact","_",'number"'),(0,i.kt)("li",{parentName:"ol"},"The values entered must be a number"),(0,i.kt)("li",{parentName:"ol"},"The minimum and maximum number length should be 10 digits"),(0,i.kt)("li",{parentName:"ol"},"This is an optional field")),(0,i.kt)("p",null,"So we would add another field to the properties in the schema as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "properties": {\n        "form1_first_name": {\n            "type": "string",\n            "minLength": 2,\n            "maxLength": 100\n        },\n        "form1_contact_number": {\n            "type": ["number","null"]\n            "minLength": 10,\n            "maxLength": 10\n        },\n    },\n    "required": [\n        "form1_first_name"\n    ]\n...\n')),(0,i.kt)("p",null,'By adding the \u201cnull" type above this means that if there is no data value sent across for this field the event will still pass schema validation.'),(0,i.kt)("p",null,"Finally for the 3rd form field the decisions are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The name of the field should be \u201copt","_","into","_",'marketing"'),(0,i.kt)("li",{parentName:"ol"},"The values sent are True/False; Yes = true, No = false"),(0,i.kt)("li",{parentName:"ol"},"This field is required.")),(0,i.kt)("p",null,"Our schema definition would be as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "properties": {\n        "form1_first_name": {\n            "type": "string",\n            "minLength": 2,\n            "maxLength": 100\n        },\n        "form1_contact_number": {\n            "type": ["number","null"]\n            "minLength": 10,\n            "maxLength": 10\n        },\n        "opt_into_marketing": {\n            "type": "boolean"\n        },\n    },\n    "required": [\n        "form1_first_name",\n        "opt_into_marketing"\n    ]\n...\n')),(0,i.kt)("h3",{id:"putting-it-all-together"},"Putting it all together"),(0,i.kt)("p",null,"Putting it all together our schema for capturing the additional contexts of individual form fields on the event that someone submits this form might look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "$schema" : "http://iglucentral.com/schemas/com.snowplowanalytics.self-desc/schema/jsonschema/1-0-0#",\n     "description": "Schema for tracking our demo form",\n     "self": {\n         "vendor": "com.snowplowanalytics",        \n     "name": "basic_form_tracking",                      \n     "format": "jsonschema",\n     "version": "1-0-0"\n     },\n     "type": "object",\n     "properties": {\n         "form1_first_name": {\n             "type": "string",\n             "minLength": 2,\n             "maxLength": 100\n         },\n         "form1_contact_number": {\n             "type": ["number","null"]\n             "minLength": 10,\n             "maxLength": 10\n         },\n         "opt_into_marketing": {\n             "type": "boolean"\n         },\n     },\n     "required": [\n         "form1_first_name",\n         "opt_into_marketing"\n     ],\n     "additionalProperties": false\n }\n')),(0,i.kt)("h5",{id:"additionalproperties-false"},(0,i.kt)("inlineCode",{parentName:"h5"},"additionalProperties: false")),(0,i.kt)("p",null,"Set to\xa0",(0,i.kt)("strong",{parentName:"p"},"false")," this means any events sent with properties not defined in the schema will fail validation"),(0,i.kt)("p",null,"Set to\xa0",(0,i.kt)("strong",{parentName:"p"},"true"),", the events will pass validation but properties not in the schema will be archived rather than loaded into your data warehouse when using Big Query or Redshift. Snowflake DB will load the event."),(0,i.kt)("p",null,"In cases where you have more control over the data collection like 1st party sources you may want to be more strict, whereas with 3rd party sources you might not want to be as strict."),(0,i.kt)("p",null,"Great! We now have a schema written for our form. Next we need to upload it to our environments."),(0,i.kt)("h3",{id:"uploading-your-schema"},"Uploading your schema"),(0,i.kt)("p",null,"For this step, follow the documentation on ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/using-the-snowplow-console/managing-data-structures/"},"using Snowplow Console to manage your data structures"),"."),(0,i.kt)("p",null,"Once you have successfully created and published your schema to the development registry you can begin sending test events to your Snowplow Mini."),(0,i.kt)("h4",{id:"a-note-on-validating-our-schema"},"A note on validating our schema"),(0,i.kt)("p",null,'When you validate the schema you will see a few validation warnings, letting us know that our properties don\u2019t have \u201cdescriptions".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"validation",src:n(7910).Z,width:"1600",height:"388"})),(0,i.kt)("p",null,"Descriptions within properties, like the description for the overall schema help others that might need to use or edit your schema, understand the purpose of the field and/or where this field is being collected. Although in this case, the warning messages are not mandatory to fix, you should take them into account if they are relevant to your schema."),(0,i.kt)("p",null,"Let\u2019s add descriptions to the properties, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "form1_contact_number": {\n        "type": ["number", "null"],\n        "minimum": 0,\n        "maximum": 9999999999,\n        "description": "This is the contact number field from form1 on acme.com/form1"\n    },\n...\n')),(0,i.kt)("h2",{id:"2-testing-your-schema"},"2","."," Testing Your Schema"),(0,i.kt)("p",null,"Now that you have written your schema and published to the development registry, the next step is to test it to ensure that it works the way you want."),(0,i.kt)("p",null,"To do this we'll need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the HTML for our form"),(0,i.kt)("li",{parentName:"ul"},"Initialize the Snowplow Javascript Tracker"),(0,i.kt)("li",{parentName:"ul"},"Set up our event tracking"),(0,i.kt)("li",{parentName:"ul"},"Send the events to Snowplow Mini")),(0,i.kt)("h3",{id:"html"},"HTML"),(0,i.kt)("p",null,"Create a new HTML page with this content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n<body>\n<form class="form-horizontal">\n<fieldset>\n\n\x3c!-- Form Name --\x3e\n<legend>Form Name</legend>\n\n\x3c!-- Text input--\x3e\n<div class="form-group">\n  <label class="col-md-4 control-label" for="form1_first_name">First name</label>  \n  <div class="col-md-4">\n  <input id="form1_first_name" name="form1_first_name" type="text" placeholder="" class="form-control input-md" required="">\n    \n  </div>\n</div>\n\n\x3c!-- Text input--\x3e\n<div class="form-group">\n  <label class="col-md-4 control-label" for="form1_contact_number">Contact number</label>  \n  <div class="col-md-4">\n  <input id="form1_contact_number" name="form1_contact_number" type="text" placeholder="" class="form-control input-md">\n    \n  </div>\n</div>\n\n\x3c!-- Multiple Checkboxes --\x3e\n<div class="form-group">\n  <label class="col-md-4 control-label" for="opt_into_marketing">Receive marketing info?</label>\n  <div class="col-md-4">\n  <div class="checkbox">\n    <label for="opt_into_marketing-0">\n      <input type="checkbox" name="opt_into_marketing" id="opt_into_marketing-0" value="1">\n      Yes\n    </label>\n    </div>\n  <div class="checkbox">\n    <label for="opt_into_marketing-1">\n      <input type="checkbox" name="opt_into_marketing" id="opt_into_marketing-1" value="0">\n      No\n    </label>\n    </div>\n  </div>\n</div>\n\n\x3c!-- Button --\x3e\n<div class="form-group">\n  <label class="col-md-4 control-label" for="button"></label>\n  <div class="col-md-4">\n    <button id="button" name="button" class="btn btn-primary" onclick="form1submit()">Submit</button>\n  </div>\n</div>\n\n</fieldset>\n</form>\n</body>\n</html>\n')),(0,i.kt)("h3",{id:"javascript"},"JavaScript"),(0,i.kt)("h4",{id:"initializing-the-tracker"},"Initializing the tracker"),(0,i.kt)("p",null,"Follow the Web Quick Start Guide to ",(0,i.kt)("a",{parentName:"p",href:"/docs/migrated/collecting-data/collecting-from-own-applications/javascript-tracker/web-quick-start-guide/"},"download the Javascript Tracker and call it into your HTML"),"."),(0,i.kt)("h4",{id:"setting-up-tracking"},"Setting up tracking"),(0,i.kt)("p",null,"For our form example we would likely be using the JavaScript Tracker to send across the necessary data on the submit button click event."),(0,i.kt)("p",null,"Let's add a function into our page, you'll need to pass in the values from your form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"<script>\nfunction form1submit(){ \n  window.snowplow('trackSelfDescribingEvent', {\n    schema: 'iglu:com.snowplowanalytics/form1_fields/jsonschema/1-0-0',\n    data: {\n        form1_first_name: VALUE HERE,\n        form1_contact_number: VALUE HERE,\n        opt_into_marketing: VALUE HERE\n    }\n  });\n};\n<\/script>\n")),(0,i.kt)("h4",{id:"testing-the-tracking"},"Testing the tracking"),(0,i.kt)("p",null,"Once you get the tracking set up and start sending events you can see if they validate against your schema by using the Kibana discovery tool. You'll find a link to Kibana in your Snowplow Console."))}u.isMDXComponent=!0},44558:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2018-12-05_at_13.27.58-8af0dc5f196c317233595f64b1f7e536.png"},7910:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/validation-289ee0a88fa0acfd74d5e49724bffdd2.png"}}]);