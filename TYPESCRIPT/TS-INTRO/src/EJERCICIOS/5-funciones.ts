
interface PersonajeOR{// UNA INTERFAZ AEN UNA CLSE TONTA , NO SABE SI TIENE GET, SET, NO SABE COMO FUNCIONA LOS METODOS 
    nombre:string;
    pv:number;
    sumarr:(b:number)=>number; // SE DECLARA UN METODO EN UNA INTERFAZ , y además se pone los tipos 
}

const nuevo:PersonajeOR={
    nombre:'Mauricio',
    pv:30,

    sumarr(a:number){
        return a
    }
}

function curar(personaje:PersonajeOR,curar:number):void{ // Si no quiero retornar nada puedo retornar void u undefine 
      personaje.pv+=curar;
      console.log(personaje)
}// En JS siempre retorna undefine si no se pone solo return

curar (nuevo,100);