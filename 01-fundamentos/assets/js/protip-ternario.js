/* const elMayor = (a,b) => {
    return ( a > b ) ? a : b;
} */

const elMayor = ( a,b ) => ( a > b) ? a : b;
console.log(elMayor( 10,15 ));

const tieneMembresia = ( miembro ) => miembro ? '2 Dolares' : '10 Dolares';
console.log(tieneMembresia(true));
console.log(tieneMembresia(false)) ;

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(), // funcion anonima autoinvocada
    elMayor(24,34)
];
console.log(amigosArr);

const nota = 81.3; // A+ A B+ B
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'Suspendido F';
console.log(nota, grado);