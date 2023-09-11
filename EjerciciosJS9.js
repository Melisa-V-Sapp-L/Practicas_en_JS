/* 9. Convierte la lógica de la siguiente función para usar sentencias else if
function testElseIf(val) {
if (val > 10) {
return "Greater than 10";
}
if (val < 5) {
return "Smaller than 5";
}
return "Between 5 and 10";
}
testElseIf(7);
 */

function run9 (val) {
    
	val = document.getElementById('box9').value;

    let x = parseFloat(val);

    if (x < 5) {
      return alert("Smaller than 5");
    } else if ( 6 <= x, x <= 9) {
      return alert("Between 5 and 10");
    } else {
      return alert("Greater than 10");
    }
}
