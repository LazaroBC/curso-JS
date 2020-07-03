function saludar( nombre ) {
    console.log('Hola ' + nombre);
    return [1, 2, 3, 4, 5];

    // Esto nunca se va a ejecutar
    console.log('Soy un codigo que está después del return');
}



// mejor manera de difinir funciones

const saludar2 = function( nombre ){
    console.log('Hola ' + nombre);
}

const saludarFlecha = ( nombre ) => {
    console.log('Hola ' + nombre);
}

/* saludar('Función clásica');
saludar2('Funcion en constante');
saludarFlecha('Funcion flecha'); */

const retornoDeSaludar = saludar( 'Lázaro', 51, true, 'España'); // 1
console.log(retornoDeSaludar);


function sumar( a,b ) {
    return  a + b;
}

const sumar2 = ( a,b ) => {
    return a + b;
    // const sumar2 = ( a,b ) => a + b;
}
const sumar3 = ( a,b ) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random(); 

console.log( sumar( 1,2 ));
console.log( sumar2( 2,3 ));
console.log( sumar3( 3,4 ));
console.log( getAleatorio());
console.log( getAleatorio2());


