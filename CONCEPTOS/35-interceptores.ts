// Los interceptores son como un servicio mas 
// el interceptor mira las cokies y las envia mediante un post al backend
// los guards vigula lasrutas 
// ejemplo el guard en la url vigila si encuentra un determinado parametro y ese parametro lo gurda en la cokie
// el interceptor inyecta el codigo de referido q lo jala de la cokie 

// Si no se utiliza interceptores a cada peticion de llamado al servicio hay q añadir el token,
// Los interceptores atrapan cada peticion http y me ingresan EL TOKEN en la cabecera
// Para q un interceptor atrape las peticiones http se debe implementar httpintercepto
