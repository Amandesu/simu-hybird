(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/modules/ticketManage/routers/recoverDetail/index.less":function(e,n,t){(e.exports=t("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".ticketManage-recoverDetail {\n  background: #E2E2E2;\n  height: 100vh;\n  overflow: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.ticketManage-recoverDetail-content {\n  overflow: scroll;\n  -ms-flex: 1 1;\n  flex: 1 1;\n  -webkit-overflow-scrolling: touch;\n}\n\n.ticketManage-recoverDetail-content::-webkit-scrollbar {\n  display: none;\n}\n\n.ticketManage-recoverDetail-content .detail {\n  padding: 0.08rem 0.2rem;\n  border-bottom: 0.01rem solid #CECECE;\n  background: #FFF;\n}\n\n.ticketManage-recoverDetail-content .notice {\n  padding: 0 0 0.16rem 0.2rem;\n  background: #FFF;\n}\n\n.ticketManage-recoverDetail-content .notice .title {\n  height: 0.3rem;\n  line-height: 0.3rem;\n  color: #494949;\n  font-size: 0.12rem;\n  border-bottom: 0.01rem solid #CECECE;\n}\n\n.ticketManage-recoverDetail-content .notice .content {\n  padding-top: 0.1rem;\n  padding-right: 0.12rem;\n  color: #6D6D72;\n}\n\n.ticketManage-recoverDetail-content .notice .content li {\n  line-height: 0.2rem;\n}\n\n.ticketManage-recoverDetail-content .messageWrite {\n  margin-top: 0.1rem;\n  padding: 0 0 0.16rem 0.2rem;\n  background: #FFF;\n}\n\n.ticketManage-recoverDetail-content .messageWrite .title {\n  height: 0.3rem;\n  line-height: 0.3rem;\n  color: #535353;\n  font-size: 0.12rem;\n  border-bottom: 0.01rem solid #CECECE;\n}\n\n.ticketManage-recoverDetail-content .messageWrite .ticketInput {\n  padding: 0.12rem 0.12rem 0.12rem 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.ticketManage-recoverDetail-content .messageWrite .ticketInput .text {\n  font-size: 0.12rem;\n  color: #494949;\n  width: 0.6rem;\n}\n\n.ticketManage-recoverDetail-content .messageWrite .ticketInput input {\n  -ms-flex: 1 1;\n  flex: 1 1;\n  height: 0.3rem;\n  border: 0.01rem solid #BBBBBB;\n  padding-left: 0.06rem;\n}\n\n.ticketManage-recoverDetail-content .messageWrite .ticketInput input::-webkit-input-placeholder {\n  color: #BBBBBB;\n}\n\n.ticketManage-recoverDetail-content .messageWrite .ticketUpload {\n  padding: 0.12rem 0.12rem 0.12rem 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.ticketManage-recoverDetail-content .messageWrite .ticketUpload .text {\n  font-size: 0.12rem;\n  color: #494949;\n  width: 0.6rem;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n}\n\n.ticketManage-recoverDetail-content .messageWrite .ticketUpload .imagesList {\n  width: calc(100vw - 0.92rem);\n}\n\n.ticketManage-recoverDetail-content .messageWrite .ticketUpload .imagesList .am-image-picker-list {\n  margin: 0;\n  padding: 0;\n}\n\n.ticketManage-recoverDetail-content .messageWrite .ticketUpload .imagesList .am-flexbox-item {\n  width: 0.45rem;\n  -ms-flex: 0 0 auto !important;\n  flex: 0 0 auto !important;\n}\n\n.ticketManage-recoverDetail-content .messageWrite .ticketUpload .imagesList .am-flexbox {\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n.ticketManage-recoverDetail-footer {\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  height: 0.48rem;\n  line-height: 0.48rem;\n  background: #10A1F1;\n  color: #FFF;\n  font-size: 0.16rem;\n  text-align: center;\n}",""])},"./src/modules/ticketManage/routers/recoverDetail/index.js":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return _}),t("./node_modules/antd-mobile/lib/image-picker/style/index.js");var a,i=t("./node_modules/antd-mobile/lib/image-picker/index.js"),r=t.n(i),s=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),o=t.n(s),l=t("./node_modules/@babel/runtime/helpers/createClass.js"),c=t.n(l),d=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=t.n(d),u=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),g=t.n(u),p=t("./node_modules/@babel/runtime/helpers/inherits.js"),f=t.n(p),k=t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),v=t.n(k),h=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),x=t.n(h),b=t("./node_modules/react/index.js"),j=t.n(b),E=t("./node_modules/react-redux/es/index.js"),D=t("./src/modules/ticketManage/component/index.js"),M=(t("./src/modules/ticketManage/routers/recoverDetail/index.less"),"ticketManage-recoverDetail"),_=Object(E.b)(function(e){return{recoverDetail:e.TicketManage_RecoverDetail}},function(){return{getList:function(e){return e({type:"Kkk",payload:[12]})}}})(a=function(e){function n(){var e,t;o()(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=m()(this,(e=g()(n)).call.apply(e,[this].concat(i))),x()(v()(v()(t)),"state",{files:[{url:"https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",id:"2121"},{url:"https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",id:"2122"}]}),x()(v()(v()(t)),"onChange",function(e,n,a){t.setState({files:e})}),t}return f()(n,e),c()(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){}},{key:"onImageClick",value:function(){}},{key:"render",value:function(){var e=this.state.files;return j.a.createElement("div",{className:M},j.a.createElement("div",{className:M+"-content"},j.a.createElement("div",{className:"detail"},j.a.createElement(D.b,null)),j.a.createElement("div",{className:"notice"},j.a.createElement("div",{className:"title"},"来源及提醒"),j.a.createElement("div",{className:"content"},j.a.createElement("ul",null,j.a.createElement("li",null,"1、操作路径：动卡空间APP-首页-天天有券"),j.a.createElement("li",null,"2、请保证券码有效性，且保证有10天及以上有效期"),j.a.createElement("li",null,"3、请上传带有串码的图片，若上传的串码已被使用或错误，即便您已拿到货款，后续也会被追责，请卖家认真核实。")))),j.a.createElement("div",{className:"messageWrite"},j.a.createElement("div",{className:"title"},"信息填写"),j.a.createElement("div",{className:"ticketInput"},j.a.createElement("div",{className:"text"},"券码"),j.a.createElement("input",{placeholder:"请输入兑换劵码"})),j.a.createElement("div",{className:"ticketUpload"},j.a.createElement("div",{className:"text"},"上传图片"),j.a.createElement("div",{className:"imagesList"},j.a.createElement(r.a,{files:e,onChange:this.onChange,onImageClick:function(e,n){},selectable:e.length<9,accept:"image/gif,image/jpeg,image/jpg,image/png"}))))),j.a.createElement("div",{className:M+"-footer"},"提交"))}}]),n}(j.a.Component))||a},"./src/modules/ticketManage/routers/recoverDetail/index.less":function(e,n,t){var a=t("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/modules/ticketManage/routers/recoverDetail/index.less");"string"==typeof a&&(a=[[e.i,a,""]]);var i=t("./node_modules/style-loader/lib/addStyles.js")(a,{hmr:!0,transform:void 0,insertInto:void 0});a.locals&&(e.exports=a.locals),e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/modules/ticketManage/routers/recoverDetail/index.less",function(){var n=t("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/modules/ticketManage/routers/recoverDetail/index.less");if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,a=0;for(t in e){if(!n||e[t]!==n[t])return!1;a++}for(t in n)a--;return 0===a}(a.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(n)}),e.hot.dispose(function(){i()})}}]);