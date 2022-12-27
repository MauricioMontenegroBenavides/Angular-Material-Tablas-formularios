import { Productos } from "./9-Desestructuracion-funciones"
import { calcular } from "./9-Desestructuracion-funciones";
// En angular esto daria un error ,lo correcto es importar la interfaz
// EN TS estoo si funciona ya que compila todo
// Lo correcto en Angular es exportar las interfaces
// Al momento de importar tambien se ejecuta el archivo original 

const carrito:Productos[]=[
   {
    descripcion:'telefono1',
    precio:140
   },
   {
    descripcion:'telefono2',
    precio:150
   }
]

const [x1,x2]=calcular (carrito);

console.log('El total',x1);
console.log('El impuesto',x2);