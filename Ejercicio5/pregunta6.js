(function () {
    var Compra = /** @class */ (function () {
        function Compra(nombre, precio, agotado) {
            this.getInformation = function (game) {
                if (game.agotado) {
                    return "El juego ".concat(game.nombre, " que cuesta ").concat(game.precio, " ha sido adquirido");
                }
                return "El juego ".concat(game.nombre, " esta agotado");
            };
            this.nombre = nombre;
            this.precio = precio;
            this.agotado = agotado;
        }
        return Compra;
    }());
    var compra = new Compra('The Last of Us', 24, true);
    console.log(compra.getInformation(compra));
})();
