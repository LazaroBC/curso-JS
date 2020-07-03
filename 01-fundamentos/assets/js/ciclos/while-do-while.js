const coches = ['Ford', 'Mazda', 'Honda', 'Ferrari'];

let i = 0;

/* while( i < coches.length ) {
    console.log(coches[i]);
    i++; // i = i + 1;
}
 */
// undefined
// null
// false
console.warn('While');
while( coches[i] ){
    if ( i === 1) {
        i++;
        continue;
    }
    console.log(coches[i]);
    i++;   
}

console.warn('Do while');
// la única diferencia es que por lo menos entra una vez en el bucle

let j = 0;
do{
    console.log(coches[j]);
    j++;
}   while (coches[j]);
        
    
