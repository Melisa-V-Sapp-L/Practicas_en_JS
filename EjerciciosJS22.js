/* 22. Escribe una función que simule el lanzamiento de una moneda al aire y devuelva si ha
salido cara o cruz. Podemos utilizar el objeto Math
function azarMoneda() {
}
azarMoneda(); */ 

function run22 () { 
    let flipAcoin = Math.random();

    if (flipAcoin < 0.5) {
        return alert('Es cruz');
    } 

    return alert('Es cara');


}
