// En angular no es necesario implementar patrones como  redux 
// angular tarabaja como un singlenton q es una clase instanciada de manera global 
// Creo una carpeta llamada services
// Los servicios se pueden crear al nivel que se desee 
// Dentro de la carpeta service se crea dbz.service.ts
// Crear una clase y exportar, ademas poner @Injectable() 
// En el archivo de modulos poner providers:[], ahi van todos los servicios 
// El servicio se ejecuta hasta que se crea la primera instancia y de ahi ese mismo sirve para cualquier componenete 
// En los servicios se ponen todos los metodos para externalizarlos con toda la aplicacion, en otras palabras centralizamos la inofrmacion 
// Desde los servicios se manda a llamar los endpoint de las apirest con peticiones http 
// Desde el componente padre se inyecta el servicio mediante un constructor, el cual esta cemtralizado y nohace falta poner enlos componentes hijos automaticamente 
// En los servicios se puede poner todads las propiedades 
// Siempre la manipulacion de los dastos se la debe hacer en el serevicio y no en los componentes 
// En los servicios se pueden tener las variables inicializadas 
// Mediante el constructor en el componente principal se realciona la clase del servicio y la variable nueva, esta variable nueva se relaciona con als variables q se encuentran el componente padre
// this.variableLocal=this.variableNueva.variableLocal (Es la formad de traer el servicio)
// Otra forma de obtener informacion es con un get() siemore debe tenre el nombre de la variable local 
// TODA LA manipulacion deberia hacerse en los servicios y no en los componentes 
// Lo  correcto es hacer privada las propiedades en los servicios con la palabra private
// tambien se puede borrar la parte del get,el constructor y los metodos en el componente principal
