webpackJsonp([3],{QRtT:function(t,e){},yWI1:function(t,e){},zpJy:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Dd8w"),r=o.n(n),i={name:"add",components:{editor:o("cnC7").a},data:function(){return{form:{title:"",author:"",contentText:"",content:""}}},methods:{getMsg:function(){var t=this,e={id:this.$route.query.id};this.$axios.post("getNotices",e).then(function(e){console.log(e),t.form=e.data[0]})},postForm:function(){var t=this,e=this.form;console.log(e),this.$axios.post("addNotices",e).then(function(e){200==e.code?t.$message({message:"添加成功",type:"success"}):t.$message.error("添加失败")}),this.$router.push("/notices")},updateForm:function(){var t=this.$route.query.id,e=r()({},this.form,{id:t});this.$axios.post("updateNotices",e).then(function(t){}),this.$router.push("/notice")},getText:function(t){this.form.contentText=t}},watch:{$route:function(){this.form={title:"",contentText:"",content:"",author:""}}},mounted:function(){"通知编辑页"==this.$route.name&&this.getMsg()}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"addNews"},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"新闻标题"}},[o("el-input",{staticStyle:{width:"50%"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"发布单位"}},[o("el-input",{staticStyle:{width:"50%"},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"主体内容"}},[o("editor",{on:{getText:t.getText},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),o("el-form-item",["通知添加页"==this.$route.name?o("el-button",{attrs:{type:"primary"},on:{click:t.postForm}},[t._v("添加")]):t._e(),t._v(" "),"通知编辑页"==this.$route.name?o("el-button",{attrs:{type:"primary"},on:{click:t.updateForm}},[t._v("保存并添加")]):t._e()],1)],1)],1)},staticRenderFns:[]};var a=o("VU/8")(i,s,!1,function(t){o("yWI1"),o("QRtT")},"data-v-434953d3",null);e.default=a.exports}});
//# sourceMappingURL=3.5431b3ae6f1860ea4156.js.map