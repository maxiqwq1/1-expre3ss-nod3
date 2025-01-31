import operaciones from './operaciones.js';

const { registrar, leer } = operaciones;

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === 'registrar') {
    const [, nombre, edad, animal, color, enfermedad] = argumentos;

    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.log(' Debes proporcionar todos los datos: nombre, edad, animal, color y enfermedad.');
    } else {
        registrar(nombre, edad, animal, color, enfermedad);
    }
} else if (operacion === 'leer') {
    leer();
} else {
    console.log(' Operación no reconocida. Usa "registrar" o "leer".');
}

//Hola buenas noches profe, si lo siento enviar las actividades todas juntas, Tuve muchos problemas a comenzar el año 
// que me afectaron tanto psicologicamente y algo mental, tambien la relacion familiar,no la hago mas larga, mi gato bebe que me regalon el 24 de diciembre murio el 6 de enero, mas la separacion de mis padre digamos que no me pude enfocar mucho.
