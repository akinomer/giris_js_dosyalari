"use strict";this.default_AccountsSignInUi=this.default_AccountsSignInUi||{};(function(_){var window=this;
try{
_.k("Wt6vjf");
var Tza=function(){var a=_.Or();return _.Sk(a,1)},yt=function(a){this.Ea=_.u(a,0,yt.messageId)};_.J(yt,_.w);yt.prototype.Ga=function(){return _.Yk(this,1,_.Tc)};yt.prototype.Ta=function(a){return _.dl(this,1,a,_.Tc)};yt.messageId="f.bo";var zt=function(){_.bo.call(this)};_.J(zt,_.bo);zt.prototype.Nd=function(){this.pZ=!1;Uza(this);_.bo.prototype.Nd.call(this)};zt.prototype.aa=function(){Vza(this);if(this.hH)return Wza(this),!1;if(!this.p0)return At(this),!0;this.dispatchEvent("p");if(!this.jV)return At(this),!0;this.nS?(this.dispatchEvent("r"),At(this)):Wza(this);return!1};
var Xza=function(a){var b=new _.Dg(a.saa);a.gW!=null&&_.Gg(b,"authuser",a.gW);return b},Wza=function(a){a.hH=!0;var b=Xza(a),c="rt=r&f_uid="+_.fm(a.jV);_.Zo(b,(0,_.th)(a.ha,a),"POST",c)};
zt.prototype.ha=function(a){a=a.target;Vza(this);if(_.ap(a)){this.XP=0;if(this.nS)this.hH=!1,this.dispatchEvent("r");else if(this.p0)this.dispatchEvent("s");else{try{var b=_.bp(a),c=JSON.parse(b.substring(b.indexOf("\n")));var d=(new yt(c[0])).Ga()}catch(e){_.lg(e);this.dispatchEvent("t");Yza(this);return}this.hH=!1;d?this.dispatchEvent("q"):this.dispatchEvent("r")}At(this)}else{if(a.getStatus()!=0){d="";try{d=_.bp(a)}catch(e){}a=Error("ld`"+a.getStatus()+"`"+Xza(this).toString()+"`"+String(a.bG)+
"`"+d);_.lg(a);this.dispatchEvent("t")}Yza(this)}};var Vza=function(a){var b=_.xt.get(window.location.protocol=="https:"?"SAPISID":"APISID","");a.nS=a.UP!==""&&b==="";a.p0=a.UP!=b;a.UP=b},Yza=function(a){a.nS||(a.hH=!0,a.XP=Math.min((a.XP||3)*2,60),At(a))},At=function(a){if(a.pZ||a.hH)Uza(a),a.DT=window.setTimeout((0,_.th)(a.aa,a),Math.max(3,a.XP)*1E3)},Uza=function(a){a.DT&&(window.clearTimeout(a.DT),a.DT=0)};_.h=zt.prototype;_.h.Md=null;_.h.XP=0;_.h.DT=0;_.h.UP=null;_.h.nS=!1;_.h.p0=!1;_.h.gW=null;
_.h.saa="/_/idv/";_.h.jV="";_.h.pZ=!1;_.h.hH=!1;_.ff(_.Kna,zt);_.Eb().Bl(function(a){var b=new zt;_.nq(a,_.Kna,b);if(Tza()){a=Tza();var c=_.ug("WZsZ1e").string(null);b.jV=a;c!==void 0&&(b.UP=c);a=_.Pr();a.lastIndexOf("/",0)==0||(a="/"+a);b.saa=a+"/idv/";(a=_.Mr(_.Or()))&&_.ug("gGcLoe").bool(!1)&&(b.gW=a);b.pZ=!0;b.aa()}});
_.l();
_.k("hhhU8");
var sPa;new _.kj(function(a){sPa=a});_.QIa();_.dg(function(){sPa()});
_.l();
_.k("FCpbqb");
_.Eb().Bl(function(a){_.tf(_.eg(_.tra,a))});
_.l();
_.k("WhJNk");
var LOa=new Date(1262304E6),MOa=new Date(12779424E5),NOa=new Date(129384E7),OOa=function(a,b){b?a.push(Math.round((b-LOa.getTime())/6E4)):a.push(null)},POa=function(a,b,c){a.push(b.getTimezoneOffset()/15+56);a:{var d=b.getTimezoneOffset();var e=c.getTimezoneOffset();if(d!=e)for(b=b.getTime()/6E4,c=c.getTime()/6E4;b<=c;){var f=(b>>1)+(c>>1),g=f*6E4,m=(new Date(g+3E4)).getTimezoneOffset();if((new Date(g-3E4)).getTimezoneOffset()!=m){d=g;break a}if(m==d)b=f+1;else if(m==e)c=f-1;else break}d=null}OOa(a,
d)};var QOa=function(a){_.Ss.call(this);this.aa=a.Fa.window;var b=b===void 0?!1:b;if(!_.Vf(_.ug("xn5OId"),!1)&&_.xt.isEnabled()&&(_.xt.get("OTZ")===void 0||b)){a=_.xt.set;b=[];var c=new Date;OOa(b,c.getTime());b.push(c.getTimezoneOffset()/15+56);POa(b,LOa,MOa);POa(b,MOa,NOa);b=b.join("_");a.call(_.xt,"OTZ",b,{maxAge:2592E3,path:"/",domain:void 0,secure:this.aa.get().location.protocol==="https:"})}};_.J(QOa,_.Kt);QOa.Ca=function(){return{Fa:{window:_.Ot}}};_.Lt(_.tra,QOa);
_.l();
}catch(e){_._DumpException(e)}
}).call(this,this.default_AccountsSignInUi);
// Google Inc.
