import { buscarHeroeAsync, buscarHeroe } from './promesas';

const heroesIds = [
    'capi',
    'iron',
    'spider',
];

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