(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{348:function(t,e,i){"use strict";i.d(e,"e",function(){return n}),i.d(e,"g",function(){return s}),i.d(e,"f",function(){return o}),i.d(e,"h",function(){return d}),i.d(e,"i",function(){return c}),i.d(e,"j",function(){return l}),i.d(e,"d",function(){return u}),i.d(e,"a",function(){return v}),i.d(e,"c",function(){return p}),i.d(e,"b",function(){return f});i(48);var a=i(12),r=i(1),n=function(t){return["cancelled","expired","failed","rejected","timeout",""].includes(t)},s=function(t){return["awaiting_transfer_in"].includes(t)},o=function(t){return["processing","awaiting_transfer_in"].includes(t)},d=function(t){return["ach","bank","sepa"].includes(t)},c=function(t){return["card","cc","credit"].includes(t)},l=function(t){return["crypto","exchange"].includes(t)},u=function(t,e){return function(t){return!o(t)&&!n(t)}(t)&&(e.symbol="+"),e},v=function(t,e){var i=1/(Object(r.g)(e,"numerator")/Object(r.g)(e,"denominator"))*(Object(r.g)(t,"numerator")/Object(r.g)(t,"denominator")),n=a.a.fiatCurrency(Object(r.g)(t,"currency")),s=i.toFixed(Object(r.g)(n,"precision")||5),o=Object(r.g)(n,"symbol")||Object(r.g)(t,"symbol")||"",d=""===o?Object(r.g)(n,"currency")||Object(r.g)(t,"currency"):"";return"".concat(o," ").concat(Object(r.j)(s,10)," ").concat(d," per ").concat(Object(r.g)(e,"currency"))},p=function(t){return d(t)?"bank":c(t)?"card":function(t){return["crypto","exchange"].includes(t)}(t)?"exchange":"bank"},f=function(t,e){return t.length<=e?t:t.substr(0,e)+"..."}},391:function(t,e,i){var a=i(520);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(9).default)("5cb3eda8",a,!0,{})},519:function(t,e,i){"use strict";var a=i(391);i.n(a).a},520:function(t,e,i){(t.exports=i(8)(!1)).push([t.i,".empty[data-v-2bf167c8]{text-align:center}.history-list[data-v-2bf167c8]{flex-flow:column}.history-list .history-section[data-v-2bf167c8]{margin-bottom:25px}.history-list .history-section-header[data-v-2bf167c8]{color:hsla(0,0%,100%,.6);margin-left:16px}.copied-to-clipboard[data-v-2bf167c8]{background:#5b6dee;color:#fff;padding-top:11px;text-align:center;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:200px;height:45px;z-index:51}.copied-to-clipboard .fade-enter-active[data-v-2bf167c8],.copied-to-clipboard .fade-leave-active[data-v-2bf167c8]{transition:opacity .5s}.copied-to-clipboard .fade-enter[data-v-2bf167c8],.copied-to-clipboard .fade-leave-to[data-v-2bf167c8]{opacity:0}.transaction-detail[data-v-2bf167c8]{background:#fff;color:#2a2a2a;-webkit-filter:none;filter:none;margin-left:auto;margin-right:auto;position:relative;text-align:center;top:100px;width:90%;z-index:50;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent}.transaction-detail .detail-loader[data-v-2bf167c8]{height:200px;z-index:51}.transaction-detail .detail-not-found[data-v-2bf167c8]{color:#c1272d;padding-top:70px;height:200px;font-size:18pt;z-index:51}.transaction-detail .detail-header[data-v-2bf167c8]{font-size:24px;font-weight:300;padding:10px 0 10px 24px;border-bottom:.5px solid rgba(0,0,0,.1)}.transaction-detail .detail-close[data-v-2bf167c8]{color:rgba(20,18,51,.5);float:right;height:24px;width:24px}.transaction-detail .detail-quantity[data-v-2bf167c8]{padding:6px 12px}.transaction-detail .detail-quantity .detail-currency[data-v-2bf167c8]{font-size:28px}.transaction-detail .detail-quantity .detail-currency[data-v-2bf167c8] .ticker{color:rgba(20,18,51,.6);font-size:18px}.transaction-detail .detail-quantity .detail-currency-success[data-v-2bf167c8]{color:#5be081;font-size:28px}.transaction-detail .detail-quantity .detail-currency-success[data-v-2bf167c8] .ticker{color:#5be081;font-size:18px}.transaction-detail .detail-subtotal[data-v-2bf167c8]{font-size:16px;color:rgba(20,18,51,.6);margin-bottom:8px}.transaction-detail .progress-bar[data-v-2bf167c8]{height:8px;width:174px}.transaction-detail .progress-text[data-v-2bf167c8]{color:rgba(20,18,51,.6);font-size:14px}.transaction-detail .details[data-v-2bf167c8]{display:table;width:100%}.transaction-detail .details .detail-row[data-v-2bf167c8]{display:table-row;font-size:16px;width:100%}.transaction-detail .details .detail-row .detail-label[data-v-2bf167c8]{border-bottom:.5px solid rgba(0,0,0,.1);color:rgba(20,18,51,.6);display:table-cell;padding:8px 0 12px 8px;text-align:left}.transaction-detail .details .detail-row .detail-label .icon[data-v-2bf167c8]{height:16px;width:16px;margin-right:5px;vertical-align:-2px}.transaction-detail .details .detail-row .attention[data-v-2bf167c8]{color:#ea5454}.transaction-detail .details .detail-row .detail-value[data-v-2bf167c8]{border-bottom:.5px solid rgba(0,0,0,.1);display:table-cell;padding:8px 12px 8px 0;text-align:right}.transaction-detail .click-clip[data-v-2bf167c8]{color:#5b6dee}.transaction-detail .click-more[data-v-2bf167c8]{color:rgba(20,18,51,.6)}.transaction-detail .show-hide-more[data-v-2bf167c8]{color:#5b6dee;display:block;font-size:16px;padding:8px}",""])},982:function(t,e,i){"use strict";i.r(e);i(113),i(37),i(11);var a=i(0),r=i.n(a),n=i(20),s=i(35),o=(i(25),i(348)),d=i(1),c={navTitle:function(){return"Transaction History"},layout:"order-history.vue",props:[],data:function(){return{isCopied:!1,isExpanded:!1,open:null}},mounted:function(){var t=r()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$emit(n.c,!0),!this.found){t.next=6;break}return this.orderIsTrade?this.$event("trxhistory.exchange.appeared"):this.$event("trxhistory.buy.appeared"),t.next=5,this.getDetailLink();case 5:this.open=t.sent;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:{displayTotal:function(){return Object(d.g)(this.order,"subtotal.numerator")?Object(d.g)(this.order,"subtotal"):!!Object(d.g)(this.order,"total.numerator")&&Object(d.g)(this.order,"total")},exchangeRate:function(){return Object(o.a)(Object(d.g)(this.order,"total"),Object(d.g)(this.order,"quantity"))},found:function(){return null!=this.order},history:function(){return Object(d.g)(this.$store.state,"order-history.orders")||[]},loaded:function(){return Object(d.g)(this.$store.state,"order-history.loaded")||!1},order:function(){return this.getOrderFromHistory(Object(d.g)(this.$route,"params.partner",null),Object(d.g)(this.$route,"params.id",null))||null},orderIsFailed:function(){return Object(o.e)(Object(d.g)(this.order,"state"))},orderIsInProgress:function(){return Object(o.f)(Object(d.g)(this.order,"state"))},orderIsTrade:function(){return Object(o.j)(Object(d.g)(this.order,"type"))},orderRequiresAttention:function(){return Object(o.g)(Object(d.g)(this.order,"state"))},partnerDetailsLink:function(){if(this.orderIsInProgress&&this.open){if(this.styleIsBank)return this.$t("history.order.detail.do.bank-instructions");if(this.styleIsCredit&&this.orderRequiresAttention)return this.$t("history.order.detail.do.complete");if(this.styleIsCredit&&!this.orderRequiresAttention)return this.$t("history.order.detail.do.payment-details")}return!1},partnerCancelLink:function(){return this.orderRequiresAttention&&this.open},styleIsBank:function(){return Object(o.h)(Object(d.g)(this.order,"style"))},styleIsCredit:function(){return Object(o.i)(Object(d.g)(this.order,"style"))}},filters:{shortTime:function(t){var e=new Date(t);return"".concat(e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})," at ").concat(e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}))}},methods:{clickClip:function(t){var e=this;!function(t){var e=document.createElement("input"),i=document.createAttribute("value");i.value=t,e.setAttributeNode(i),document.body.appendChild(e);var a=document.createRange();a.selectNodeContents(e);var r=window.getSelection();r.removeAllRanges(),r.addRange(a),e.focus(),e.setSelectionRange(0,999999),document.execCommand("copy")}(t),this.isCopied=!0,setTimeout(function(){return e.isCopied=!1},1500)},clickOpen:function(){var t=r()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.open){t.next=3;break}return t.next=3,s.c.browser(this.open);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),closeHandler:function(){this.$emit(n.c,!1),this.$router.back()},getDetail:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object(d.g)(this.order,t,e)},getOrderFromHistory:function(t,e){var i=null,a=Object(d.g)(this.$store.state,"order-history.orders")||[];return a&&(i=a.find(function(i){return Object(d.g)(i,"partner")==t&&Object(d.g)(i,"id")==e})),i},getDetailLink:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,i,a,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Number(Object(d.g)(this.order,"id")),i=Object(d.g)(this.order,"partner"),t.next=4,this.$services.fetch(i);case 4:if("function"!=typeof(a=t.sent).fetchDetailLink){t.next=11;break}return t.next=8,a.fetchDetailLink(e);case 8:return r=t.sent,n=r.result,t.abrupt("return",n.open);case 11:return t.abrupt("return",null);case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),limitString:function(t,e){return Object(o.b)(t,e)},toggleExpanded:function(){this.isExpanded=!this.isExpanded,this.isExpanded&&(this.orderIsTrade?this.$event("trxhistory.exchangedetails.appeared"):this.$event("trxhistory.buydetails.appeared"))}}},l=(i(519),i(3)),u=Object(l.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"fade"}},[t.isCopied?i("div",{staticClass:"copied-to-clipboard"},[t._v(t._s(t.$t("history.order.detail.clipboard")))]):t._e()]),t._v(" "),i("div",{staticClass:"transaction-detail"},[t.loaded?t._e():i("div",[i("loader",{staticClass:"detail-loader",attrs:{data:t.loaded}}),t._v(" "),i("div",{staticClass:"detail-loader"},[t._v(" ")])],1),t._v(" "),t.loaded&&!t.found?i("div",[i("div",{staticClass:"detail-header",on:{click:t.closeHandler}},[i("icon",{staticClass:"detail-close",attrs:{name:"close"}})],1),t._v(" "),i("div",{staticClass:"detail-not-found"},[t._v("\n        "+t._s(t.$t("history.order.detail.not-found"))+"\n      ")])]):t._e(),t._v(" "),t.loaded&&t.found?i("div",[i("div",{staticClass:"detail-header",on:{click:t.closeHandler}},[t._v("\n        "+t._s(t.$t("history.order.label.type."+t.getDetail("type")))+"\n        "),i("icon",{staticClass:"detail-close",attrs:{name:"close"}})],1),t._v(" "),i("div",{staticClass:"detail-quantity"},[t.orderIsInProgress||t.orderIsFailed?i("currency",{staticClass:"detail-currency",attrs:{value:t.getDetail("quantity"),decimal:14}}):i("currency",{staticClass:"detail-currency-success",attrs:{value:t.getDetail("quantity"),decimal:14}})],1),t._v(" "),(t.orderIsTrade,i("div",{staticClass:"detail-subtotal"},[t._v("\n        for "),i("currency",{attrs:{value:t.displayTotal,decimal:15}})],1)),t._v(" "),t.orderIsInProgress?i("div",[i("icon",{staticClass:"progress-bar",attrs:{name:"progress-bar"}}),t._v(" "),i("div",{staticClass:"progress-text"},[t._v(t._s(t.$t("history.order.detail.state."+t.getDetail("state"))))])],1):t._e(),t._v(" "),i("div",{staticClass:"details"},[t.orderIsInProgress?i("div",{staticClass:"detail-row"},[i("div",{staticClass:"detail-label"},[t._v(t._s(t.$t("history.order.detail.delivery")))]),t._v(" "),i("div",{staticClass:"detail-value"},[t._v(t._s(t.$t("history.order.detail.delivery."+t.getDetail("partner"))))])]):t._e(),t._v(" "),!t.orderIsInProgress&&t.orderIsFailed?i("div",{staticClass:"detail-row"},[i("div",{staticClass:"detail-label failed"},[i("icon",{staticClass:"icon",attrs:{name:"detail-failed"}}),t._v(t._s(t.$t("history.order.detail.state."+t.getDetail("state"))))],1),t._v(" "),i("div",{staticClass:"detail-value"},[t._v(t._s(t._f("shortTime")(t.getDetail("created"))))])]):t._e(),t._v(" "),t.orderIsInProgress||t.orderIsFailed?t._e():i("div",{staticClass:"detail-row"},[i("div",{staticClass:"detail-label"},[i("icon",{staticClass:"icon",attrs:{name:"detail-success"}}),t._v(t._s(t.$t("history.order.detail.state."+t.getDetail("state"))))],1),t._v(" "),i("div",{staticClass:"detail-value"},[t._v(t._s(t._f("shortTime")(t.getDetail("created"))))])]),t._v(" "),t.orderIsInProgress?t._e():i("div",{staticClass:"detail-row"},[i("div",{staticClass:"detail-label"},[t._v(t._s(t.$t("history.order.detail.style")))]),t._v(" "),i("div",{staticClass:"detail-value"},[t._v(t._s(t.$t("history.order.detail.style."+t.getDetail("style"))))])]),t._v(" "),t.partnerDetailsLink?i("div",{staticClass:"detail-row",on:{click:t.clickOpen}},[i("div",{staticClass:"detail-label"},[t._v(t._s(t.partnerDetailsLink))]),t._v(" "),i("div",{staticClass:"detail-value"},[i("icon",{staticClass:"click-more",attrs:{name:"chevron-right"}})],1)]):t._e(),t._v(" "),t.partnerCancelLink?i("div",{staticClass:"detail-row",on:{click:t.clickOpen}},[i("div",{staticClass:"detail-label attention"},[t._v(t._s(t.$t("history.order.detail.do.cancel")))]),t._v(" "),i("div",{staticClass:"detail-value"},[t._v(" ")])]):t._e(),t._v(" "),t.isExpanded?i("div",{staticClass:"detail-row",on:{click:function(e){t.clickClip(t.getDetail("id"))}}},[i("div",{staticClass:"detail-label"},[t._v(t._s(t.$t("history.order.detail.order")))]),t._v(" "),i("div",{staticClass:"detail-value click-clip"},[t._v(t._s(t.getDetail("id")))])]):t._e(),t._v(" "),t.isExpanded&&t.getDetail("fees")?i("div",{staticClass:"detail-row"},[i("div",{staticClass:"detail-label"},[t._v(t._s(t.$t("history.order.detail.fee")))]),t._v(" "),i("div",{staticClass:"detail-value"},[i("currency",{staticClass:"detail-currency",attrs:{value:t.getDetail("fees"),decimal:5}})],1)]):t._e(),t._v(" "),t.isExpanded?i("div",{staticClass:"detail-row"},[i("div",{staticClass:"detail-label"},[t._v(t._s(t.$t("history.order.detail.rate")))]),t._v(" "),i("div",{staticClass:"detail-value"},[t._v(t._s(t.exchangeRate))])]):t._e(),t._v(" "),t.isExpanded&&t.getDetail("tx_hash")?i("div",{staticClass:"detail-row",on:{click:function(e){t.clickClip(t.getDetail("tx_hash"))}}},[i("div",{staticClass:"detail-label"},[t._v(t._s(t.$t("history.order.detail.transaction")))]),t._v(" "),i("div",{staticClass:"detail-value click-clip"},[t._v(t._s(t.limitString(t.getDetail("tx_hash"),16)))])]):t._e()]),t._v(" "),t.isExpanded?i("div",{staticClass:"show-hide-more",on:{click:t.toggleExpanded}},[t._v(t._s(t.$t("history.order.detail.hide")))]):i("div",{staticClass:"show-hide-more",on:{click:t.toggleExpanded}},[t._v(t._s(t.$t("history.order.detail.show")))])]):t._e()])],1)},[],!1,null,"2bf167c8",null);u.options.__file="_id.vue";e.default=u.exports}}]);
//# sourceMappingURL=3528a0ad0201caf853c5.js.map