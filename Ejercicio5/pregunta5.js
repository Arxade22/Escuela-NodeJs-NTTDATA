(function () {
    getArea: (function () { return Number; });
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        Rectangulo.prototype.getArea = function (base, altura) {
            var area = base * altura;
            return "El area calculada es ".concat(area);
        };
        return Rectangulo;
    }());
    var rectangulo = new Rectangulo(4, 5);
    console.log(rectangulo.getArea(rectangulo.base, rectangulo.altura));
})();
