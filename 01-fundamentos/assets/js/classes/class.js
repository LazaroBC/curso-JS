
class Persona {


    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);// undefined
        console.log('Hola, soy un metodo estático');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
    
    constructor(
        nombre = 'Sin nombre',
        codigo = 'Sin código',
        frase  = 'Sin frase',
    ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita( ) {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.nombre} - ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigo Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Soy tu amigo Ironman');

// Persona._conteo = 2;
console.log( spiderman );
// console.log( ironman );
spiderman.quienSoy();
spiderman.miFrase();
// ironman.quienSoy();
// ironman.miFrase();
spiderman.setComidaFavorita = 'El pastel de Arandanos';
// console.log(spiderman.getComidaFavorita);
// spiderman.comida = 'Duende verde';
// console.log(spiderman);
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);// es aconsejable declarar todo lo estatico dentro de la clase
console.log(Persona);

