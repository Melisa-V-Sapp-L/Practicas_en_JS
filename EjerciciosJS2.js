  /*Primero, corrobora si la cadena contiene 6 caracteres y contiene los numeros del 0 al 5.
  Luego ordena el array.*/
  /* 2. Añade los números del 0 al 5 incluido, en orden ascendente en array usando una estructura de repeticion for.*/

function run2 (val) {
    /*Toma valores*/  
      val = document.getElementById('box2').value;
  
    /*Convierte la cadena en array*/
    for (let i of val) {
      array.push(i); 
    }
  
  if (array.length===6) {
    let elements = array.filter(element => element > 5);
    if (elements.length===0) {

      for (i = 0;i < array.length; i++) {
        let a = array[i];

        switch (a) {
          case '0':
            array2[0]= '0';
            break;
          case '1':
            array2[1]= '1';
            break;
          case '2':
            array2[2]= '2';
            break;
          case '3':
            array2[3]= '3';
          break;
          case '4':
            array2[4]= '4';    
          break;
          case '5':
            array2[5]= '5';   
          break;    
        }
      } 

      return alert(array2);

    } else {
      return alert('Ingresa la cadena 012345');
    }
  } else {
    return alert('Ingresa la cadena 012345');
  } 
}