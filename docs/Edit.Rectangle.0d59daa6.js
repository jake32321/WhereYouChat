parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"6ake":[function(require,module,exports) {
L.Edit=L.Edit||{},L.Edit.Rectangle=L.Edit.SimpleShape.extend({_createMoveMarker:function(){var e=this._shape.getBounds().getCenter();this._moveMarker=this._createMarker(e,this.options.moveIcon)},_createResizeMarker:function(){var e=this._getCorners();this._resizeMarkers=[];for(var t=0,r=e.length;t<r;t++)this._resizeMarkers.push(this._createMarker(e[t],this.options.resizeIcon)),this._resizeMarkers[t]._cornerIndex=t},_onMarkerDragStart:function(e){L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this,e);var t=this._getCorners(),r=e.target._cornerIndex;this._oppositeCorner=t[(r+2)%4],this._toggleCornerMarkers(0,r)},_onMarkerDragEnd:function(e){var t,r=e.target;r===this._moveMarker&&(t=this._shape.getBounds().getCenter(),r.setLatLng(t)),this._toggleCornerMarkers(1),this._repositionCornerMarkers(),L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this,e)},_move:function(e){for(var t,r=this._shape._defaultShape?this._shape._defaultShape():this._shape.getLatLngs(),s=this._shape.getBounds().getCenter(),i=[],a=0,n=r.length;a<n;a++)t=[r[a].lat-s.lat,r[a].lng-s.lng],i.push([e.lat+t[0],e.lng+t[1]]);this._shape.setLatLngs(i),this._repositionCornerMarkers(),this._map.fire(L.Draw.Event.EDITMOVE,{layer:this._shape})},_resize:function(e){var t;this._shape.setBounds(L.latLngBounds(e,this._oppositeCorner)),t=this._shape.getBounds(),this._moveMarker.setLatLng(t.getCenter()),this._map.fire(L.Draw.Event.EDITRESIZE,{layer:this._shape})},_getCorners:function(){var e=this._shape.getBounds();return[e.getNorthWest(),e.getNorthEast(),e.getSouthEast(),e.getSouthWest()]},_toggleCornerMarkers:function(e){for(var t=0,r=this._resizeMarkers.length;t<r;t++)this._resizeMarkers[t].setOpacity(e)},_repositionCornerMarkers:function(){for(var e=this._getCorners(),t=0,r=this._resizeMarkers.length;t<r;t++)this._resizeMarkers[t].setLatLng(e[t])}}),L.Rectangle.addInitHook(function(){L.Edit.Rectangle&&(this.editing=new L.Edit.Rectangle(this),this.options.editable&&this.editing.enable())});
},{}]},{},["6ake"], null)
//# sourceMappingURL=Leaflet_Sandbox/Edit.Rectangle.0d59daa6.map