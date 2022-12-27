// Decoradores sireve para cambiar las clases al momento de compilar 
// Existen varios tipos de decoradores
// En angular casi todo es una clase

interface datos{
    nombre:string;
    hijos?:string[]
}

const jose:datos={
    nombre:'jose',
    hijos:['mario','sanrti']
}


const carlos:datos={
    nombre:'jose',
}

function contar(persona:datos){
    const numero:number=persona.hijos?.length||0// al no poner ? me sale error 
    return console.log(`${numero} hijos`)
}

contar(carlos)