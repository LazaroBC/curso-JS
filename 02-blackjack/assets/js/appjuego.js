/**
 * 2C = Dos de treboles
 * 2D = Dos de diamantes
 * 2H = Dos de corazones
 * 2S = Dos de picas
 */

// Creamos el array de cartas 
let baraja = [];
const tipos = ['C', 'D', 'H', 'S'];
const figuras = ['A', 'J', 'Q', 'K'];
// Creamos variables necesarias logica
let puntosJugador = 0,
    puntosComputadora = 0;



// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnPlantarse = document.querySelector('#btnPlantarse');
const btnNuevo = document.querySelector('#btnNuevo');

// const totalJugador = document.querySelector('small');
const totales = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
// Esta función crea una baraja
const crearBaraja = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            baraja.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let figura of figuras) {
            baraja.push(figura + tipo);
        }
    }

    baraja = _.shuffle(baraja);
    return baraja;
}

crearBaraja();

// Esta función me permite tomar una carta

const pedirCarta = () => {

    if (baraja.length === 0) {
        throw 'No quedan cartas en la baraja';
    }

    const carta = baraja.shift();
    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;


    // let puntos = 0;
    /* if ( isNaN( valor )) {
        puntos = ( valor === 'A') ? 11 : 10;
        console.log(puntos);
    }else 
    console.log('Es un número');
    puntos = valor * 1; // Manera fácil de pasar un string a number */
}

const turnoComputadora = (puntosMinimos) => {

    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        // totalComputadoira.innerText = puntosComputadoira;
        totales[1].innerText = puntosComputadora;

        // creamos el enlace <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }


    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert("¡¡¡Nadie gana!!!")
        } else if (puntosMinimos > 21) {
            alert("¡¡¡La computadora te ganó!!!")
        } else if (puntosComputadora > 21) {
            alert("¡¡¡Ganaste!!!")
        } else {
            alert("¡¡¡La computadora te ganó!!!")
        }

    }, 100);


}


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    // totalJugador.innerText = puntosJugador;
    totales[0].innerText = puntosJugador;

    // creamos el enlace <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.log('Perdiste');
        btnPedir.disabled = true;
        btnPlantarse.disabled = true;
        turnoComputadora(puntosJugador);

    } else if (puntosJugador === 21) {
        console.log('21 Genial');
        btnPedir.disabled = true;
        btnPlantarse.disabled = true;
    }

});

btnPlantarse.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnPlantarse.disabled = true;
    turnoComputadora(puntosJugador);

});

console.log(baraja);

btnNuevo.addEventListener(`click`, () => {
    console.clear();
    baraja = [];
    baraja  = crearBaraja();
    console.log(baraja);


    puntosJugador     = 0;
    puntosComputadora = 0;
    totales[0].innerText        = 0;
    totales[1].innerText        = 0;

    btnPedir.disabled = false;
    btnPlantarse.disabled = false;
    
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
});




