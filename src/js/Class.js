
function Class (){}

Class.prototype.init = function(){ };

Class.extend = function (p) {
    var i,
        _this = this,
        _class = new Function('return function(){ var i; this.super = {}; for (i in this._super) { if (i !== "_super") { this.super[i] = this._super[i].bind(this); } } this.init.apply(this, arguments); };')();

    _class.extend = this.extend;

    for (i in _this.prototype) {
        _class.prototype[i] = _this.prototype[i];
    }

    for (i in p) {
        _class.prototype[i] = p[i];
    }

    _class.prototype._super = _this.prototype;

    return _class;
}
