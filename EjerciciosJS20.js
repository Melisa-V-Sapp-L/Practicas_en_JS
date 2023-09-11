/* 20. Crea una función que devuelva el area de un círculo a partir de su radio:
function areaCirculo(r) {
}
console.assert(areaCirculo(2) === 12.566370614359172);
console.assert(areaCirculo(8) === 201.06192982974676); */

function run20 (val) {  

    let r = 0;
    const pi = 3.14;
    const dos = 2;

    while(true){
        val = document.getElementById('box20').value;   
        
        if(!isNaN(val) && val != null && val != ""){
            r = Math.abs(val);
          break;
        }else{
            return alert('No es un valor númerico');
          break;
        }
    } 

    let areaCirculo = pi * (Math.pow(r, dos));
    
    return alert('El area del circulo es: ' + areaCirculo);

}
