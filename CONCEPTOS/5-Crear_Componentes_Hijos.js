// ng g c dbz/personajes 
// Se utiliza el deceorador @Input() para pasar una propiedad del padre al hijo
// Se utiliza el deceorador @Output() para pasar una propiedad del hijo al padre
// El Output es como cualquiera otro evento,como el blur, input, submit  etc 
// Los Output son de un tipo especial Eventemitter , este tipo es un generico , osea puede tomar cualquiere valor <T>
//  En el html se pone la variable exportada como un evento que llama una funcion que se encuentra en el componenete padre
// (varaible exportada)=funcion($event)