/**
 * Bucle condicionado
 *
 * Ejecuta el script y observa que sucede.
 * ¿Cuantas veces se ejecuta el código del bucle?
 *
 * Modifica el código del bucle y una esctrictura condicional if..else; para que:
 * Si el valor de la variable i es un número negativo, mostrar por el terminal "Soy un número negativo"
 * Si el valor de la variable i es un número positivo, mostrar por el terminal "Soy un número positivo"
 */

let numeroFinal = 5;

for (var i = -5; i < numeroFinal; i++) {
  console.log("Voy a ejecutar el condicional para el número: " + i);

  if (i > 0) {
    console.log("Soy un número positivo!");
  } else if (i < 0) {
    console.log("Soy un núemero negativo!");
  } else {
    console.log("Soy el 0");
  }
}

/**
 * Una forma de mirar si un número es positivo es mirar si su valor es mayor que 0.
 * Si no lo es, entonces comprobamos si es un número negativo.
 * A pesar que no lo indique el enunciado...si un número no es ni positivo ni negativo...¡entonces podems decir que es el número 0!
 */

/**
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODc4MzYyNF8yMjIwMzg1OA
 */
