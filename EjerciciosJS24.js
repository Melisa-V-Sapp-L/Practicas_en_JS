/* 
24. Crea una función que reciba una cadena y un número n y devuelva la cadena repetida n
veces:
function repite(str, n) {
}
console.assert(repite('Batman ', 3) === 'Batman Batman Batman ');

*/

function run24 (val) {
    
      val = document.getElementById('box24').value;
      let n = 0;
  
      while(true){
        n = prompt('Ingresa un número: ', 0 );  
        
        if(!isNaN(n) && n != null && n != ""){
            parseInt(n);
            Math.abs(n);
          break;
        }else{
          return alert('No es un valor númerico');
          break;
        }
      }

    let repeatString = val.repeat(n);

    return alert(repeatString);

  }