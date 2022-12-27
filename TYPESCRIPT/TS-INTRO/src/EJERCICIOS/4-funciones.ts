// Primer ejemplo sin tipado estricto 
function sumar(a,b){
    return a+b
}
const resultado=sumar('s','b')// En TS me obliga a poner los argumentos
console.log(resultado);

// Segundo ejemplo con tipado estricto  en los argumentos
function sumar1(a:number,b:number){
    return (a+b).toString()// Convierte de numero a string
}
const resultado1=sumar1(2,25)
console.log(resultado1);

// TERCER ejemplo con tipado estricto  en los argumentos Y EL RETORNO
function sumar2(a:number,b:number):string{// Vamos a retornar un string
    return (a+b).toString()// Convierte de numero a string
}
const resultado2=sumar2(2,25)
console.log(resultado2);


// CUARTO ejemplo con tipado estricto CON FUNCION FLECHA
const flecha=(a:number,b:number):string=>{

    return (a+b).toString()
}
const resultado3=flecha(2,25)
console.log(resultado3,'  hola');


// Los argumentos deben ir en orden:obligatorios, opcionales, los que ya tienen un valor definido 
const flecha1=(base:number,multiplicar?:number,multiplicando:number=3):string=>{

    return (base*multiplicando).toString()
}
const resultado4=flecha1(10)// AL momento de llamar la funcion siempre me va pedir los argumentos argumentos completos,  
console.log(resultado4,'  hola');//a menos que sea opcional o un valor definido