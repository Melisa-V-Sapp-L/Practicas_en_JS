/* Variables y más */

let array = [];
let array0 = [];
let array1 = [];
let array2 = [];
const impar = ['0', '1', '3', '5', '7', '9'];
const par = ['0', '2', '4', '6', '8'];
const signos = ['+', '-', '*', '/'];

/* Estilos de pagina para ingresar datos. */

for (let i = 1; i < 13; i++) {
    document.write('<div class="container"><div class="row"><div class="col">Ejercicio '+ [i] +'<div class="input-group mb-3"><input type="text" class="form-control" id="box'+[i]+'" placeholder="..." aria-describedby="button-addon2"><button class="btn btn-outline-success" type="button" id="button-addon2" onclick="run'+[i]+'(this.value)">Go!</button></div></div><div class="col">Ejercicio '+ [i+12] +'<div class="input-group mb-3"><input type="text" class="form-control" id="box'+[i+12]+'"  placeholder="..." aria-label="" aria-describedby="button-addon2"><button class="btn btn-outline-success" type="button" id="button-addon2" onclick="run'+[i+12]+'(this.value)">Go!</button></div></div><div class="col">Ejercicio '+ [i+24] +'<div class="input-group mb-3"><input type="text" class="form-control" id="box'+[i+24]+'" placeholder="..." aria-label="" aria-describedby="button-addon2"><button class="btn btn-outline-success" type="button" id="button-addon2" onclick="run'+[i+24]+'(this.value)">Go!</button></div></div></div></div>');   
}
