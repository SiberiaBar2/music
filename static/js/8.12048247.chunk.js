(this.webpackJsonpyinao=this.webpackJsonpyinao||[]).push([[8],{191:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var r=n(25),c=n(44),a=n(4),u=n(0),s=(n(191),n(131)),i=n(203),o=n(198),f=n(52),b=n(202),j=n(186),O=n(206),l=0,p=1,d=n(133),h=n(18);t.default=function(e){var t,n=Object(u.useState)([]),v=Object(a.a)(n,2),x=v[0],m=v[1],k=Object(u.useState)([]),y=Object(a.a)(k,2),w=y[0],g=y[1],S=function(e){var t=Object(u.useRef)(l),n=Object(u.useRef)(),r=Object(u.useRef)(),c=Object(u.useState)(e),s=Object(a.a)(c,2),i=s[0],o=s[1];return t.current||(t.current=p,r.current=function(e,t){return n.current=t,o(e),Promise.resolve(e)}),Object(u.useEffect)((function(){var e;null===(e=n.current)||void 0===e||e.call(n,i)}),[i]),[i,r.current]}(""),C=Object(a.a)(S,2),E=C[0],z=C[1],N=function(e){var t=Object(u.useState)({current:!1}),n=Object(a.a)(t,2),r=n[0],c=n[1],s=Object(u.useState)(),i=Object(a.a)(s,2),o=i[0],f=i[1],b=Object(u.useCallback)((function(e){f(e),c({current:!0})}),[]);return Object(u.useEffect)((function(){!0===r.current&&c({current:!1})}),[r]),Object(u.useEffect)((function(){r.current&&e(o)})),b}((function(){J()})),R=function(e,t){var n=Object(u.useState)(e),r=Object(a.a)(n,2),c=r[0],s=r[1];return Object(u.useEffect)((function(){var n=setTimeout((function(){return s(e)}),t);return function(){return clearTimeout(n)}}),[t,e]),c}(E,700);Object(u.useMemo)((function(){Object(c.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==R.trim()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,d.a.get("/search",{params:{keywords:R}});case 4:200===(t=e.sent).code&&m(t.result.songs);case 6:case"end":return e.stop()}}),e)})))()}),[d.a,R]),t=function(){T()},Object(u.useEffect)((function(){t()}),[]);var I=function(){var e=Object(c.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,z(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==E.trim()){e.next=2;break}return e.abrupt("return",s.b.error("\u8bf7\u8f93\u5165\u5185\u5bb9"));case 2:return e.next=4,d.a.get("/search",{params:{keywords:E}});case 4:200===(t=e.sent).code&&m(t.result.songs);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/search/hot");case 2:200===(t=e.sent).code&&g(t.result.hots);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"serch-list",children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)(i.a,{value:E,placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",onKeyUp:function(e){13===e.keyCode&&J()},onChange:function(e){return I(e)},size:"large",prefix:Object(h.jsx)(j.a,{})})}),Object(h.jsx)(o.a,{}),Object(h.jsx)("div",{className:"section btnwrap",children:w.map((function(e){return Object(h.jsx)(f.a,{style:{fontSize:"14rem"},type:"default",shape:"round",onClick:function(){return function(e){z(e),N()}(e.first)},children:e.first.substr(0,4)},e.first)}))}),Object(h.jsx)(o.a,{}),Object(h.jsx)("div",{className:"section",children:Object(h.jsx)(b.b,{size:"large",dataSource:x,renderItem:function(t){return Object(h.jsx)(b.b.Item,{onClick:function(){return e.history.push("/play/".concat(t.id))},actions:[Object(h.jsx)(O.a,{style:{fontSize:24}})],children:t.name})}})})]})}}}]);
//# sourceMappingURL=8.12048247.chunk.js.map