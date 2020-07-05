

const lbc = {
    nombre: 'Lázaro',
    apellido: 'Belloch',
    edad: 51,
    imprimir(){
        console.log(`Nombre:  ${this.nombre} ${this.apellido} de ${this.edad} años`);
    }
}

const lzl = {
    nombre: 'Lourdes',
    apellido: 'Zúñiga',
    edad: 45,
    imprimir(){
        console.log(`Nombre:  ${this.nombre} ${this.apellido} de ${this.edad} años`);
    }
}

const rbg = {
    nombre: 'Raquel',
    apellido: 'Belloch',
    edad: 25,
    imprimir(){
        console.log(`Nombre:  ${this.nombre} ${this.apellido} de ${this.edad} años`);
    }
}

function Persona(nombre, apellido, edad) {
    console.log('Se ejecutó esta línea');
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre:  ${this.nombre} ${this.apellido} de ${this.edad} años`);
    }
    
}

const lazaro = new Persona('Lázaro', 'Belloch', 51);
const lulu   = new Persona('Lourdes', 'Zúñiga', 45);
const raquel = new Persona('Raquel', 'Belloch', 25);
// console.log(lazaro);
lazaro.imprimir();
lulu.imprimir();
raquel.imprimir();