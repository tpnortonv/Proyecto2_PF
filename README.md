# Sistema de Encuestas en JavaScript

## Descripción

Este código en JavaScript proporciona una serie de funciones para gestionar encuestas de manera sencilla. Permite crear encuestas, agregar opciones, registrar votos y mostrar los resultados. Está diseñado para ser fácil de usar y entender, ideal para aplicaciones simples de encuestas.

## Funcionalidades

1. **Crear Encuesta**: Crea una nueva encuesta con un título y un objeto vacío para las opciones.
2. **Agregar Opciones**: Permite añadir opciones a la encuesta, cada una iniciando con un conteo de votos en 0.
3. **Registrar Votos**:
   - Incrementa el conteo de votos de una opción específica si esta existe.
   - Maneja errores en caso de que la opción no sea válida.
4. **Mostrar Resultados**: Muestra en la consola los resultados de la encuesta, detallando el número de votos para cada opción.

## Instrucciones de Ejecución

1. **Definir Funciones**:
   - Copia el código de las funciones en un archivo JavaScript (.js).
2. **Crear una Encuesta**:
   - Usa la función `crearEncuesta` para inicializar una nueva encuesta con un título.
3. **Agregar Opciones**:
   - Usa la función `agregarOpcion` para añadir opciones a la encuesta.
4. **Registrar Votos**:
   - Usa la función `votar` para registrar votos para las opciones disponibles.
5. **Mostrar Resultados**:
   - Usa la función `mostrarResultados` para imprimir los resultados en la consola.

## Código

```javascript
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
        console.log('Opción no válida.'); // Si no, opción no válida.
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

// Registramos votos.
votar(encuesta1, 'Messi'); // 1 voto para Messi.
votar(encuesta1, 'Messi'); 
votar(encuesta1, 'Ronaldo'); 
votar(encuesta1, 'Maradona'); 
votar(encuesta1, 'Pelé'); 
votar(encuesta1, 'Pelé'); 

// Mostramos resultados de la encuesta.
mostrarResultados(encuesta1);
