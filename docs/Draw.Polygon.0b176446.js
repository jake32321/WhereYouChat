parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"LFju":[function(require,module,exports) {
L.Draw.Polygon=L.Draw.Polyline.extend({statics:{TYPE:"polygon"},Poly:L.Polygon,options:{showArea:!1,showLength:!1,shapeOptions:{stroke:!0,color:"#3388ff",weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2,clickable:!0},metric:!0,feet:!0,nautic:!1,precision:{}},initialize:function(t,i){L.Draw.Polyline.prototype.initialize.call(this,t,i),this.type=L.Draw.Polygon.TYPE},_updateFinishHandler:function(){var t=this._markers.length;1===t&&this._markers[0].on("click",this._finishShape,this),t>2&&(this._markers[t-1].on("dblclick",this._finishShape,this),t>3&&this._markers[t-2].off("dblclick",this._finishShape,this))},_getTooltipText:function(){var t,i;return 0===this._markers.length?t=L.drawLocal.draw.handlers.polygon.tooltip.start:this._markers.length<3?(t=L.drawLocal.draw.handlers.polygon.tooltip.cont,i=this._getMeasurementString()):(t=L.drawLocal.draw.handlers.polygon.tooltip.end,i=this._getMeasurementString()),{text:t,subtext:i}},_getMeasurementString:function(){var t=this._area,i="";return t||this.options.showLength?(this.options.showLength&&(i=L.Draw.Polyline.prototype._getMeasurementString.call(this)),t&&(i+="<br>"+L.GeometryUtil.readableArea(t,this.options.metric,this.options.precision)),i):null},_shapeIsValid:function(){return this._markers.length>=3},_vertexChanged:function(t,i){var e;!this.options.allowIntersection&&this.options.showArea&&(e=this._poly.getLatLngs(),this._area=L.GeometryUtil.geodesicArea(e)),L.Draw.Polyline.prototype._vertexChanged.call(this,t,i)},_cleanUpShape:function(){var t=this._markers.length;t>0&&(this._markers[0].off("click",this._finishShape,this),t>2&&this._markers[t-1].off("dblclick",this._finishShape,this))}});
},{}]},{},["LFju"], null)
//# sourceMappingURL=Leaflet_Sandbox/Draw.Polygon.0b176446.map