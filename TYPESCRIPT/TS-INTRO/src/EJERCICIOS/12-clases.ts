// El constructor es una funcion que se va llamar cuando creo una instancia de la clase 
class heroe2{
    _nombre:string
    edad:number // Con static se crea la propiedad a partir de la clase 
    redes:string
    // PARA PODER ACCEDER A LA PROPIEDAD PRIVADA HAY QUE CREAR UN CONSTRUCTOR 
    constructor(no:string,ed:number,re:string){
        this._nombre=no
        this.edad=ed
        this.redes=re
    }
}
const bat=new heroe2('mau',23,'face');
console.log(bat)
// SEGUNDO METODO PARA CREAR CLASES
class heroe3{
   /*  _nombre:string
    edad:number // Con static se crea la propiedad a partir de la clase 
    redes:string
    // PARA PODER ACCEDER A LA PROPIEDAD PRIVADA HAY QUE CREAR UN CONSTRUCTOR  */
    constructor(public no:string,public ed:number, public re:string){
      /*   this._nombre=no
        this.edad=ed
        this.redes=re */
    }
}
const bat1=new heroe3('CARLOS',435,'face');
console.log(bat1)