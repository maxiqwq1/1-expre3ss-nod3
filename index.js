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
