/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca.
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 *
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces.
 * ATENCIÓN: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

let veces = 10;

// PROHIBIDO modificar el código a partir de aquí

for (let i = 5; i < veces; i++) {
  console.log("No me voy a ejecutar...");
}

/**
 * Solución: Inicialmente, el bucle no se ejecutaba porque veces = 5. Entonces 5 < 5 ? --> false. No se ejecuta ni una vez el bucle.
 * Simplemente aumentando el valor de la variable 'veces' a 10, conseguimos que el bucle se ejecute cinco veces. Porque si la varaible de iteración 'i' empieza con el valor 5...entonces terminará con el valor 10.
 * Los valores de i serán: 5, 6, 7, 8 y 9 dentro del bucle. Cuando i = 10, se acaba el bucle.
 */
