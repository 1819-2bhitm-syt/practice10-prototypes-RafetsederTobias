function Rectangle(length, width) {
    this.length = length;
    this.width = width;
    Rectangle.prototype.getArea = function() {
        return this.length * this.width;
    }
    Rectangle.prototype.getCircumference = function() {
        let circumference = 2*this.width + 2*this.length;
        return circumference;

    }
}

module.exports = Rectangle;