/* 4. Añade los número pares del 1 al 9 en orden descendente en array usando la estructura de
repeticion for */
function run4 (val) {
    
	val = document.getElementById('box4').value;
    

  /* Convierte la cadena en array */
  for (let i of val) {
    array.push(i); 
  }  

  /* Borra elementos repetidos, impares y 0 */

  for (i = 0;i < impar.length; i++){
    let numb = impar[i];
    parseInt(numb);
    array = array.filter(item => item !== numb)
  } 
  let array2 = new Set(array); 

  /* Ordenar. No funciona */
  
  const mayor = Math.max(...array2);
  const x = array2.length;
  
  for (let i = 1; i < x ; i++) {
    const a = array2[i];
    const b = array2[i-1];
    const c = array2[x]; 
  
  } 
  return alert(array2);

}