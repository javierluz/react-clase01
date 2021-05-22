const ardillasYWea = ['ardilla', 'ardila', 'chanchilla', 'chanchila', 'chanchila', 'shamshilla', 'shamshila', 'chanzilla', 'chanzila'];
const messageArdillas = ardillasYWea.findIndex(x => x === 'chanchilla' && 'shamshilla');
console.log(`¿Cuántos tipos de ardillas bacanas hay? ${messageArdillas}`);


// Every
const everyNumerosPares = val => !(val % 2);
const everyNumeros = [1, 30, 41, 29, 10, 13];
const everyMensaje = everyNumeros.every(everyNumerosPares) ? 'Si, todos son pares.' : 'Nooo, ninguno es par por la chucha!!!';
console.log(everyMensaje);

// Some
const someNumerosPares = val => !(val % 2);
const numeros = [1, 30, 41, 29, 10, 13];
const someMensaje = numeros.some(someNumerosPares) ? 'Si, hay al menos 1 número par.' : 'Nooo, no hay números pares por la chucha!!!';
console.log(`Some: ${someMensaje}`);

// Filters
const maxChars = 8;
const perros = ['pug', 'chihuaha', 'perroardilla', 'caballo'];
const resultFilter = perros.filter(word => word.length < maxChars);
console.log(`Filter: ${resultFilter}`);

// Maps
function pruebaMap () {
    const arrayOriginal = [8, 16, 32, 64];
    const arrayNuevo = arrayOriginal.map(x => x * x);
    console.log(`Map: ${arrayNuevo}`);
}
pruebaMap();
