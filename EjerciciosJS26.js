/*
26. Crea una función que reciba una cadena y lo devuelva con todas las palabras con su
primera letra mayúscula
function primeraMayuscula(str) {
}
console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');
*/
function run26 (val) {
    
    val = document.getElementById('box26').value;

    let primeraMayuscula = '';

    let palabra = '';
    
    let espacio = val.includes(' ');

    if (val.length !== 0) {
      
      if (espacio === true) {
        array = val.split(' ');
        for (let i = 0; i < array.length; i++) {
        palabra = array[i];
        let mayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
        console.log(palabra);
        primeraMayuscula = primeraMayuscula + ' ' + mayuscula;
        }
        return alert('La frase queda así: ' + primeraMayuscula);
      } else {
        return alert ('Escribe una frase respetando espacios.');
      }
  
    } else {
      return alert ('Escribe una frase.');
    }
    

}