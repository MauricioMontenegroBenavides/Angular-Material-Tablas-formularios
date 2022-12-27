// Desustruracion de objetos 

interface reprod {

    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles
}

interface Detalles{

    autor:string;
    anio:number;
}

const Repro:reprod={

    volumen:90,
    segundo:36,
    cancion:'mes',
    detalles:{
        autor:'juan',
        anio:30
    }
};

// console.log(Repro.volumen); Se evita poner Repro a cada momento 
// console.log(Repro.segundo);

const {volumen,segundo,cancion}=Repro;
const {anio}= Repro.detalles;

console.log('volumen',volumen);
console.log('segundo',segundo);
console.log('cancion',cancion);
console.log('anio',anio);