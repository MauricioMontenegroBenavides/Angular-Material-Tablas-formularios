// Es una plataforma  en la nube 
// Ofrece una bd en tiempo real 
// Es NO-SQL
// Almacena los ficehros en formato Json 
// Actualiza automaticamente los datos 
// Permite identificar a los usuarios de forma tradicional 
// Identificar cuentas con google, twiter, facebook
//Operacions Crud son directas 
// Despliegue sencillos ,como la generacion de correos a los usuarios cuando hagan un determinado paso
// ENVIO DE NOTIFICACIONES A USUARIOS 
// la abse de datos fire  almacena datos en documentos , que están organizados en colecciones . Cada documento contiene un conjunto de pares clave-valor
// snapshotChanges() ¿Qué es? El estado actual de tu colección. Devuelve un Observable de datos como una matriz sincronizada
// snapshotChanges() se utiliza Cuando necesita una lista de datos, pero también desea conservar los metadatos

// Si se desea enviar los datos por un httpclient al hacer con el metodo post duplica los datos 
// Si no se desea q se duplicar se hace por el metodo put
// Para trabajar con httpclient si se desea enviar informacion se crea un servicio donde se hace un post a la base de datos con la uurl y la inforamcion de los 
// formularios, pero si deseo obtener la informacion de la base de datos se hace un get desde el servicio con una fiuncion q haga un return 
// Observable permite operaciones asincronas, es decir puede hacer actualizaciones en segundo plano sin necesidada de hacer un select a cada momneto, actualiza la informacion instantaneamente, aunqie la app este en ejecucion haciendo otras tareas
// El observable es un objeto q esta vigilante a los cambios de la app 
// Para obtener los resualtados de un observable hay q suscribirse a ellos 
/////////////////////////////////////////////////////////////////////////

// 1) Se crea la base de datos en fire 
// 2) Despues se crea el codigo de la cadena d e conexxion 
// 3) const firebaseConfig = {
/*   apiKey: "AIzaSyDaVnkwUlfWIEE4SnHf3NBjCD9Wdk9_8NY",
  authDomain: "angular-bf1bc.firebaseapp.com",
  projectId: "angular-bf1bc",
  storageBucket: "angular-bf1bc.appspot.com",
  messagingSenderId: "771828350160",
  appId: "1:771828350160:web:cbed8fe07d04f78dc8b2d5",
  measurementId: "G-V3DH2LR0B2"
}; */


// 4) La variable de conexion se la pone en el enviorment.ts 
// 5) Instala npm i @angular/fire