/*
27. Crea una función que reciba una cadena y la devuelva en camelCase
function camelize(str) {
}
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');
*/
function run27 (val) {
    
    val = document.getElementById('box27').value;
    
    let camelize = '';

    let palabra = '';

    let espacio = val.includes(' ');

    if (val.length !== 0) {
      
      if (espacio === true) {
        array = val.split(' ');
        camelize = array[0];
        for (let i = 1; i < array.length; i++) {
        palabra = array[i];
        let mayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
        console.log(palabra);
        camelize = camelize + mayuscula;
        }

        return alert('La frase queda así: ' + camelize);

      } else {
        return alert ('Escribe una frase respetando espacios.');
      }
  
    } else {
      return alert ('Escribe una frase.');
    }
    
    

}