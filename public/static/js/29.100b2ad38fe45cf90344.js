webpackJsonp([29],{"3AdP":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"newsDetails",components:{Header:n("qmpX").a},data:function(){return{conentr:[]}},methods:{getData:function(){var t=this,e=this.$route.query.newsId;this.$axios.post("notices",{id:e}).then(function(e){t.conentr=e.data.data})}},created:function(){this.getData()}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"conent"},t._l(t.conentr,function(e){return n("div",{attrs:{id:"appp"}},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("h5",[t._v(t._s(e.createTime))]),t._v(" "),n("div",{domProps:{textContent:t._s(e.content)}})])}))],1)},staticRenderFns:[]};var r=n("VU/8")(a,i,!1,function(t){n("82CK")},"data-v-3532b2d1",null);e.default=r.exports},"82CK":function(t,e){}});
//# sourceMappingURL=29.100b2ad38fe45cf90344.js.map