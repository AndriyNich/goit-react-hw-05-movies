"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[840],{840:function(n,r,e){e.r(r),e.d(r,{default:function(){return _}});var t,i,s,a,c,o=e(861),u=e(439),p=e(757),d=e.n(p),l=e(791),f=e(134),h=e(689),v=e(87),x=e(390),m=e(168),g=e(444),w=g.ZP.div(t||(t=(0,m.Z)(["\n  display: flex;\n  gap: 16px;\n\n  padding: 8px 0;\n  border-bottom: 1px solid grey;\n"]))),b=g.ZP.div(i||(i=(0,m.Z)(["\n  border-bottom: 1px solid grey;\n"]))),j=g.ZP.p(s||(s=(0,m.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),Z=g.ZP.div(a||(a=(0,m.Z)(["\n  padding: 8px 0;\n  border-bottom: 1px solid gray;\n"]))),y=(0,g.ZP)(v.rU)(c||(c=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n\n  padding: 4px 16px;\n  width: 150px;\n\n  border: 1px solid grey;\n  border-radius: 4px;\n"]))),k=e(184),_=function(){var n,r,e,t,i,s,a=(0,h.UO)().id,c=(0,l.useState)({}),p=(0,u.Z)(c,2),m=p[0],g=p[1],_=(0,h.TH)();(0,l.useEffect)((function(){var n=new AbortController;function r(){return(r=(0,o.Z)(d().mark((function r(){var e;return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,x.mw)(a,n);case 3:e=r.sent,g(e.data),r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){n.abort()}}),[a]);var U;return(0,k.jsx)("main",{children:Object.keys(m).length>0&&(0,k.jsxs)("div",{children:[(0,k.jsx)(Z,{children:(0,k.jsxs)(y,{to:null!==(n=null===(r=_.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/",children:[(0,k.jsx)(f.kyg,{}),"Go back"]})}),(0,k.jsxs)(w,{children:[(0,k.jsx)("img",{width:"320",src:"https://image.tmdb.org/t/p/w500".concat(m.poster_path),alt:"poster ".concat(m.title)}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h2",{children:m.title}),(0,k.jsx)("p",{children:"User Score: ".concat(function(n){return Math.round(n.popularity/n.vote_count*100)}(m),"%")}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:m.overview}),(0,k.jsx)("h3",{children:"Gemres"}),(0,k.jsx)("p",{children:(U=m.genres,U.map((function(n){return n.name})).join(", "))})]})]}),(0,k.jsxs)(b,{children:[(0,k.jsx)(j,{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(v.rU,{to:"cast",state:{from:null!==(e=null===_||void 0===_||null===(t=_.state)||void 0===t?void 0:t.from)&&void 0!==e?e:_},children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(v.rU,{to:"reviews",state:{from:null!==(i=null===_||void 0===_||null===(s=_.state)||void 0===s?void 0:s.from)&&void 0!==i?i:_},children:"Reviews"})})]})]}),(0,k.jsx)(l.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading subpage..."}),children:(0,k.jsx)(h.j3,{})})]})})}},390:function(n,r,e){e.d(r,{XB:function(){return u},ax:function(){return p},b6:function(){return l},mw:function(){return d},rl:function(){return f}});var t=e(861),i=e(757),s=e.n(i),a=e(243);a.Z.defaults.baseURL="https://api.themoviedb.org";var c="2ea7c46495834bb72f73e9f64cf920c5",o=function(n){return{signal:n.signal,params:{api_key:c}}},u=function(){var n=(0,t.Z)(s().mark((function n(r){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/3/trending/movie/week",o(r));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(s().mark((function n(r,e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("3/search/movie",{signal:e.signal,params:{api_key:c,query:r}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(s().mark((function n(r,e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("3/movie/".concat(r),o(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(s().mark((function n(r,e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("3/movie/".concat(r,"/credits"),o(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(s().mark((function n(r,e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("3/movie/".concat(r,"/reviews"),o(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=840.42211eb6.chunk.js.map