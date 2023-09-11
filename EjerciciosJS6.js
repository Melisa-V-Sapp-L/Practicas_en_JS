/* 6. Escribe una sentencia switch que pruebe val y establezca answer con las siguientes condiciones:
• 1-3 - ”Low”
• 4-6 - ”Mid”
• 7-9 - ”High”
function sequentialSizes(val) {
let answer = "";
return answer;
}
sequentialSizes(1);
 */

function run6 (val) {
    
	val = document.getElementById('box6').value;

    if (val >= 1, val <= 9) {
      switch (val) {
        case "1":
        case "2":
        case "3":
          return alert(' "LOW" ');
        break;

        case "4":
        case "5":
        case "6":
          return alert(' "MID" ');
        break;

        case "7":
        case "8":
        case "9":
          return alert(' "HIGH" ');
        break;
    }
    } else {
      return alert('Ingresa un número del 1 al 9.');

    }
}