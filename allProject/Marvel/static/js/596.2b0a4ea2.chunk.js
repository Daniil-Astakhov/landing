"use strict";(self.webpackChunkmarvel_app=self.webpackChunkmarvel_app||[]).push([[596],{5717:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n.p+"static/media/error.e5c60edc8a829507363a.jpg",a=n(184),c=function(){return(0,a.jsxs)("div",{className:"error",children:[(0,a.jsx)("img",{style:{display:"block",height:"260px"},src:r,alt:"error"}),(0,a.jsxs)("p",{className:"error_p",children:["You have lost this battle with the server. ",(0,a.jsx)("br",{})," Looks like the database is broken..."]})]})}},3293:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(9439),a=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",c=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",i=n(184),s=function(){return(0,i.jsxs)("div",{className:"app__banner",children:[(0,i.jsx)("img",{src:a,alt:"Avengers"}),(0,i.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,i.jsx)("br",{}),"Stay tuned!"]}),(0,i.jsx)("img",{src:c,alt:"Avengers logo"})]})},o=n(3433),u=n(2791),l=n(5717),m=n(8875),p=n(1087),d=n(4304),h=n(6983),f=n(5660),v=function(e){var t=(0,u.useState)([]),n=(0,r.Z)(t,2),a=n[0],c=n[1],s=(0,u.useState)(!1),v=(0,r.Z)(s,2),g=v[0],x=v[1],b=(0,u.useState)(Math.floor(250*Math.random(0,1))),j=(0,r.Z)(b,2),w=j[0],Z=j[1],k=(0,u.useState)(!1),_=(0,r.Z)(k,2),y=_[0],C=_[1],N=(0,d.Z)(),A=N.loading,S=N.error,E=N.getAllComics,M=N.clearError;(0,u.useEffect)((function(){L(w,!0)}),[]);var q=function(e){var t=!1;e.length<8&&(t=!0),c((function(t){return[].concat((0,o.Z)(t),(0,o.Z)(e))})),x((function(e){return!1})),Z((function(e){return e+Math.floor(250*Math.random(0,1))})),C(t)},L=function(e,t){x(!t),E(e).then(q).then(M).then(x(!t))},P=(0,u.useRef)([]),T=function(e){P.current.forEach((function(e){return e.classList.remove("comics__item_selected")})),P.current[e].classList.add("comics__item_selected"),P.current[e].focus()};return(0,i.jsxs)("div",{className:"char__list",children:[function(){var t=a.map((function(t,n){return(0,i.jsx)(h.Z,{timeout:500,classNames:"comics__item",children:(0,i.jsx)("li",{ref:function(e){return P.current[n]=e},tabIndex:0,className:"comics__item",onKeyDown:function(e){" "!==e.key&&"Enter"!==e.key||T(n)},onClick:function(){e.onCharSelected(t.id),T(n)},children:(0,i.jsxs)(p.rU,{to:"/comics/".concat(t.id),children:[(0,i.jsx)("img",{src:t.thumbnail,alt:t.title}),(0,i.jsx)("div",{className:"comics__name",children:t.title.length>30?t.title.slice(0,30)+"...":t.title}),(0,i.jsx)("div",{className:"comics__price",style:{fonSize:"14px"},children:t.pricePrint<=1?"NOT AVAILABLE":t.pricePrint+" $"})]})},t.id)},t.id)})),n=S?(0,i.jsx)("div",{children:(0,i.jsx)(l.Z,{})}):null,r=A&&a.length<2?(0,i.jsx)("div",{children:(0,i.jsx)(m.Z,{})}):null;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("ul",{style:{position:"relative"},className:"comics__grid",children:[n,(0,i.jsx)(f.Z,{component:null,children:t})]}),(0,i.jsx)("div",{className:"spinner",style:{width:"100px",height:"100px",position:"absolute",left:"50%",transform:"translateX(-50%)",bottom:"-15vh"},children:r})]})}(),(0,i.jsx)("button",{disabled:g,style:{display:y?"none":"block",visibility:A?"hidden":"visible"},onClick:function(){return L(w)},className:"button button__main button__long",children:(0,i.jsx)("div",{className:"inner",children:"load more"})})]})},g=n(4270),x=function(){var e=(0,u.useState)(null),t=(0,r.Z)(e,2),n=(t[0],t[1]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.q,{children:[(0,i.jsx)("meta",{name:"description",content:"Marvel comics list"}),(0,i.jsx)("title",{children:"Comics Page"})]}),(0,i.jsx)(s,{}),(0,i.jsx)(v,{onCharSelected:function(e){n(e)}})]})}},4304:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(4165),a=n(5861),c=n(9439),i=n(2791),s=function(){var e=function(){var e=(0,i.useState)(!1),t=(0,c.Z)(e,2),n=t[0],s=t[1],o=(0,i.useState)(null),u=(0,c.Z)(o,2),l=u[0],m=u[1],p=(0,i.useCallback)(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,c,i,o,u=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},s(!0),e.prev=4,e.next=7,fetch(t,{method:n,body:a,headers:c});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,s(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),s(!1),m(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:n,request:p,error:l,clearError:(0,i.useCallback)((function(){return m(null)}),[])}}(),t=e.loading,n=e.request,s=e.error,o=e.clearError,u="7ff5c59122f6eb6dc8c5f443abf6a04f",l="https://gateway.marvel.com:443/v1/public",m=Math.floor(250*Math.random(0,1)),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"/characters?name=").concat(t,"&apikey=").concat(u));case 2:return a=e.sent,e.abrupt("return",b(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,a,c=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:m,e.next=3,n("".concat(l,"/characters?").concat("limit=9","&offset=").concat(t,"&apikey=").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(j));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"/characters/").concat(t,"?apikey=").concat(u));case 2:return a=e.sent,e.abrupt("return",b(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"/comics/").concat(t,"?apikey=").concat(u));case 2:return a=e.sent,e.abrupt("return",g(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,a,c=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:m,e.next=3,n("".concat(l,"/comics?limit=",8,"&offset=").concat(t,"&apikey=").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}},x=function(e){return{id:e.id,title:e.title,description:e.description,format:e.format,issueNumber:e.issueNumber,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:" https://www.google.com/search?q=site%3Amarvel.fandom.com+".concat(e.title),pricePrint:e.prices[0].price}},b=function(e){var t=e.data.results[0];return{name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:" https://www.google.com/search?q=site%3Amarvel.fandom.com+".concat(t.name),comics:t.comics.items}},j=function(e){return{id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:" https://www.google.com/search?q=site%3Amarvel.fandom.com+".concat(e.name)}};return{loading:t,error:s,clearError:o,getAllCharacters:d,getCharacter:h,getAllComics:v,getComic:f,getByNameCharacters:p}}}}]);
//# sourceMappingURL=596.2b0a4ea2.chunk.js.map