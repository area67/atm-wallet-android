(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{337:function(t,e,r){var n=r(396);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(9).default)("140d7aa4",n,!0,{})},395:function(t,e,r){"use strict";var n=r(337);r.n(n).a},396:function(t,e,r){var n=r(13);(t.exports=r(8)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+n(r(5))+");src:url("+n(r(5))+'?#iefix) format("embedded-opentype"),url('+n(r(14))+') format("woff2"),url('+n(r(15))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+n(r(6))+");src:url("+n(r(6))+'?#iefix) format("embedded-opentype"),url('+n(r(16))+') format("woff2"),url('+n(r(17))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill-data-v-35fa892c{to{color:#666;background:transparent}}h1[data-v-35fa892c]{font-family:Circular-Pro-Bold,serif;font-size:22px;padding:22px}.body[data-v-35fa892c]{padding:0 22px}.body p[data-v-35fa892c]{padding:11px 0}',""])},410:function(t,e,r){var n=r(755);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(9).default)("64deb988",n,!0,{})},436:function(t,e,r){"use strict";r(31),r(37),r(11);var n=r(0),i=r.n(n),o=(r(52),r(131)),a={props:["slug","id","currency"],data:function(){return{article:null}},mounted:function(){var t=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.fetch();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{fetch:function(){var t=i()(regeneratorRuntime.mark(function t(){var e,r,n,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.slug?e=360000438414:this.id?e=360000437273:this.article=null,"en-us",t.prev=2,t.next=5,Object(o.b)("".concat("en-us","/categories/").concat(e,"/articles.json?per_page=200"));case 5:r=t.sent.articles,t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(2),this.article=t.t0,t.abrupt("return");case 12:this.id?this.article=r.find(function(t){return t.id==i.id}):this.slug?(n=r.filter(function(t){return!!t.label_names.find(function(t){return t=="slug:".concat(i.slug)})}),this.currency?(this.article=n.find(function(t){return!!t.label_names.find(function(t){return t=="curr:".concat(i.currency)})}),this.article||(this.article=n.find(function(t){return!t.label_names.find(function(t){return t.match(/^curr\:/)})}))):this.article=n[0]):this.article=null,this.article||(this.article=new Error("support.error.article-not-found"));case 14:case"end":return t.stop()}},t,this,[[2,8]])}));return function(){return t.apply(this,arguments)}}()}},s=(r(395),r(3)),c=Object(s.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loader",{attrs:{data:t.article,retry:t.fetch}},[t.article?r("div",[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"body",domProps:{innerHTML:t._s(t.article.body)}})]):t._e()])],1)},[],!1,null,"35fa892c",null);c.options.__file="ArticleShow.vue";e.a=c.exports},750:function(t,e,r){t.exports=r.p+"img/b9fb6cf.svg"},751:function(t,e,r){t.exports=r.p+"img/df167e8.svg"},752:function(t,e,r){t.exports=r.p+"img/e5f0427.svg"},753:function(t,e,r){t.exports=r.p+"img/21a6988.svg"},754:function(t,e,r){"use strict";var n=r(410);r.n(n).a},755:function(t,e,r){var n=r(13);(t.exports=r(8)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+n(r(5))+");src:url("+n(r(5))+'?#iefix) format("embedded-opentype"),url('+n(r(14))+') format("woff2"),url('+n(r(15))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+n(r(6))+");src:url("+n(r(6))+'?#iefix) format("embedded-opentype"),url('+n(r(16))+') format("woff2"),url('+n(r(17))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill-data-v-b451c108{to{color:#666;background:transparent}}header[data-v-b451c108]{height:44px;display:flex;align-items:flex-end;font-size:16.5px;font-family:Circular-Pro-Bold;padding-left:16.5px;margin-bottom:11px}.articles-action[data-v-b451c108]{display:block;padding:22px;color:#a3a8ae;text-decoration:none;font-weight:100}.styled-section[data-v-b451c108]{border-radius:11px;box-shadow:0 1px 3px rgba(0,0,0,.08),0 0 4px rgba(0,0,0,.12);margin:22px;padding:22px;text-align:center;font-family:Circular-Pro-Bold,serif}.styled-section h1[data-v-b451c108]{font-size:22px}.styled-section h2[data-v-b451c108]{font-size:16.5px}.sections[data-v-b451c108]{background-color:#fff;padding:0 22px;border-top:1px solid #ececec}.sections[data-v-b451c108],.sections a[data-v-b451c108]{border-bottom:1px solid #ececec}.sections a[data-v-b451c108]{display:block;padding:22px 0}.sections a[data-v-b451c108]:last-child{border-bottom:none}.sections li[data-v-b451c108]{list-style:none;font-size:16.5px}',""])},988:function(t,e,r){"use strict";r.r(e);r(18),r(51);var n=r(147),i=r.n(n),o=(r(11),r(0)),a=r.n(o),s=(r(52),r(45),r(148)),c=r(436),l=r(435),u=r(131),f={115001977747:{icon:r(750),css:{"background-color":"#4C98FC","background-image":"radial-gradient(50% 160%, rgba(255,255,255,0.30) 61%, rgba(255,255,255,0.00) 100%)",color:"white"}},115001977707:{icon:r(751),css:{"background-color":"white"}},115001986188:{icon:r(752),css:{"background-color":"white"}},115001977727:{icon:r(753),css:{"background-image":"linear-gradient(-90deg, #F7A445 2%, #FC5394 100%)",color:"white"}}},d={layout:"support",data:function(){return{limit:5,error:null,allSections:null,articles:null}},components:{"article-show":c.a,"article-list":s.a,"support-footer":l.a},mounted:function(){var t=a()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.fetch();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{fetch:function(){var t=a()(regeneratorRuntime.mark(function t(){var e,r,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"en-us",t.prev=1,t.next=4,Promise.all([Object(u.b)("".concat("en-us","/categories/360000437273/sections.json?per_page=200")).then(function(t){return t.sections}),Object(u.b)("".concat("en-us","/categories/360000437273/articles.json?per_page=200")).then(function(t){return t.articles})]);case 4:e=t.sent,r=i()(e,2),n=r[0],o=r[1],this.allSections=n,this.articles=o,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),this.error=t.t0;case 16:case"end":return t.stop()}},t,this,[[1,13]])}));return function(){return t.apply(this,arguments)}}()},computed:{promoted:function(){return this.articles?this.articles.filter(function(t){return t.promoted}):[]},styledSections:function(){return this.allSections&&this.allSections.map(function(t){var e=f[t.id];return e?{style:e}:null}).filter(function(t){return!!t})},sections:function(){return this.allSections&&this.allSections.filter(function(t){return!f[t.id]})}}},p=(r(754),r(3)),h=Object(p.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll",[r("portal",{attrs:{to:"mobile-title"}},[r("span",{key:"support.title"},[t._v(t._s(t.$t("support.title")))])]),t._v(" "),t.$route.query&&t.$route.query.slug?r("div",[r("article-show",{attrs:{slug:t.$route.query.slug,currency:t.$route.query.currency}})],1):r("div",[r("loader",{attrs:{data:t.articles,error:t.error,retry:t.fetch}},[r("header",[t._v(t._s(t.$t("support.label.faq")))]),t._v(" "),r("article-list",{attrs:{articles:t.promoted.slice(0,this.limit||100)}}),t._v(" "),t.limit>0&&t.promoted.length>5?r("a",{staticClass:"articles-action",attrs:{href:"#"},on:{click:function(e){t.limit=0}}},[t._v(t._s(t.$t("support.label.see-more")))]):t._e(),t._v(" "),0==t.limit?r("a",{staticClass:"articles-action",attrs:{href:"#"},on:{click:function(e){t.limit=5}}},[t._v(t._s(t.$t("support.label.see-fewer")))]):t._e(),t._v(" "),t._l(t.styledSections,function(e){return r("nuxt-link",{key:e.id,attrs:{to:"/support/section?id="+e.id}},[r("div",{staticClass:"styled-section",style:e.style.css},[e.style.icon?r("img",{attrs:{src:e.style.icon}}):t._e(),t._v(" "),r("h1",[t._v(t._s(t._f("translate")(e,"title")))]),t._v(" "),r("h2",[t._v(t._s(t.$t("support.label.see-articles"))+" "),r("icon",{attrs:{name:"chevron-right"}})],1)])])}),t._v(" "),t.sections&&t.sections.length?r("div",[r("header",[t._v(t._s(t.$t("support.label.browse-topics")))]),t._v(" "),r("ul",{staticClass:"sections"},t._l(t.sections,function(e){return r("nuxt-link",{key:e.id,attrs:{to:"/support/section?id="+e.id}},[r("li",{staticClass:"section"},[t._v("\n              "+t._s(e.name)+"\n            ")])])}),1)]):t._e()],2),t._v(" "),r("support-footer")],1)],1)},[],!1,null,"b451c108",null);h.options.__file="index.vue";e.default=h.exports}}]);
//# sourceMappingURL=eabced4ba21856936ceb.js.map