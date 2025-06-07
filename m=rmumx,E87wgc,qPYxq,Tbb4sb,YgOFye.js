"use strict";this.default_AccountsSignInUi=this.default_AccountsSignInUi||{};(function(_){var window=this;
try{
_.yXa=_.z("rmumx",[]);
_.jp(_.ug("tRszL"),_.zO,new _.zO);
_.k("rmumx");
var XXb=function(a){_.X.call(this,a.La)};_.J(XXb,_.X);XXb.Ca=_.X.Ca;_.Hu(_.yXa,XXb);
_.l();
_.BXa=_.z("E87wgc",[]);
_.k("E87wgc");
var vT=function(a){_.X.call(this,a.La)};_.J(vT,_.X);vT.Ca=_.X.Ca;vT.prototype.aa=function(){this.trigger("jR85Td")};_.Y(vT.prototype,"pKJJqe",function(){return this.aa});_.Hu(_.BXa,vT);
_.l();
_.zXa=_.z("qPYxq",[_.Po]);
_.k("qPYxq");
var rYb=function(a){a=a||{};return _.qYb(a.Pc,a.Qn)},AT=function(a){_.X.call(this,a.La);this.Qa=a.Za.Qa;this.form=this.Ba().find("form").first();this.Qn=_.xg(this.Ba().getData("formActionUri"),"")};_.J(AT,_.X);AT.Ca=function(){return{Za:{Qa:_.ut}}};AT.prototype.setContent=function(a){var b=this;return _.Yu(this).Ob(function(){a===null?b.form&&(b.form=null,b.Ba().empty()):(b.form||(b.Ba().append(b.Qa.wc(rYb,{Qn:b.Qn})),b.form=b.Ba().find("form").first()),_.tT(_.uT(b.form),a))}).build()()};
AT.prototype.setEnabled=function(a){var b=this;return _.Yu(this).Ob(function(){_.Bu(b.Ba(),"RDPZE",!a);_.rB(b.Ba().el(),"disabled",!a)}).build()()};AT.prototype.aa=function(a){a.event.preventDefault()};_.Y(AT.prototype,"JM9m2e",function(){return this.aa});_.Hu(_.zXa,AT);

_.l();
_.k("FHru6e");
_.uMb={Cua:0,Wwa:1,kya:2,Sva:3,Nwa:4};_.vMb={qva:0,DEFAULT:1,Mva:2};
_.l();
_.Mz=_.Mq("wGM7Jc");
_.k("wGM7Jc");
_.bC=function(a){_.X.call(this,a.La)};_.J(_.bC,_.X);_.bC.Ca=_.X.Ca;_.bC.prototype.focus=function(){_.PA&&w4a(this,!0)};_.bC.prototype.blur=function(){w4a(this,!1)};_.bC.prototype.Ya=function(){_.PA&&(_.PA=!1,w4a(this,!1))};var w4a=function(a,b){_.Yu(a).Ob(function(){_.Bu(this.Ba(),"u3bW4e",b)}).Pf().build()()};_.Y(_.bC.prototype,"GfWc1e",function(){return this.Ya});_.Y(_.bC.prototype,"O22p3e",function(){return this.blur});_.Y(_.bC.prototype,"AHmuwe",function(){return this.focus});_.Qu(_.bC);
_.l();
_.BYa=_.z("kRGwK",[_.Mz]);
_.k("kRGwK");
_.TU=function(a){_.bC.call(this,a.La)};_.J(_.TU,_.bC);_.TU.Ca=_.bC.Ca;_.TU.prototype.Aj=function(a){var b=this.Ba();_.tT(_.uT(b),a)};_.TU.prototype.vd=function(a){_.Bu(this.Ba(),"RDPZE",a);_.rB(this.Ba().el(),"disabled",a)};_.TU.prototype.rm=function(a){_.Bu(this.Ba(),"eLNT1d",a);_.rB(this.Ba().el(),"hidden",a)};_.Hu(_.BYa,_.TU);
_.l();
_.CYa=_.z("Tbb4sb",[_.Po,_.yp,_.tp,_.BYa]);
_.k("Tbb4sb");
var VZb,WZb;VZb=function(a,b){a=a||{};return _.ava(b,a.Bi,a.icon)};WZb=function(a,b){a=a||{};return _.bva(b,a.H5,a.su,a.K6,a.Hm,a.heading,a.Oe,a.icon,a.Tf,a.kk,a.summary,a.rv)};_.UU=function(a){_.TU.call(this,a.La);this.da=!1;this.wa=this.Ma=null;this.Zb("rBXYNb").first();this.Qa=a.Za.Qa;this.Bi=_.Et(this.getData("calloutType"),_.uMb,0);this.Hm=_.Et(this.getData("expandType"),_.vMb,0);this.Sa=a.controllers.jX[0]||null;this.Xa=a.Fa.uc;this.Ia=a.Fa.Bd.Ga(_.EA);this.action=a.Yc.action;this.Na=a.Yc.DI};
_.J(_.UU,_.TU);_.UU.Ca=function(){return{Za:{Qa:_.ut},controllers:{jX:{jsname:"PFa3yd",ctor:_.Au}},Yc:{action:{jsname:"JIbuQc",ctor:_.Au},DI:{jsname:"OiiCO",ctor:_.Au}},Fa:{uc:_.MA,Bd:_.BA}}};_.UU.prototype.Da=function(){return this.Zb("MZArnb").first()};_.UU.prototype.kk=function(){return this.Ba().zb("nn7x3d")};_.UU.prototype.Aj=function(a){var b=this.Ua("MZArnb");_.tT(_.uT(b),a)};
var XZb=function(a,b){if(b!==a.Ma){var c=a.Zb("tJHJj").first();b&&c?_.rB(c.el(),"hidden",!0):_.sB(c.el(),"hidden");_.Bu(a.Ba(),"S7S4N",!b);c=a.kk();(b&&c||!b&&!c)&&a.oa(!1);a.Ma=b}};
_.UU.prototype.Kz=function(a){var b=this.Ba().zb("PsAlOe"),c=this.Zb("Ud7fr").first();if(a||b)if(!a&&b)c.remove(),this.Zb("HSrbLb").first().remove(),XZb(this,!0);else{var d=c&&c.find("span").first(),e=a===null?"":a;d?(d.empty(),_.tT(d,e)):c?(c.empty(),_.tT(_.uT(c),e)):c||(c=this.Zb("tJHJj").first(),c.empty(),c.append(this.Qa.ZS(WZb,Object.assign({},{heading:a},b&&{icon:_.tt(this.Qa,VZb,{Bi:this.Bi})}))),XZb(this,!1))}};_.UU.prototype.ha=function(){return this.Na};
_.UU.prototype.oa=function(a){_.Bu(this.Ba(),"nn7x3d",a)};_.UU.prototype.aa=function(a){var b=this;if(a!==this.da){if(this.Hm===2){if(this.da)return;this.Sa.aa(a)}else{var c=this.Zb("rBXYNb").first();if(!c)return;_.rB(c.el(),"expanded",a)}YZb(this,!a).then(function(){b.EO()});this.Ia!==0&&this.Xa.Rb(this.Ia,37068,(a?"expand: ":"unexpand: ")+this.Zb("tJHJj").first().Hb());this.da=a;this.trigger(this.da?"u0AQve":"kg58of",this)}};
var YZb=function(a,b){return _.Yu(a).Ob(function(){_.Bu(a.Ba(),"jVwmLb",b)}).build()()};_.h=_.UU.prototype;_.h.EO=function(){return Promise.resolve()};_.h.w3=function(){return this.Hm===2&&!!this.Da()};_.h.ij=function(){this.aa(!this.da)};_.h.Gea=function(a){a.targetElement.el().tagName!=="A"&&this.focus()};_.h.Hea=function(){this.trigger("nd3iyc")};_.h.kx=function(a){this.action&&this.action.Jc(a)};_.h.IK=function(){return this.action?this.action.isEnabled():!1};_.Y(_.UU.prototype,"vMtP7c",function(){return this.IK});
_.Y(_.UU.prototype,"lUXF7e",function(){return this.Hea});_.Y(_.UU.prototype,"cVsFEe",function(){return this.Gea});_.Y(_.UU.prototype,"jkaCtf",function(){return this.ij});_.Y(_.UU.prototype,"TYtvV",function(){return this.w3});_.Y(_.UU.prototype,"vPDv0b",function(){return this.EO});_.Y(_.UU.prototype,"pT9jvc",function(){return this.ha});_.Y(_.UU.prototype,"rbHhPd",function(){return this.Da});_.Hu(_.CYa,_.UU);
_.l();
_.gYa=_.z("YgOFye",[]);
_.k("YgOFye");
var rU=function(a){_.X.call(this,a.La)};_.J(rU,_.X);rU.Ca=_.X.Ca;rU.prototype.Ta=function(a){_.Ju(this.Ba(),a)};rU.prototype.Ga=function(){return _.Iu(this.Ba())};_.Y(rU.prototype,"HvnK2b",function(){return this.Ga});_.Hu(_.gYa,rU);
_.l();
}catch(e){_._DumpException(e)}
}).call(this,this.default_AccountsSignInUi);
// Google Inc.
