webpackJsonp([16],{"5qIP":function(t,i){},L9jj:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("mtWM"),n=e.n(a),s={name:"Sixiang",data:function(){return{token:"",img:"",userId:""}},methods:{up:function(t){var i=this,e=t.target.files[0],a=new FormData;a.append("file",e),a.append("token",this.token),n.a.post("https://upload-z1.qiniup.com",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){i.img=t.data.url})},getToken:function(){var t=this;this.$axios.get("upload").then(function(i){t.token=i.data.data})},gedata:function(){var t=this;this.$axios.post("users").then(function(i){t.userId=i.data.data[0].userId})},tijiao:function(){this.$axios.post("thinkings",{img:this.img,userId:this.userId}).then(function(t){}),this.$router.push("/sixiang")},huiqu:function(){this.$router.push("/zhangshang")}},created:function(){this.getToken(),this.gedata()}},o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",[e("mt-header",{staticClass:"header-title",attrs:{title:"思想汇报",fixed:""}},[e("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.huiqu},slot:"left"})],1)],1),t._v(" "),e("div",{staticClass:"conent"},[e("div",{staticClass:"container"},[e("label",{attrs:{id:"btn-wrap"}},[e("input",{attrs:{type:"file",name:"file",accept:"image/jpeg,image/png",id:"file-input"},on:{change:t.up}}),t._v(" "),t.img?e("img",{attrs:{src:t.img}}):t._e(),t._v(" "),t.img?t._e():e("i",{staticClass:"iconfont icon-jiahao"})])]),t._v(" "),e("div",{staticClass:"item-img"}),t._v(" "),e("div",{attrs:{id:"xiugai1"}},[e("mt-button",{attrs:{size:"large"},on:{click:t.tijiao}},[t._v("提交审核")])],1)])])},staticRenderFns:[]};var u=e("VU/8")(s,o,!1,function(t){e("5qIP"),e("s99T")},"data-v-0d0a6918",null);i.default=u.exports},s99T:function(t,i){}});
//# sourceMappingURL=16.43c223644fba1acff365.js.map