// frontend=>(json)=>php+mysql
// (json) es el tunel por donde viaja la informacion del back al front o viceversa
// PHP hace la conversion de la informacion(decodoficacion o codificacion del formato json) para pasar a un tipo de array entendible por php para depues hacer las conversiones al formato mysql
// Para que la inforamcion viaje de forma correcta del frontend al backend se debe crear un servicio 
// Será el que introduce las consultas seguna las consultas que se hacen a la base de datos 
// Mysql es el q de acuerdo a las consultas ingresa los datos a la base de datos 
// Para que la informacin viaje de forma correcta de back a front se debe conectar un servicio 
// En angualr creamos un serviciio 
// Un servicio no depende de los componetes, se puede usar un servicio con varios compponentes 
// El componente es el que pide el servicio 
// Lo q recomienda angualr es crear un solo servicio y dentro todas las bolsas de servicios  y desde ahi se comuniquen todos los componentes 
// Angular lo q hace es comunicar la bolsa de servicios con los componentes,entregando el servicio q requiere el componennte 
// Si requerimos importar los servicios al modulo general se lo pone en providers
// Cuando se desea q un servicio solo funcione en un componente se declara en providers 
// 
