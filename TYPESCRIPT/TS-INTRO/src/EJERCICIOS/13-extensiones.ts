// Se puede añadir funcionalidades a otras clases
// Es decir se puede añadir otros metodos y otras propiedades provenientes de otra clase
class normal {
    constructor(public nombre:string,public e:number){}
}

class superheroe extends normal{
    constructor(public nombreFalso:string,public datos:string,public poder:number){
        super('mauricio',22);
    }
}
const su=new superheroe('batman','12',123)
console.log(su)//superheroe {nombre: 'mauricio', e: 22, nombreFalso: 'batman', datos: '12', poder: 123}