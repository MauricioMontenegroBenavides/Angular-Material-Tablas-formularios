// private , public, static nos  indica el alcance o visibilidad de los mismos

// private solo es visible dentro de una clase
// public la propiedad va va ser visisble fuera de la clase
// static se puede acceder a la propiedad sin instanciar la clase 
// Las clases si existen en JS, Mientras que las interfaces no existen 
// Las clases me sirven para crear instancias , mientras que la interfaz no se crea get o set
// La interfaz solo se define los tipos, mientras que en las clsaes ya se puede implementar metodos 

class heroe{
    nombre:string
    static edad:number // Con static se crea la propiedad a partir de la clase 
    redes:string

    // PARA PODER ACCEDER A LA PROPIEDAD PRIVADA HAY QUE CREAR UN CONSTRUCTOR 
}
//console.log(heroe.redes)

const spider=new heroe();
spider.nombre='oso'// Sin static se crea la propiedad de la forma que se presenta spider.nombre='oso'
heroe.edad=30;
spider.redes='facebook'


console.log(spider)



