function Square(length) {
    this.length = length;
    Square.prototype.getArea = function() {
        return this.length * this.length;
    }

    Square.prototype.getCircumference = function() {
        let circumference = 4*this.length;
        return circumference;
    }
}

module.exports = Square;