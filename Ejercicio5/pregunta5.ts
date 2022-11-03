(()=>{
interface Area {
    base: number,
    altura: number,
}

getArea : () => Number;

class Rectangulo implements Area{
    base: number;
    altura: number;


constructor(base:number,altura:number){
    this.base = base
    this.altura = altura
}

getArea(base:number,altura:number){
    const area = base*altura;
    return `El area calculada es ${area}`
    
}

}

let rectangulo = new Rectangulo(4,5)
console.log(rectangulo.getArea(rectangulo.base,rectangulo.altura))


})();