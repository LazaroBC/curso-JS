// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
/* import { buscarHeroe, buscarHeroeAsync } from './js/promesas' */

import { obtenerHeroesArr, obtenerHeroesArr2, obtenerHeroeAwait } from './js/await';


/* promesaLenta.then(console.log);
promesaMedia.then(console.log);
promesaRapida.then(console.log); */

/* Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(console.log)
    .catch(console.warn); */

/* buscarHeroe('capi')
    .then(heroe => console.log(heroe))
    .catch(console.warn);
buscarHeroeAsync('iron2')
    .then(heroe => console.log(heroe))
    .catch(console.warn); */

    
obtenerHeroesArr().then(console.table);
obtenerHeroesArr2().then(heroes => {
    console.table(heroes)
});
console.time('await');
obtenerHeroeAwait('capi2').then(heroe => {
    console.log(heroe)
    console.timeEnd('await');
});


