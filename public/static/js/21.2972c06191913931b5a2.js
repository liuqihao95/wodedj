webpackJsonp([21],{GYHZ:function(e,t){},aJl2:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"newsDetails",components:{Header:i("qmpX").a},data:function(){return{cid:"",sex:"",nid:"",pic:""}},methods:{getData:function(){var e=this,t=this.$route.query.newsId;this.$axios.post("getOther",{discussId:this.cid,otherUserId:t}).then(function(t){console.log(t),e.nid=t.data.data._id,e.pic=t.data.data.pic,console.log(e.nid)})},gat:function(){var e=this;this.$axios.get("getDiscuss").then(function(t){e.cid=t.data.data._id}),this.getData()},pingyi:function(){var e=this;this.$axios.post("addSummary",{id:this.nid,content:this.sex}).then(function(t){confirm(t.data.msg),e.$router.push("/canpingyiyuan")})}},watch:{cid:function(){this.getData()},sex:function(){console.log(this.sex)}},created:function(){this.gat()}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Header"),e._v(" "),i("div",{staticClass:"conent"},[i("div",{attrs:{id:"apppp"}},[i("h1",[e._v("个人总结")]),e._v(" "),i("div",[i("img",{attrs:{src:e.pic,alt:""}})]),e._v(" "),i("div",{staticClass:"foe"},[i("form",[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{id:"item1",type:"radio",name:"item",value:"0"},domProps:{checked:e._q(e.sex,"0")},on:{change:function(t){e.sex="0"}}}),e._v(" "),i("label",{attrs:{for:"item1"}}),e._v(" "),i("span",[e._v("优")])]),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{id:"item2",type:"radio",name:"item",value:"1"},domProps:{checked:e._q(e.sex,"1")},on:{change:function(t){e.sex="1"}}}),e._v(" "),i("label",{attrs:{for:"item2"}}),e._v(" "),i("span",[e._v("良")])]),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{id:"item3",type:"radio",name:"item",value:"2"},domProps:{checked:e._q(e.sex,"2")},on:{change:function(t){e.sex="2"}}}),e._v(" "),i("label",{attrs:{for:"item3"}}),e._v(" "),i("span",[e._v("中")])]),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{id:"item4",type:"radio",name:"item",value:"3"},domProps:{checked:e._q(e.sex,"3")},on:{change:function(t){e.sex="3"}}}),e._v(" "),i("label",{attrs:{for:"item4"}}),e._v(" "),i("span",[e._v("差")])]),e._v(" "),i("input",{attrs:{type:"submit",value:"提交",id:"in"},on:{click:e.pingyi}})])])])])],1)},staticRenderFns:[]};var n=i("VU/8")(a,s,!1,function(e){i("GYHZ")},"data-v-835f3a2e",null);t.default=n.exports}});
//# sourceMappingURL=21.2972c06191913931b5a2.js.map