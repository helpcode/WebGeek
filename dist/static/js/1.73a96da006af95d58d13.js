webpackJsonp([1],{104:function(t,e,s){e=t.exports=s(79)(!1),e.i(s(110),""),e.push([t.i,".title[data-v-6b6e677e]{letter-spacing:5px;font-size:35px;color:#8d8d8d;padding-top:28%;transition:all .2s ease-in .1s;-moz-transition:all .2s ease-in .1s;-webkit-transition:all .2s ease-in .1s;-o-transition:all .2s ease-in .1s}.title[data-v-6b6e677e]:hover{color:#626262!important}",""])},110:function(t,e,s){e=t.exports=s(79)(!1),e.push([t.i,'@font-face{font-family:DalaFloda-Bold-Web;src:url("https://helpcode.github.io/WebGeek/dist/static/fonts/DalaFloda-Bold-Web.5493b8e.woff")}.el-row--flex,.is-justify-center{font-family:DalaFloda-Bold-Web}.web-title{padding-top:8%;display:block;width:74%;font-size:300px}.bg-purple{text-align:center}.docs{text-decoration:none;color:#bfbfbf;letter-spacing:2px;padding-top:20px;display:block}',""])},118:function(t,e,s){var o=s(104);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s(80)("607de263",o,!0)},141:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"welcome"}},[s("el-row",{attrs:{type:"flex",justify:"center",span:24}},[s("el-col",[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"web-title"},[t._v("\n          web\n        ")])])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12,offset:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("el-button",{staticClass:"title",attrs:{type:"text"},on:{click:t.NextBarrier}},[t._v("挑战赛 / Start\n        ")])],1)])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12,offset:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("a",{staticClass:"docs",attrs:{href:"https://helpcode.github.io/WebGeek/docs/#/"}},[t._v("Docs 文档")])])])],1)],1)},staticRenderFns:[]}},83:function(t,e,s){function o(t){s(118)}var i=s(31)(s(96),s(141),o,"data-v-6b6e677e",null);t.exports=i.exports},96:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){},data:function(){return{msg:"this is template body"}},methods:{NextBarrier:function(){var t=this;this.$http.get(this.$api.api.auth).then(function(e){(e.body.result="success")?t.$router.push({path:"barrier",query:{t:e.headers.get("token")}}):t.$notify.error({title:"请求token失败",message:"可能原因：1：未连接网络，2：服务器停止运行"})},function(e){t.$notify.error({title:"请求token失败",message:"可能原因：1：未连接网络，2：服务器停止运行"})})}}}}});