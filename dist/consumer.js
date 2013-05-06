
/**
 * almond 0.2.5 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

define('library',[],function(){var n,e,r;(function(t){function i(n,e){return v.call(n,e)}function o(n,e){var r,t,i,o,u,f,c,l,s,p,a=e&&e.split("/"),g=y.map,d=g&&g["*"]||{};if(n&&"."===n.charAt(0))if(e){for(a=a.slice(0,a.length-1),n=a.concat(n.split("/")),l=0;n.length>l;l+=1)if(p=n[l],"."===p)n.splice(l,1),l-=1;else if(".."===p){if(1===l&&(".."===n[2]||".."===n[0]))break;l>0&&(n.splice(l-1,2),l-=2)}n=n.join("/")}else 0===n.indexOf("./")&&(n=n.substring(2));if((a||d)&&g){for(r=n.split("/"),l=r.length;l>0;l-=1){if(t=r.slice(0,l).join("/"),a)for(s=a.length;s>0;s-=1)if(i=g[a.slice(0,s).join("/")],i&&(i=i[t])){o=i,u=l;break}if(o)break;!f&&d&&d[t]&&(f=d[t],c=l)}!o&&f&&(o=f,u=c),o&&(r.splice(0,u,o),n=r.join("/"))}return n}function u(n,e){return function(){return g.apply(t,j.call(arguments,0).concat([n,e]))}}function f(n){return function(e){return o(e,n)}}function c(n){return function(e){m[n]=e}}function l(n){if(i(b,n)){var e=b[n];delete b[n],x[n]=!0,a.apply(t,e)}if(!i(m,n)&&!i(x,n))throw Error("No "+n);return m[n]}function s(n){var e,r=n?n.indexOf("!"):-1;return r>-1&&(e=n.substring(0,r),n=n.substring(r+1,n.length)),[e,n]}function p(n){return function(){return y&&y.config&&y.config[n]||{}}}var a,g,d,h,m={},b={},y={},x={},v=Object.prototype.hasOwnProperty,j=[].slice;d=function(n,e){var r,t=s(n),i=t[0];return n=t[1],i&&(i=o(i,e),r=l(i)),i?n=r&&r.normalize?r.normalize(n,f(e)):o(n,e):(n=o(n,e),t=s(n),i=t[0],n=t[1],i&&(r=l(i))),{f:i?i+"!"+n:n,n:n,pr:i,p:r}},h={require:function(n){return u(n)},exports:function(n){var e=m[n];return e!==void 0?e:m[n]={}},module:function(n){return{id:n,uri:"",exports:m[n],config:p(n)}}},a=function(n,e,r,o){var f,s,p,a,g,y,v=[];if(o=o||n,"function"==typeof r){for(e=!e.length&&r.length?["require","exports","module"]:e,g=0;e.length>g;g+=1)if(a=d(e[g],o),s=a.f,"require"===s)v[g]=h.require(n);else if("exports"===s)v[g]=h.exports(n),y=!0;else if("module"===s)f=v[g]=h.module(n);else if(i(m,s)||i(b,s)||i(x,s))v[g]=l(s);else{if(!a.p)throw Error(n+" missing "+s);a.p.load(a.n,u(o,!0),c(s),{}),v[g]=m[s]}p=r.apply(m[n],v),n&&(f&&f.exports!==t&&f.exports!==m[n]?m[n]=f.exports:p===t&&y||(m[n]=p))}else n&&(m[n]=r)},n=e=g=function(n,e,r,i,o){return"string"==typeof n?h[n]?h[n](e):l(d(n,e).f):(n.splice||(y=n,e.splice?(n=e,e=r,r=null):n=t),e=e||function(){},"function"==typeof r&&(r=i,i=o),i?a(t,n,e,r):setTimeout(function(){a(t,n,e,r)},4),g)},g.config=function(n){return y=n,y.deps&&g(y.deps,y.callback),g},r=function(n,e,r){e.splice||(r=e,e=[]),i(m,n)||i(b,n)||(b[n]=[n,e,r])},r.amd={jQuery:!0}})(),r("almond",function(){}),r("b",["require"],function(){return function(n){return n}}),e(["b","jquery"],function(n,e){return{jquery:e,b:n}}),r("a",function(){})});
require(['jquery', 'library'], function(jquery, library){
	console.log(library);
});
define("consumer", function(){});
