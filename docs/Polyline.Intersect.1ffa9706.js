parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"7Jge":[function(require,module,exports) {
L.Polyline.include({intersects:function(){var t,e,n,i=this._getProjectedPoints(),r=i?i.length:0;if(this._tooFewPointsForIntersection())return!1;for(t=r-1;t>=3;t--)if(e=i[t-1],n=i[t],this._lineSegmentsIntersectsRange(e,n,t-2))return!0;return!1},newLatLngIntersects:function(t,e){return!!this._map&&this.newPointIntersects(this._map.latLngToLayerPoint(t),e)},newPointIntersects:function(t,e){var n=this._getProjectedPoints(),i=n?n.length:0,r=n?n[i-1]:null,s=i-2;return!this._tooFewPointsForIntersection(1)&&this._lineSegmentsIntersectsRange(r,t,s,e?1:0)},_tooFewPointsForIntersection:function(t){var e=this._getProjectedPoints(),n=e?e.length:0;return!e||(n+=t||0)<=3},_lineSegmentsIntersectsRange:function(t,e,n,i){var r,s,o=this._getProjectedPoints();i=i||0;for(var c=n;c>i;c--)if(r=o[c-1],s=o[c],L.LineUtil.segmentsIntersect(t,e,r,s))return!0;return!1},_getProjectedPoints:function(){if(!this._defaultShape)return this._originalPoints;for(var t=[],e=this._defaultShape(),n=0;n<e.length;n++)t.push(this._map.latLngToLayerPoint(e[n]));return t}});
},{}]},{},["7Jge"], null)
//# sourceMappingURL=Leaflet_Sandbox/Polyline.Intersect.1ffa9706.map