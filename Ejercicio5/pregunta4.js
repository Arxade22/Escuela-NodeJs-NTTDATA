var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(function () {
    function initUser(options) {
        var defaults = {
            nombre: '',
            edad: 0,
            peruano: true
        };
        return __assign(__assign({}, defaults), options);
    }
    function getUser(user) {
        var connect = user.peruano ? 'con' : 'sin';
        return "El nombre del usuario es ".concat(user.nombre, " ").concat(user.apellido, " con edad de ").concat(user.edad, " y ").concat(connect, " nacionalidad peruana ");
    }
    var p1 = initUser();
    console.log(getUser(p1));
    var p2 = initUser({ nombre: 'Braulio', apellido: 'Villegas', edad: 23 });
    console.log(getUser(p2));
})();
