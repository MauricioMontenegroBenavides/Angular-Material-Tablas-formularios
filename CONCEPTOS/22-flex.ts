//FLEX-BASICS ES =AL WITHD ES LO MISMO
//CON FLEX-BASICS- SE OCUPA SOLO EL CONTENIDO
// FLEX-GROW ES COMO CRRECE EL ELEMENTO CON RESPECTO A SU FLEX-BASICS
// FLEX-GROW-1 CRECE EN ANCHO HASTA LLENAR LE ESPACIO
// FLEX-GROW-2  CRECE PERO NO SIGNIFICA Q SEA EL DOBLE DEL QUETIENE UNO, ESE NUMERO ES EL FACTOR DE CRECIMIENTO
// LOS FLE-GROW FUNCIONAN EN FUNCION DEL ESPACIO DISPONIBLE
// SE SUMA TODOS LOS FACTPRES DE CRECIMIENTO Y SE DIVIDE PARA ESPACIO DISPONIBLE
// Si quiero q un elemento no crezca se pone grow-0 y los otros crezcan se pone grow-1


//flex shrink es lo cantario porque se encoje
// Esto se utiliza cuando el espacio disponible es negativo (cuando la suma de sus contenidos es mayor q el espacio disponible)
// los items por defecto tienen el valor de 1 estoquiere decir que se encoje hasta que el espacio disponible sea igual a cero
// pOr defecto grow esta en cero y shrink esta en 1
// flex: grow shrink basic es la union de todos
// por defecto grow= 0; shrink=1; basic=auto
// flex none = 0,0,auto
// flex auto= 1,1,auto
// Se puede poner con % haciendo flex=60, significa el 60%
// Margin-top:auto envia al boton al ultimon
