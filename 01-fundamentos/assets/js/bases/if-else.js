

let a = 1;

if ( a >= 10) { // Undefined, null, una asignación
    console.log('A es mayor o igual a 10');
}else {
    console.log('A es menor a 10');
}

/* console.log('Fin de programa'); */

const hoy = new Date();
let dia = hoy.getDay(); // dia de la semana 0: Domingo, 1: Lunes
console.log(dia);

if ( dia === 0 ) {
    console.log('Domingo');
}else if ( dia === 1 ){
    console.log('Lunes');
}else if ( dia === 2 ){
    console.log('Martes');
}else if ( dia === 3 ){
    console.log('Miercoles');
}else if ( dia === 4 ){
    console.log('Jueves');
}else if ( dia === 5 ){
    console.log('Viernes');
}else if ( dia === 6 ){
    console.log('Sábado');
}else if ( dia < 0 || dia > 6){
    console.log('Tamos Jodios Si Hay Que Hacerlo Todo Así.');
}
    /* if ( dia === 1 )  {
        console.log('Lunes');
    }else {
        console.log('No es Lunes ni Domingo');
    } */

// Sin usar If Else, o Switch, únicamente objetos

dia = 7; // 0:Domingo, 1: Lunes

const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}


// dia de la semana
console.log( diaLetras[dia] || 'Día no definido');

dia2 = hoy.getDay();
const diaLetras2 = {
    0: ()=> 'Domingo - 0',
    1: ()=> 'Lunes - 1',
    2: ()=> 'Martes - 2',
    3: ()=> 'Miercoles - 3',
    4: ()=> 'Jueves - 4',
    5: ()=> 'Viernes - 5',
    6: ()=> 'Sábado - 6',
}


// dia de la semana
console.log( diaLetras2[dia2]()); 

dia3 = hoy.getDay();
const diaLetras3 = [
    'Domingo - 0',
    'Lunes - 1',
    'Martes - 2',
    'Miercoles - 3',
    'Jueves - 4',
    'Viernes - 5',
    'Sábado - 6'
];

// dia de la semana
console.log( diaLetras3[dia3]);