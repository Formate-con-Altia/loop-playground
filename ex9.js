/**
 * El bucle infinito
 *
 * El siguiente bucle 'while', no acaba nunca. ¿Por qué? Intenta responder a esta pregunta antes de ejecutarlo.
 * Pista: ¿que valor boleano devuelve la expresión dentro del paeréntesis del while? ¿true o false? ¿Cambia en alguna iteración del bucle?
 * 
 * Arreglalo para que la palabra "Ejecutar!" se muestre 10 veces por el terminal
 */

let n=10;
let i=0;

while(i<n) {
    console.log("Ejecutar!");
    i = i + 1;
}

/**
 * Solución: el bucle no termina nunca porque al principio, tenemos la evaluación de 0<10 -> true. Entonces se ejecuta el cuerpo del bucle...una y otra vez...porque nadie actualiza la variable i. 
 * Para evitar ese bucle infinito, tan solo tenemos que actualizar la variable 'i' al final del bucle sumándole una unidad.
 */
