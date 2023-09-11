/* 1. Escribe una sentencia switch que pruebe val y establezca answer con las siguientes condiciones:
• ”a” - ”apple”
• ”b” - ”bird”
• ”c” - ”cat”
• default - ”stuff”
function caseInSwitch(val) {
let answer = "";
return answer;
}
caseInSwitch(1); */

function run1 (val) {
    /*Toma los datos */
      val = document.getElementById('box1').value;
    /*Dependiedo de la letra ingresada, mostrará un resultado */
      switch (val) {
      case 'a':
        return alert('"A" de apple, en ingles, manzana.');
        break;
      case 'b':
        return alert('"B" de bird, en ingles, pájaro.');
        break;
      case 'c':
        return alert('"C" de cat, en ingles, gato.');
        break;
      default:
        return alert('Stuff es cosas en ingles, es cosas.');

    }
    
  }