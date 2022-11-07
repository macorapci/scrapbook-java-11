"use strict";(self.webpackChunkscrapbook_java_11=self.webpackChunkscrapbook_java_11||[]).push([[5688],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),s=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return r.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=n,v=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(v,i(i({ref:a},p),{},{components:t})):r.createElement(v,i({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=d;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2581:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=t(7462),n=(t(7294),t(3905));const l={id:"chapter-001-id",title:"Chapter 1"},i="Chapter 1",c={unversionedId:"notes/chapter-001-id",id:"notes/chapter-001-id",title:"Chapter 1",description:"JDK includes",source:"@site/docs/notes/notes-chapter-001.md",sourceDirName:"notes",slug:"/notes/chapter-001-id",permalink:"/scrapbook-java-11/docs/notes/chapter-001-id",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/notes-chapter-001.md",tags:[],version:"current",frontMatter:{id:"chapter-001-id",title:"Chapter 1"},sidebar:"java11",previous:{title:"Memorize",permalink:"/scrapbook-java-11/docs/notes/chapter-000-id"},next:{title:"Chapter 2",permalink:"/scrapbook-java-11/docs/notes/chapter-002-id"}},o={},s=[{value:"JDK includes",id:"jdk-includes",level:2},{value:"Import",id:"import",level:2},{value:"Javac Args",id:"javac-args",level:2},{value:"javac: -d",id:"javac--d",level:3},{value:"java and javac: -cp, -classpath, --class-path",id:"java-and-javac--cp--classpath---class-path",level:3},{value:"jar: -cvf, --create --verbose --file",id:"jar--cvf---create---verbose---file",level:3},{value:"jar: -C",id:"jar--c",level:3}],p={toc:s};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"chapter-1"},"Chapter 1"),(0,n.kt)("h2",{id:"jdk-includes"},"JDK includes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"javac"),(0,n.kt)("li",{parentName:"ul"},"jar"),(0,n.kt)("li",{parentName:"ul"},"javadoc"),(0,n.kt)("li",{parentName:"ul"},"jlink")),(0,n.kt)("h2",{id:"import"},"Import"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Java class imports ",(0,n.kt)("inlineCode",{parentName:"li"},"java.lang.*")," by default. Java class no need imports for same package."),(0,n.kt)("li",{parentName:"ul"},"You can import only one wildcard. Wildcard search for only files, not for folders."),(0,n.kt)("li",{parentName:"ul"},"You can't import same fully package. ",(0,n.kt)("inlineCode",{parentName:"li"},"import a.b.c.Main; import d.e.f.Main;")," same time. You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"import a.b.c.Main; import d.e.f.*;"),", java will choose ",(0,n.kt)("inlineCode",{parentName:"li"},"a.b.c.Main")," when u using ",(0,n.kt)("inlineCode",{parentName:"li"},"Main"),". You can check the example code for using same class name in same class.")),(0,n.kt)("p",null,":::Warning\nCheck for import! Don't forget!\n:::"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nimport a.b.c.Main;\n\npublic class Foo{\n    Main main;\n    d.e.f.Main main2;\n}\n\n")),(0,n.kt)("h2",{id:"javac-args"},"Javac Args"),(0,n.kt)("h3",{id:"javac--d"},"javac: -d"),(0,n.kt)("p",null,"You can collect target files. Target folder is ",(0,n.kt)("inlineCode",{parentName:"p"},"classes")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"javac -d classes a/A.java b/B.java"),". Output is ",(0,n.kt)("inlineCode",{parentName:"p"},"./classes/a/A.class")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"./classes/b/B.class"),"."),(0,n.kt)("h3",{id:"java-and-javac--cp--classpath---class-path"},"java and javac: -cp, -classpath, --class-path"),(0,n.kt)("p",null,"Location of classes needed to compile the program."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"java -cp classes b.B")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'java -cp ".:/d/e:/f/g.jar" a.b.c.Main'),". You can import jar file with this arg.")),(0,n.kt)("h3",{id:"jar--cvf---create---verbose---file"},"jar: -cvf, --create --verbose --file"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"-c = --create"),(0,n.kt)("li",{parentName:"ul"},"-v = --verbose"),(0,n.kt)("li",{parentName:"ul"},"-f = --file")),(0,n.kt)("h3",{id:"jar--c"},"jar: -C"),(0,n.kt)("p",null,"Directory containing files for create JAR"))}u.isMDXComponent=!0}}]);