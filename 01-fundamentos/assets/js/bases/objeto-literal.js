const personaje = {
    nombre: 'Toni Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark-I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '46019, 46025',
        ubicacion: 'Valencia, Valencia'
    },
    'ultima pelicula': 'Infinity War'
};
console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('Coors: ', personaje.coords);
console.log('Coors: ', personaje.coords.lat);
console.log('Nº trajes: ', personaje.trajes.length);
console.log('Último traje: ', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';
console.log('Vivo: ', personaje[x]);

console.log('Última película: ', personaje['ultima pelicula']);


delete personaje.edad;
console.log(personaje);

personaje.casado = true;


const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);

Object.freeze(personaje);

personaje.dinero = 10000000000000;
personaje.casado = false;
personaje.direccion = 'Costa Rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(personaje, valores);
const objeto = Object.keys(personaje);
console.log(objeto);
