// Git es un software de control de versiones 
// git es un repositorio o base de datos 
// GIT TIENE DOS TIPOS DE REPOSITORIOS 
// repositorios remotos(GIB) o locales (estan en nuestra pc)
// CON Git init tenemos nuestro repositorio local en git => git init ( debe tener una carpeta creada)

//////////////////////////REPOSITORIO LOCAL conectar a remoto ///////////////////////
// Crear una cuenta en GITHUB
// Crear un repositorio en github
// Poner si es publico y privado 
// Al final de crear el repositorio se genera una url la q permite conectarnos al repositorio remoto 
// Ahora desde EL git en nustra pc tenemos q conectarnos al repositorio remoto
// PARA IDENTiFiCARNOS Q SOMOS NOSTROS PONEMOS NUESTRO NOMBRE DE USUSRIO :
// git config user.name "ponemos el nombre de nuestro respositorio en github"
// git config user.email "ponemos  nuestro mail en github"
// git remote add origin "url de gibhub"
// ya estamos conectados al repositorio 
///////////////////////// ///////////////PASAR ARCHIVOS DEL REPOSISTORIO LOCAL AL REMOTO /////////////////////////////////////////////////////////

// Creo el archivo de manera local en la carpeta que creamos al inicio 
// Me dice el estado ene le q esta git ahora => git status 
// al hacer este comando git status me dice si el archivo esta comiteado, osea si ya esta subido a github
// para añadir el archivo q esta en nuestro repositorio poner el comando =>git add nombre del archivo q deseamos pasar
// Para confirmar q el archivo se pasa de forma definitiva se usa el comando: 
// git commit -m "si estoy seguro del commit"va aparecer q se agrego un archivo definitivo
// Para pasar el archivo del repositorio local al remoto se hace un push
// git push -u origin(nombre del reppositorio remoto)+(nombre de la rama asociada)
// git push -u origin master
// Una rama es una linea de trabajo distinta a la principal q tengamos  
// git por defecto nos crea una rama principal (master o main) esta seria la principla , se crea de forma automatica
// git push -u origin master, despues de aplicar este comando me pide q valide la contraseña, ya se sube mi archivo a github

//////////////////////////////////////////////////BAJAR UN ARCHIVO DE GITHUB/////////////////////////////////////////////////////
// git clone + (url del repositorio remoto)=> si queremos bajarnos todo
// git pull => si queremos solo actualizar 



// $ git commit -m"cambios mauricio"
//$ git pull
