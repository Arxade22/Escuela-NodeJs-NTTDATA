(()=>{

interface Usuario{
    nombre: string,
    apellido?: string,
    edad: number,
    peruano?:boolean,

}    

function initUser(options?: Partial<Usuario>): Usuario {
    const defaults = {
      nombre: '',
      edad:0,
      peruano : true,

    };
  
    return {
      ...defaults,
      ...options,
    };
  }

function getUser(user : Usuario){
    const connect = user.peruano? 'con': 'sin';
    return `El nombre del usuario es ${user.nombre} ${user.apellido} con edad de ${user.edad} y ${connect} nacionalidad peruana `;
}  

const p1 : Usuario = initUser();
console.log(getUser(p1));
const p2 :Usuario = initUser({nombre:'Braulio',apellido:'Villegas',edad:23})
console.log(getUser(p2));
})();

