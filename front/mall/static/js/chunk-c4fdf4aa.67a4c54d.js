(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4fdf4aa"],{"04cd":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-nav-bar"},[i("van-icon",{staticStyle:{padding:"12px 0 12px 12px"},attrs:{size:"16",name:"arrow-left"},on:{click:function(e){return t.$router.back()}}}),i("van-search",{staticStyle:{width:"100%"},attrs:{placeholder:t.defaultSearch,"show-action":"",clearable:"",autofocus:"",shape:"round"},on:{search:t.onSearch,cancel:function(e){return t.$router.back()}},scopedSlots:t._u([{key:"action",fn:function(){return[i("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)},a=[],n=(i("498a"),i("cf1e")),r=i.n(n),o={props:{value:{type:String,default:""},defaultSearch:{type:String,default:""}},computed:{variables:function(){return r.a},keyword:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{onSearch:function(){var t=this.keyword.trim()||this.defaultSearch.trim();t?(this.$store.dispatch("search/setKey",t),this.$emit("handleSearch",t)):this.$toast("请输入要搜索内容")}}},c=o,l=(i("9bc7"),i("2877")),h=Object(l["a"])(c,s,a,!1,null,"3603b241",null);e["a"]=h.exports},1925:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var s=i("b775");function a(){return Object(s["a"])({url:"/search/hotKeywords",method:"get"})}function n(t){return Object(s["a"])({url:"/search/result",method:"get",params:t})}},"276c":function(t,e,i){},"3daf":function(t,e,i){},"42fe":function(t,e,i){"use strict";i("7d90")},"498a":function(t,e,i){"use strict";var s=i("23e7"),a=i("58a8").trim,n=i("c8d2");s({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},"745b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-list"},[i("nav-bar",{on:{handleSearch:t.handleSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),i("filter-bar",{on:{changeGoods:function(e){return t.changeGoods(e)}}}),i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onReachBottom},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("div",{staticClass:"main"},t._l(t.list,(function(t,e){return i("goods-item",{key:e,attrs:{"goods-id":t.id,img:t.picUrl,title:t.name,desc:t.brief,price:t.retailPrice,discount:t.counterPrice}})})),1)]),t.list&&t.list.length<=0?i("van-empty",{attrs:{description:"没有搜索到商品"}}):t._e()],1)},a=[],n=i("2909"),r=(i("d81d"),i("99af"),i("ac1f"),i("5319"),i("841c"),i("1925")),o=i("04cd"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-filter"},[i("van-dropdown-menu",{staticStyle:{flex:"1"}},[i("van-dropdown-item",{attrs:{options:t.option1},on:{change:t.change1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),i("div",{staticClass:"filter",on:{click:t.chageSales}},[i("span",{staticStyle:{"font-size":"15px","margin-right":"2px"}},[t._v("销量")])]),i("div",{staticClass:"filter",on:{click:t.changeFaIcon}},[i("span",{staticStyle:{"font-size":"15px","margin-right":"2px"}},[t._v("价格")]),i("font-awesome-icon",{attrs:{icon:t.faDefault,size:"3x"}})],1),i("van-dropdown-menu",{staticStyle:{flex:"0.5"}},[i("van-dropdown-item",{ref:"item",attrs:{title:"筛选"}},[i("van-cell",{attrs:{center:"",title:"新品"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-switch",{attrs:{size:"24"},on:{change:t.filterNew},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}})]},proxy:!0}])}),i("van-cell",{attrs:{center:"",title:"热品"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-switch",{attrs:{size:"24"},on:{change:t.filterHot},model:{value:t.switch2,callback:function(e){t.switch2=e},expression:"switch2"}})]},proxy:!0}])})],1)],1)],1)},l=[],h={data:function(){return{value1:"",switch1:!1,switch2:!1,option1:[{text:"综合推荐",value:""},{text:"新品上架",value:"isNew"},{text:"人气推荐",value:"isHot"}],faDefault:["fas","sort"],faSort:["fas","sort"],faSortUp:["fas","sort-up"],faSortDown:["fas","sort-down"],faCount:0}},methods:{change1:function(t){this.$emit("changeGoods",{search:t})},changeFaIcon:function(){this.faCount++,3===this.faCount&&(this.faCount=0),0===this.faCount?(this.$emit("changeGoods",{search:"cancelPrice"}),this.faDefault=this.faSort):1===this.faCount?(this.$emit("changeGoods",{search:"price",orderBy:"asc"}),this.faDefault=this.faSortUp):2===this.faCount&&(this.faDefault=this.faSortDown,this.$emit("changeGoods",{search:"price",orderBy:"desc"}))},chageSales:function(){this.$emit("changeGoods",{search:"isSales"})},filterNew:function(t){t?this.$emit("changeGoods",{search:"filterNew",val:!0}):this.$emit("changeGoods",{search:"filterNew",val:!1})},filterHot:function(t){t?this.$emit("changeGoods",{search:"filterHot",val:!0}):this.$emit("changeGoods",{search:"filterHot",val:!1})}}},u=h,f=(i("42fe"),i("d0e5"),i("2877")),d=Object(f["a"])(u,c,l,!1,null,"21614440",null),p=d.exports,g=i("e399"),v={name:"SearchList",components:{NavBar:o["a"],FilterBar:p,GoodsItem:g["a"]},data:function(){return{value:"",list:[],pageSize:10,pageNum:1,keyword:"",isNew:!1,isHot:!1,isPrice:!1,isSales:!1,filterNew:!1,filterHot:!1,loading:!1,finished:!1,isSkeletonShow:!0}},mounted:function(){this.$toast.loading({message:"加载中...",forbidClick:!0,overlay:!0,duration:0});var t=this.$route.query.keyword;this.value=t,this.keyword=t,this.getList()},methods:{onReachBottom:function(){this.pageNum+=1,this.getList()},getList:function(){var t=this;Object(r["b"])({pageSize:this.pageSize,pageNum:this.pageNum,keyword:this.keyword,isNew:this.isNew,isHot:this.isHot,isPrice:this.isPrice,isSales:this.isSales,filterNew:this.filterNew,filterHot:this.filterHot}).then((function(e){var i=e.map.goods;t.list=[].concat(Object(n["a"])(t.list),Object(n["a"])(i)),t.loading=!1,i.length<t.pageNum&&t.list.length>0&&(t.finished=!0),t.$toast.clear()}))},handleSearch:function(t){this.$router.replace({path:"/search/list",query:{keyword:t,t:+new Date}})},changeGoods:function(t){var e=this;"filterNew"===t["search"]&&(this.filterNew=t["val"],this.pageNum=1),"filterHot"===t["search"]&&(this.filterHot=t["val"],this.pageNum=1),"filterNew"!==t["search"]&&"filterHot"!==t["search"]&&this.reset(),"isNew"===t["search"]?this.isNew=!0:"isHot"===t["search"]?this.isHot=!0:"price"===t["search"]?(this.isPrice=!0,this.orderBy=t["orderBy"]):"isSales"===t["search"]?this.isSales=!0:"cancelPrice"===t["search"]&&(this.isPrice=!1,this.orderBy=""),Object(r["b"])({pageSize:this.pageSize,pageNum:this.pageNum,keyword:this.keyword,isNew:this.isNew,isHot:this.isHot,isPrice:this.isPrice,isSales:this.isSales,orderBy:this.orderBy,filterNew:this.filterNew,filterHot:this.filterHot}).then((function(t){var i=t.map.goods;e.list=Object(n["a"])(i),e.loading=!1,i.length<e.pageNum&&e.list.length>0&&(e.finished=!0),e.$toast.clear()}))},reset:function(){this.pageSize=10,this.pageNum=1,this.isNew=!1,this.isHot=!1,this.isPrice=!1,this.isSales=!1,this.finished=!1}}},m=v,w=(i("b172"),Object(f["a"])(m,s,a,!1,null,"6b8d627a",null));e["default"]=w.exports},"7d90":function(t,e,i){},"99af":function(t,e,i){"use strict";var s=i("23e7"),a=i("da84"),n=i("d039"),r=i("e8b5"),o=i("861d"),c=i("7b0b"),l=i("07fa"),h=i("8418"),u=i("65f0"),f=i("1dde"),d=i("b622"),p=i("2d00"),g=d("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",w=a.TypeError,S=p>=51||!n((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!o(t))return!1;var e=t[g];return void 0!==e?!!e:r(t)},k=!S||!b;s({target:"Array",proto:!0,forced:k},{concat:function(t){var e,i,s,a,n,r=c(this),o=u(r,0),f=0;for(e=-1,s=arguments.length;e<s;e++)if(n=-1===e?r:arguments[e],y(n)){if(a=l(n),f+a>v)throw w(m);for(i=0;i<a;i++,f++)i in n&&h(o,f,n[i])}else{if(f>=v)throw w(m);h(o,f++,n)}return o.length=f,o}})},"9bc7":function(t,e,i){"use strict";i("3daf")},b172:function(t,e,i){"use strict";i("276c")},c4dd:function(t,e,i){"use strict";i("ed0f")},c8d2:function(t,e,i){var s=i("5e77").PROPER,a=i("d039"),n=i("5899"),r="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||r[t]()!==r||s&&n[t].name!==t}))}},cdb1:function(t,e,i){},d0e5:function(t,e,i){"use strict";i("cdb1")},e399:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"goods-item",on:{click:t.onNavigate}},[i("div",{staticClass:"pic"},[i("image-pic",{attrs:{fill:"cover",align:"center",width:"180",height:"180",src:t.img}})],1),i("p",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{staticClass:"num"},[i("span",{staticClass:"num__now"},[t._v("¥"+t._s(t._f("yuan")(t.price)))]),i("span",{staticClass:"num__old"},[t._v("¥"+t._s(t._f("yuan")(t.discount)))])])])},a=[],n={props:["goodsId","img","title","desc","price","discount"],methods:{onNavigate:function(){this.$router.push({path:"/detail/".concat(this.goodsId)})}}},r=n,o=(i("c4dd"),i("2877")),c=Object(o["a"])(r,s,a,!1,null,"d15835b0",null);e["a"]=c.exports},ed0f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-c4fdf4aa.67a4c54d.js.map