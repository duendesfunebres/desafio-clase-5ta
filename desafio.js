//Variables
let numeroMaximoPosible = 0;
let numeroSecreto = 0
let numeroUsuario = 0;
let intentos = 0;
//let palabraVeces = 'vez';
let maximosIntentos = 6;

desiciones = parseInt(prompt('selecione la cantida máxima de numeros por los que quiere jugar elija 100 ó 1000'));

if (desiciones == 100) {
    numeroMaximoPosible = 100;
    maximosIntentos = 5;
    alert(`ATENCIÓN: LA CANTIDAD MÀXIMA DE NUMEROS CON LOS QUE JUGARÀ ES DE ${numeroMaximoPosible} y la cantidad de intentos será de ${maximosIntentos}`);
} else {
    numeroMaximoPosible = 1000;
    maximosIntentos = 10;
    alert(`ATENCIÓN: LA CANTIDAD MÀXIMA DE NUMEROS CON LOS QUE JUGARÀ ES D10010E ${numeroMaximoPosible} y la cantidad de intentos será de ${maximosIntentos}`);
}
numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
console.log(numeroSecreto)
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof (numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}