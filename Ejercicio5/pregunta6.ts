(()=>{

interface Videogame{
        nombre: string,
        precio: number,
        agotado: boolean,

}


class Compra implements Videogame{
    nombre: string;
    precio: number;
    agotado: boolean;

constructor(nombre:string,precio:number,agotado:boolean){
    this.nombre = nombre
    this.precio = precio
    this.agotado = agotado
}    

getInformation = (game:Videogame) => {
    if(game.agotado){
        return `El juego ${game.nombre} que cuesta ${game.precio} ha sido adquirido`
    }

    return `El juego ${game.nombre} esta agotado`
    

}
}

let compra = new Compra('The Last of Us',24,true);
console.log(compra.getInformation(compra))


})();