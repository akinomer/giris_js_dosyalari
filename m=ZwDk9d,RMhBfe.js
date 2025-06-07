"use strict";this.default_AccountsSignInUi=this.default_AccountsSignInUi||{};(function(_){var window=this;
try{
_.k("ZwDk9d");
var Xy=function(){_.Ss.call(this)};_.J(Xy,_.Kt);Xy.Ca=_.Kt.Ca;Xy.prototype.FX=function(a){return _.Nf(this,{Za:{TY:_.Ql}}).then(function(b){var c=window._wjdd,d=window._wjdc;return!c&&d?new _.kj(function(e){window._wjdc=function(f){d(f);e(ZOa(f,b,a))}}):ZOa(c,b,a)})};var ZOa=function(a,b,c){return(a=a&&a[c])?a:b.Za.TY.FX(c)};
Xy.prototype.aa=function(a,b){var c=_.Jsa(b).Rl;if(c.startsWith("$")){var d=_.ao.get(a);_.wq[b]&&(d||(d={},_.ao.set(a,d)),d[c]=_.wq[b],delete _.wq[b],_.Isa--);if(d)if(a=d[c])b=_.Tf(a);else throw Error("Ub`"+b);else b=null}else b=null;return b};_.Lt(_.oga,Xy);
_.l();
_.k("SNUn3");
_.YOa=new _.Go(_.wh);
_.l();
_.k("RMhBfe");
var $Oa=function(a){var b=_.Fsa(a);return b?new _.kj(function(c,d){var e=function(){b=_.Fsa(a);var f=_.tga(a,b);f?c(f.getAttribute("jsdata")):window.document.readyState=="complete"?(f=["Unable to find deferred jsdata with id: "+b],a.hasAttribute("jscontroller")&&f.push("jscontroller: "+a.getAttribute("jscontroller")),a.hasAttribute("jsmodel")&&f.push("jsmodel: "+a.getAttribute("jsmodel")),d(Error(f.join("\n")))):_.eo(e,50)};_.eo(e,50)}):_.Tf(a.getAttribute("jsdata"))},aPa=function(a){var b=_.Fsa(a);
return b?!_.tga(a,b):!1},bPa=function(a,b){a=_.Gxa(a,b);return a.length==0?null:a[0].ctor},cPa=function(){return Object.values(_.vs).reduce(function(a,b){return a+Object.keys(b).length},0)},dPa=function(){return Object.entries(_.vs).reduce(function(a,b){var c=_.n(b);b=c.next().value;c=c.next().value;for(var d in c)a+=b+" -> "+d+"\n";return a},"")};_.vh(_.wh);var ePa=function(a){_.Ss.call(this);this.aa=a.Fa.TY;this.Md=null},Yy,gPa,hPa;_.J(ePa,_.Kt);ePa.Ca=function(){return{Fa:{TY:_.YOa}}};ePa.prototype.resolve=function(a,b,c,d){d=d===void 0?!1:d;a=Yy(this,a,b,0);return c!==void 0?a.then(function(e){return _.fPa?_.be(e):_.Fd(e)}):a.then(function(e){return d?_.be(e):e.clone()})};
Yy=function(a,b,c,d,e,f,g){for(var m={};b&&b.getAttribute;m={OW:void 0}){if(aPa(b))return $Oa(b).then(function(){return Yy(a,b,c,d,e,f,g)});var p=_.rya(b);m.OW=_.rh(c);if(g){var q=_.qa(p,g);q!=-1&&(p=p.slice(0,q))}q=p.pop();if(d==0)for(;q;){f=q;e=_.qya(q);if(m.OW==e.Bb)break;q=p.pop();if(!q)return _.lj(Error("Ld`"+m.OW+"`"+e.Bb))}if(m=a.aa.aa(b,f))return m;m=b;b=b.parentElement||null;if(q&&(p=gPa(a,q,p,m,b,c,d,e,f)))return p}return _.lj(Error("Md`"+f+"`"+(e&&e.Bb)+"`"+cPa()+"`"+dPa()))};
gPa=function(a,b,c,d,e,f,g,m,p){if(g++==0){if(m.Rl)return a.aa.FX(m.Rl).then(function(r){return r?_.Mxa(r,f):c.length>0?gPa(a,c.pop(),c,d,e,f,g,m,p):Yy(a,e,f,g,m,p)})}else if(b=_.qya(b),b.Rl&&m.Rl!=b.Rl){var q=bPa(b.Bb,m.Bb);q||m.Bb!=b.Bb||m.id!=b.id||(q=f);if(q)return hPa(a,d,p,m,q).then(function(r){return r?r:c.length>0?gPa(this,c.pop(),c,d,e,f,g,m,p):Yy(this,e,f,g,m,p)},null,a)}return c.length>0?gPa(a,c.pop(),c,d,e,f,g,m,p):Yy(a,e,f,g,m,p)};
hPa=function(a,b,c,d,e){return Yy(a,b,e,0,void 0,void 0,c).then(function(f){return _.ws(f,d.g_,d.Bb)})};_.fPa=!1;_.Lt(_.lga,ePa);

_.l();
}catch(e){_._DumpException(e)}
}).call(this,this.default_AccountsSignInUi);
// Google Inc.
