const regresaTrue = () => {
    console.log('Devuelve True');
    return true;
}

const regresaFalse = () => {
    console.log('Devuelve False');
    return false;
}

console.log('Not o la negación');
console.log(true);// true
console.log(!true);// flase
console.log(!false);// true

console.log(!regresaFalse());

console.log('And'); // true si todos los valores son verdaderos

console.log(true && true); // true
console.log(true && !false); // true

console.log('=========');
console.log(regresaFalse() && regresaTrue());// devuelve false y ejecuta sólo la priemra función
console.log(regresaTrue() && regresaFalse());// devuelve false y ejecuta las dos funciones

console.log('=========');
regresaTrue() && regresaFalse();
regresaFalse() && regresaTrue();

console.log('4 condiciones', true && true && true && false);// false

console.log('OR');// true
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones', true || true || true || false);// false

console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; //En este caso toma el valor del ultimo &&
const a2 = false && 'Hola Mundo'&& 150; // En este caso al ser falso el primero ya no evalua los siguientes
const a3 = 'Hola' && 'Mundo' && soyFalso; // Sólo evalua el último valor si todos los valores son true, si soyFalso 
                                          // estuvierá en medio también tomaría a3 valor false
const a4 = soyFalso || 'Ya no soy falso'; //?¿
const a5 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';// En el caso de evaluar con || tomará el
const a6 = soyFalso || regresaTrue|| soyUndefined || 'Ya no soy falso de nuevo' || soyNull;// primer valor verdadero


console.log({a1},{a2},{a3},{a4},{a5},{a6});

if ( true || true || true || false ) { // no se debe usar lógica boleana muy enredada, hay que simplificar.
    console.log('Hacer algo');
}else {
    console.log('Hacer otra cosa'); // está sombreado por que nunca se va a cumplir la condición
}