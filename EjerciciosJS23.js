/* 23. Escribe una función que simule cien tiradas de dos dados y devuelva las veces que entre
los dos suman 10
function azarDados() {
}
azarDados(); */

function run23 () {  

    let count = 0;
    let dice1 = 0;
    let dice2 = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        dice1 = Math.ceil(Math.random()*6);
        dice2 = Math.ceil(Math.random()*6);
        sum = dice1 + dice2;
        if (sum === 10) {
        count = count +1;}
    }
    return alert('La cantida de veces que los ddos sumaron 10 es de: ' + count);
}
