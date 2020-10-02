import { buscarHeroeAsync, buscarHeroe } from './promesas';

const heroesIds = [
    'capi',
    'iron',
    'spider',
];
const heroesPromesas = heroesIds.map(buscarHeroe);
// const heroesPromesas = heroesIds.map(id => buscarHeroe(id));

export const obtenerHeroesArr = async () => {

    const heroesArr = [];

    for (const id of heroesIds) {
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }


    return heroesArr;
}

export const obtenerHeroesArr2 = async () => {

    return await Promise.all(heroesIds.map(buscarHeroe));

    /*     const heroesArr2 = [];
        for (const id of heroesIds) {
            heroesArr2.push(buscarHeroe(id));
        }
        return await Promise.all(heroesArr2); */
}

export const obtenerHeroeAwait = async (id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.log('Catch');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }

}

export const heroesCiclo = async() => {

    console.time('heroesCiclo');

    for await(const heroe of heroesPromesas){
        console.log(heroe);
    }


    // const heroes= await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));


    console.timeEnd('heroesCiclo');
}

export const heroeIfAwait = async(id) => {

    if ( (await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el más rico');
    }else {
        console.log('No es Ironman');
    }
}