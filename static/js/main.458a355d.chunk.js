(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n.n(a),i=n(5),o=n(4),s=n(0),r=n(1),b=n(10),j=n(8),g=n.n(j),l=(n(16),n(2)),p=function(e){var t=e.totalPages,n=e.perPage,a=e.onPageChange,c=e.onPerPageChange,r=e.withInfo,j=Object(i.c)(),p=Object(o.a)(j,1)[0],h=Number(p.get("page"))||1,u=Number(p.get("perPage"))||5;Object(s.useEffect)((function(){a(h),c(u)}),[p]);var O=Math.ceil(t/n),d=Object(s.useMemo)((function(){return Array.from({length:O},(function(e,t){return t+1}))}),[t,n]),_=h,m=u;_>O&&(_=O),_<1&&(_=1);var f=_-1<0?1:_-1,x=_+1>O?O:_+1,v=O,P=_===O,N=function(e){return e===_||1===e||e===f||e===x||e===v||e<=5&&_<=3||e>=O-4&&_>=O-2},C=O+8230,k=Object(s.useMemo)((function(){var e=d.filter(N);if(f>2&&O>5){var t=e&&e.shift();e=t?[t,C].concat(Object(b.a)(e)):e}if(x<d.length-1&&O>5){var n=e&&e.pop();e=n?[].concat(Object(b.a)(e),[C,n]):e}return e}),[N]),w=Math.ceil(t/O),I=_*w-w+1,M=_*w;return P&&(M=t),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"content",children:r?"".concat(I," - ").concat(M," of ").concat(t):"Choose page"}),Object(l.jsxs)("nav",{className:"pagination",children:[Object(l.jsx)(i.b,{to:{pathname:"/",search:"?page=".concat(f,"&perPage=").concat(n)},className:g()("pagination__prev-btn pagination__btn",{"pagination__btn--disabled":1===_}),children:"<"}),Object(l.jsx)("div",{className:"pagination__buttons",children:k.map((function(e,t){return e===C?Object(l.jsx)("button",{type:"button",className:"pagination__btn pagination__btn--disabled",disabled:!0,children:"\u2026"},e+String(t)):Object(l.jsx)(i.b,{to:{pathname:"/",search:"?page=".concat(e,"&perPage=").concat(n)},className:g()("pagination__item pagination__btn",{"pagination__btn--disabled":e===_}),children:e},e)}))}),Object(l.jsx)(i.b,{className:g()("pagination__next-btn pagination__btn",{"pagination__btn--disabled":P}),to:{pathname:"/",search:"?page=".concat(x,"&perPage=").concat(n)},children:">"})]}),Object(l.jsxs)("div",{className:"pagination__settings",children:[Object(l.jsx)("p",{className:"pagination__settings-title",children:"Items on a page:"}),Object(l.jsxs)("select",{className:"pagination__select",value:m,onChange:function(e){var t=e.target;c(+t.value)},children:[Object(l.jsx)("option",{children:"3"}),Object(l.jsx)("option",{children:"5"}),Object(l.jsx)("option",{children:"10"}),Object(l.jsx)("option",{children:"20"})]})]})]})},h=(n(18),function(){var e=Object(s.useState)(1),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(5),i=Object(o.a)(c,2),b=i[0],j=i[1],g=Object(s.useCallback)((function(e){a(e)}),[n]),h=Object(s.useCallback)((function(e){j(e)}),[b]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.c,{children:Object(l.jsx)(r.a,{path:"/*",element:Object(l.jsx)(p,{totalPages:42,perPage:b,onPageChange:g,onPerPageChange:h,withInfo:!0})})})})});c.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.458a355d.chunk.js.map