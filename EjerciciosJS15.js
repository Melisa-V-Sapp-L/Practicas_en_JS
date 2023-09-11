/* 15. Crear una función que reciba un número entero positivo y devuelva true si dicho número
es par o false en caso contrario.
function esPar (numero) {
} */

function run15 (val) {  
    val = document.getElementById('box15').value;

    parseInt(val);

    let n = val % 2;

    if (n === 0) {
        return alert('True');
    } 
        return alert('False');

}