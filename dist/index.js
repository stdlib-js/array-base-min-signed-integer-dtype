"use strict";var u=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var t=u(function(o,i){
var I=require('@stdlib/constants-int8-min/dist'),f=require('@stdlib/constants-int16-min/dist'),N=require('@stdlib/constants-int32-min/dist'),T=require('@stdlib/constants-int8-max/dist'),a=require('@stdlib/constants-int16-max/dist'),q=require('@stdlib/constants-int32-max/dist');function s(r){return r<0?r>=I?"int8":r>=f?"int16":r>=N?"int32":"float64":r<=T?"int8":r<=a?"int16":r<=q?"int32":"float64"}i.exports=s
});var M=t();module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
