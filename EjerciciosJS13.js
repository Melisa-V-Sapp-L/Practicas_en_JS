/* 13. Añade los números del 5 al 0 incluido, en orden descendente en array usando un la
estructura de repeticion while.
const array = []; */

function run13 (val) {  
    val = document.getElementById('box13').value;
    for (let i of val) {
        array.push(i); 
      }
      
    if (array.length===6) {
      let elements = array.filter(element => element > 5);
  
      if (elements.length===0) {
  
        let loop = array.length;
        let index = -1;

        array.sort();

        while (loop > 0) {
            loop --;
            index ++;

            array2[loop] = array[index];
        }

        return alert(array2);
     
    } else {
        return alert('Ingresa los números 0, 1, 2, 3, 4 y 5 en el orden que quieras.');
      } 
  
      } else {
        return alert('Ingresa los números 0, 1, 2, 3, 4 y 5 en el orden que quieras.');
      }

  
}