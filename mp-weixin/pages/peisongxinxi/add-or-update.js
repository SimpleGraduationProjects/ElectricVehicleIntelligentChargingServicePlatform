(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/peisongxinxi/add-or-update"],{3407:function(n,e,i){"use strict";var a=i("a5ac"),r=i.n(a);r.a},5443:function(n,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return t})),i.d(e,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"a1a5"))}},r=function(){var n=this,e=n.$createElement;n._self._c},t=[]},"66e3":function(n,e,i){"use strict";(function(n){i("26d5");a(i("66fd"));var e=a(i("f68a"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},"6aee":function(n,e,i){"use strict";i.r(e);var a=i("9098"),r=i.n(a);for(var t in a)"default"!==t&&function(n){i.d(e,n,(function(){return a[n]}))}(t);e["default"]=r.a},9098:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function t(n,e,i,a,r,t,u){try{var o=n[t](u),s=o.value}catch(c){return void i(c)}o.done?e(s):Promise.resolve(s).then(a,r)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(a,r){var u=n.apply(e,i);function o(n){t(u,a,r,o,s,"next",n)}function s(n){t(u,a,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("a1a5"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{cross:"",ruleForm:{dianchixinghao:"",dianchifengmian:"",dianchirongliang:"",danjia:"",shuliang:"",jine:"",pinpai:"",zhanghao:"",xingming:"",shoujihaoma:"",shouhuodizhi:"",beizhu:"",xiadanshijian:"",gengxinshijian:"",wuliuzhuangtai:"备货中",wuliuxiangqing:"",userid:""},wuliuzhuangtaiOptions:[],wuliuzhuangtaiIndex:0,user:{},ro:{dianchixinghao:!1,dianchifengmian:!1,dianchirongliang:!1,danjia:!1,shuliang:!1,jine:!1,pinpai:!1,zhanghao:!1,xingming:!1,shoujihaoma:!1,shouhuodizhi:!1,beizhu:!1,xiadanshijian:!1,gengxinshijian:!1,wuliuzhuangtai:!1,wuliuxiangqing:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var i=this;return u(a.default.mark((function r(){var t,u,o,s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i.ruleForm.gengxinshijian=i.$utils.getCurDateTime(),t=n.getStorageSync("nowTable"),r.next=4,i.$api.session(t);case 4:if(u=r.sent,i.user=u.data,i.wuliuzhuangtaiOptions="备货中,配送中,已送达".split(","),i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){r.next=15;break}return i.ruleForm.id=e.id,r.next=13,i.$api.info("peisongxinxi",i.ruleForm.id);case 13:u=r.sent,i.ruleForm=u.data;case 15:if(i.cross=e.cross,!e.cross){r.next=91;break}o=n.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 19:if((r.t1=r.t0()).done){r.next=91;break}if(s=r.t1.value,"dianchixinghao"!=s){r.next=25;break}return i.ruleForm.dianchixinghao=o[s],i.ro.dianchixinghao=!0,r.abrupt("continue",19);case 25:if("dianchifengmian"!=s){r.next=29;break}return i.ruleForm.dianchifengmian=o[s],i.ro.dianchifengmian=!0,r.abrupt("continue",19);case 29:if("dianchirongliang"!=s){r.next=33;break}return i.ruleForm.dianchirongliang=o[s],i.ro.dianchirongliang=!0,r.abrupt("continue",19);case 33:if("danjia"!=s){r.next=37;break}return i.ruleForm.danjia=o[s],i.ro.danjia=!0,r.abrupt("continue",19);case 37:if("shuliang"!=s){r.next=41;break}return i.ruleForm.shuliang=o[s],i.ro.shuliang=!0,r.abrupt("continue",19);case 41:if("jine"!=s){r.next=45;break}return i.ruleForm.jine=o[s],i.ro.jine=!0,r.abrupt("continue",19);case 45:if("pinpai"!=s){r.next=49;break}return i.ruleForm.pinpai=o[s],i.ro.pinpai=!0,r.abrupt("continue",19);case 49:if("zhanghao"!=s){r.next=53;break}return i.ruleForm.zhanghao=o[s],i.ro.zhanghao=!0,r.abrupt("continue",19);case 53:if("xingming"!=s){r.next=57;break}return i.ruleForm.xingming=o[s],i.ro.xingming=!0,r.abrupt("continue",19);case 57:if("shoujihaoma"!=s){r.next=61;break}return i.ruleForm.shoujihaoma=o[s],i.ro.shoujihaoma=!0,r.abrupt("continue",19);case 61:if("shouhuodizhi"!=s){r.next=65;break}return i.ruleForm.shouhuodizhi=o[s],i.ro.shouhuodizhi=!0,r.abrupt("continue",19);case 65:if("beizhu"!=s){r.next=69;break}return i.ruleForm.beizhu=o[s],i.ro.beizhu=!0,r.abrupt("continue",19);case 69:if("xiadanshijian"!=s){r.next=73;break}return i.ruleForm.xiadanshijian=o[s],i.ro.xiadanshijian=!0,r.abrupt("continue",19);case 73:if("gengxinshijian"!=s){r.next=77;break}return i.ruleForm.gengxinshijian=o[s],i.ro.gengxinshijian=!0,r.abrupt("continue",19);case 77:if("wuliuzhuangtai"!=s){r.next=81;break}return i.ruleForm.wuliuzhuangtai=o[s],i.ro.wuliuzhuangtai=!0,r.abrupt("continue",19);case 81:if("wuliuxiangqing"!=s){r.next=85;break}return i.ruleForm.wuliuxiangqing=o[s],i.ro.wuliuxiangqing=!0,r.abrupt("continue",19);case 85:if("userid"!=s){r.next=89;break}return i.ruleForm.userid=o[s],i.ro.userid=!0,r.abrupt("continue",19);case 89:r.next=19;break;case 91:i.styleChange();case 92:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},gengxinshijianConfirm:function(n){console.log(n),this.ruleForm.gengxinshijian=n.result,this.$forceUpdate()},wuliuzhuangtaiChange:function(n){this.wuliuzhuangtaiIndex=n.target.value,this.ruleForm.wuliuzhuangtai=this.wuliuzhuangtaiOptions[this.wuliuzhuangtaiIndex]},dianchifengmianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.dianchifengmian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(a.default.mark((function i(){var r,t,u,o,s,c,l,g,h,d;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.ruleForm.wuliuzhuangtai){i.next=3;break}return e.$utils.msg("物流状态不能为空"),i.abrupt("return");case 3:if(!e.cross){i.next=19;break}if(o=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==o){i.next=19;break}if(c=n.getStorageSync("crossObj"),o.startsWith("[")){i.next=15;break}for(l in c)l==o&&(c[l]=s);return g=n.getStorageSync("crossTable"),i.next=13,e.$api.update("".concat(g),c);case 13:i.next=19;break;case 15:r=Number(n.getStorageSync("userid")),t=c["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 19:if(!t||!r){i.next=41;break}return e.ruleForm.crossuserid=r,e.ruleForm.crossrefid=t,h={page:1,limit:10,crossuserid:r,crossrefid:t},i.next=25,e.$api.list("peisongxinxi",h);case 25:if(d=i.sent,!(d.data.total>=u)){i.next=31;break}return e.$utils.msg(n.getStorageSync("tips")),i.abrupt("return",!1);case 31:if(!e.ruleForm.id){i.next=36;break}return i.next=34,e.$api.update("peisongxinxi",e.ruleForm);case 34:i.next=38;break;case 36:return i.next=38,e.$api.add("peisongxinxi",e.ruleForm);case 38:e.$utils.msgBack("提交成功");case 39:i.next=49;break;case 41:if(!e.ruleForm.id){i.next=46;break}return i.next=44,e.$api.update("peisongxinxi",e.ruleForm);case 44:i.next=48;break;case 46:return i.next=48,e.$api.add("peisongxinxi",e.ruleForm);case 48:e.$utils.msgBack("提交成功");case 49:case"end":return i.stop()}}),i)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,r=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(i,"-").concat(a,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},a5ac:function(n,e,i){},f68a:function(n,e,i){"use strict";i.r(e);var a=i("5443"),r=i("6aee");for(var t in r)"default"!==t&&function(n){i.d(e,n,(function(){return r[n]}))}(t);i("3407");var u,o=i("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"999d21c2",null,!1,a["a"],u);e["default"]=s.exports}},[["66e3","common/runtime","common/vendor"]]]);