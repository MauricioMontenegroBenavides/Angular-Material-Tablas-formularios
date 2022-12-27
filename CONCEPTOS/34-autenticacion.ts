// login es crear un ususario o una contraseña q nosostros vamos almacenar 
// o tomamos sus datos de un servicio externo como facebook o twiter 
// JWT AUTH es un servidor propio 
// firebase o autho solo consumo 
// la informacion q envia el backend al frontent solo se envia si el usuario esta registrado 
// para esto el cliente debe enviar algo q lo autentique 
// nosotro enviamos nuestros datos al backent y si estas son corectas nos devuelve un token
// el token es una cadena q enviamos al frontend y este lo guarda 
// despues de esto cadad peticion q se haga al backend va ha ser enviada junto con el token 
// si el token ya expiro tendra q volver a logerase
// tmbien hay proteccon de rutas del lado del frontend(si no estamos autenticados no podemos visitar ciertas paginas)
// tambien hay gestion por roles del lado del frontent, es decir q anuque estemos autenticados no podamos ingresar a ciertas seccones 
// el token es un sistema de autorizacion para entrar a una ruta 
// UN TOKEN SE COMPONE POR TRES PARTES:
// 1) encabezado (ALGORITMO Y CIFRADO Q TIENE)
// 2) CARGA UTIL (ID, NOMBRE Y FOTO )
// 3) FIRMA (ES UN CODIGO GENERADO POR EL BACKEND), MEDIANTE LA SIGNATURE O FIRMA SE SABE SI SE GENERO PREVIAMENTE EL TOKEN EN UNA NUEVA CONSULATA DEL FRONTEND AL BACKEND
// JWT se pasa como encabezado de las peticiones http
// hacemos la peticion http  con el login y nos va a devolver un token (esto se ve en red=>hxr=> preview),con eswste token podemos consumir otros enpoinds 
// red=>hxr=> headers ) aqui se ve si la peticion fue exitosa 
// Poniendo el login nos autenticamos, y el backend devuelve un token si la autenticacion es la correcta, despues una vez AUTENTICADOS , con el token podemos ser AUTOIZAADOS para cualquier peticion futura
// El token se lo envia a cada momento en las peticiones para eso se utiliza interceptores
// ng g interceptor nombre