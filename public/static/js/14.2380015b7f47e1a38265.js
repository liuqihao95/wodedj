webpackJsonp([14],{TFTT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"Login",components:{Header:n("qmpX").a},data:function(){return{userId:"1213",pwd:"123456"}},methods:{login:function(){var t=this;this.$axios.post("login",{userId:this.userId,pwd:this.pwd}).then(function(e){console.log(e),200==e.data.code?(alert(e.data.msg),t.$router.push("/my")):alert(e.data.msg)})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"contiar"},[n("div",{attrs:{id:"item-ss"}},[t._m(0),t._v(" "),n("div",{staticClass:"xingong"}),t._v(" "),n("form",{on:{submit:function(t){t.preventDefault()}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],attrs:{type:"text",placeholder:"身份证号："},domProps:{value:t.userId},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}})]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password",placeholder:"密码："},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),t._v(" "),n("div",[n("mt-button",{attrs:{size:"large",id:"loginn"},on:{click:t.login}},[t._v("登 录")])],1)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("img",{attrs:{src:n("7Otq")}})])}]};var i=n("VU/8")(s,a,!1,function(t){n("y0xm")},"data-v-9b746b74",null);e.default=i.exports},y0xm:function(t,e){}});
//# sourceMappingURL=14.2380015b7f47e1a38265.js.map