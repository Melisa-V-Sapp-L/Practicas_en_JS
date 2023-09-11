/*
25. Crea una función que reciba una frase como cadena y devuelva la palabra más larga:
function palabraMasLarga(str) {
}
console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');

*/

function run25 (val) {
    
    val = document.getElementById('box25').value;

    let palabraMasLarga = '';

    let palabra = '';
    let num = 0;

    let espacio = val.includes(' ');

    if (val.length !== 0) {
      
      if (espacio === true) {
        array = val.split(' ');
        for (let i = 0; i < array.length; i++) {
        palabra = array[i];
        let elements = palabra.length;
        if (elements > num) {
            palabraMasLarga = palabra;
            num = elements;
        }
        }
        return alert('La palabra mas larga es: ' + palabraMasLarga);
      } else {
        return alert ('Escribe una frase respetando espacios.');
      }
  
    } else {
      return alert ('Escribe una frase.');
    }

}