/* 16. Crear una función que reciba como argumentos dos números y una operación (su nombre
    como cadena) y que devuelva el resultado de aplicar dicha operación a los dos números
    proporcionados
    function calculadora(num1, num2, operador) {
    } */

    function run16 (val) {

        val = document.getElementById('box16').value;  

        let operador = '';
        let num1 = 0;
        let num2 = 0;

        if ( val === '+' || val === '-' || val === '*' || val === '/'|| val === '%') {
            while (true) {
                num1 = prompt('Ingresa el primer número: ', 0 );
                num2 = prompt('Ingresa el segundo número: ', 0 );   
        
                if(!isNaN(num1,num2) && num1,num2  != null && num1,num2  != ""){
                    console.log('numero 1 '+ num1);
                    console.log('numero 1 '+ num1);
                    break;
                
                }else{
                    return alert('No es un valor númerico');
                    break;
                
                }
                
            }
                
        } else {
            return alert('Ingresa uno se los siguientes simbolos para determinar la operación:\n + => suma\n + => suma\n - => resta\n * => multiplicación\n / => división\n % => resto de una división');
        }

        
            
    }
