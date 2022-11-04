import { rejects } from "assert";
import { resolve } from "path";

(() =>{
const fruits = [
    'apple',
    'melon',
    'mango',
    (fruta:String)=>{
        const zumo = `Zumo Le ${fruta}`;
        console.log(zumo);
        return zumo;
    }
];
const[,,,fn1]= fruits;
console.log('Coleccion set:',fn1);

//Set(es una coleccion que no permite la duplicidad de valor)
const numbersCollection = new Set();
numbersCollection.add(5);
numbersCollection.add(5);
numbersCollection.add(6);

console.log('Coleccion set:',numbersCollection);
//const unicos = { ...new Set([1,1,2,2,2,2,3])}//(3){1,2,3}

//Map (es un diccionario con una key y un value)
const students = new Map();
students.set('one','Josue');
students.set('two','Alex');
students.set('three','Lucy');

console.log('Coleccion map: ', students.get('one'));

console.log('------------------')

const promesaInicial = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Se obtuvieron los valores esperados');
        },2000);
});
 
promesaInicial
   .then(res=>console.log(res))
   .catch(err=>console.warn('[Exception]',err));

})();