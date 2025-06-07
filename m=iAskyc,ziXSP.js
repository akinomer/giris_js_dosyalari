"use strict";this.default_AccountsSignInUi=this.default_AccountsSignInUi||{};(function(_){var window=this;
try{
_.k("iAskyc");
_.VV=function(a){_.Ss.call(this);this.window=a.Fa.window.get();this.uc=a.Fa.uc};_.J(_.VV,_.Kt);_.VV.Ca=function(){return{Fa:{window:_.Ot,uc:_.MA}}};_.VV.prototype.Qp=function(){};_.VV.prototype.addEncryptionRecoveryMethod=function(){};_.WV=function(a){return(a==null?void 0:a.Nq)||function(){}};_.XV=function(a){return(a==null?void 0:a.DS)||function(){}};_.YV=function(a){return(a==null?void 0:a.Mr)||function(){}};
_.$0b=function(a){return new Map(Array.from(a,function(b){var c=_.n(b);b=c.next().value;c=c.next().value;return[b,c.map(function(d){return{epoch:d.epoch,key:new Uint8Array(d.key)}})]}))};_.a1b=function(a){setTimeout(function(){throw a;},0)};_.VV.prototype.UT=function(){return!0};_.ZV=function(a,b,c,d){c=c===void 0?"":c;a=a.uc;var e=a.xN,f=new _.DA;b=_.n1a(f,7,b);e.call(a,305,b,d,void 0,void 0,_.pV(new _.CA,_.oV(c)))};_.Lt(_.Ap,_.VV);
_.l();
_.k("ziXSP");
var nW=function(a){_.VV.call(this,a.La)};_.J(nW,_.VV);nW.Ca=_.VV.Ca;nW.prototype.Qp=function(a,b,c){var d;if((d=this.window.chrome)==null?0:d.setClientEncryptionKeys)_.WV(c)(),this.window.chrome.setClientEncryptionKeys(_.YV(c),a,b);else{var e;((e=this.window.chrome)==null?0:e.setSyncEncryptionKeys)?(_.WV(c)(),d=H1b(b),b=b.get(_.gW()),this.window.chrome.setSyncEncryptionKeys(_.YV(c),a,d,b[b.length-1].epoch)):_.XV(c)()}};
nW.prototype.addEncryptionRecoveryMethod=function(a,b,c,d,e){if(!(b.length>0)||b.includes(_.gW())){var f;(f=this.window.chrome)!=null&&f.addTrustedSyncEncryptionRecoveryMethod?(_.WV(e)(),this.window.chrome.addTrustedSyncEncryptionRecoveryMethod(_.YV(e),a,_.hW(c),d)):_.XV(e)()}};nW.prototype.UT=function(){var a;return!((a=this.window.chrome)==null||!a.setClientEncryptionKeys)};var H1b=function(a){return a.get(_.gW()).map(function(b){return b.key})};_.Lt(_.lRa,nW);
_.l();
}catch(e){_._DumpException(e)}
}).call(this,this.default_AccountsSignInUi);
// Google Inc.
