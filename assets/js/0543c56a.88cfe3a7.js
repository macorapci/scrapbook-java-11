"use strict";(self.webpackChunkscrapbook_java_11=self.webpackChunkscrapbook_java_11||[]).push([[6481],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(v,i(i({ref:n},p),{},{components:t})):a.createElement(v,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={id:"common-annotations-page-id"},i="Common Annotations",s={unversionedId:"annotations/common-annotations-page-id",id:"annotations/common-annotations-page-id",title:"Common Annotations",description:"@Override",source:"@site/docs/annotations/common-annotations.md",sourceDirName:"annotations",slug:"/annotations/common-annotations-page-id",permalink:"/scrapbook-java-11/docs/annotations/common-annotations-page-id",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/annotations/common-annotations.md",tags:[],version:"current",frontMatter:{id:"common-annotations-page-id"},sidebar:"java11",previous:{title:"Annotations Limiting",permalink:"/scrapbook-java-11/docs/annotations/annotations-limiting-page-id"},next:{title:"Basic Database Notes",permalink:"/scrapbook-java-11/docs/database/basic-database-notes-page-id"}},c={},l=[{value:"@Override",id:"override",level:2},{value:"@FunctionalInterface",id:"functionalinterface",level:2},{value:"@Deprecated",id:"deprecated",level:2},{value:"@SuppressWarnings",id:"suppresswarnings",level:2},{value:"@SafeVargs",id:"safevargs",level:2},{value:"JavaBean Validations",id:"javabean-validations",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-annotations"},"Common Annotations"),(0,r.kt)("h2",{id:"override"},"@Override"),(0,r.kt)("p",null,"Overrided methods can apply with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Override")," annotation. If parent class hasn't that signiture, it won't compiled at all."),(0,r.kt)("h2",{id:"functionalinterface"},"@FunctionalInterface"),(0,r.kt)("p",null,"FunctionalInterface interface must have only one ",(0,r.kt)("inlineCode",{parentName:"p"},"abstract method"),". You can warn with this annotation very easily."),(0,r.kt)("h2",{id:"deprecated"},"@Deprecated"),(0,r.kt)("p",null,"Sometimes you wanna delete some method from your code. If other develeper using your code, then you can't change very quickly. @Deprecated warns other developers to delete this method or class as soon as possible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n// https://www.baeldung.com/java-deprecated\n\npublic class Worker {\n    /**\n     * Calculate period between versions\n     * @deprecated\n     * This method is no longer acceptable to compute time between versions.\n     * <p> Use {@link Utils#calculatePeriod(Machine)} instead.\n     *\n     * @param machine instance\n     * @return computed time\n     */\n    @Deprecated(since = "4.5", forRemoval = true)\n    public int calculate(Machine machine) {\n        return machine.exportVersions().size() * 10;\n    }\n}\n\n')),(0,r.kt)("h2",{id:"suppresswarnings"},"@SuppressWarnings"),(0,r.kt)("p",null,"JVM wants to warn you at some critical point. You can say shut up to JVM with @SuppressWarnings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class Machine {\n    private List versions;\n\n    // @SuppressWarnings("unchecked")\n    @SuppressWarnings({"unchecked", "deprecation"})\n    public void addVersion(String version) {\n        versions.add(version);\n    }\n}\n\n')),(0,r.kt)("h2",{id:"safevargs"},"@SafeVargs"),(0,r.kt)("p",null,"This is like ",(0,r.kt)("inlineCode",{parentName:"p"},"@SuppressWarnings"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class Machine<T> {\n    private List<T> versions = new ArrayList<>();\n\n    @SafeVarargs\n    public final void safe(T... toAdd) {\n        for (T version : toAdd) {\n            versions.add(version);\n        }\n    }\n}\n\n")),(0,r.kt)("h2",{id:"javabean-validations"},"JavaBean Validations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NotNull"),(0,r.kt)("li",{parentName:"ul"},"NotEmpty"),(0,r.kt)("li",{parentName:"ul"},"Size"),(0,r.kt)("li",{parentName:"ul"},"Max"),(0,r.kt)("li",{parentName:"ul"},"Min"),(0,r.kt)("li",{parentName:"ul"},"Email")))}u.isMDXComponent=!0}}]);