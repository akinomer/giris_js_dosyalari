"use strict";this.default_AccountsSignInUi=this.default_AccountsSignInUi||{};(function(_){var window=this;
try{
_.k("P6sQOc");
var n5a=function(a,b,c,d,e){this.ha=a;this.wa=b;this.oa=c;this.Da=d;this.Ia=e;this.aa=0;this.da=m5a(this)},o5a=function(a){var b={};_.Ma(a.gY(),function(e){b[e]=!0});var c=a.PX(),d=a.YX();return new n5a(a.aV(),_.Dh(c.getSeconds())*1E3,a.wX(),_.Dh(d.getSeconds())*1E3,b)},m5a=function(a){return Math.random()*Math.min(a.wa*Math.pow(a.oa,a.aa),a.Da)},p5a=function(a,b){return a.aa>=a.ha?!1:b!=null?!!a.Ia[b]:!0};var q5a=function(){this.da=_.RA(_.k5a);this.ha=_.RA(_.l5a);var a=_.RA(_.i5a);this.fetch=a.fetch.bind(a)};q5a.prototype.aa=function(a,b){if(this.ha.getType(a.Ae())!==1)return _.Uo(a);var c=this.da.G_;return(c=c?o5a(c):null)&&p5a(c)?_.xAa(a,r5a(this,a,b,c)):_.Uo(a)};
var r5a=function(a,b,c,d){return c.then(function(e){return e},function(e){if(e instanceof _.bg){if(!e.status||!p5a(d,e.status.Fc()))throw e;}else if("function"==typeof _.Zr&&e instanceof _.Zr&&e.da!==103&&e.da!==7)throw e;return _.Wf(d.da).then(function(){if(!p5a(d))throw Error("he`"+d.ha);++d.aa;d.da=m5a(d);b=_.bm(b,_.Fka,d.aa);return r5a(a,b,a.fetch(b),d)})})};_.Mt(q5a,_.HZa);
_.l();
}catch(e){_._DumpException(e)}
}).call(this,this.default_AccountsSignInUi);
// Google Inc.
