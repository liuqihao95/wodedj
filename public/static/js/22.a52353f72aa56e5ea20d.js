webpackJsonp([22],{"40Dt":function(t,i){},TywD:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={components:{Header:n("qmpX").a},data:function(){return{info:{},info1:[],content:""}},methods:{getData:function(){var t=this,i=this.$route.query.newsId;this.$axios.post("carget",{id:i}).then(function(i){console.log(i),t.info=i.data.data[0]})},huode:function(){var t=this;this.$axios.get("getReply",{parentId:this.info._id}).then(function(i){console.log(i),t.info1=i.data.dt})},pinglun:function(){var t=this;this.$axios.post("addReply",{parentId:this.info._id,toUserId:this.info.userId,content:this.content}).then(function(i){console.log(i),t.$router.go(0)})}},created:function(){this.getData()},watch:{info:function(){this.huode()}}},e={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"conent"},[n("div",{attrs:{id:"apppi"}},[n("ul",[n("li",[n("div",{staticClass:"lili"},[n("div",{staticClass:"li-left"},[n("img",{attrs:{src:t.info.userImg,alt:""}})]),t._v(" "),n("div",{staticClass:"li-right"},[n("p",[t._v(t._s(t.info.userName))]),t._v(" "),n("p",[n("i",{staticClass:"iconfont icon-shijian"}),n("span",[t._v(t._s(t.info.updatedAt))])])])]),t._v(" "),n("div",{staticClass:"conn"},[t._v(t._s(t.info.content))])]),t._v(" "),t._l(t.info1,function(i){return n("li",[n("div",{staticClass:"lili"},[n("div",{staticClass:"li-left"},[n("img",{attrs:{src:i.userImg,alt:""}})]),t._v(" "),n("div",{staticClass:"li-right"},[n("p",[t._v(t._s(i.userName))]),t._v(" "),n("p",[n("i",{staticClass:"iconfont icon-shijian"}),n("span",[t._v(t._s(i.updatedAt))])])])]),t._v(" "),n("div",{staticClass:"conn"},[t._v(t._s(i.content))])])})],2),t._v(" "),n("div",{staticClass:"ping"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",placeholder:"评论内容",id:"pim"},domProps:{value:t.content},on:{input:function(i){i.target.composing||(t.content=i.target.value)}}}),t._v(" "),n("input",{attrs:{type:"button",value:"评论",id:"pinglun"},on:{click:t.pinglun}})])])])],1)},staticRenderFns:[]};var a=n("VU/8")(s,e,!1,function(t){n("40Dt")},"data-v-6e9659c6",null);i.default=a.exports}});
//# sourceMappingURL=22.a52353f72aa56e5ea20d.js.map