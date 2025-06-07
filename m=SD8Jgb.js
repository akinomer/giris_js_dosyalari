"use strict";this.default_AccountsSignInUi=this.default_AccountsSignInUi||{};(function(_){var window=this;
try{
_.qUa=_.z("SD8Jgb",[]);
_.tT=function(a,b){if(typeof b==="string")a.qc(b);else if(b instanceof _.Tm&&b.ia&&b.ia===_.B)b=_.Za(b.Tt()),a.empty().append(b);else if(b instanceof _.Va)b=_.Za(b),a.empty().append(b);else if(b instanceof Node)a.empty().append(b);else throw Error("Cg");};_.uT=function(a){var b=_.fq(a,"[jsslot]");if(b.size()>0)return b;b=new _.dq([_.oo("span")]);_.gq(b,"jsslot","");a.empty().append(b);return b};_.WXb=function(a){return a===null||typeof a==="string"&&_.Tb(a)};
_.k("SD8Jgb");
_.zT=function(a){_.X.call(this,a.La);this.Wa=a.controller.Wa;this.Pc=a.controllers.Pc[0]||null;this.header=a.controller.header;this.nav=a.controller.nav;var b;(b=this.Ba().find("button:not([type])").el())==null||b.setAttribute("type","button")};_.J(_.zT,_.X);_.zT.Ca=function(){return{controller:{Wa:{jsname:"n7vHCb",ctor:_.Au},header:{jsname:"tJHJj",ctor:_.Au},nav:{jsname:"DH6Rkf",ctor:_.Au}},controllers:{Pc:{jsname:"rEuO1b",ctor:_.Au}}}};_.h=_.zT.prototype;
_.h.setTitle=function(a){var b=this.header.Zb("r4nke");_.tT(_.uT(b),a)};_.h.Rp=function(a){var b=this.header.Zb("VdSJob");_.WXb(a)?b.empty():_.tT(_.uT(b),a)};_.h.t0=function(a){this.Pc?this.Pc.setContent(a):Promise.resolve(void 0)};_.h.setPrimaryActionLabel=function(a){this.nav.setPrimaryActionLabel(a)};_.h.Ep=function(){return!!this.nav.Ep()};_.h.setPrimaryActionEnabled=function(a){this.nav.setPrimaryActionEnabled(a)};_.h.Im=function(){this.nav.Im()};_.h.setSecondaryActionLabel=function(a){this.nav.setSecondaryActionLabel(a)};
_.h.Fp=function(){return!!this.nav.Fp()};_.h.setSecondaryActionEnabled=function(a){this.nav.setSecondaryActionEnabled(a)};_.h.Bp=function(){return!!this.nav.Bp()};_.h.It=function(a){this.nav.It(a)};_.h.Cp=function(){return!!this.nav.Cp()};_.h.Jt=function(a){this.nav.Jt(a)};_.h.Dp=function(){return!!this.nav.Dp()};_.h.Kt=function(a){this.nav.Kt(a)};_.h.setAllActionsEnabled=function(a){this.nav.setAllActionsEnabled(a)};_.h.Qt=function(a,b){this.nav.Qt(a,b)};_.Y(_.zT.prototype,"dhtxlf",function(){return this.Dp});
_.Y(_.zT.prototype,"SEKku",function(){return this.Cp});_.Y(_.zT.prototype,"UKeVrb",function(){return this.Bp});_.Y(_.zT.prototype,"ajMrU",function(){return this.Fp});_.Y(_.zT.prototype,"ZnXHXc",function(){return this.Im});_.Y(_.zT.prototype,"W4Dqde",function(){return this.Ep});_.Hu(_.qUa,_.zT);
_.l();
}catch(e){_._DumpException(e)}
}).call(this,this.default_AccountsSignInUi);
// Google Inc.
