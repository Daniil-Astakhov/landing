"use strict";(self.webpackChunkmarvel_app=self.webpackChunkmarvel_app||[]).push([[334],{4191:function(c,e,s){s.r(e);var i=s(9439),l=s(7689),n=s(1087),a=s(2791),r=s(8875),o=s(5717),t=(s(2246),s(4270)),m=s(4304),u=s(184),d=function(c){var e=c.comic;console.log(e);var s=e.title,i=e.description,l=e.pageCount,a=e.thumbnail,r=e.language,o=e.price;return(0,u.jsxs)("div",{className:"single-comic",children:[(0,u.jsxs)(t.q,{children:[(0,u.jsx)("meta",{name:"description",content:"Marvel comic"}),(0,u.jsx)("title",{children:s})]}),(0,u.jsx)("img",{src:a,alt:s,className:"single-comic__img"}),(0,u.jsxs)("div",{className:"single-comic__info",children:[(0,u.jsx)("h2",{className:"single-comic__name",children:e.title}),(0,u.jsx)("p",{className:"single-comic__descr",children:i}),(0,u.jsx)("p",{className:"single-comic__descr",children:l.replace("p","pages")}),(0,u.jsxs)("p",{className:"single-comic__descr",children:["Language: ",r]}),(0,u.jsx)("div",{className:"single-comic__price",children:o})]}),(0,u.jsx)(n.rU,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};e.default=function(){var c=(0,l.UO)().comicId,e=(0,a.useState)(null),s=(0,i.Z)(e,2),n=s[0],t=s[1],g=(0,m.Z)(),_=g.loading,h=g.error,p=g.getComic,f=g.clearError;(0,a.useEffect)((function(){j()}),[c]),(0,a.useEffect)((function(){}));var j=function(){p(c).then(x).then(f)},x=function(c){t(c)};console.log(n);var v=h?(0,u.jsx)(o.Z,{}):null,N=_?(0,u.jsx)(r.Z,{}):null,k=_||h||!n?null:(0,u.jsx)(d,{comic:n});return(0,u.jsxs)("div",{className:"comic__info",children:[v,N,k]})}}}]);
//# sourceMappingURL=334.62bceb68.chunk.js.map