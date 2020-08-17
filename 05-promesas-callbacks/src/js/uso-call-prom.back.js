import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

const heroeId = 'spider';
const heroeId2 = 'capi';



/* buscarHeroe( heroeId, (err, heroe1 ) => {

    if( err ){ return console.error( err ); }
    
    buscarHeroe( heroeId2, (err, heroe2 ) => {
        if( err ){ return console.error( err ); }

        console.log(
            `Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`
        );
    })
}); */

/* buscarHeroe(heroeId).then(heroe => {
    // console.log(`Enviando a ${heroe.nombre} a la misión`);

    buscarHeroe(heroeId2).then(heroe2 => {
        console.log(
            `Enviando a ${heroe.nombre} y a ${heroe2.nombre} a la misión`
        );
    })
}); */

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
    .then(([heroe, heroe2]) => {

        console.log(
            `Enviando a ${heroe.nombre} y a ${heroe2.nombre} a la misión`
        );
    }).catch(err => {
        alert(err);
    }).finally(() => {
        console.log('Se termino promise.all');
    });
console.log('Fin programa');