

class Persona {

    static porObjeto( {nombre, apellidos, pais} ) {
        return new Persona(nombre, apellidos, pais)
    }
    constructor(nombre, apellidos, pais) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.pais = pais;
    }


    getInfo() {
        console.log(`Info: ${this.nombre} ${this.apellidos}, ${this.pais}`);
    }

}

const nombre1 = 'Melisa',
    apellidos1 = 'Garcia López',
    pais1 = 'Honduras';

    const lbc ={
        nombre: 'Lázaro',
        apellidos: 'Belloch Canet',
        pais: 'España'
    }

const persona1 = new Persona(nombre1, apellidos1, pais1);
const persona2 = Persona.porObjeto(lbc);

persona1.getInfo();
persona2.getInfo();

