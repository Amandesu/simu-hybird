(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/modules/ticketManage/routers/testApi/index.less":function(e,s,t){(e.exports=t("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,"",""])},"./src/modules/ticketManage/routers/testApi/index.js":function(e,s,t){"use strict";var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var l=o(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),d=o(t("./node_modules/@babel/runtime/helpers/createClass.js")),n=o(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),r=o(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(t("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(t("./node_modules/react/index.js")),a=t("./node_modules/react-helmet/lib/Helmet.js"),c=t("./src/utils/index.js");t("./src/modules/ticketManage/routers/testApi/index.less");var m=function(e){function s(){return(0,l.default)(this,s),(0,n.default)(this,(0,r.default)(s).apply(this,arguments))}return(0,i.default)(s,e),(0,d.default)(s,[{key:"componentDidMount",value:function(){(0,c.callApi)({url:"/simu/wechat/voucherList",type:"POST"}).then(function(e){})}},{key:"render",value:function(){return u.default.createElement("div",{className:"ticketManage-testApi"},u.default.createElement(a.Helmet,null,u.default.createElement("title",null,"测试API")))}}]),s}(u.default.Component);s.default=m},"./src/modules/ticketManage/routers/testApi/index.less":function(s,e,t){var o=t("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/modules/ticketManage/routers/testApi/index.less");"string"==typeof o&&(o=[[s.i,o,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0},d=t("./node_modules/style-loader/lib/addStyles.js")(o,l);o.locals&&(s.exports=o.locals),s.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/modules/ticketManage/routers/testApi/index.less",function(){var e=t("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/modules/ticketManage/routers/testApi/index.less");if("string"==typeof e&&(e=[[s.i,e,""]]),!function(e,s){var t,o=0;for(t in e){if(!s||e[t]!==s[t])return!1;o++}for(t in s)o--;return 0===o}(o.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");d(e)}),s.hot.dispose(function(){d()})}}]);