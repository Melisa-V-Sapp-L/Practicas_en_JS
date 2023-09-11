/* 17. Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible
por divisor menor que limite. Ambos valores serán siempre enteros positivos.
function maximoDivisible (divisor, limite) {
} */

function run17 () {  

    let divisor = 0;
    let limite = 0;
    
    while(true){
        divisor = prompt('Ingresa el numero que será divisor: ', 0 );   
        
        if(!isNaN(divisor) && divisor != null && divisor != ""){
            parseInt(divisor);
          break;
        }else{
            return alert('No es un valor númerico');
          break;
        }
  
    }

    while(true){
        limite = prompt('Ingresa la velocidad de crecimiento: ', 0 );   
        
        if(!isNaN(limite ) && limite  != null && limite  != ""){
            parseInt(limite);
          break;
        }else{
            return alert('No es un valor númerico');
          break;
        }
  
    }
    

}
