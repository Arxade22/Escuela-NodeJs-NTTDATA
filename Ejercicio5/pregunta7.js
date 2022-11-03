(function () {
    var usuarioInterface = {
        usuario: 'Braulio',
        clave: '123456',
        fecha: ' 2022-11-03',
        estado: true
    };
    var usuarioType = {
        nombre: 'Casaca',
        precio: 60
    };
    var names = [
        'Jhon', 'Luis', 'Mateo', 'Ana'
    ];
    var usuario = usuarioInterface.usuario, clave = usuarioInterface.clave, fecha = usuarioInterface.fecha, estado = usuarioInterface.estado;
    var nombre = usuarioType.nombre, precio = usuarioType.precio;
    var Mateo = names[2], Ana = names[3];
    console.log('Destructuracion en Interfaces', usuario, clave, fecha, estado);
    console.log('Destructuracion en Types', nombre, precio);
    console.log('Destructuracion en arrays', Mateo, Ana);
})();
