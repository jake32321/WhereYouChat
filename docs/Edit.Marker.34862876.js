parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"/COY":[function(require,module,exports) {
L.Edit=L.Edit||{},L.Edit.Marker=L.Handler.extend({initialize:function(e,t){this._marker=e,L.setOptions(this,t)},addHooks:function(){var e=this._marker;e.dragging.enable(),e.on("dragend",this._onDragEnd,e),this._toggleMarkerHighlight()},removeHooks:function(){var e=this._marker;e.dragging.disable(),e.off("dragend",this._onDragEnd,e),this._toggleMarkerHighlight()},_onDragEnd:function(e){var t=e.target;t.edited=!0,this._map.fire(L.Draw.Event.EDITMOVE,{layer:t})},_toggleMarkerHighlight:function(){var e=this._marker._icon;e&&(e.style.display="none",L.DomUtil.hasClass(e,"leaflet-edit-marker-selected")?(L.DomUtil.removeClass(e,"leaflet-edit-marker-selected"),this._offsetMarker(e,-4)):(L.DomUtil.addClass(e,"leaflet-edit-marker-selected"),this._offsetMarker(e,4)),e.style.display="")},_offsetMarker:function(e,t){var i=parseInt(e.style.marginTop,10)-t,r=parseInt(e.style.marginLeft,10)-t;e.style.marginTop=i+"px",e.style.marginLeft=r+"px"}}),L.Marker.addInitHook(function(){L.Edit.Marker&&(this.editing=new L.Edit.Marker(this),this.options.editable&&this.editing.enable())});
},{}]},{},["/COY"], null)
//# sourceMappingURL=/Edit.Marker.34862876.map