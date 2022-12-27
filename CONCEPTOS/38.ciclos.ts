// ciclos de vida 
// metods q se llaman cuando angular ejecuta algo en la app
// se ejecutan cuando angular:
// Empieza a montar 
// finaliza de montar
// inicializa 
// termina de inicializar=> afterinit(), referencia html del componente montado
// cuando hay cambios 
// actualiza el dom 
// Oinit()=>peticion http  cuando el componente se carga 



// Cuando un componete se construye(cuando el componente sea utilizado) se crea el contructor, despues todos los metodos 
// EN EL CONSTRUCTOR SE PONE INICIALIZACIONES ANTES  QUE EL HTML SEA INICIALIZADO 
// el ingionit es cuando el componetne ya esta inicializado y tenemos acceso al html, sirve para peticiones http
// al poner en le html la etiqueta de un componente se crea una instancia del componente 
//on deestroy se utiliza cuando se quiere hacer lipiezas por ejemplo en el subscribe 


// docheck antes de los cambios
// afterviewcheck despues q se hace los cambio y se verifica, esto tmb se dispara con el ngmodel xq esata hacuendo cambios 
// onchanges se dispara cuando hay inputs 
// Se dispara mientras haya un cambio en el input 
// se debe limpiar las suscripciones con ondestroy, ejemplo infinitas como las de interval