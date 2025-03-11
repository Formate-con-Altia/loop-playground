/**
 * Bucles while
 *
 * Modifica el bucle while para que escriba por el terminal  5 veces exactamente la palabra "Ejecuto!".
 * Actualmente lo escribe 6 veces. ¿Porque?
 * 
 * Reestricción: NO puedes cambiar el valor de las variables 'veces' ni 'i' !!
 */

let veces = 5; // NO ME CAMBIES
let i = 0; /// NO ME CAMBIES

while (i<veces) {
    console.log("Ejecuto!");
    i++;
}

/**
 * Solución: En la condición de finalización ponía i<=veces. Esto quiere decir que el bucle se ejecutaba para los valores de i: 0, 1, 2, 3, 4, y 5. Es decir, se ejecutaba 6 veces. Cambiamos el operador a i < veces para que , cuando la i valga 5, como 5 < 5 -> false , esto hará que salgamos del bucle.
 */