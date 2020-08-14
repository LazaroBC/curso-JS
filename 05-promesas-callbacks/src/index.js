import './styles.css';
import { buscarHeroe } from './js/callbacks';


const heroeId = 'spider';
const heroeId2 = 'capi';



buscarHeroe( heroeId, (err, heroe1 ) => {

    if( err ){ return console.error( err ); }
    
    buscarHeroe( heroeId2, (err, heroe2 ) => {
        if( err ){ return console.error( err ); }

        console.log(
            `Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`
        );
    })
});

console.log('fin programa');