(function(t){function e(e){for(var s,n,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1becf0ec"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"d199069c"}[t]+".css",r=c.p+s,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===s||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var s=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}r[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0418":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"sticky",top:"0"},attrs:{id:"header",t:""}},[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"},[a("h5",{staticClass:"my-0 mr-md-auto font-weight-normal"},[t._v("PASSIONATE(熱血)")]),a("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[a("router-link",{staticClass:"p-2 text-dark",attrs:{to:"/"}},[t._v(" Home ")]),t._v(" | "),a("router-link",{staticClass:"p-2 text-dark",attrs:{to:"/shop"}},[t._v(" 商城 ")]),t._v(" | "),a("router-link",{staticClass:"p-2 text-dark",attrs:{to:"/cart"}},[t._v(" 購物車 ")])],1),null!==t.user?a("div",[a("span",{staticClass:"text-success"},[t._v("歡迎回來! "+t._s(t.user.name))]),"admin"===t.user.roles?a("router-link",{staticClass:"p-2 text-dark",attrs:{to:"/admin/products"}},[t._v(" 管理台 ")]):t._e(),a("a",{staticClass:"p-2 text-danger",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("登出")])],1):a("div",[a("router-link",{staticClass:"p-2 text-dark",attrs:{to:"/login"}},[t._v(" Login ")]),t._v("/ "),a("router-link",{staticClass:"p-2 text-dark",attrs:{to:"/register"}},[t._v(" Register ")])],1)])])},n=[],r={methods:{logout:function(){localStorage.clear(),location.reload()}},computed:{user:function(){return this.$store.getters.user}}},o=r,i=a("2877"),c=Object(i["a"])(o,s,n,!1,null,null,null);e["a"]=c.exports},"0db1":function(t,e,a){"use strict";(function(t){var s=a("1799"),n=a("f8b7");e["a"]={data:function(){return{orders:{},pagination:{},isLoading:!1,ooid:null}},components:{Pagination:s["a"]},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;e.isLoading=!0,Object(n["b"])(t).then((function(t){e.orders=t.data.data.data,e.isLoading=!1,e.pagination=t.data.data}))},openModal:function(e){var a=this;t("#orderModel").modal("show"),console.log(e),a.ooid=e.ooid},payOrders:function(){var t=this,e={ooid:t.ooid};t.isLoading=!0,Object(n["c"])(e).then((function(e){t.isLoading=!1,t.$refs.ecpay.innerHTML=e.data,document.getElementById("__ecpayForm").style.visibility="hidden",document.getElementById("__ecpayForm").submit(),t.getOrders()}))}},computed:{sortOrder:function(){var t=this,e=[];return t.orders.length&&(e=t.orders.sort((function(t,e){var a=1===t.status?1:0,s=1===e.status?1:0;return s-a}))),e}},created:function(){this.getOrders()}}}).call(this,a("1157"))},1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.compoPages.prev_page_url}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.turnPage(t.compoPages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.compoPages.last_page,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.compoPages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.turnPage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.compoPages.next_page_url}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.turnPage(t.compoPages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},n=[],r={data:function(){return{}},props:["compoPages"],methods:{turnPage:function(t){this.$emit("turn",t)}},mounted:function(){}},o=r,i=a("2877"),c=Object(i["a"])(o,s,n,!1,null,null,null);e["a"]=c.exports},1964:function(t,e,a){t.exports=a.p+"img/product-6.567f09fd.jpg"},"333e":function(t,e,a){t.exports=a.p+"img/loading.8ac90f79.svg"},"33fc":function(t,e,a){t.exports=a.p+"img/product-4.dcb69a47.jpg"},4360:function(t,e,a){"use strict";a("d3b7");var s=a("2b0e"),n=a("2f62"),r=a("c24f");s["a"].use(n["a"]),e["a"]=new n["a"].Store({state:{user:null,token:localStorage.getItem("token")},mutations:{CHANGE_USERDATA:function(t,e){t.user=e},CHANGE_TOKEN:function(t,e){t.token=e}},actions:{setUserData:function(t,e){var a=t.commit;return new Promise((function(t,s){Object(r["b"])(e.email,e.password).then((function(e){a("CHANGE_USERDATA",e.data.user),localStorage.setItem("token",e.data.user.token),a("CHANGE_TOKEN",e.data.user.token),t(e)})).catch((function(t){s(t)}))}))},setUserToken:function(t,e){var a=t.commit;return new Promise((function(t,e){Object(r["a"])().then((function(e){console.log(e),a("CHANGE_USERDATA",e.data.user),t(e)})).catch((function(t){e(t)}))}))}},modules:{},getters:{token:function(t){return t.token},user:function(t){return t.user}}})},"562c":function(t,e,a){"use strict";var s=a("77e9"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},r=[],o={created:function(){var t=this;localStorage.getItem("token")&&t.$store.dispatch("setUserToken")}},i=o,c=(a("5c0b"),a("2877")),l=Object(c["a"])(i,n,r,!1,null,null,null),u=l.exports,d=a("a18c"),p=a("4360"),m=a("f5af"),f=a.n(m),v=(a("4989"),a("e829"),a("4b3c"),a("caf9")),g=a("9062"),h=a.n(g),_=(a("e40d"),a("c24f"));s["a"].config.productionTip=!1,s["a"].use(v["a"]),s["a"].component("Loading",h.a),d["a"].beforeEach((function(t,e,a){t.meta.requiresAuth?Object(_["a"])().then((function(t){"admin"===t.data.user.roles?a():a({path:"/"})})):a()})),new s["a"]({created:function(){f.a.init()},router:d["a"],store:p["a"],render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"5ff6":function(t,e,a){t.exports=a.p+"img/ch-5.5af31ae4.jpg"},"77e9":function(t,e,a){},7827:function(t,e,a){t.exports=a.p+"img/product-3.799abbf2.jpg"},7938:function(t,e,a){t.exports=a.p+"img/ch-3.11aa1cd5.jpg"},8379:function(t,e,a){},8506:function(t,e,a){t.exports=a.p+"img/product-2.987c9bdb.jpg"},"8abc":function(t,e,a){"use strict";var s=a("8379"),n=a.n(s);n.a},"9c0c":function(t,e,a){},"9f0b":function(t,e,a){t.exports=a.p+"img/ch-4.40ca25cc.jpg"},a18c:function(t,e,a){"use strict";a("d3b7");var s=a("2b0e"),n=a("8c4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("section",{staticClass:"categories"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 p-0"},[a("div",{staticClass:"categories__item categories__large__item set-bg animate__animated animate__fadeIn animate__delay-1s",style:{backgroundImage:"url("+t.imgdata[0]+")"}},[t._m(0)])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 p-0"},[a("div",{staticClass:"categories__item set-bg animate__animated animate__fadeIn",staticStyle:{"animation-delay":"1.8s"},style:{backgroundImage:"url("+t.imgdata[1]+")"}},[t._m(2)])]),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 p-0"},[a("div",{staticClass:"categories__item set-bg animate__animated animate__fadeIn",staticStyle:{"animation-delay":"1.8s"},style:{backgroundImage:"url("+t.imgdata[2]+")"}},[t._m(3)])]),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 p-0"},[a("div",{staticClass:"categories__item set-bg animate__animated animate__fadeIn",staticStyle:{"animation-delay":"1.4s"},style:{backgroundImage:"url("+t.imgdata[3]+")"}},[t._m(4)])])])])])])]),a("section",{staticClass:"newproduct"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"mb-3"},[t._v("New")]),a("div",{staticClass:"row"},t._l(8,(function(e){return a("div",{key:e,staticClass:"col-md-3 p-2"},[a("div",[a("div",{staticClass:"product__item"},[a("div",{staticClass:"product__item__pic"},[a("img",{staticClass:"set-bg",attrs:{"data-aos":"fade",src:t.imgdata[4+e-1],alt:""}}),t._m(5,!0)]),a("div",{staticClass:"product__item__text mt-2 mb-2"},[a("h6",[a("a",{attrs:{href:"#"}},[t._v("衣服 "+t._s(e))])]),t._m(6,!0),a("div",{staticClass:"product__price"},[t._v("$590")])])])])])})),0)])]),a("Footer")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories__text"},[a("h1",[t._v("時尚女性服裝")]),a("p",[t._v("基本百搭款！")]),a("button",{staticClass:"btn btn btn-primary"},[t._v("Shop Now")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-6 col-md-6 col-sm-6 p-0"},[a("div",{staticClass:"categories__item set-bg animate__animated animate__fadeIn",staticStyle:{backgroundimage:"url(~@/assets/img/ch-2)","animation-delay":"1.4s"}},[a("div",{staticClass:"categories__text"},[a("h4",[t._v("時尚男性服裝")]),a("p",[t._v("358 種類")]),a("button",{staticClass:"btn btn btn-primary"},[t._v("Shop Now")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories__text"},[a("h4",[t._v("孩子男性")]),a("p",[t._v("273 種類")]),a("button",{staticClass:"btn btn btn-primary"},[t._v("Shop Now")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories__text"},[a("h4",[t._v("化妝品")]),a("p",[t._v("159 種類")]),a("button",{staticClass:"btn btn btn-primary"},[t._v("Shop Now")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"categories__text"},[a("h4",[t._v("配飾")]),a("p",[t._v("792 items")]),a("button",{staticClass:"btn btn btn-primary"},[t._v("Shop Now")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"product__hover"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-share-alt",attrs:{"aria-hidden":"true"}})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-shopping-bag",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rating"},[a("i",{staticClass:"fa fa-star"}),a("i",{staticClass:"fa fa-star"}),a("i",{staticClass:"fa fa-star"}),a("i",{staticClass:"fa fa-star"}),a("i",{staticClass:"fa fa-star"})])}],i=a("a610"),c=a.n(i),l=a("7938"),u=a.n(l),d=a("9f0b"),p=a.n(d),m=a("5ff6"),f=a.n(m),v=a("f6fe"),g=a.n(v),h=a("8506"),_=a.n(h),b=a("7827"),C=a.n(b),y=a("33fc"),P=a.n(y),x=a("b4c2"),w=a.n(x),k=a("1964"),j=a.n(k),O=a("efcc"),E=a.n(O),$=a("d05a"),S=a.n($),N=(a("333e"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))])])}),M=[],A={name:"HelloWorld",props:{msg:String}},L=A,T=(a("8abc"),a("2877")),H=Object(T["a"])(L,N,M,!1,null,"8db98bc8",null),D=H.exports,I=a("0418"),U=a("fd2d"),F={name:"Home",components:{HelloWorld:D,Header:I["a"],Footer:U["a"]},data:function(){return{imgdata:[c.a,u.a,p.a,f.a,g.a,_.a,C.a,P.a,w.a,j.a,E.a,S.a],time:"5000s"}},created:function(){},mounted:function(){}},R=F,q=Object(T["a"])(R,r,o,!1,null,null,null),B=q.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("Sidebar"),a("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[a("transition",{attrs:{name:t.transitionName}},[a("router-view")],1)],1)],1)])],1)},z=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[a("div",{staticClass:"sidebar-sticky"},[t._m(0),a("ul",{staticClass:"nav flex-column a-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[a("svg",{staticClass:"feather feather-users",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}}),a("circle",{attrs:{cx:"9",cy:"7",r:"4"}}),a("path",{attrs:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}}),a("path",{attrs:{d:"M16 3.13a4 4 0 0 1 0 7.75"}})]),t._v(" 產品列表 "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[a("svg",{staticClass:"feather feather-file",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}}),a("polyline",{attrs:{points:"13 2 13 9 20 9"}})]),t._v(" 訂單列表 ")])],1)])])])])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted a"},[a("span",{},[t._v("管理員")]),a("span",[a("i",{staticClass:"fas fa-plus-square",staticStyle:{cursor:"pointer"},attrs:{"data-name":"管理員"}})])])}],V=(a("b0c0"),a("1157")),W=a.n(V),Y={name:"asda",mounted:function(){var t=this;W()(".a i").click(t.menuHandler)},methods:{menuHandler:function(t){"管理員"===t.target.dataset.name?W()(".a-nav").stop().slideToggle():W()(".b-nav").stop().slideToggle()}}},Q=Y,X=Object(T["a"])(Q,K,J,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navbar"}},[a("nav",{staticClass:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0"},[a("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("後台管理")]),a("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",on:{click:t.signout}},[t._v("Sign out")])])])])])},et=[],at={methods:{signout:function(){var t=this;localStorage.clear(),t.$router.push("/")}}},st=at,nt=Object(T["a"])(st,tt,et,!1,null,null,null),rt=nt.exports,ot={components:{Sidebar:Z,Navbar:rt},data:function(){return{transitionName:""}},watch:{$route:function(){this.transitionName="fade"}}},it=ot,ct=(a("562c"),Object(T["a"])(it,G,z,!1,null,null,null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.sortOrder,(function(e,s){return a("tr",{key:s,class:{"text-secondary":"true"===!e.status}},[a("td",[t._v(t._s(e.cr_at))]),a("td",[e.email?a("span",{domProps:{textContent:t._s(e.email)}}):t._e()]),a("td",[a("ul",{staticClass:"list-unstyled"},t._l(e.products,(function(e,s){return a("li",{key:s},[t._v(" "+t._s(e.name)+" 數量："+t._s(e.count)+" ")])})),0)]),a("td",{staticClass:"text-right"},[t._v(t._s(e.total))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.cr_at))]),a("td",[a("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(a){return t.openModal(e)}}},[t._v(" 模擬付款 ")])]),a("td",[1===e.status?a("strong",{staticClass:"text-success"},[t._v("已付款")]):a("span",{staticClass:"text-muted"},[t._v("尚未起用")])])])})),0)]),a("Pagination",{attrs:{"compo-pages":t.pagination},on:{emitPages:t.getOrders}}),a("div",{ref:"ecpay"}),a("div",{staticClass:"modal fade",attrs:{id:"orderModel",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"ooid"}},[t._v("訂單編號")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ooid,expression:"ooid"}],staticClass:"form-control",attrs:{type:"text",id:"ooid",placeholder:"請輸入標題",readonly:""},domProps:{value:t.ooid},on:{input:function(e){e.target.composing||(t.ooid=e.target.value)}}})]),a("hr")])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.payOrders()}}},[t._v(" 確認 ")])])])])])],1)},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("購買時間")]),a("th",[t._v("Email")]),a("th",[t._v("購買款項")]),a("th",[t._v("應付金額")]),a("th",[t._v("ago")]),a("th",[t._v("模擬支付")]),a("th",[t._v("是否付款")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("模擬付款")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],pt=a("0db1"),mt=pt["a"],ft=Object(T["a"])(mt,ut,dt,!1,null,null,null),vt=ft.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-outline-primary mt-4",on:{click:function(e){return e.preventDefault(),t.openModal(!0)}}},[t._v(" 建立新的產品 ")])]),a("table",{staticClass:"table mt-4",staticStyle:{"font-size":"1rem"}},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.price))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.count))]),a("td",{staticStyle:{"text-align":"center"}},[1===e.status?a("span",{staticClass:"badge badge-success"},[t._v("啟用")]):a("span",{staticClass:"badge badge-light"},[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary",on:{click:function(a){return t.openModal(!1,e)}}},[t._v(" 編輯 ")])]),a("td",[a("button",{staticClass:"btn btn-outline-danger",on:{click:function(a){return t.openDelModal(e)}}},[t._v(" 刪除 ")])])])})),0)]),a("Pagination",{attrs:{"compo-pages":t.pagination},on:{turn:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[t.isNew?t._e():a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v(" 上傳圖片 "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:function(e){return t.uploadFile(t.tempProduct)}}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.pimg,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.name,expression:"tempProduct.name"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.name},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"name",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-12"},[a("label",{attrs:{for:"price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-12"},[a("label",{attrs:{for:"origin_price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-12"},[a("label",{attrs:{for:"origin_price"}},[t._v("數量")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.count,expression:"tempProduct.count"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入數量"},domProps:{value:t.tempProduct.count},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"count",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-12"},[a("label",{attrs:{for:"unit"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"text",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-12"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-12"},[a("label",{attrs:{for:"content"}},[t._v("產品說明")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.status,expression:"tempProduct.status"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.status)?t._i(t.tempProduct.status,null)>-1:t._q(t.tempProduct.status,1)},on:{change:function(e){var a=t.tempProduct.status,s=e.target,n=s.checked?1:0;if(Array.isArray(a)){var r=null,o=t._i(a,r);s.checked?o<0&&t.$set(t.tempProduct,"status",a.concat([r])):o>-1&&t.$set(t.tempProduct,"status",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.tempProduct,"status",n)}}}),a("label",{staticClass:"form-check-label"},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.updateProducts(e)}}},[t._v(" 確認 ")])])])])]),a("div",{staticClass:"modal fade",staticStyle:{"font-size":"1.6rem"},attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 真的要刪除商品："+t._s(t.tempProduct.name)+"嗎？ ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 不刪除 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteProducts()}}},[t._v(" 刪除 ")])])])])])],1)},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"100"}},[t._v("數量")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"100"}},[t._v("編輯")]),a("th",{attrs:{width:"120"}},[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("警告")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],_t=a("c4c8"),bt=a("1799"),Ct=a("bc3a"),yt=a.n(Ct),Pt={data:function(){return{products:[],tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1},pagination:{}}},components:{Pagination:bt["a"]},created:function(){this.getProducts()},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;e.isLoading=!0,Object(_t["b"])(t).then((function(t){e.products=t.data.product_list.data,e.pagination=t.data.product_list,e.isLoading=!1}))},openModal:function(t,e){console.log(t,e),t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object.assign({},e),this.isNew=!1),W()("#productModal").modal("show")},openDelModal:function(t){this.tempProduct=Object.assign({},t),W()("#deleteModal").modal("show")},updateProducts:function(){var t=this;console.log(t.isNew),t.isNew?(console.log("here 新產品"),Object(_t["d"])(t.tempProduct).then((function(e){W()("#productModal").modal("hide"),e.data.success?t.getProducts():(t.getProducts(),console.log("新增失敗"))}))):Object(_t["e"])(t.tempProduct).then((function(e){W()("#productModal").modal("hide"),e.data.success?t.getProducts():(t.getProducts(),console.log("新增失敗"))}))},uploadFile:function(){var t=this.$refs.files.files[0],e=this,a=new FormData;a.append("photo",t),a.append("ppid",e.tempProduct.ppid);var s="http://f3974a8832d8.ngrok.io/github/shop_backend/public/api/v1/admin/products/uploadimg";e.status.fileUploading=!0,yt.a.post(s,a,{headers:{"Content-type":"multipart/form-data",Authorization:"Bearer ".concat(e.$store.getters.token)}}).then((function(t){e.status.fileUploading=!1,t.data.success&&(e.tempProduct.pimg=t.data.data.pimg,e.$set(e.tempProduct,"pimg",t.data.data.pimg))}))},deleteProducts:function(){var t=this;Object(_t["a"])(t.tempProduct).then((function(e){e.data.success?(W()("#deleteModal").modal("hide"),t.getProducts()):(W()("#deleteModal").modal("hide"),t.getProducts(),console.log("刪除失敗"))}))},getChildText:function(t){console.log(t)}}},xt=Pt,wt=Object(T["a"])(xt,gt,ht,!1,null,null,null),kt=wt.exports;s["a"].use(n["a"]);var jt=[{path:"/",name:"Home",component:B},{path:"/shop",name:"Shop",component:function(){return a.e("about").then(a.bind(null,"8317"))}},{path:"/cart",name:"Cart",component:function(){return a.e("about").then(a.bind(null,"d398"))}},{path:"/login",name:"Login",component:function(){return a.e("about").then(a.bind(null,"ac2a"))}},{path:"/register",name:"Register",component:function(){return a.e("about").then(a.bind(null,"1348"))}},{path:"/admin",name:"Dashboards",component:lt,meta:{requiresAuth:!0},children:[{path:"products",name:"Products",component:kt,meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:vt,meta:{requiresAuth:!0}}]}],Ot=new n["a"]({routes:jt});e["a"]=Ot},a610:function(t,e,a){t.exports=a.p+"img/ch-2.aa36e4f6.jpg"},b4c2:function(t,e,a){t.exports=a.p+"img/product-5.a169facd.jpg"},b775:function(t,e,a){"use strict";a("d3b7"),a("ac1f"),a("5319");var s=a("bc3a"),n=a.n(s),r=a("4360"),o=a("a18c"),i=n.a.create({baseURL:"https://f3974a8832d8.ngrok.io/github/shop_backend/public/api/v1",timeout:5e3});i.defaults.withCredentials=!1,i.interceptors.request.use((function(t){return r["a"].state.token&&(t.headers.Authorization="Bearer ".concat(r["a"].state.token)),t}),(function(t){Promise.reject(t)})),i.interceptors.response.use((function(t){return t}),(function(t){if(t.response)switch(t.response.status){case 401:alert("請先登入!"),o["a"].replace({path:"login"})}return Promise.reject(t)})),e["a"]=i},c24f:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return o}));a("b0c0");var s=a("b775");function n(t,e){return Object(s["a"])({url:"/user/login",method:"post",data:{email:t,password:e}})}function r(t){return Object(s["a"])({url:"/user/register",method:"post",data:{email:t.email,password:t.password,name:t.name}})}function o(){return Object(s["a"])({url:"/user/getuser",method:"get"})}},c4c8:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return o})),a.d(e,"e",(function(){return i})),a.d(e,"a",(function(){return c}));a("a4d3"),a("e01a"),a("b0c0");var s=a("b775");function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Object(s["a"])({url:"/getproduct?page=".concat(t),method:"get"})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Object(s["a"])({url:"/admin/products?page=".concat(t),method:"get"})}function o(t){return Object(s["a"])({url:"/admin/products",method:"post",data:{name:t.name,count:t.count,price:t.price,status:t.status,category:t.category,content:t.content,unit:t.unit,origin_price:t.origin_price,description:t.description}})}function i(t){return Object(s["a"])({url:"admin/products",method:"put",data:{ppid:t.ppid,name:t.name,count:t.count,price:t.price,status:t.status,category:t.category,content:t.content,unit:t.unit,origin_price:t.origin_price,description:t.description}})}function c(t){return Object(s["a"])({url:"/admin/products",method:"delete",data:{id:t.id}})}},d05a:function(t,e,a){t.exports=a.p+"img/product-8.de8e67c3.jpg"},efcc:function(t,e,a){t.exports=a.p+"img/product-7.d722edb3.jpg"},f6fe:function(t,e,a){t.exports=a.p+"img/product-1.e2d93901.jpg"},f8b7:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o}));a("b0c0");var s=a("b775");function n(t){return Object(s["a"])({url:"/user/order",method:"post",data:{name:t.name,email:t.email,phone:t.phone,address:t.address}})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Object(s["a"])({url:"/admin/order?page=".concat(t),method:"get"})}function o(t){return Object(s["a"])({url:"/admin/order/pay",method:"post",data:{ooid:t.ooid}})}},fd2d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"text-muted"},[a("div",{staticClass:"container"},[a("p",{staticClass:"float-right"},[t._v("Github")]),a("p",[t._v("© 2020 EYESCREAM ALL RIGHTS RESERVED")])])])])}],r={},o=r,i=a("2877"),c=Object(i["a"])(o,s,n,!1,null,null,null);e["a"]=c.exports}});
//# sourceMappingURL=app.8bd370a4.js.map