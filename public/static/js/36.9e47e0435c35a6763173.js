webpackJsonp([36],{KPRc:function(t,a){},cX3S:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={name:"Sixiang",components:{Header:e("qmpX").a},data:function(){return{zhuangtai:"",img:"",reason:"",userId:"",useId:""}},methods:{gedata:function(){var t=this;this.$axios.get("getDiscuss").then(function(a){console.log(a),t.userId=a.data.data._id})},geddata:function(){var t=this;this.$axios.post("users").then(function(a){console.log(a),t.useId=a.data.data[0].userId})},getdata:function(){var t=this;this.$axios.post("getOther",{discussId:this.userId,otherUserId:this.useId}).then(function(a){console.log(a),t.zhuangtai=a.data.data.state,t.img=a.data.data.pic,t.reason=a.data.data.reason})},close:function(){0==this.zhuangtai&&this.$router.push("/minzhu")},closen:function(){this.$router.push("/tijiao2")}},mounted:function(){this.getdata(),this.gedata(),this.geddata()},watch:{userId:function(){this.getdata()},useId:function(){this.getdata()}}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Header"),t._v(" "),s("div",{staticClass:"conent"},[s("div",{staticClass:"item-img"},[1==t.zhuangtai||2==t.zhuangtai?s("div",{staticClass:"wei"},[s("img",{attrs:{src:t.img,alt:""}}),t._v("\n        "+t._s(t.reason)+"\n      ")]):t._e(),t._v(" "),0==t.zhuangtai?s("img",{attrs:{src:e("KIkm"),alt:""}}):t._e(),t._v(" "),1==t.zhuangtai?s("img",{attrs:{src:e("LPeG"),alt:""}}):t._e(),t._v(" "),2==t.zhuangtai?s("img",{attrs:{src:e("yb+a"),alt:""}}):t._e()]),t._v(" "),0==t.zhuangtai?s("p",[t._v("正在审核中")]):t._e(),t._v(" "),1==t.zhuangtai?s("p",[t._v("审核通过")]):t._e(),t._v(" "),2==t.zhuangtai?s("p",[t._v("审核未通过")]):t._e(),t._v(" "),s("div",[0==t.zhuangtai?s("mt-button",{attrs:{size:"large"},on:{click:t.close}},[t._v("关闭")]):t._e(),t._v(" "),1==t.zhuangtai||2==t.zhuangtai?s("mt-button",{attrs:{size:"large"},on:{click:t.closen}},[t._v("再次提交")]):t._e()],1)])],1)},staticRenderFns:[]};var n=e("VU/8")(s,i,!1,function(t){e("KPRc")},"data-v-072baf62",null);a.default=n.exports}});
//# sourceMappingURL=36.9e47e0435c35a6763173.js.map