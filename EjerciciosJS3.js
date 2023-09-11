/* 3. Añade los números impares del 1 al 9 en array usando la estructura de repeticion for. */

function run3 (val) {
    /* Toma los datos del box en forma de cadena*/  
      val = document.getElementById('box3').value;
  
    /*Convierte la cadena en array*/
    for (let i of val) {
      array.push(i); 
    } 
  
    /* Borra elementos repetidos, pares y 0 */
  
    for (i = 0;i < par.length; i++){
      let numb = par[i];
      parseInt(numb);
      array = array.filter(item => item !== numb)
    }
    
    let array2 = new Set(array);
    return alert(array2);
  
  }