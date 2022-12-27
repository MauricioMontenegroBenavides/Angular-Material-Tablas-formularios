// Formularios reactivos 
// Todo parte de uan clase q es abstrat-control
// ESTA CLASE TIENEN VARIAS SUB-CLASES 
// -formControl(Input) 
// -formGroup(grupo de inputs)
// -Form Array ()
// SE TIENE DIRECTIVAS 
// -FormGroup
// FormControl
// FormControlName
// FormGroupName
// FormArray
// Ya sea para un formulario por template o reactivo se hace el uso de tres cosas:
// Formcontrol q hace el control de los campos como su estado actual, si ha sido editado, o no:
// -value        setValue()
// -validators   addvalidators()
// -errors       setErrrors()

// FormGroup nos permite agrupar una serie de valores para su procesamiento conjunto,agrupa los formControl 
// Si UNO Del grupo no supera la validacion los demas estadoS TMB NO LO HACEN 
// TAMBIEN SE PUEDE CREAR GRUPOS ANIDADOS DENTRO DEL FORMULARIO 
// FormArray se caracteriza por tener un diferenrte numero de elementos como por ejemplo los varios numeros de telefono q se puede tener para un mismo ususrio 
// Tambien se puede tener un array de formgroups cuando una fila tine varios campos , y un array de formControl cuando una fila tiene solo un campo 
// Tanto el FormArray como el Formgroup contene FormControl 



/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//<mat-form-field>es un componente que se utiliza para envolver varios componentes de material angular y aplicar estilos de campo de texto comunes , como el subrayado, la etiqueta flotante y los mensajes de sugerencia.


