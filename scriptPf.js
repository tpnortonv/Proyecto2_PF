const crearEncuesta = (titulo) => { // Creamos una nueva encuesta.
    return {titulo, opciones: {}}; // Devuelve objeto con título de encuesta y objeto vacío para las opciones.
};

const agregarOpcion = (encuesta, opcion) => { // Agregamos una opción a la encuesta.
    encuesta.opciones[opcion] = 0; // Suma opción a objeto de opciones con conteo de votos inicial en 0.
};

const votar = (encuesta, opcion) => { // Votamos por una opción de la encuesta.
    if (encuesta.opciones[opcion] !== undefined) { // ¿Existe en el objeto de opciones?
        encuesta.opciones[opcion]++; // Si existe, +1 voto en esa opción.
    } else {
        console.log('Opción no válida.'); // Si no, opción no valida.
    }
};

const mostrarResultados = (encuesta) => { // Mostramos los resultados.
    console.log('Resultados de la encuesta ' + encuesta.titulo + ':'); // Muestra título de la encuesta.
    for (let opcion in encuesta.opciones) { // Recorremos cada opción del objeto.
        console.log(opcion + ': ' + encuesta.opciones[opcion] + ' votos.'); // Mostramos nombre de la opción y votos respectivos.
    }
};

// Creamos nueva encuesta.
const encuesta1 = crearEncuesta('¿Quién es el mejor jugador de la historia?');

// Agregamos opciones.
agregarOpcion(encuesta1, 'Messi'); // Agregamos Messi a las opciones.
agregarOpcion(encuesta1, 'Ronaldo');
agregarOpcion(encuesta1, 'Maradona');
agregarOpcion(encuesta1, 'Pelé');

votar(encuesta1, 'Messi'); // 1 voto para Messi.
votar(encuesta1, 'Messi'); 
votar(encuesta1, 'Ronaldo'); 
votar(encuesta1, 'Maradona'); 
votar(encuesta1, 'Pelé'); 
votar(encuesta1, 'Pelé'); 

// Mostramos resultados de encuesta 1.
mostrarResultados(encuesta1);












