// DESESTRUCTURACION DE ARGUMENTOS 
export interface Productos{
    descripcion:string;
    precio:number
};

const telf:Productos={
    descripcion:'nokia',
    precio:200
}

const tablet:Productos={
    descripcion:'apple',
    precio:400
}

 export function calcular(pro:Productos[]):number[]{// En la funcion indica que va a retornar un ARREGLO DE NUMEROS 
    let total=0;
    pro.forEach(({precio,descripcion}) => {// Se utiliza desestructuracion de objetos 
        total+=precio // Con la desestructuracion no se pone "pro.precio"
        console.log(descripcion)
    });
    return [total,total*0.15];
}

const [t,t1]=calcular([telf,tablet]);// Se utiliza desestructuracion de arrays
console.log('El total',t);
console.log('El impuesto',t1);
