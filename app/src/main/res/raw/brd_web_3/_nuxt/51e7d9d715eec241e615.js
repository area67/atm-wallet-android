(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{424:function(t,e,r){var n=r(953);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(9).default)("4bc905e8",n,!0,{})},952:function(t,e,r){"use strict";var n=r(424);r.n(n).a},953:function(t,e,r){var n=r(13);(t.exports=r(8)(!1)).push([t.i,"@font-face{font-family:Circular-Pro-Book;src:url("+n(r(5))+");src:url("+n(r(5))+'?#iefix) format("embedded-opentype"),url('+n(r(14))+') format("woff2"),url('+n(r(15))+') format("woff");font-weight:400;font-style:normal}@font-face{font-family:Circular-Pro-Bold;src:url('+n(r(6))+");src:url("+n(r(6))+'?#iefix) format("embedded-opentype"),url('+n(r(16))+') format("woff2"),url('+n(r(17))+') format("woff");font-weight:400;font-style:normal}@-webkit-keyframes autofill-data-v-7e7e73c8{to{color:#666;background:transparent}}',""])},990:function(t,e,r){"use strict";r.r(e);r(11);var n=r(0),o=r.n(n),s=r(35),i={data:function(){return{service:null}},mounted:function(){var t=o()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$services.fetch("glidera");case 2:this.service=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:{hasAccount:function(){return this.service&&!!this.service.token}},methods:{open:function(){var t=o()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.service.websetup({endpoint:"setup"});case 2:return e=t.sent,t.next=5,Object(s.a)({url:e,method:"GET",closeOn:"https://api.breadwallet.com/exchange/services/glidera/oauth1?status=RETURN"});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},a=(r(952),r(3)),u=Object(a.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return this.hasAccount?e("stateful-button",{attrs:{click:this.open}},[this._t("default",[this._v(this._s(this.$t("exchange.glidera.button.open-settings",{serviceName:"Glidera"})))])],2):this._e()},[],!1,null,"7e7e73c8",null);u.options.__file="GlideraSettingsButton.vue";e.default=u.exports}}]);
//# sourceMappingURL=51e7d9d715eec241e615.js.map