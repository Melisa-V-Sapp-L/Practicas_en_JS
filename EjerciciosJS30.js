/*
30. En el juego de casino Blackjack, un jugador puede obtener una ventaja sobre la casa si
lleva un registro del número relativo de cartas altas y bajas que quedan en la baraja. Esto
se llama conteo de cartas.
Tener más cartas altas en el mazo favorece al jugador. A cada carta se le asigna un valor
de acuerdo con la tabla siguiente. Cuando la cuenta es positiva, el jugador debe apostar
alto. Cuando la cuenta es cero o negativa, el jugador debe apostar poco.
Escribe una función de conteo de cartas. Tendrá un parámetro card, que puede ser un
número o una cadena, y aumentará o disminuirá la variable de conteo global de acuerdo
con el valor de card. La función devolverá una cadena con el recuento actual y la cadena
Bet si el recuento es positivo, o Hold si el recuento es cero o negativo. El recuento actual
y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio
Count cards
+1 2, 3, 4, 5, 6
0 7, 8, 9
-1 10, J, Q, K, A
Ejemplo:
-3 Hold
5 Bet
let count = 0;
function cc(card) {
return "Implementar!";
}
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
*/
function run30 () {

    let count = 0;
    const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let hold = [];
    let bet = [];
    let index = 0;
    let betOrNot = 0;
    

    alert('Juguemos BlackJack! Para pedir una carta, escribe cualquier valor en la casilla. Para parar, nada. ');

    while (true) {

        betOrNot = prompt('Pedir una carta?: ', 0 ); 

        if (betOrNot != 0) {
            let rand = Math.floor(Math.random()*deck.length);
            let card = deck[rand];
            
            switch (card) {
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                    count = count + 1;
                    bet.push(card); 
                    index = deck.indexOf(card);
                    
                    if (index > -1) {
                    deck.splice(index, 1);
                    }
                break;
                case 'A':
                case 'K':
                case 'Q':
                case 'J':
                case '10':
                  count = count - 1;
                  hold.push(card); 
                  index = deck.indexOf(card);
                  
                  if (index > -1) {
                  deck.splice(index, 1);
                  }
                break;  
                default:
                break;
            }

            return alert('Las cartas que te han salido son: '+ bet + ',' + hold);

            if (count > 0) {
                return alert ('Puedes pedir más cartas...');
            } else {
                return alert('No es recomendable que sigas pidiendo cartas...')
            } 

        } else {
            return alert('Gracias por jugar con nosotros!');
            break;
        }
    }            

       
}