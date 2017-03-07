var Vector = (function () {
    function Vector(x, y) {
        this._x = x;
        this._y = y;
    }
    Vector.prototype.setAngle = function (angle) {
        var length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    };
    Vector.prototype.getAngle = function () {
        return Math.atan2(this._y, this._x);
    };
    Vector.prototype.setLength = function (length) {
        var angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    };
    Vector.prototype.getLength = function () {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    };
    Vector.prototype.add = function (vector) {
        return new Vector(this._x + vector.x, this._y + vector.y);
    };
    Vector.prototype.subtract = function (vector) {
        return new Vector(this._x - vector.x, this._y - vector.y);
    };
    Vector.prototype.multiply = function (value) {
        return new Vector(this._x * value, this._y * value);
    };
    Vector.prototype.divide = function (value) {
        return new Vector(this._x / value, this._y / value);
    };
    Vector.prototype.addTo = function (v2) {
        this._x += v2.getX();
        this._y += v2.getY();
    };
    Vector.prototype.subtractFrom = function (v2) {
        this._x -= v2.getX();
        this._y -= v2.getY();
    };
    Vector.prototype.multiplyBy = function (val) {
        this._x *= val;
        this._y *= val;
    };
    Vector.prototype.divideBy = function (val) {
        this._x /= val;
        this._y /= val;
    };
    Object.defineProperty(Vector.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}());
var Main = (function () {
    function Main() {
        this._init();
    }
    Main.prototype._init = function () {
        var v1 = new Vector(10, 5);
        console.log(v1.getAngle());
        console.log(v1.getLength());
    };
    return Main;
}());
new Main();
