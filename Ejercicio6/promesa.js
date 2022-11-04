(function () {
    var retirarDinero = function (retiro) {
        return new Promise(function (resolve, reject) {
            var DEFAULT_CASH = 1000;
            DEFAULT_CASH >= retiro ? resolve("Monto disponible a retirar; ".concat(DEFAULT_CASH - retiro)) : reject('Saldo insuficiente');
        });
    };
    console.log(retirarDinero(370)
        .then((function (res) { return console.log(res); }))["catch"](function (err) { return console.warn(err); }));
    console.log(retirarDinero(1420)
        .then((function (res) { return console.log(res); }))["catch"](function (err) { return console.warn(err); }));
    console.log(retirarDinero(1000)
        .then((function (res) { return console.log(res); }))["catch"](function (err) { return console.warn(err); }));
})();
