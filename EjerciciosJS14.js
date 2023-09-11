/* 14. Crear una función que reciba un arreglo de números enteros positivos desordenados y
devuelva otro arreglo con los números ordenados. */

function run14 (val) {  
    val = document.getElementById('box14').value;

    parseInt(val);

    for (let i of val) {
        array.push(i); 
    }

    array2 = array.filter((item)=>item !== '.');

    array2.sort();

    return alert(array2);

}