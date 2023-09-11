/* 21. Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos
(Teorema de Pitágoras).
function hipotenusa(c1, c2) {
}
console.assert(hipotenusa(1, 2) === 2.23606797749979); */

function run21 () {  

    let c1 = 0;
    let c2 = 0;

    while(true){
        c1 = prompt('Ingresa el numero que será c1: ', 0 );   
        
        if(!isNaN(c1) && c1 != null && c1 != ""){
            parseInt(c1);
            
          break;
        }else{
          return alert('No es un valor númerico');
          break;
        }
  
    }

    while(true){
        c2 = prompt('Ingresa la velocidad de crecimiento: ', 0 );   
        
        if(!isNaN(c2 ) && c2  != null && c2  != ""){
            parseInt(c2);
            
          break;
        }else{
          return alert('No es un valor númerico');
          break;
        }
  
    }

    let hipotenusa = Math.sqrt((Math.pow(c1,2)) + (Math.pow(c2,2)));

    return alert('La hipotenusa es: ' + hipotenusa);

}
