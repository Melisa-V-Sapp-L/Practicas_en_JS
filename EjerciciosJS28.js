/*
28. Crea una función que reciba un número y devuelva una cadena con formato ordinal inglés.
Esto es:
• termina en 1 –> ‘301st‘
• termina en 2 –> ‘302nd‘
• termina en 3 –> ‘303rd‘
• cualquier otra cosa –> ‘300th‘
function formaToIngles(num) {
}
*/
function run28 (val) {
    
    while(true){
        val = document.getElementById('box28').value;  
        
        if(!isNaN(val) && val != null && val != ""){
            let last = val.substr(-1);

            switch (last) {
                case '1':
                  return alert('‘301st‘');
                    
                    break;
                case '2':
                  return alert('‘302nd‘');
                        
                    break;
                case '3':
                  return alert('‘303rd‘');
                            
                    break;
                default:
                  return alert('‘300th‘');
                    break;
            }
          break;
        }else{
          return alert('No es un valor númerico');
          break;
        }
      }
    

}