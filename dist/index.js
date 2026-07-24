"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var x=l(function(L,d){
var z=require('@stdlib/strided-base-reinterpret-complex128/dist');function A(e,r,i,v,o,a,t,s){var q,c,j,m,n,u,p,f;if(e<=0||r<=0)return a;for(q=z(i,0),c=z(a,0),n=o*2,u=s*2,v*=2,t*=2,p=0;p<e;p++){for(j=q[n],m=q[n+1],f=0;f<r;f++)c[u]=j,c[u+1]=m,u+=t;n+=v}return a}d.exports=A
});var _=l(function(M,R){
var w=require('@stdlib/strided-base-stride2offset/dist'),B=x();function C(e,r,i,v,o,a){var t=w(e,v),s=w(e*r,a);return B(e,r,i,v,t,o,a,s)}R.exports=C
});var g=l(function(O,b){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),F=x();D(E,"ndarray",F);b.exports=E
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=g(),y,h=H(G(__dirname,"./native.js"));I(h)?y=J:y=h;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
