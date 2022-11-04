"use strict";
exports.__esModule = true;
(function () {
    var fruits = [
        'apple',
        'melon',
        'mango',
        function (fruta) {
            var zumo = "Zumo Le ".concat(fruta);
            console.log(zumo);
            return zumo;
        }
    ];
    var fn1 = fruits[3];
    console.log('Coleccion set:', fn1);
    //Set(es una coleccion que no permite la duplicidad de valor)
    var numbersCollection = new Set();
    numbersCollection.add(5);
    numbersCollection.add(5);
    numbersCollection.add(6);
    console.log('Coleccion set:', numbersCollection);
    //const unicos = { ...new Set([1,1,2,2,2,2,3])}//(3){1,2,3}
    //Map (es un diccionario con una key y un value)
    var students = new Map();
    students.set('one', 'Josue');
    students.set('two', 'Alex');
    students.set('three', 'Lucy');
    console.log('Coleccion map: ', students.get('one'));
    console.log('------------------');
    var promesaInicial = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Se obtuvieron los valores esperados');
        }, 2000);
    });
    promesaInicial
        .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn('[Exception]', err); });
})();
