interface da{
    noo:number,
    noo2:number
}
interface da2{
    noo:number,
    noo2:number
}



let amor:da={noo:30,noo2:40};
let amor1:da2={noo:0,noo2:0};

const amor3:da|da2[]=[amor,amor1]
console.log('holas')
console.log(amor1)
console.log(amor)


for(let i in amor){

    amor1[i]=amor[i]
}
console.log(amor1)

  
/* for(let i = 0 ; i < amor3.length ; i++){
    console.log(amor3[i]);
} */


