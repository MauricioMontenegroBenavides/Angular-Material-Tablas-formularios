
interface Personaje{// Sirve para manipular un objeto como nosostros queramos
    nombre:string;
    hp:number;
    habilidades:string[];
    ciudad?:string;
    edad?:number
} 

const personaje:Personaje={
    nombre:'mau',
    hp:100,
    habilidades:["correr","saltar"]
};
personaje.edad=30;
console.table(personaje)



