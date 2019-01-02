var Cirlce = /** @class */ (function () {
    function Cirlce(rad, col) {
        this.radius = rad;
        this.color = col;
    }
    Cirlce.prototype.area = function () {
        return (this.radius) * (this.radius) * (3.14);
    };
    Cirlce.prototype.toString = function () {
        console.log("Circle  --" + this.area() + "  " + this.color);
    };
    return Cirlce;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.toString = function () {
        console.log("Rectangle  --" + this.area() + "  " + this.color);
    };
    return Rectangle;
}());
var CirlceObj = new Cirlce(20, "red");
var RectObj = new Rectangle(20, 30, "blue");
CirlceObj.toString();
RectObj.toString();
