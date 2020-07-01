/** 
 * 
 * Días de la semana que abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 * 
  */

// Entra a un sitio web, para consultar si está abierto hoy...

const dia = 6; // 0: Domingo... 1: Lunes...
const horaActual = 11;

let horaApertura;
let mensaje; // está abierto o hoy abrimos a las xx

if ( dia === 0 || dia === 6) {
    console.log('Es fin de semana');
    horaApertura = 9;
}else {
    console.log('Día de la semana');
    horaApertura = 11;
}

if ( horaActual >= horaApertura) {
    mensaje = 'Está abierto';
}else {
    // Concatenamos strings de está forma mejor que con " " + horaApertura
    mensaje = `Está cerrado hoy abrimos a las ${horaApertura}`; 
}
console.log(horaApertura, mensaje);

console.log('===========');

/* if ( [0,6].includes( dia )) {
    console.log('Es fin de semana');
    horaApertura = 9;
}else {
    console.log('Día de la semana');
    horaApertura = 11;
} */

// operador ternario

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

/* if ( horaActual >= horaApertura) {
    mensaje = 'Está abierto';
}else {
    // Concatenamos strings de está forma mejor que con " " + horaApertura
    mensaje = `Está cerrado hoy abrimos a las ${horaApertura}`; 
} */

mensaje = ( horaActual>=horaApertura) ? 'Esta abierto' : `Está cerrado hoy abrimos a las ${horaApertura}`;

console.log(horaApertura, mensaje);

