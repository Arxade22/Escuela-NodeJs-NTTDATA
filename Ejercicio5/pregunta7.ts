(()=>{

    interface User{
            usuario: string,
            clave: string,
            fecha: string,
            estado:boolean,
    
    }

    type Object = {
        nombre:string,
        precio:number
    }
    
    let usuarioInterface:User = {
        usuario: 'Braulio',
        clave: '123456',
        fecha:' 2022-11-03',
        estado: true,
    }
    let usuarioType:Object ={
        nombre:'Casaca',
        precio: 60
    }

    let names : string[] = [
        'Jhon','Luis','Mateo','Ana'
    ]

    const {usuario,clave,fecha,estado} = usuarioInterface;
    const {nombre,precio} = usuarioType
    const [,,Mateo,Ana] = names
    console.log('Destructuracion en Interfaces',usuario,clave,fecha,estado)
    console.log('Destructuracion en Types',nombre,precio)
    console.log('Destructuracion en arrays',Mateo,Ana)

    })();