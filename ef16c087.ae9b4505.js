(window.webpackJsonp=window.webpackJsonp||[]).push([[1991],{2053:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return a})),l.d(t,"rightToc",(function(){return u})),l.d(t,"default",(function(){return o}));var n=l(2196),b=l(2197),c=(l(0),l(2198)),r={title:"Taro.chooseMessageFile(option)",sidebar_label:"chooseMessageFile"},a={unversionedId:"apis/media/image/chooseMessageFile",id:"version-3.2.0-canary.3/apis/media/image/chooseMessageFile",isDocsHomePage:!1,title:"Taro.chooseMessageFile(option)",description:"\u4ece\u5ba2\u6237\u7aef\u4f1a\u8bdd\u9009\u62e9\u6587\u4ef6\u3002",source:"@site/versioned_docs/version-3.2.0-canary.3/apis/media/image/chooseMessageFile.md",slug:"/apis/media/image/chooseMessageFile",permalink:"/taro/docs/3.2.0-canary.3/apis/media/image/chooseMessageFile",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.3/apis/media/image/chooseMessageFile.md",version:"3.2.0-canary.3",sidebar_label:"chooseMessageFile",sidebar:"version-3.2.0-canary.3/API",previous:{title:"Taro.compressImage(option)",permalink:"/taro/docs/3.2.0-canary.3/apis/media/image/compressImage"},next:{title:"Taro.chooseImage(option)",permalink:"/taro/docs/3.2.0-canary.3/apis/media/image/chooseImage"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"ChooseFile",id:"choosefile",children:[]},{value:"selectType",id:"selecttype",children:[]},{value:"selectedType",id:"selectedtype",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:u};function o(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4ece\u5ba2\u6237\u7aef\u4f1a\u8bdd\u9009\u62e9\u6587\u4ef6\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"count"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u6587\u4ef6\u4e2a\u6570\uff0c\u53ef\u4ee5 0\uff5e100")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"extension"),Object(c.b)("td",null,Object(c.b)("code",null,"string[]")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6839\u636e\u6587\u4ef6\u62d3\u5c55\u540d\u8fc7\u6ee4\uff0c\u4ec5 type==file \u65f6\u6709\u6548\u3002\u6bcf\u4e00\u9879\u90fd\u4e0d\u80fd\u662f\u7a7a\u5b57\u7b26\u4e32\u3002\u9ed8\u8ba4\u4e0d\u8fc7\u6ee4\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"type"),Object(c.b)("td",null,Object(c.b)("code",null,'"all" | "video" | "image" | "file"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6240\u9009\u7684\u6587\u4ef6\u7684\u7c7b\u578b")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tempFiles"),Object(c.b)("td",null,Object(c.b)("code",null,"ChooseFile[]")),Object(c.b)("td",null,"\u8fd4\u56de\u9009\u62e9\u7684\u6587\u4ef6\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5bf9\u8c61\u6570\u7ec4")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"choosefile"},"ChooseFile"),Object(c.b)("p",null,"\u8fd4\u56de\u9009\u62e9\u7684\u6587\u4ef6\u7684\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5bf9\u8c61\u6570\u7ec4"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"name"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u9009\u62e9\u7684\u6587\u4ef6\u540d\u79f0")),Object(c.b)("tr",null,Object(c.b)("td",null,"path"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"size"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d B")),Object(c.b)("tr",null,Object(c.b)("td",null,"time"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u9009\u62e9\u7684\u6587\u4ef6\u7684\u4f1a\u8bdd\u53d1\u9001\u65f6\u95f4\uff0cUnix\u65f6\u95f4\u6233\uff0c\u5de5\u5177\u6682\u4e0d\u652f\u6301\u6b64\u5c5e\u6027")),Object(c.b)("tr",null,Object(c.b)("td",null,"type"),Object(c.b)("td",null,Object(c.b)("code",null,'"video" | "image" | "file"')),Object(c.b)("td",null,"\u9009\u62e9\u7684\u6587\u4ef6\u7c7b\u578b")))),Object(c.b)("h3",{id:"selecttype"},"selectType"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"all"),Object(c.b)("td",null,"\u4ece\u6240\u6709\u6587\u4ef6\u9009\u62e9")),Object(c.b)("tr",null,Object(c.b)("td",null,"video"),Object(c.b)("td",null,"\u53ea\u80fd\u9009\u62e9\u89c6\u9891\u6587\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"image"),Object(c.b)("td",null,"\u53ea\u80fd\u9009\u62e9\u56fe\u7247\u6587\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"file"),Object(c.b)("td",null,"\u53ef\u4ee5\u9009\u62e9\u9664\u4e86\u56fe\u7247\u548c\u89c6\u9891\u4e4b\u5916\u7684\u5176\u5b83\u7684\u6587\u4ef6")))),Object(c.b)("h3",{id:"selectedtype"},"selectedType"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"video"),Object(c.b)("td",null,"\u9009\u62e9\u4e86\u89c6\u9891\u6587\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"image"),Object(c.b)("td",null,"\u9009\u62e9\u4e86\u56fe\u7247\u6587\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"file"),Object(c.b)("td",null,"\u9009\u62e9\u4e86\u9664\u56fe\u7247\u548c\u89c6\u9891\u7684\u6587\u4ef6")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseMessageFile({\n  count: 10,\n  type: 'image',\n  success: function (res) {\n    // tempFilePath\u53ef\u4ee5\u4f5c\u4e3aimg\u6807\u7b7e\u7684src\u5c5e\u6027\u663e\u793a\u56fe\u7247\n    const tempFilePaths = res.tempFilePaths\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.chooseMessageFile"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0},2196:function(e,t,l){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}l.d(t,"a",(function(){return n}))},2197:function(e,t,l){"use strict";function n(e,t){if(null==e)return{};var l,n,b={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(b[l]=e[l]);return b}l.d(t,"a",(function(){return n}))},2198:function(e,t,l){"use strict";l.d(t,"a",(function(){return O})),l.d(t,"b",(function(){return d}));var n=l(0),b=l.n(n);function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,b=function(e,t){if(null==e)return{};var l,n,b={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(b[l]=e[l]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(b[l]=e[l])}return b}var i=b.a.createContext({}),o=function(e){var t=b.a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},O=function(e){var t=o(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),O=o(l),j=n,d=O["".concat(r,".").concat(j)]||O[j]||s[j]||c;return l?b.a.createElement(d,a(a({ref:t},i),{},{components:l})):b.a.createElement(d,a({ref:t},i))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=l.length,r=new Array(c);r[0]=j;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,r[1]=a;for(var i=2;i<c;i++)r[i]=l[i];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,l)}j.displayName="MDXCreateElement"}}]);