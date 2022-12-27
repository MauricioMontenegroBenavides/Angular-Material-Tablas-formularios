// Angulsr es un framework
// Funciona para escritorio, movil(native script lo compila a swit), para electron escritorio 
// Es decir es un marco de trabajo estandarizado 
// Las aplicaciones de anguular son modulares
// INSTALAR el angular cli, sirve para instalar varias aplicaciones de angular 
// Una vez instalado correr EL comando : ng new +NOMBRE DE LA CARPETA DONDE VA ESTAR EL PROYECTO

//*BLOQUES FUNDAMENTALES DE ANGULAR
//-COMPONENTES 
//-SERVICIOS
//-RUTAS
//-DIRECTIVAS
//-MODULOS

// *COMPONENTES._ Tiene html y typescript(Es una clase), se buscan que sean bloques pequeños y simples.

// *SERVICIOS._ No se necesita gestores de estado, son lugares centralizados de informacion(componente==>boton(el componente tiene un boton y llama al servicio)==> servicio).
//              Los servicios son para grabar informacion en base de datos, o traer informacion, en general los servicios son lugares centrales de informacion.

// *DIRECTIVAS._ Son tres:
// -DIRECTIVAS de Componentes(Es parecida al COMPONENTES, pero es html pequelo reutilizable, ya viene conectado,se crea un html automatico)
// -DIRECTIVAS Estructurales(Modifica el DOM o HTML)
// -DIRECTIVAS de Atributos (Cambian el comportamiento de una directiva o de un elemento) 

// *RUTAS Se basan en el url del cliente

// *MODULOS Se agrupan varios modulos,ya hay modulos como calendarios ya hechos

// CREAR UN PROYECTO 
// -Instalar CLI ANGULAR
// -Crear una carpeta nueva , dentro de esa carpeta crear el proyecto bases 
// -ng new nombre-del-proyesto
// -Entrar a la carpeta bases y ejecutar un comando para levantar el proyecto 
// -ng serve -o (levanta el proyecto,lo empaqueta y monta un servidor mediante webpack y lo traduce a JS), se debe entrar a la carpeta del proyecto para ejecutar el comando
// Si se ve package.json significa que esta dentro de  la carpeta del proyecto

// CUANDO SE VE UN ARCHIVO .JSON SIGNIFICA QUE ES UN ARCHIVO DE CONFIGURACION 

// tsconfig.json contine las configuraciones de como se desea que TS se traduzca a JS
// tsconfig.spec.json añade nuevas configuraciones a tsconfig.json, y se relaciona con las pruebas unitarias o integracion 
// tsconfig.app.json son archivos de configuracion
// README.md es un arvhivo de texto,documento donde se detalla como se creo la aplicacion
// package.json es un archivo bastante delicado donde contiene las dependencias de proyecto
// package-lock.json explica como se creo las modulos de codigo
// karma.conf.js sirve para realizar las pruebas  
// angular.json contiene los asets(recursos estaticos ), los estilos(styles) 
// .gitignore son los archivos que no quiero que git le de seguimiento
// .browserslistrc son archivos que nos ayuda con la compatibilidad de los navegadores 
// node_modules tiene varios modulos que muchos de ellos no van a produccion, como paquetes para traducir de JS a TS
// ANGULAR CLI CONFIGURA MUCHOS TIPOS DE PRUEBAS 

// *SRC
// SRC=>APP=>app.component.spec.ts(es para realiazar pruebas)

// SRC=>ASSETS (son utilizados para colocar recursos estáticos en la app, imagenes, sonidos(cosas que no tinen que traducirse al JS))

//*SRC==>ENVIRONMENTS
// Aqui se encuentran las variables de produccion y desarrollo , hay q tener un url q apunte al servidor real 

//*SRC==>main.ts-.Ayuda a decir a angular el ambiente en el que esta corriendo.

// SRC==>polyfills.-Los polyfils son configuraciones para navegadores viejos 

//*SRC==>styles.css.- Son los estilos globales 







/////////////////////////////////////////

//AOT Es compilacionnd eforma anticipada 
// el navegador cada vez q tiene q descargar un archivo 
// Se tiene q pasar por cuatro partes:
// 1)-Descargar 
// 2)-Analizarlo
// 3)-Compilar 
// 4)-Ejecutarlo
//Todo lo que se pone en angular se debe compilar en JS ejecutable 

// Angular tiene dos formas de compilar 

///////////////////AOT///////////////////////////////
// AOT (compilacin anticipada esta automatica para produccion) 
// Ejecutando ng build --prod automaticamente se habilita en AOT
// Entrega una compilacion pre-compilada 
// ng build --aot
// ng serve --aot
// ng build --prod
// ventaja es mayor rendimiento 


///////////////////JIT///////////////////////////////
//
// JIT(Cuando estamos desarrollando se utiliza compilacion en tiempo de ejecucion) 