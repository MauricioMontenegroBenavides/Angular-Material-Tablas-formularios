// Primer-NG es un conjuto O UN ALIBRERIA  de componetes ya estilizados 
//Ayuda en tablas, en inputs, calendarios etc 
// Los pipes vienen el paquete angular commun
// Los pipes transforman la data de manera visual 
//uppercase hace mayusculas la informacion 
// titlecase hace que la primera letra se mayuscula 



// Para instalar PRIMER-NG SE HACE UNA INSTALCION
///LA INSTALCIN SE LA HIZO DENTRO DEL PROYECTO QUE VAMOSSA UTILIAZR

// Estos comandos se encuentran en l apagina de prime https://www.primefaces.org/primeng/setup
//npm install primeng --save
//npm install primeicons --save

// Para verificar la instalcion se lo puede hacer en el packet.json en la seccion dependencias 


// Tmbien se instala algunos estilos que se encuetran en la misma pagina https://www.primefaces.org/primeng/setup

/* "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css", */

// Estas tres lineas se las pone en el angular.json en la parte styles

/* "styles": [
    "src/styles.css"  

    Los tres archivos se los pone en esta seccion 
  ],
 */

// Como informacion adicional los assets q estan dentro de angular.json en el proceso de build son recursos estaticos 


//Una vez instalado y si sequiere utizar cuaoquiera de llso componetnes se debe importar el modulo
// Ejemplo si se desea usar los componentes de un button se debe inportar el modulo
//import {ButtonModule} from 'primeng/button';
//Se importa en los imports en la seccion de los modulos


// cuando se modifica el styles.css se modifican los estilos globales del proyecto 

// En node_modules se encuentra todo lo relaciado a las instalaciones
// Gracias a q se aplico el primeNG se aplica un estilo global esta ruta esta en el angular.json
// En base a la ruta (node_modules/primeng/resources/themes/vela-blue/theme.css") se busca en esa misma direccion el theme.css para ver los colores y aplicarlos en el style.css
// En esta archivo se encuentra todos los estilos de css, los mismos se puede copiar en el style.css
//

