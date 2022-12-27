let a=[1,2,'hola',true];// Se puede crear un arreglo de cualquier tipo pero si no se declara que tipo es
// typescript lo infiere, pero al momento de querer añadir un tipo que no consta en el inferido inicialmente este sale error
// Lo positovo de TS es que nos sale errores en tiempo de escritura y no es tiempo de ejecucion
console.log(a)
a.push(false)
console.log(a)


///////////////////////////////////////////
// OTRA FORMA ES DECLARANDO DESDE EL INICIO LE TIPO DE VARIABLE
let a1:(number|string|boolean)[]=[1,2,'hola',true];// Se puede crear un arreglo de cualquier tipo pero si no se declara que tipo es
// typescript lo infiere, pero al momento de querer añadir un tipo que no consta en el inferido inicialmente este sale error

console.log(a1)
a1.push(false)
console.log(a1)