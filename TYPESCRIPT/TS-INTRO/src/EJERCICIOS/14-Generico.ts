
// Cuando no se especifica el dato es de tipo any
// SI se necesita que una funcion reciba varios tipos de datos y nos deteecte automaticamente que tipo de dato es 
// se necesita poner <T> 
// Un dato de tipo generico puede ser cualquier tipo de dato 
// Necesitaremos datos que pueden variar dependiendo del tipo que le voy a especificar al moneto de hacer la llamada 
function quetipo<T>(ar:T){
    return ar
}
const da=quetipo('hola')
const da1=quetipo(3);
const da2=quetipo<boolean>(true);
const da3=quetipo([1,23,3]);
const da4=quetipo <number>(3)//otra opcionn es decir lo q vamos a retornar es string
