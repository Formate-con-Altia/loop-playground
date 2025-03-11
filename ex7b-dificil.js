/**
 * Fíjate en estos dos códigos
 */

// Mostrar la tabla de multiplicar del 3
console.log("Tabla de multiplicar del 3:");
for (let i = 1; i <= 10; i++) {
    console.log("3 * " + i + " = " + 3 * i);
}

// Mostrar la tabla de multiplicar del 4
console.log("Tabla de multiplicar del 4:");
for (let i = 1; i <= 10; i++) {
    console.log("4 * " + i + " = " + 4 * i);
}

/**
 * ¿Te has fijado que solo un valor varia de estas tablas?
 * ¿No podrías usar una variable para mostrar la tabla de multiplicar de cualquier número?
 * Crea un bucle for que, en función de la variable 'tablaDel' , calcule la tabla de multiplicar y la muestre por consola
 * 
 * Por ejemplo, para tablaDel = 1, deberia mostrar toda la tabla de multiplicar del 1. Para tablaDel = 2, deberia mostrar la tabla de multiplicar del 2. etc.
 * 
 * Ejemplo tablaDel = 1 -> https://oscarm.tinytake.com/media/1739cf4?filename=1741680418660_TinyTake11-03-2025-09-06-50_638772772167267946.png&sub_type=thumbnail_preview&type=attachment&width=1199&height=459
 * Ejemplo tablaDel = 7 -> https://oscarm.tinytake.com/media/1739cf7?filename=1741680489599_TinyTake11-03-2025-09-07-44_638772772879657109.png&sub_type=thumbnail_preview&type=attachment&width=662&height=373
 */

let tablaDel = 7;
// for...
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${tablaDel} = ${i*tablaDel}`);
}

