(window.webpackJsonp=window.webpackJsonp||[]).push([[1687],{1750:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var c=n(2196),r=n(2197),b=(n(0),n(2198)),l=n(2202),a=n(2203),o={title:"Ad",sidebar_label:"Ad"},i={unversionedId:"components/open/ad",id:"version-3.2.0-canary.3/components/open/ad",isDocsHomePage:!1,title:"Ad",description:"Banner \u5e7f\u544a",source:"@site/versioned_docs/version-3.2.0-canary.3/components/open/ad.md",slug:"/components/open/ad",permalink:"/taro/docs/3.2.0-canary.3/components/open/ad",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.3/components/open/ad.md",version:"3.2.0-canary.3",sidebar_label:"Ad",sidebar:"version-3.2.0-canary.3/components",previous:{title:"Canvas",permalink:"/taro/docs/3.2.0-canary.3/components/canvas/canvas"},next:{title:"OfficialAccount",permalink:"/taro/docs/3.2.0-canary.3/components/open/official-account"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"AdProps",id:"adprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]},{value:"AdErrCode",id:"aderrcode",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],O={rightToc:d};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(c.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Banner \u5e7f\u544a"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/ad.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<AdProps>\n")),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)(l.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(b.b)(a.a,{value:"React",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <Ad\n        unit-id=''\n        ad-intervals={60}\n        onLoad={() => console.log('ad onLoad')}\n        onError={() => console.log('ad onError')}\n        onClose={() => console.log('ad onClose')}\n      />\n    )\n  }\n}\n"))),Object(b.b)(a.a,{value:"Vue",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <ad\n    unit-id=""\n    ad-intervals="60"\n    @load="onLoad"\n    @error="onError"\n    @close="onClose"\n  />\n</template>\n')))),Object(b.b)("h2",{id:"adprops"},"AdProps"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"unitId"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u5e7f\u544a\u5355\u5143id\uff0c\u53ef\u5728",Object(b.b)("a",{href:"https://mp.weixin.qq.com/"},"\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0"),"\u7684\u6d41\u91cf\u4e3b\u6a21\u5757\u65b0\u5efa")),Object(b.b)("tr",null,Object(b.b)("td",null,"adIntervals"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u5e7f\u544a\u81ea\u52a8\u5237\u65b0\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u53c2\u6570\u503c\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e30\uff08\u8be5\u53c2\u6570\u4e0d\u4f20\u5165\u65f6 Banner \u5e7f\u544a\u4e0d\u4f1a\u81ea\u52a8\u5237\u65b0\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"onLoad"),Object(b.b)("td",null,Object(b.b)("code",null,"BaseEventOrigFunction<any>")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u5e7f\u544a\u52a0\u8f7d\u6210\u529f\u7684\u56de\u8c03")),Object(b.b)("tr",null,Object(b.b)("td",null,"onError"),Object(b.b)("td",null,Object(b.b)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u5f53\u5e7f\u544a\u53d1\u751f\u9519\u8bef\u65f6\uff0c\u89e6\u53d1\u7684\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u4e8b\u4ef6\u83b7\u53d6\u9519\u8bef\u7801\u53ca\u539f\u56e0\uff0c\u4e8b\u4ef6\u5bf9\u8c61event.detail = ","{errCode: 1002}")),Object(b.b)("tr",null,Object(b.b)("td",null,"onClose"),Object(b.b)("td",null,Object(b.b)("code",null,"BaseEventOrigFunction<any>")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u5e7f\u544a\u5173\u95ed\u7684\u56de\u8c03")))),Object(b.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"AdProps.unitId"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"AdProps.adIntervals"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"AdProps.onLoad"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"AdProps.onError"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"AdProps.onClose"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"errCode"),Object(b.b)("td",null,Object(b.b)("code",null,"1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008"))))),Object(b.b)("h3",{id:"aderrcode"},"AdErrCode"),Object(b.b)("p",null,"\u5e7f\u544a\u9519\u8bef\u7801"),Object(b.b)("p",null,"\u9519\u8bef\u7801\u662f\u901a\u8fc7onError\u83b7\u53d6\u5230\u7684\u9519\u8bef\u4fe1\u606f\u3002\u8c03\u8bd5\u671f\u95f4\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f02\u5e38\u8fd4\u56de\u6765\u6355\u83b7\u4fe1\u606f\u3002\n\u5728\u5c0f\u7a0b\u5e8f\u53d1\u5e03\u4e0a\u7ebf\u4e4b\u540e\uff0c\u5982\u679c\u9047\u5230\u5f02\u5e38\u95ee\u9898\uff0c\u53ef\u4ee5\u5728",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"https://mp.weixin.qq.com/"}),"\u201c\u8fd0\u7ef4\u4e2d\u5fc3\u201c"),"\u91cc\u9762\u641c\u5bfb\u9519\u8bef\u65e5\u5fd7\uff0c\u8fd8\u53ef\u4ee5\u9488\u5bf9\u5f02\u5e38\u8fd4\u56de\u52a0\u4e0a\u9002\u5f53\u7684\u76d1\u63a7\u4fe1\u606f\u3002"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5f02\u5e38\u60c5\u51b5"),Object(b.b)("th",{style:{textAlign:"center"}},"\u7406\u7531"),Object(b.b)("th",{style:{textAlign:"center"}},"\u89e3\u51b3\u65b9\u6848"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"1000"),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u540e\u7aef\u9519\u8bef\u8c03\u7528\u5931\u8d25")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),Object(b.b)("tr",null,Object(b.b)("td",null,"1001"),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u53c2\u6570\u9519\u8bef")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u4f7f\u7528\u65b9\u6cd5\u9519\u8bef")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u53ef\u4ee5\u524d\u5f80 developers.weixin.qq.com \u786e\u8ba4\u5177\u4f53\u6559\u7a0b\uff08\u5c0f\u7a0b\u5e8f\u548c\u5c0f\u6e38\u620f\u5206\u522b\u6709\u5404\u81ea\u7684\u6559\u7a0b\uff0c\u53ef\u4ee5\u5728\u9876\u90e8\u9009\u9879\u4e2d\uff0c\u201c\u8bbe\u8ba1\u201d\u4e00\u680f\u7684\u53f3\u4fa7\u8fdb\u884c\u5207\u6362\u3002"))),Object(b.b)("tr",null,Object(b.b)("td",null,"1002"),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u5e7f\u544a\u5355\u5143\u65e0\u6548")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u53ef\u80fd\u662f\u62fc\u5199\u9519\u8bef\u3001\u6216\u8005\u8bef\u7528\u4e86\u5176\u4ed6APP\u7684\u5e7f\u544aID")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u8bf7\u91cd\u65b0\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5e7f\u544a\u4f4dID\u3002"))),Object(b.b)("tr",null,Object(b.b)("td",null,"1003"),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u5185\u90e8\u9519\u8bef")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u5ffd\u7565\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u6062\u590d\u3002"))),Object(b.b)("tr",null,Object(b.b)("td",null,"1004"),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u65e0\u5408\u9002\u7684\u5e7f\u544a")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u5e7f\u544a\u4e0d\u662f\u6bcf\u4e00\u6b21\u90fd\u4f1a\u51fa\u73b0\uff0c\u8fd9\u6b21\u6ca1\u6709\u51fa\u73b0\u53ef\u80fd\u662f\u7531\u4e8e\u8be5\u7528\u6237\u4e0d\u9002\u5408\u6d4f\u89c8\u5e7f\u544a")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u5c5e\u4e8e\u6b63\u5e38\u60c5\u51b5\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),Object(b.b)("tr",null,Object(b.b)("td",null,"1005"),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u5ba1\u6838\u4e2d")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u4f60\u7684\u5e7f\u544a\u6b63\u5728\u88ab\u5ba1\u6838\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),Object(b.b)("tr",null,Object(b.b)("td",null,"1006"),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u9a73\u56de")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u4f60\u7684\u5e7f\u544a\u5ba1\u6838\u5931\u8d25\uff0c\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5ba1\u6838\u72b6\u6001\uff0c\u4e14\u5f00\u53d1\u8005\u9700\u8981\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u5f62\u6001\u4e0a\u7684\u517c\u5bb9\u3002"))),Object(b.b)("tr",null,Object(b.b)("td",null,"1007"),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u5e7f\u544a\u7ec4\u4ef6\u88ab\u5c01\u7981")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u4f60\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5c01\u7981\uff0c\u5c01\u7981\u671f\u95f4\u65e0\u6cd5\u5c55\u73b0\u5e7f\u544a")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u786e\u8ba4\u5c0f\u7a0b\u5e8f\u5e7f\u544a\u5c01\u7981\u72b6\u6001\u3002"))),Object(b.b)("tr",null,Object(b.b)("td",null,"1008"),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u5e7f\u544a\u5355\u5143\u5df2\u5173\u95ed")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u8be5\u5e7f\u544a\u4f4d\u7684\u5e7f\u544a\u80fd\u529b\u5df2\u7ecf\u88ab\u5173\u95ed")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"\u8bf7\u524d\u5f80 mp.weixin.qq.com \u91cd\u65b0\u6253\u5f00\u5bf9\u5e94\u5e7f\u544a\u4f4d\u7684\u5c55\u73b0\u3002"))))),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Ad"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},2196:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return c}))},2197:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,r={},b=Object.keys(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return c}))},2198:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return s}));var c=n(0),r=n.n(c);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},b=Object.keys(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(c=0;c<b.length;c++)n=b[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},O=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=d(n),j=c,s=O["".concat(l,".").concat(j)]||O[j]||u[j]||b;return n?r.a.createElement(s,a(a({ref:t},i),{},{components:n})):r.a.createElement(s,a({ref:t},i))}));function s(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var b=n.length,l=new Array(b);l[0]=j;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:c,l[1]=a;for(var i=2;i<b;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},2199:function(e,t,n){"use strict";function c(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=c(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=c(e))&&(r&&(r+=" "),r+=t);return r}},2200:function(e,t,n){"use strict";var c=n(0),r=n(2201);t.a=function(){var e=Object(c.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2201:function(e,t,n){"use strict";var c=n(0),r=Object(c.createContext)(void 0);t.a=r},2202:function(e,t,n){"use strict";var c=n(0),r=n.n(c),b=n(2200),l=n(2199),a=n(51),o=n.n(a),i=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,a=e.children,O=e.defaultValue,u=e.values,j=e.groupId,s=e.className,p=Object(b.a)(),m=p.tabGroupChoices,g=p.setTabGroupChoices,f=Object(c.useState)(O),y=f[0],v=f[1];if(null!=j){var h=m[j];null!=h&&h!==y&&u.some((function(e){return e.value===h}))&&v(h)}var x=function(e){v(e),null!=j&&g(j,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},s)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(c.cloneElement)(a.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(c.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},2203:function(e,t,n){"use strict";var c=n(2196),r=n(0),b=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return b.a.createElement("div",Object(c.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);