/**
 * Mi dia a dia
 *
 * Vamos a escribir un programa que muestre, para cada hora del dia, que actividad realiza un Sim en Villa Lobo.
 * Muestra qué actividad realiza la persona por el terminal PARA CADA HORA.
 *
 * 1. A las 8, el sim se despierta
 * 2. A las 9, el sim desayuna
 * 3. De 10 a 16, el sim estudia Front End
 * 4. A las 17, siesta
 * 5. De 18 a 22, el sim tiene tiempo libre
 * 6. A las 22, el sim cena
 * 7. A las 23, el sim se va a dormir
 *
 * Escribe un bucle, con los condicionales adecuados dentro del bucle, para que muestre por el terminal lo que hace el sim a cada hora. La idea es que el bucle empiece en hora_actual y acabe en hora_dormir
 *
 * Ejemplo:
 *
 * "A las 8, el sim se despierta"
 * "A las 9, el sim desayuna"
 * "A las 10, el sim estudia Front End"
 * "A las 11, el sim estudia Front End"
 * ....
 * "A las 23, el sim se va a dormir"
 */

let hora_actual = 8;
let hora_dormir = 24;

// Resultado esperado aproximado: https://oscarm.tinytake.com/msc/ODc4NTEzNl8yMjIwNTc2Nw

for (let i=hora_actual; i<hora_dormir; i++) {
   // console.log(`Son las ${i}:00 Dependiendo de la hora que sea el sim hace una cosa u otra`);

    // Si son las 8...el sim se despierta
    if (i==8) {
        console.log("A las 8, el sim se despierta");
    } else if (i==9) {
        console.log("A las 9, el sim desayuna");
    } else if (i>=10 && i<=16) {
        console.log(`A las ${i}, el sim estudia Front End`);
    } else if (i == 17) {
        console.log("A las 17, el sim se echa una siesta.");
    } else if (i >=18 && i <= 21) {
        console.log(`A las ${i}, el sim tiene tiempo libre`);
    } else if (i == 22) {
        console.log("A las 22, el cena.");
    } else if ( i== 23) {
        console.log("A las 23, el sim se va a dormir.");

    }

    // Si son las 9...el sim desayuna

    // Si son las 10 o las 11 el sim estudio Front End
}