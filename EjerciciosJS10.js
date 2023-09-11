/* 10. Escribe una función recursiva sum(arr, n) que retorne la suma de los primeros n elementos del arreglo arr
function sum(arr, n) { } */

function run10 (val) {
    
	val = document.getElementById('box10').value;
 
    for (let i of val) {
        array.push(i); 
      }

    let half = array.length / 2 ;

    while (array.length > 2) {
       for (i = 1; i < half; i++) {

        let n = parseInt(array[0]);
        let n2 = parseInt(array[1]);  

        let sum = n + n2;   

        array.splice(0,2);
       } 
    }
 
    return alert(sum);
}