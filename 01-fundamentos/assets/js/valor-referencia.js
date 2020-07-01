let a = 10;
let b = a;
a = 30;
console.log({a,b});

let juan = { nombre: 'Juan'}
let ana = { ...juan }; // Operador spred

ana.nombre = 'Ana';

console.log({juan , ana});

// Operador rest
// const cambiaNombre =  ( ...persona)=> {
//   persona.nombre = 'Toni';
//    return persona;
// }

// Operador spred
const cambiaNombre =  ( { ...persona} ) => {
    persona.nombre = 'Toni';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre( peter);

console.log({ peter, tony });

// Arreglos

const frutas = ['Manzanas', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spred');
const otrasFrutas2 = [ ...frutas ];
console.timeEnd('spred');

otrasFrutas.push('Mango', 'Melocotón');


console.table({frutas, otrasFrutas});