/**
 * DIFÍCIL
 * 
 * La palabra del día. Primero, intenta entender este algoritmo. ¿Qué es lo que hace? https://lapalabradeldia.com/
 */

/**
 * Completa el bucle:
 * 
 * 1. Si la siguiente letra que ha introducido el usuario es la misma letra que la que tocaría en la palabra del día, mostramos por consola : "la letra {letra} es correcta"
 * 2. Si la siguiente letra que ha introducido el usuario NO esta en la palabra del dia, mostramos por consola : "le letra {letra} NO es correcta"
 * 3. Si la siguiente letra que ha introducido el usuario se encuentra en la palabra del dia, PERO no es la posición correcta, mostrar por consola: "la letra {letra} es correcta, PERO se encuentra en una posición diferente"
 */

let palabraDelDia= "bucle";
let palabraIntroducida = "bueno";

for (let i=0;i<palabraDelDia.length;i++) {

    let siguienteLetraCorrecta = palabraDelDia[i];
    let siguienteLetraIntroducida = palabraIntroducida[i];

    // Tu código a partir de aquí, dentro del bucle
    
    // Acordaos de que nuestro objetivo pirncipal es conseguir "pequeñas victorias". No podemos hacerlo todo a la vez. Primero, simplemente voy a comprobar si la letra de la posición 'i' es exactamente la misma en la palabra introducida por el usuario y la palabra del día
    if (siguienteLetraCorrecta == siguienteLetraIntroducida) {
        console.log(`La letra ${siguienteLetraIntroducida} es correcta`);
    }

    // cuando tenemos esto vamos al siguiente caso: que la letra es correcta pero se encuentra en otra posición. Este caso es complicado: si la letra es correcta pero se encuentra en otra posición, significa que siguienteLetraIntroducida se encuentra en UN INDICE DIFERENTE de la palabra del día. Para averiguar esto, necesitamos usar o bien el método "includes"o el método "indexOf" https://www.w3schools.com/jsref/jsref_includes.asp
    else if (palabraDelDia.includes(siguienteLetraIntroducida)) {
        console.log(`La letra ${siguienteLetraIntroducida} es correcta, pero no está bien posicionada`)
    }

    // en cualquier otro caso, podemos decir que la letra introducida por el usuario NO se encuentra como parte de la palabra del día
    else {
        console.log(`La letra ${siguienteLetraIntroducida} NO es correcta`);
    }
}

// Resultado esperado: https://oscarm.tinytake.com/msc/ODc4MzY1N18yMjIwMzg5Mg