webpackJsonp([1],{"0EsY":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Dd8w"),a=s.n(o),i={name:"add",data:function(){return{form:{title:"",img:"",num:""},token:""}},methods:{getMsg:function(){var t=this,e={id:this.$route.query.id};this.$axios.post("getNewsType",e).then(function(e){t.form=e.data[0]})},postForm:function(){var t=this,e=this.form;this.$axios.post("addNewsType",e).then(function(e){200==e.code?(t.$message({message:"你提交成功",type:"success"}),setTimeout(function(){t.$router.push("/newsType")},1e3)):t.$message.error("提交失败")})},updateForm:function(){var t=this,e=this.$route.query.id,s=a()({},this.form,{id:e});this.$axios.post("updateNewsType",s).then(function(e){200==e.code?(t.$message({message:"你修改成功",type:"success"}),setTimeout(function(){t.$router.push("/newsType")},1e3)):t.$message.error("修改失败")})},handleAvatarSuccess:function(t){this.form.img=t.url},getToken:function(){var t=this;this.$axios.qiniuGet().then(function(e){t.token=e.data})}},watch:{$route:function(){this.form={title:"",img:"",type:"",contentText:"",content:""}}},mounted:function(){"新闻分类编辑页"==this.$route.name?(this.getToken(),this.getMsg()):this.getToken()}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"addNews"},[s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"分类标题"}},[s("el-input",{staticStyle:{width:"30%"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"新闻头图"}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://upload-z1.qiniup.com","show-file-list":!1,"on-success":t.handleAvatarSuccess,data:{token:t.token}}},[t.form.img?s("img",{staticClass:"avatar",attrs:{src:t.form.img}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),s("el-form-item",{attrs:{label:"分类排序"}},[s("el-input-number",{attrs:{min:1,max:10,label:"描述文字"},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}})],1),t._v(" "),s("el-form-item",["新闻分类添加页"==this.$route.name?s("el-button",{attrs:{type:"primary"},on:{click:t.postForm}},[t._v("添加")]):t._e(),t._v(" "),"新闻分类编辑页"==this.$route.name?s("el-button",{attrs:{type:"primary"},on:{click:t.updateForm}},[t._v("保存并添加")]):t._e()],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")(i,n,!1,function(t){s("Jplh"),s("a9ZM")},"data-v-c7a9f5e0",null);e.default=r.exports},Jplh:function(t,e){},a9ZM:function(t,e){}});
//# sourceMappingURL=1.c75f3be3aedbe8c28121.js.map