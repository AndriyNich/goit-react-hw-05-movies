"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(n,r,t){t.r(r);var e=t(861),u=t(439),a=t(757),c=t.n(a),i=t(791),s=t(689),o=t(390),f=t(184);r.default=function(){var n=(0,i.useState)([]),r=(0,u.Z)(n,2),t=r[0],a=r[1],p=(0,s.UO)().id;return(0,i.useEffect)((function(){var n=new AbortController;function r(){return(r=(0,e.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.rl)(p,n);case 3:t=r.sent,a(t.data.results),r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){n.abort()}}),[p]),(0,f.jsx)(i.Fragment,{children:t.length>0?(0,f.jsx)("ul",{children:t.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsx)("p",{children:"Author: ".concat(n.author)}),(0,f.jsx)("p",{children:n.content})]},"".concat(n.id))}))}):"We don't have any reviews for this movie."})}},390:function(n,r,t){t.d(r,{XB:function(){return o},ax:function(){return f},b6:function(){return h},mw:function(){return p},rl:function(){return v}});var e=t(861),u=t(757),a=t.n(u),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org";var i="2ea7c46495834bb72f73e9f64cf920c5",s=function(n){return{signal:n.signal,params:{api_key:i}}},o=function(){var n=(0,e.Z)(a().mark((function n(r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/trending/movie/week",s(r));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(r,t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("3/search/movie",{signal:t.signal,params:{api_key:i,query:r}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(r,t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("3/movie/".concat(r),s(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(r,t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("3/movie/".concat(r,"/credits"),s(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(a().mark((function n(r,t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("3/movie/".concat(r,"/reviews"),s(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.d477f39d.chunk.js.map