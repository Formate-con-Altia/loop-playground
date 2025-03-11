/**
 * Parametrizar un bucle
 *
 * Es común que las veces que tiene que ejecutarse un bucle venga dado por el valor de una variable. Cambia el código que tienes a continuación para que el bucle se ejecute siempre el número de veces que almacena el valor de la variable 'numeroVeces'.
 *
 * Es decir, si numeroVeces = 5; deberíamos ver por el terminal 5 veces el texto "Ejecuto!"
 * Si numeroVeces = 1; deberíamos ver por el terminal 1 sola vez el texto "Ejecuto!"
 * Si ejecutas este programa, verás que el bucle se ejecuta exactamente siempre 10 veces. Da igual el valor que le pongas a la variable 'numeroVeces'.
 *
 *
 * Piensa bien que debes cambiar. Solo has de modificar un valor para conseguirlo.
 * Es OBLIGATORIO usar la variable 'numeroVeces' en el bucle!
 */

let numeroVeces = 5;

for (let i = 0; i < numeroVeces; i++) {
  console.log("Ejecuto!");
}

/**
 * Resultado esperado cuando numeroVeces=5: https://oscarm.tinytake.com/msc/ODc4MzYxMV8yMjIwMzg0NQ
 */