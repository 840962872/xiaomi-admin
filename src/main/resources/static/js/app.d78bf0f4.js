(function(t){function e(e){for(var a,n,o=e[0],s=e[1],u=e[2],p=0,d=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],a=!0,n=1;n<r.length;n++){var o=r[n];0!==i[o]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},i={app:0},c=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-070a4adc":"5db2d83f","chunk-0b860ded":"a3b1823a","chunk-207d675a":"426b851a","chunk-20c8c69a":"7400ee41","chunk-33928bd2":"20d33f1e","chunk-4c451b84":"7de16745","chunk-57a52cfb":"9fa6fdab","chunk-58e54740":"8146724a","chunk-5939af6e":"41a5ca3e","chunk-5dca75c8":"76672288","chunk-62506429":"f0d1a213","chunk-6c0851c2":"6996565b","chunk-77bbc5ea":"65f6f03d","chunk-78c1fdaf":"9790030f","chunk-9bc2d17a":"5e8fdbb8","chunk-a4d7f8ba":"de528e4b","chunk-d86cc006":"cc4172aa","chunk-de20db02":"ae92c873"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={"chunk-070a4adc":1,"chunk-0b860ded":1,"chunk-207d675a":1,"chunk-33928bd2":1,"chunk-4c451b84":1,"chunk-57a52cfb":1,"chunk-5939af6e":1,"chunk-5dca75c8":1,"chunk-62506429":1,"chunk-6c0851c2":1,"chunk-d86cc006":1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({}[t]||t)+"."+{"chunk-070a4adc":"81dfd6aa","chunk-0b860ded":"9ad0d05d","chunk-207d675a":"24deff18","chunk-20c8c69a":"31d6cfe0","chunk-33928bd2":"37aa5028","chunk-4c451b84":"26760d4b","chunk-57a52cfb":"f5dbb63b","chunk-58e54740":"31d6cfe0","chunk-5939af6e":"353e193e","chunk-5dca75c8":"aa75fa75","chunk-62506429":"078a10ad","chunk-6c0851c2":"91eef236","chunk-77bbc5ea":"31d6cfe0","chunk-78c1fdaf":"31d6cfe0","chunk-9bc2d17a":"31d6cfe0","chunk-a4d7f8ba":"31d6cfe0","chunk-d86cc006":"0627d3ad","chunk-de20db02":"31d6cfe0"}[t]+".css",i=s.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===a||p===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],p=u.getAttribute("data-href");if(p===a||p===i)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var a=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete n[t],l.parentNode.removeChild(l),r(c)},l.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){n[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,r){a=i[t]=[e,r]}));e.push(a[2]=c);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=o(t);var d=new Error;u=function(e){p.onerror=p.onload=null,clearTimeout(l);var r=i[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}i[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var l=p;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},3316:function(t,e,r){},"379d":function(t,e){e.install=function(t){t.prototype.$target="http://47.115.85.237:3000/",t.prototype.notifySucceed=function(t){this.$notify({title:"成功",message:t,type:"success",offset:100})},t.prototype.notifyError=function(t){this.$notify.error({title:"错误",message:t,offset:100})}}},"3f84":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("4de4"),r("0d03"),r("b0c0"),r("d3b7"),r("4d63"),r("ac1f"),r("25f0"),r("466d"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app",name:"app"}},[a("el-container",{},[a("el-header",{staticStyle:{display:"flex",height:"100%","flex-wrap":"wrap","justify-content":"center","align-items":"center"}},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:r("e835"),width:"100px",height:"100px",alt:""}})])],1),a("div",{staticStyle:{"margin-right":"0px"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:r("9318"),width:"80%",height:"80px"}})])],1),a("div",{staticStyle:{"font-size":"80px",color:"#0366d6"}},[a("i",{staticClass:"el-icon-first-aid-kit"})]),a("div",{staticStyle:{"font-size":"20px",width:"60px","margin-right":"20px",color:"#0366d6"}},[t._v("医养康共同体")]),a("div",{staticStyle:{"font-size":"80px",color:"#0366d6"}},[a("i",{staticClass:"el-icon-phone-outline"})]),a("div",{staticStyle:{"font-size":"13px",width:"60px",color:"black"}},[t._v("咨询电话 "),a("div",{staticStyle:{"font-size":"20px",width:"60px",color:"#0366d6"}},[t._v("84546120")]),a("div",{staticStyle:{"font-size":"20px",width:"60px",color:"#0366d6"}},[t._v("18003213705")])]),a("div",{staticStyle:{"margin-left":"5%","font-size":"80px",color:"#0366d6"}},[a("i",{staticClass:"el-icon-paperclip"})]),a("div",{staticStyle:{"font-size":"20px",color:"#0366d6"}},[a("a",{attrs:{href:"https://www.jyyy.com.cn/",target:"_blank"}},[t._v(" 河北医科大学第一医院 ")])])]),a("el-menu",{staticClass:"el-menu-demo",staticStyle:{display:"flex",height:"100%","background-color":"rgba(132,174,231,0.99)","flex-wrap":"wrap","justify-content":"center","align-items":"center"},attrs:{"default-active":t.activeIndex,mode:"horizontal","active-text-color":"#0366d6",router:"","text-color":"#fff"},on:{select:t.handleSelect}},[a("div",[a("el-menu-item",{staticStyle:{"font-size":"20px","margin-right":"20px","margin-left":"20px"},attrs:{index:"/"}},[t._v("福缘首页")])],1),a("div",[a("el-menu-item",{staticStyle:{"font-size":"20px","margin-right":"20px","margin-left":"20px"},attrs:{index:"/goods"}},[t._v("关于福缘")])],1),a("div",[a("el-menu-item",{staticStyle:{"font-size":"20px","margin-right":"20px","margin-left":"20px"},attrs:{index:"/seckill"}},[t._v("接收人群")])],1),a("div",[a("el-menu-item",{staticStyle:{"font-size":"20px","margin-right":"20px","margin-left":"20px"},attrs:{index:"/env"}},[t._v("环境设施")])],1),a("div",[a("el-menu-item",{staticStyle:{"font-size":"20px","margin-right":"20px","margin-left":"20px"},attrs:{index:"/teams"}},[t._v("专家团队")])],1),a("div",[a("el-menu-item",{staticStyle:{"font-size":"20px","margin-right":"20px","margin-left":"20px"},attrs:{index:"/news"}},[t._v("福缘新闻")])],1),a("div",[a("el-menu-item",{staticStyle:{"font-size":"20px","margin-right":"20px","margin-left":"20px"},attrs:{index:"/careers"}},[t._v("招贤纳士")])],1),a("div",[a("el-menu-item",{staticStyle:{"font-size":"20px","margin-right":"10px","margin-left":"10px"},attrs:{index:"/contactus"}},[t._v("联系我们")])],1)]),a("MyLogin"),a("MyRegister",{attrs:{register:t.register},on:{fromChild:t.isRegister}}),a("el-main",[a("keep-alive",[a("router-view")],1)],1),a("el-footer",[a("div",{staticClass:"footer"},[a("div",{staticClass:"ng-promise-box"},[a("div",{staticClass:"ng-promise"},[a("p",{staticClass:"text"},[a("a",{staticClass:"icon1",attrs:{href:"javascript:;"}},[t._v("医护共同体")]),a("a",{staticClass:"icon2",attrs:{href:"javascript:;"}},[t._v("资源共享")]),a("a",{staticClass:"icon3",staticStyle:{"margin-right":"0"},attrs:{href:"javascript:;"}},[t._v("100%品质保证")])])])]),a("div",{staticClass:"mod_help"},[a("p",[a("router-link",{attrs:{to:"/"}},[t._v("首页")]),a("span",[t._v("|")]),a("router-link",{attrs:{to:"/goods"}},[t._v("关于福缘")]),a("span",[t._v("|")]),a("router-link",{attrs:{to:"/teams"}},[t._v("专家团队")]),a("span",[t._v("|")]),a("router-link",{attrs:{to:"/news"}},[t._v("福缘新闻")]),a("span",[t._v("|")]),a("router-link",{attrs:{to:"/env"}},[t._v("环境设施")]),a("span",[t._v("|")]),a("router-link",{attrs:{to:"/contactus"}},[t._v("联系我们")])],1),a("p",{staticClass:"coty"},[t._v("最终版权归福缘所有 © 2022-2023")])])])])],1)],1)},i=[],c=(r("a4d3"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("841c"),r("1276"),r("159b"),r("ade3")),o=r("2f62");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={beforeUpdate:function(){this.activeIndex=this.$route.path},data:function(){return{activeIndex:"",search:"",register:!1,visible:!1}},created:function(){var t=this;if(null!=this.getCookie("XM_TOKEN")){this.$axios.get("/api/user/token").then((function(e){"001"===e.data.code&&t.setUser(e.data.data)}));var e=this.getCookie("XM_TOKEN"),r={};r.userId=e.split("|")[1],r.username=e.split("|")[2],this.setUser(r)}this.getCookie("XM_TOKEN")},computed:u({},Object(o["c"])(["getUser","getNum"])),watch:{getUser:function(t){var e=this;""===t?this.setShoppingCart([]):this.$axios.get("/api/cart/user/"+t.userId).then((function(t){"001"===t.data.code?e.setShoppingCart(t.data.data):e.notifyError(t.data.msg)})).catch((function(t){return Promise.reject(t)}))}},methods:u({},Object(o["b"])(["setUser","setShowLogin","setShoppingCart"]),{login:function(){this.setShowLogin(!0)},logout:function(){this.visible=!1,this.delCookie("XM_TOKEN"),this.setUser(""),this.notifySucceed("成功退出登录")},isRegister:function(t){this.register=t},searchClick:function(){""!=this.search&&(this.$router.push({path:"/goods",query:{search:this.search}}),this.search="")},getCookie:function(t){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));return null!=e?unescape(e[2]):null},delCookie:function(t){var e=new Date;e.setTime(e.getTime()-1);var r=this.getCookie(t);null!=r&&(document.cookie=t+"="+r+";expires="+e.toGMTString())}})},d=p,l=(r("034f"),r("2877")),m=Object(l["a"])(d,n,i,!1,null,null,null),g=m.exports,f=r("8c4f");a["default"].use(f["a"]);var h=[{path:"/",name:"Home",component:function(){return r.e("chunk-62506429").then(r.bind(null,"bb51"))},meta:{title:"石家庄福缘护理院"}},{path:"/error",name:"Error",component:function(){return r.e("chunk-6c0851c2").then(r.bind(null,"3fb9"))}},{path:"/goods",name:"Goods",component:function(){return r.e("chunk-9bc2d17a").then(r.bind(null,"8629"))}},{path:"/seckill",name:"Seckill",component:function(){return r.e("chunk-57a52cfb").then(r.bind(null,"d628"))}},{path:"/careers",name:"Careers",component:function(){return r.e("chunk-d86cc006").then(r.bind(null,"850b"))}},{path:"/contactus",name:"ContactUs",component:function(){return r.e("chunk-de20db02").then(r.bind(null,"e9bb"))}},{path:"/news",name:"News",component:function(){return r.e("chunk-20c8c69a").then(r.bind(null,"a2f9"))}},{path:"/env",name:"Environment",component:function(){return r.e("chunk-77bbc5ea").then(r.bind(null,"6ca2"))}},{path:"/env/kangfu",name:"KangfuEnv",component:function(){return r.e("chunk-58e54740").then(r.bind(null,"0d1d"))}},{path:"/env/huli",name:"HuliEnv",component:function(){return r.e("chunk-78c1fdaf").then(r.bind(null,"ee86"))}},{path:"/about",name:"About",component:function(){return r.e("chunk-070a4adc").then(r.bind(null,"f820"))}},{path:"/teams",name:"Teams",component:function(){return r.e("chunk-a4d7f8ba").then(r.bind(null,"20b5"))}},{path:"/goods/details",name:"Details",component:function(){return r.e("chunk-207d675a").then(r.bind(null,"9f52"))}},{path:"/goods/seckillDetails",name:"Details",component:function(){return r.e("chunk-5939af6e").then(r.bind(null,"2d22"))}},{path:"/shoppingCart",name:"ShoppingCart",component:function(){return r.e("chunk-4c451b84").then(r.bind(null,"8c6e"))},meta:{requireAuth:!0}},{path:"/collect",name:"Collect",component:function(){return r.e("chunk-0b860ded").then(r.bind(null,"0c03"))},meta:{requireAuth:!0}},{path:"/order",name:"Order",component:function(){return r.e("chunk-33928bd2").then(r.bind(null,"cf2a"))},meta:{requireAuth:!0}},{path:"/confirmOrder",name:"ConfirmOrder",component:function(){return r.e("chunk-5dca75c8").then(r.bind(null,"8873"))},meta:{requireAuth:!0}}],v=new f["a"]({routes:h}),P=f["a"].prototype.push;f["a"].prototype.push=function(t,e,r){return e||r?P.call(this,t,e,r):P.call(this,t).catch((function(t){return t}))};var b=v,k={state:{user:"",showLogin:!1},getters:{getUser:function(t){return t.user},getShowLogin:function(t){return t.showLogin}},mutations:{setUser:function(t,e){t.user=e},setShowLogin:function(t,e){t.showLogin=e}},actions:{setUser:function(t,e){var r=t.commit;r("setUser",e)},setShowLogin:function(t,e){var r=t.commit;r("setShowLogin",e)}}},y=(r("a434"),{state:{shoppingCart:[]},getters:{getShoppingCart:function(t){return t.shoppingCart},getNum:function(t){for(var e=0,r=0;r<t.shoppingCart.length;r++){var a=t.shoppingCart[r];e+=a.num}return e},getIsAllCheck:function(t){for(var e=!0,r=0;r<t.shoppingCart.length;r++){var a=t.shoppingCart[r];if(!a.check)return e=!1,e}return e},getCheckGoods:function(t){for(var e=[],r=0;r<t.shoppingCart.length;r++){var a=t.shoppingCart[r];a.check&&e.push(a)}return e},getCheckNum:function(t){for(var e=0,r=0;r<t.shoppingCart.length;r++){var a=t.shoppingCart[r];a.check&&(e+=a.num)}return e},getTotalPrice:function(t){for(var e=0,r=0;r<t.shoppingCart.length;r++){var a=t.shoppingCart[r];a.check&&(e+=a.price*a.num)}return e}},mutations:{setShoppingCart:function(t,e){t.shoppingCart=e},unshiftShoppingCart:function(t,e){t.shoppingCart.unshift(e)},updateShoppingCart:function(t,e){if("num"==e.prop){if(t.shoppingCart[e.key].maxNum<e.val)return;if(e.val<1)return}t.shoppingCart[e.key][e.prop]=e.val},addShoppingCartNum:function(t,e){for(var r=0;r<t.shoppingCart.length;r++){var a=t.shoppingCart[r];a.productId==e&&a.num<a.maxNum&&a.num++}},deleteShoppingCart:function(t,e){for(var r=0;r<t.shoppingCart.length;r++){var a=t.shoppingCart[r];a.id==e&&t.shoppingCart.splice(r,1)}},checkAll:function(t,e){for(var r=0;r<t.shoppingCart.length;r++)t.shoppingCart[r].check=e}},actions:{setShoppingCart:function(t,e){var r=t.commit;r("setShoppingCart",e)},unshiftShoppingCart:function(t,e){var r=t.commit;r("unshiftShoppingCart",e)},updateShoppingCart:function(t,e){var r=t.commit;r("updateShoppingCart",e)},addShoppingCartNum:function(t,e){var r=t.commit;r("addShoppingCartNum",e)},deleteShoppingCart:function(t,e){var r=t.commit;r("deleteShoppingCart",e)},checkAll:function(t,e){var r=t.commit;r("checkAll",e)}}});a["default"].use(o["a"]);var F=new o["a"].Store({strict:!0,modules:{user:k,shoppingCart:y}}),x=r("bd0c"),S=r.n(x),w=r("96eb"),C=r.n(w);C.a.mock("/api/resources/carousel",{ret:0,data:[{mitme:"@datatime","score|1-800":1,"rank|1-100":1,"stars|1-5":1,nickname:"@cname",Path:"NiaoKan.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','FastMock')"},{mitme:"@datatime","score|1-800":1,"rank|1-100":1,"stars|1-5":1,nickname:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{mitme:"@datatime","score|1-800":1,"rank|1-100":1,"stars|1-5":1,nickname:"@cname",Path:"SheJi.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{mitme:"@datatime","score|1-800":1,"rank|1-100":1,"stars|1-5":1,nickname:"@cname",Path:"ShiJing.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"}]}),C.a.mock("/api/user/token",{code:"001",ret:0,data:{mitme:"@datatime","score|1-800":1,"rank|1-100":1,"stars|1-5":1,nickname:"@cname",img:"@image('200x100','#ffcc33','#FFF','png','FastMock')"}}),C.a.mock("/api/product/category/limit/1",{data:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"}]}),C.a.mock("/api/product/category/limit/2",{data:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"}]}),C.a.mock("/api/product/category/limit/5",{data:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"}]}),C.a.mock("/api/product/category/limit/7",{data:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"}]}),C.a.mock("/api/product/category/hot",{data:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"}]}),C.a.mock("/api/home/info",{data:[{InfoId:1,shape:"circle",Title:"“石家庄福缘护理院”坐落于风景秀丽的福瑞祥合颐养园，位于元氏县马村镇聊村村西，北距石家庄市区15公里，东临红旗大街南延线，西临南水北调水渠。\n",Path:"img.png",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{InfoId:2,shape:"circle",Title:"杨瑞珍, 女, 75岁石家庄市元氏县人，1945年10月出生大专学历，2007年创建福瑞祥合燃料有限公司，任公司董事长。公司董事长杨瑞珍，是一个具有社会情怀的企业家，投资2亿元建成了“福瑞祥合颐养园”另外计划投资5亿元，建成容纳1500户老人家庭，与医院、护理院、养老院三位一体，形成医养、颐养、乐养相结合的康复养老大型示范院区。\n",Path:"img_1.png",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{InfoId:3,shape:"square",Title:"石家庄福缘护理院已按照2011年原国家卫计委下发了关于印发《护理院基本标准（2011版）》的要求，对经营用房进行了无障碍设计改造，卫生间增加了防滑扶手配置，紧急呼叫器等，单独的洗澡间放置了行动受限老人专用的洗澡椅和洗澡床。护理院一共41间病房，100张床位，每个都配备了独立卫生间、储藏柜、床头柜、还有治疗带、呼叫器、中央空调、24小时热水;部分房间配备了多功能护理床、防治压疮功能液晶电视;护理院还有一个康复治疗厅，一个康复大厅;大楼北侧是小型景观花园，树木花草繁茂，设置无障碍甬道，供病患者散步活动，石家庄福缘护理院配备专业人员，达到执业的标准。\n",Path:"img_3.png",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"}]}),C.a.mock("/api/category",{data:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')",categoryId:1,categoryName:"小米"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')",categoryId:2,categoryName:"苹果"}]}),C.a.mock("/api/product/page/1/5/0",{data:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,productId:1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,productId:2,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,productId:3,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,productId:4,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,productId:5,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"}]}),C.a.mock("/api/product/page/1/5/1",{data:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,productId:1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,productId:2,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,productId:3,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"}]}),C.a.mock("/api/product/page/1/5/2",{data:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,productId:1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,productId:2,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')"}]}),C.a.mock("/api/product/getProductBySearch",{total:16,Product:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')",categoryId:1,categoryName:"小米"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')",categoryId:2,categoryName:"华为"}]}),C.a.mock("/goods",{total:16,Product:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')",categoryId:1,categoryName:"小米"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')",categoryId:2,categoryName:"华为"}]}),C.a.mock("/seckill/product/time",{total:16,Product:[{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')",categoryId:1,categoryName:"小米"},{productTitle:"@datatime","productSellingPrice|200-800":1,"productPrice|50-100":1,"productId|1-5":1,productName:"@cname",Path:"Farm.jpg",imgPath:"@image('200x100','#ffcc33','#FFF','png','22222')",categoryId:2,categoryName:"华为"}]});var j=r("5c96"),_=r.n(j),I=(r("0fae"),r("379d")),O=r.n(I),N=r("bc3a"),T=r.n(N),E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myMenu",attrs:{id:"myMenu"}},[r("ul",t._l(t.val,(function(e){return r("li",{key:e,class:t.activeClass==e?"active":"",on:{mouseover:function(r){return t.mouseover(r,e)}}},[r("router-link",{attrs:{to:""}},[t._t(e)],2)],1)})),0)])},$=[],L={props:["val"],name:"MyMenu",data:function(){return{activeClass:1}},methods:{mouseover:function(t,e){this.activeClass=e}},watch:{activeClass:function(t){this.$emit("fromChild",t)}}},U=L,R=(r("7638"),Object(l["a"])(U,E,$,!1,null,"81ddc6ce",null)),D=R.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myList",attrs:{id:"myList"}},[r("ul",t._l(t.list,(function(e){return r("li",{key:e.productId},[r("el-popover",{attrs:{placement:"top"}},[r("p",[t._v("确定删除吗？")]),r("div",{staticStyle:{"text-align":"right",margin:"10px 0 0"}},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.deleteCollect(e.productId)}}},[t._v("确定")])],1),r("i",{directives:[{name:"show",rawName:"v-show",value:t.isDelete,expression:"isDelete"}],staticClass:"el-icon-close delete",attrs:{slot:"reference"},slot:"reference"})]),r("router-link",{attrs:{to:{path:"/goods/details",query:{productID:e.productId}}}},[r("img",{attrs:{src:t.$target+e.productPicture,alt:""}}),r("h2",[t._v(t._s(e.productName))]),r("h3",[t._v(t._s(e.productTitle))]),r("p",[r("span",[t._v(t._s(e.productSellingPrice)+"元")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.productPrice!=e.productSellingPrice,expression:"item.productPrice != item.productSellingPrice"}],staticClass:"del"},[t._v(t._s(e.productPrice)+"元")])])])],1)})),0)])},M=[],A=(r("caad"),{name:"MyList",props:["list","isMore","isDelete"],data:function(){return{}},computed:{categoryID:function(){var t=[];if(""!=this.list)for(var e=0;e<this.list.length;e++){var r=this.list[e].category_id;t.includes(r)||t.push(r)}return t}},methods:{deleteCollect:function(t){var e=this;this.$axios.delete("/api/collect/user/"+t+"/"+this.$store.getters.getUser.userId).then((function(r){switch(r.data.code){case"001":for(var a=0;a<e.list.length;a++){var n=e.list[a];n.productId==t&&e.list.splice(a,1)}e.notifySucceed(r.data.msg);break;default:e.notifyError(r.data.msg)}})).catch((function(t){return Promise.reject(t)}))}}}),q=A,K=(r("85d6"),Object(l["a"])(q,z,M,!1,null,"7acf0840",null)),Z=K.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myList",attrs:{id:"myList"}},[r("ul",t._l(t.list,(function(e){return r("li",{key:e.productId},[r("el-popover",{attrs:{placement:"top"}},[r("p",[t._v("确定删除吗？")]),r("div",{staticStyle:{"text-align":"right",margin:"10px 0 0"}},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.deleteCollect(e.productId)}}},[t._v("确定")])],1),r("i",{directives:[{name:"show",rawName:"v-show",value:t.isDelete,expression:"isDelete"}],staticClass:"el-icon-close delete",attrs:{slot:"reference"},slot:"reference"})]),r("router-link",{attrs:{to:{path:"/goods/seckillDetails",query:{seckillID:e.seckillId,productID:e.productId}}}},[r("img",{attrs:{src:t.$target+e.productPicture,alt:""}}),r("h2",[t._v(t._s(e.productName))]),r("h3",[t._v(t._s(e.productTitle))]),r("p",[r("span",[t._v(t._s(e.seckillPrice)+"元")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.productPrice!=e.productSellingPrice,expression:"item.productPrice != item.productSellingPrice"}],staticClass:"del"},[t._v(t._s(e.productPrice)+"元")])])])],1)})),0)])},B=[],H={name:"MySeckillList",props:["list","isMore","isDelete"],data:function(){return{}},computed:{categoryID:function(){var t=[];if(""!=this.list)for(var e=0;e<this.list.length;e++){var r=this.list[e].category_id;t.includes(r)||t.push(r)}return t}},methods:{deleteCollect:function(t){var e=this;this.$axios.delete("/api/collect/user/"+t+"/"+this.$store.getters.getUser.userId).then((function(r){switch(r.data.code){case"001":for(var a=0;a<e.list.length;a++){var n=e.list[a];n.productId==t&&e.list.splice(a,1)}e.notifySucceed(r.data.msg);break;default:e.notifyError(r.data.msg)}})).catch((function(t){return Promise.reject(t)}))}}},J=H,G=(r("6bb8"),Object(l["a"])(J,X,B,!1,null,"3b4626e4",null)),Y=G.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"myLogin"}},[r("el-dialog",{attrs:{title:"登录",width:"300px",center:"",visible:t.isLogin},on:{"update:visible":function(e){t.isLogin=e}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.LoginUser,rules:t.rules,"status-icon":""}},[r("el-form-item",{attrs:{prop:"name"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",placeholder:"请输入账号"},model:{value:t.LoginUser.name,callback:function(e){t.$set(t.LoginUser,"name",e)},expression:"LoginUser.name"}})],1),r("el-form-item",{attrs:{prop:"pass"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-view",type:"password",placeholder:"请输入密码"},model:{value:t.LoginUser.pass,callback:function(e){t.$set(t.LoginUser,"pass",e)},expression:"LoginUser.pass"}})],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{size:"medium",type:"primary"},on:{click:t.Login}},[t._v("登录")])],1)],1)],1)],1)},V=[];function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function tt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var et={name:"MyLogin",data:function(){var t=this,e=function(e,r,a){if(!r)return a(new Error("请输入用户名"));var n=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;return n.test(r)?(t.$refs.ruleForm.validateField("checkPass"),a()):a(new Error("字母开头,长度5-16之间,允许字母数字下划线"))},r=function(e,r,a){if(""===r)return a(new Error("请输入密码"));var n=/^[a-zA-Z]\w{5,17}$/;return n.test(r)?(t.$refs.ruleForm.validateField("checkPass"),a()):a(new Error("字母开头,长度6-18之间,允许字母数字和下划线"))};return{LoginUser:{name:"",pass:""},rules:{name:[{validator:e,trigger:"blur"}],pass:[{validator:r,trigger:"blur"}]}}},computed:{isLogin:{get:function(){return this.$store.getters.getShowLogin},set:function(t){this.$refs["ruleForm"].resetFields(),this.setShowLogin(t)}}},methods:tt({},Object(o["b"])(["setUser","setShowLogin"]),{Login:function(){var t=this;this.$refs["ruleForm"].validate((function(e){if(!e)return!1;t.$axios.post("/api/user/login",{username:t.LoginUser.name,password:t.LoginUser.pass}).then((function(e){"001"===e.data.code?(t.isLogin=!1,t.setUser(e.data.data),t.notifySucceed(e.data.msg)):(t.$refs["ruleForm"].resetFields(),t.notifyError(e.data.msg))})).catch((function(t){return Promise.reject(t)}))}))}})},rt=et,at=Object(l["a"])(rt,Q,V,!1,null,null,null),nt=at.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"register"}},[r("el-dialog",{attrs:{title:"注册",width:"300px",center:"",visible:t.isRegister},on:{"update:visible":function(e){t.isRegister=e}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.RegisterUser,rules:t.rules,"status-icon":""}},[r("el-form-item",{attrs:{prop:"name"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user-solid",placeholder:"请输入账号"},model:{value:t.RegisterUser.name,callback:function(e){t.$set(t.RegisterUser,"name",e)},expression:"RegisterUser.name"}})],1),r("el-form-item",{attrs:{prop:"pass"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-view",type:"password",placeholder:"请输入密码"},model:{value:t.RegisterUser.pass,callback:function(e){t.$set(t.RegisterUser,"pass",e)},expression:"RegisterUser.pass"}})],1),r("el-form-item",{attrs:{prop:"confirmPass"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-view",type:"password",placeholder:"请再次输入密码"},model:{value:t.RegisterUser.confirmPass,callback:function(e){t.$set(t.RegisterUser,"confirmPass",e)},expression:"RegisterUser.confirmPass"}})],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{size:"medium",type:"primary"},on:{click:t.Register}},[t._v("注册")])],1)],1)],1)],1)},ct=[],ot={name:"MyRegister",props:["register"],data:function(){var t=this,e=function(e,r,a){if(!r)return a(new Error("请输入用户名"));var n=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;if(!n.test(r))return a(new Error("字母开头,长度5-16之间,允许字母数字下划线"));t.$axios.get("/api/user/username/"+t.RegisterUser.name).then((function(e){return"001"==e.data.code?(t.$refs.ruleForm.validateField("checkPass"),a()):a(new Error(e.data.msg))})).catch((function(t){return Promise.reject(t)}))},r=function(e,r,a){if(""===r)return a(new Error("请输入密码"));var n=/^[a-zA-Z]\w{5,17}$/;return n.test(r)?(t.$refs.ruleForm.validateField("checkPass"),a()):a(new Error("字母开头,长度6-18之间,允许字母数字和下划线"))},a=function(e,r,a){return""===r?a(new Error("请输入确认密码")):""!=t.RegisterUser.pass&&r===t.RegisterUser.pass?(t.$refs.ruleForm.validateField("checkPass"),a()):a(new Error("两次输入的密码不一致"))};return{isRegister:!1,RegisterUser:{name:"",pass:"",confirmPass:""},rules:{name:[{validator:e,trigger:"blur"}],pass:[{validator:r,trigger:"blur"}],confirmPass:[{validator:a,trigger:"blur"}]}}},watch:{register:function(t){t&&(this.isRegister=t)},isRegister:function(t){t||(this.$refs["ruleForm"].resetFields(),this.$emit("fromChild",t))}},methods:{Register:function(){var t=this;this.$refs["ruleForm"].validate((function(e){if(!e)return!1;t.$axios.post("/api/user/register",{username:t.RegisterUser.name,password:t.RegisterUser.pass}).then((function(e){"001"===e.data.code?(t.isRegister=!1,t.notifySucceed(e.data.msg)):t.notifyError(e.data.msg)})).catch((function(t){return Promise.reject(t)}))}))}}},st=ot,ut=Object(l["a"])(st,it,ct,!1,null,null,null),pt=ut.exports;a["default"].use(_.a),a["default"].use(S.a,{ak:"YOUR_APP_KEY"}),a["default"].use(O.a),a["default"].prototype.$axios=T.a,T.a.interceptors.request.use((function(t){return t}),(function(t){return b.push({path:"/error"}),Promise.reject(t)})),T.a.interceptors.response.use((function(t){return"401"===t.data.code&&(a["default"].prototype.notifyError(t.data.msg),F.dispatch("setShowLogin",!0)),"500"===t.data.code&&b.push({path:"/error"}),t}),(function(t){return b.push({path:"/error"}),Promise.reject(t)})),b.beforeResolve((function(t,e,r){var a=document.cookie.match(new RegExp("(^| )XM_TOKEN=([^;]*)(;|$)"));if(t.meta.requireAuth&&!a)return F.dispatch("setShowLogin",!0),null==e.name?void r("/"):void r(!1);r()})),b.beforeEach((function(t,e,r){t.meta.title&&(document.title=t.meta.title),r()})),a["default"].filter("dateFormat",(function(t){var e=new Date(t);function r(t){return t<10&&(t="0"+t),t}var a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate(),c=e.getHours(),o=e.getMinutes(),s=e.getSeconds();return a+"-"+r(n)+"-"+r(i)+" "+r(c)+":"+r(o)+":"+r(s)})),a["default"].component(D.name,D),a["default"].component(Z.name,Z),a["default"].component(Y.name,Y),a["default"].component(nt.name,nt),a["default"].component(pt.name,pt),a["default"].config.productionTip=!1,new a["default"]({router:b,store:F,render:function(t){return t(g)}}).$mount("#app")},"6bb8":function(t,e,r){"use strict";var a=r("f5b1"),n=r.n(a);n.a},7638:function(t,e,r){"use strict";var a=r("3316"),n=r.n(a);n.a},"85d6":function(t,e,r){"use strict";var a=r("3f84"),n=r.n(a);n.a},"85ec":function(t,e,r){},9318:function(t,e,r){t.exports=r.p+"img/home.56aefe6f.jpg"},e835:function(t,e,r){t.exports=r.p+"img/logo.3d9a9fb6.jpg"},f5b1:function(t,e,r){}});
//# sourceMappingURL=app.d78bf0f4.js.map