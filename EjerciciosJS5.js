/* 5. En el juego de golf, cada hoyo tiene un par, cuyo significado es el número promedio de
golpes que se espera que haga un golfista para meter la bola en un hoyo y así completar
el juego. Dependiendo de qué tan por encima o por debajo del par estén tus golpes, existe
un apodo diferente.
Escribe una función que reciba los argumentos par y strokes y devuelve la cadena correcta
de acuerdo a la siguiente tabla que enumera los golpes en orden de prioridad; de arriba
(más alto) a abajo (más bajo):

Strokes Return
1 "Hole-in-one!"

<= par - 2 "Eagle"

par - 1 "Birdie"

par "Par"

par + 1 "Bogey"

par + 2 "Double Bogey"

>= par + 3 "Go Home!"

const names = [
"Hole-in-one!",
"Eagle",
"Birdie",
"Par",
"Bogey",
"Double Bogey",
"Go Home!",
];

function golfScore(par, strokes) {
return "Implementar!";
}
golfScore(5, 4); */

function run5(val) {
  val = document.getElementById("box5").value;

  let hits = prompt("Cantidad de golpes por hoyo?", 0);

  const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
  ];

  if (val === "strokes" || val === "Strokes" || val === "STROKES") {
    if (
      hits === "1" ||
      hits === "-2" ||
      hits === "-1" ||
      hits === "0" ||
      hits === "+1" ||
      hits === "+2" ||
      hits === "+3"
    ) {
      switch (hits) {
        case "1":
          return alert(names[0]);
          break;
        case "-2":
          return alert(names[1]);
          break;
        case "-1":
          return alert(names[2]);
          break;
        case "0":
          return alert(names[3]);
          break;
        case "+1":
          return alert(names[4]);
          break;
        case "+2":
          return alert(names[5]);
          break;
        case "+3":
          return alert(names[6]);
          break;
      }
    } else {
      return alert("Ingresa valores correctos del -2 al +3.");
    }
  } else {
    return alert("Ingresa la palabra strokes.");
  }
      

}