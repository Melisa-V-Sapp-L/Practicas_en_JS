/* 7. Escribe una estructura if/else if para cumplir con las siguientes condiciones
• num < 5 - return "Tiny"
• num < 10 - return "Small"
• num < 15 - return "Medium"
• num < 20 - return "Large"
• num >= 20 - return "Huge"
function testSize(num) {
return "Change Me";
}
testSize(7);

 */
function run7 (val) {
    
	val = document.getElementById('box7').value;

    let num = parseFloat(val);

    if (num < 5) {
      return alert(" Tiny " );

    } else if (num < 10) {
      return alert(" Small " );
      
    } else if (num < 15) {
      return alert(" Medium " );
      
    }else if (num < 20) {
      return alert(" Large " );
      
    }else if (num >= 20) {
      return alert(" Huge " );
      
    }
}