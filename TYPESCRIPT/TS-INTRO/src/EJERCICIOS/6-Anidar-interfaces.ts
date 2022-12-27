interface dire{
    calle:string;
    pais:string
}


interface Superh{
    nombre:string;
    edad:number;
    mostrarDirecion:()=>void;
    direccion:dire;
}

const superh:Superh={
    nombre:'mau',
    edad:30,
    direccion:{
        calle:'san marino',
        pais:'usa'
    },
    mostrarDirecion(){
        return this.nombre+', '+ this.direccion.pais;
    }
}

const direccion=superh.mostrarDirecion();
console.log(direccion)