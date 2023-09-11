/* 18. Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha
planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol.
Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta
en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento,
velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva
el número de días que tardará la planta en medir la alturaDeseada.
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
} */

function run18 () { 

    let velocidadCrecimiento = 0;
    let velocidadDecrecimiento = 0;
    let alturaDeseada = 0;

    while(true){
        velocidadCrecimiento = prompt('Ingresa la velocidad de crecimiento: ', 0 );   
        
        if(!isNaN(velocidadCrecimiento ) && velocidadCrecimiento  != null && velocidadCrecimiento  != ""){
            parseInt(velocidadCrecimiento);
            Math.abs(velocidadCrecimiento);
          break;
        }else{
            return alert('No es un valor númerico');
          break;
        }
  
    }

    while(true){
        velocidadDecrecimiento  = prompt('Ingresa la velocidad de decrecimiento: ', 0 );
        
        if(!isNaN(velocidadDecrecimiento ) && velocidadDecrecimiento  != null && velocidadDecrecimiento  != ""){
            parseInt(velocidadDecrecimiento);
            Math.abs(velocidadDecrecimiento);
          break;
        }else{
            return alert('No es un valor númerico');
          break;
        }
    }

    while(true){
        alturaDeseada = prompt('Ingresa la altura deseada: ', 0 );
         
        if(!isNaN(alturaDeseada ) && alturaDeseada  != null && alturaDeseada  != ""){
            parseInt(alturaDeseada);
            Math.abs(alturaDeseada);
          break;
        }else{
            return alert('No es un valor númerico');
          break;
        }
    }

    let calcularDiasCrecimiento = alturaDeseada / (velocidadCrecimiento - velocidadDecrecimiento);

    return alert('Los días de crecimiento de la plantita son: ' + calcularDiasCrecimiento);
    
    };

    



