webpackJsonp([10],{"5niU":function(t,i){},L9jj:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("mtWM"),a=n.n(e),s={name:"Sixiang",data:function(){return{token:"",img:"",userId:""}},methods:{up:function(t){var i=this;console.log(t);var n=t.target.files[0],e=new FormData;e.append("file",n),e.append("token",this.token),a.a.post("https://upload-z1.qiniup.com",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){i.img=t.data.url})},getToken:function(){var t=this;this.$axios.get("upload").then(function(i){t.token=i.data.data})},gedata:function(){var t=this;this.$axios.post("users").then(function(i){console.log(i),t.userId=i.data.data[0].userId})},tijiao:function(){this.$axios.post("thinkings",{img:this.img,userId:this.userId}).then(function(t){}),this.$router.push("/sixiang")},huiqu:function(){this.$router.push("/zhangshang")}},created:function(){this.getToken(),this.gedata()}},o={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",[n("mt-header",{attrs:{title:"思想汇报",fixed:""}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.huiqu},slot:"left"})],1)],1),t._v(" "),n("div",{staticClass:"conent"},[n("div",{staticClass:"container"},[n("label",{attrs:{id:"btn-wrap"}},[n("input",{attrs:{type:"file",name:"file",accept:"image/jpeg,image/png",id:"file-input"},on:{change:t.up}}),t._v(" "),t.img?n("img",{attrs:{src:t.img}}):t._e(),t._v(" "),n("i",{staticClass:"iconfont icon-jiahao"})])]),t._v(" "),n("div",{staticClass:"item-img"}),t._v(" "),n("div",[n("mt-button",{attrs:{size:"large"},on:{click:t.tijiao}},[t._v("提交审核")])],1)])])},staticRenderFns:[]};var u=n("VU/8")(s,o,!1,function(t){n("5niU")},null,null);i.default=u.exports}});
//# sourceMappingURL=10.4c7fbe4dbc50d406449e.js.map