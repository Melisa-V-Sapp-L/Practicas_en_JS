/* 19. Crea una función que devuelva el perímetro de un círculo a partir de su radio:
function perimetroCirculo(r) {
}
console.assert(perimetroCirculo(3) === 18.84955592153876);
console.assert(perimetroCirculo(6) === 37.69911184307752); */

function run19 (val) { 

    let r = 0;
    const pi = 3.14;
    const dos = 2;

    while(true){
        val = document.getElementById('box19').value;   
        
        if(!isNaN(val) && val != null && val != ""){
            r = Math.abs(val);
          break;
        }else{
            return alert('No es un valor númerico');
          break;
        }
    } 

    let perimetroCirculo = dos * pi * r;
    
    return alert('El perimetro del circulo es: ' + perimetroCirculo);
}
