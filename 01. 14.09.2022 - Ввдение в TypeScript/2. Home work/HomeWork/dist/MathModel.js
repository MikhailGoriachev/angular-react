var MathModel = (function () {
    function MathModel(a, b) {
        this.a = a;
        this.b = b;
    }
    MathModel.prototype.z1v14 = function () {
        var cosA = Math.cos(this.a);
        var sinA = Math.sin(this.a);
        return (cosA + sinA) / (cosA - sinA);
    };
    MathModel.prototype.z2v14 = function () {
        var prodA = 2 * this.a;
        return Math.tan(prodA) + 1 / Math.cos(prodA);
    };
    MathModel.prototype.z1v15 = function () {
        var powB = this.b * this.b;
        return Math.sqrt(2 * this.b + 2 * Math.sqrt(powB - 4)) /
            (Math.sqrt(powB - 4) + this.b + 2);
    };
    MathModel.prototype.z2v15 = function () {
        return 1 / Math.sqrt(this.b + 2);
    };
    return MathModel;
}());
//# sourceMappingURL=MathModel.js.map