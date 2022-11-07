"use strict";(self.webpackChunkscrapbook_java_11=self.webpackChunkscrapbook_java_11||[]).push([[7618],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=a.createContext({}),p=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=p(n.components);return a.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=p(t),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(k,r(r({ref:e},c),{},{components:t})):a.createElement(k,r({ref:e},c))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9952:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const i={id:"annotations-basics-page-id"},r="Annotations Basics",l={unversionedId:"annotations/annotations-basics-page-id",id:"annotations/annotations-basics-page-id",title:"Annotations Basics",description:"Long for short",source:"@site/docs/annotations/annotations-basics.md",sourceDirName:"annotations",slug:"/annotations/annotations-basics-page-id",permalink:"/scrapbook-java-11/docs/annotations/annotations-basics-page-id",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/annotations/annotations-basics.md",tags:[],version:"current",frontMatter:{id:"annotations-basics-page-id"},sidebar:"java11",previous:{title:"Order Elements In Class",permalink:"/scrapbook-java-11/docs/welcome-java/order-elements-in-class-page-id"},next:{title:"Annotations Limiting",permalink:"/scrapbook-java-11/docs/annotations/annotations-limiting-page-id"}},s={},p=[{value:"Long for short",id:"long-for-short",level:2},{value:"Using Annotations",id:"using-annotations",level:2},{value:"Creating Annotations",id:"creating-annotations",level:2},{value:"Basic Annotations",id:"basic-annotations",level:3},{value:"Annotations with param",id:"annotations-with-param",level:3},{value:"Annotations Supported Types",id:"annotations-supported-types",level:2},{value:"Annotations with constants",id:"annotations-with-constants",level:2},{value:"Annotations with array",id:"annotations-with-array",level:2},{value:"Repeatable",id:"repeatable",level:2}],c={toc:p};function u(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"annotations-basics"},"Annotations Basics"),(0,o.kt)("h2",{id:"long-for-short"},"Long for short"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Annotation"),"s are all about metadata. You don't need to get all these metadata as ",(0,o.kt)("inlineCode",{parentName:"p"},"hard coded"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Annotation"),"s can think like ",(0,o.kt)("inlineCode",{parentName:"p"},"Interface"),". We are using ",(0,o.kt)("inlineCode",{parentName:"p"},"Annotaiton"),"s over ",(0,o.kt)("inlineCode",{parentName:"p"},"Interface")," because ",(0,o.kt)("inlineCode",{parentName:"p"},"Annotation"),"s can apply for ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"methods"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expressions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some annotations (like ",(0,o.kt)("inlineCode",{parentName:"p"},"@NonNull"),") will give information only to developer or other tools.")),(0,o.kt)("h2",{id:"using-annotations"},"Using Annotations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n@RestController\n@RequestMapping\npublic class BedirhanController {\n    @RequestMapping("/BedirhanController")\n    public String get(){\n        return "334562";\n    }\n}\n\n')),(0,o.kt)("p",null,"These is no need for parantheses for ",(0,o.kt)("inlineCode",{parentName:"p"},"marker annotations"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"@RestController")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@RRestController()")," are same. You can apply different annotations at the same time."),(0,o.kt)("h2",{id:"creating-annotations"},"Creating Annotations"),(0,o.kt)("h3",{id:"basic-annotations"},"Basic Annotations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic @interface Foo {}\n\n")),(0,o.kt)("h3",{id:"annotations-with-param"},"Annotations with param"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\npublic @interface Foo {\n    int bar();\n    String far() default "AAA";\n}\n\n')),(0,o.kt)("p",null,"We set ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," value as required and ",(0,o.kt)("inlineCode",{parentName:"p"},"far")," value to optional. If you won't set required param, it will not compiled. You can use annotation like ",(0,o.kt)("inlineCode",{parentName:"p"},'@Foo(bar = 10, far = "BBBB")'),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If created abstract method name is ",(0,o.kt)("inlineCode",{parentName:"p"},"value()"),", then you don't need to specify the value name. ",(0,o.kt)("inlineCode",{parentName:"p"},'@Foo(value = "10")')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'@Foo("10")')," are same but ",(0,o.kt)("inlineCode",{parentName:"p"},'@Foo("10", bar = 20)')," won't compile.")),(0,o.kt)("h2",{id:"annotations-supported-types"},"Annotations Supported Types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Primitive Types"),(0,o.kt)("li",{parentName:"ul"},"Iterative String"),(0,o.kt)("li",{parentName:"ul"},"Enum"),(0,o.kt)("li",{parentName:"ul"},"Another Annotations"),(0,o.kt)("li",{parentName:"ul"},"And array type of before elements")),(0,o.kt)("h2",{id:"annotations-with-constants"},"Annotations with constants"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\npublic @interface Foo {\n    int bar();\n    String far() default "AAA";\n    String finalWord = "FinalWord";\n    public static final BUILDING = "Building";\n}\n\n')),(0,o.kt)("h2",{id:"annotations-with-array"},"Annotations with array"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic @interface Foo {\n    int[] bar();\n}\n\n")),(0,o.kt)("p",null,"You can use annotation like ",(0,o.kt)("inlineCode",{parentName:"p"},"@Foo(bar = {1, 2, 3})"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@Foo(bar = {1})"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@Foo(bar = 1)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@Foo(bar = {})"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic @interface Foo {\n    int[] value();\n}\n\n// @Foo({100}) VALID\n// @Foo(1) VALID\n\n"))),(0,o.kt)("h2",{id:"repeatable"},"Repeatable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic @interface Foos {\n    Foo[] value();\n}\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n@Repeatable(Foos.class)\npublic @interface Foo {\n    int[] value();\n}\n\n")),(0,o.kt)("p",null,"You can call ",(0,o.kt)("inlineCode",{parentName:"p"},"@Foo")," annotation for multiple times for the target."))}u.isMDXComponent=!0}}]);