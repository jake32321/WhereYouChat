parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"nDQX":[function(require,module,exports) {
function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}!function(){var t={km:2,ha:2,m:0,mi:2,ac:2,yd:0,ft:0,nm:2};L.GeometryUtil=L.extend(L.GeometryUtil||{},{geodesicArea:function(e){var t,r,m=e.length,a=0,o=Math.PI/180;if(m>2){for(var i=0;i<m;i++)t=e[i],a+=((r=e[(i+1)%m]).lng-t.lng)*o*(2+Math.sin(t.lat*o)+Math.sin(r.lat*o));a=6378137*a*6378137/2}return Math.abs(a)},formattedNumber:function(e,t){var r=parseFloat(e).toFixed(t),m=L.drawLocal.format&&L.drawLocal.format.numeric,a=m&&m.delimiters,o=a&&a.thousands,i=a&&a.decimal;if(o||i){var n=r.split(".");r=o?n[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+o):n[0],i=i||".",n.length>1&&(r=r+i+n[1])}return r},readableArea:function(r,m,a){var o,i;a=L.Util.extend({},t,a);return m?(i=["ha","m"],type=e(m),"string"===type?i=[m]:"boolean"!==type&&(i=m),o=r>=1e6&&-1!==i.indexOf("km")?L.GeometryUtil.formattedNumber(1e-6*r,a.km)+" km²":r>=1e4&&-1!==i.indexOf("ha")?L.GeometryUtil.formattedNumber(1e-4*r,a.ha)+" ha":L.GeometryUtil.formattedNumber(r,a.m)+" m²"):o=(r/=.836127)>=3097600?L.GeometryUtil.formattedNumber(r/3097600,a.mi)+" mi²":r>=4840?L.GeometryUtil.formattedNumber(r/4840,a.ac)+" acres":L.GeometryUtil.formattedNumber(r,a.yd)+" yd²",o},readableDistance:function(e,r,m,a,o){var i;o=L.Util.extend({},t,o);switch(r?"string"==typeof r?r:"metric":m?"feet":a?"nauticalMile":"yards"){case"metric":i=e>1e3?L.GeometryUtil.formattedNumber(e/1e3,o.km)+" km":L.GeometryUtil.formattedNumber(e,o.m)+" m";break;case"feet":e*=3.28083,i=L.GeometryUtil.formattedNumber(e,o.ft)+" ft";break;case"nauticalMile":e*=.53996,i=L.GeometryUtil.formattedNumber(e/1e3,o.nm)+" nm";break;case"yards":default:i=(e*=1.09361)>1760?L.GeometryUtil.formattedNumber(e/1760,o.mi)+" miles":L.GeometryUtil.formattedNumber(e,o.yd)+" yd"}return i},isVersion07x:function(){var e=L.version.split(".");return 0===parseInt(e[0],10)&&7===parseInt(e[1],10)}})}();
},{}]},{},["nDQX"], null)
//# sourceMappingURL=Leaflet_Sandbox/GeometryUtil.05447028.map