function crearPersona( nombre, apellido ) {
    return {
        nombre,
        apellido
    }
}

const crearPersona2 = ( nombre, apellido) => ({nombre,apellido});

function imprimeArgumentos() {
    console.log( arguments );
}
// detrás de ...args no puede venir ningun armumento más
const imprimeArgumentos2 = ( edad, ...args ) => {
    console.log( edad, args );
    return args;
}

const imprimeArgumentos3 = (...args ) => {
    return args;
}

const persona = crearPersona( 'Lázaro' , 'Belloch');
console.log( persona );

const persona2 = crearPersona( 'Lourdes' , 'Zúñiga');
console.log( persona2 );

imprimeArgumentos( 10, true, false, 'Lázaro', 'Hola');
imprimeArgumentos2( 10, true, false, 'Lourdes', 'Hola');

const  [ edad, casado, vivo, nombre, saludo ] = imprimeArgumentos3( 10, true, false, 'Lourdes', 'Hola');
console.log({  edad, casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona2( 'Raquel', 'Belloch' );
console.log({nuevoApellido});


// apendice


const tony = {
    nombre: 'Toni Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark-I', 'Mark V', 'Hulkbuster'],
};

/* const imprimePropiedades = ( personaje ) => {
    console.log( 'nombre: ', personaje.nombre);
    console.log( 'codeName: ', personaje.codeName);
    console.log( 'vivo: ', personaje.vivo);
    console.log( 'edad: ', personaje.edad);
    console.log( 'trajes: ', personaje.trajes);

} */

// Desestructuración de argumentos
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes}) => {

     // edad = edad || 0;

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );
