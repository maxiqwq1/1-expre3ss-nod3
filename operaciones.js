import { readFileSync, writeFileSync } from 'fs';

const registrar = (nombre, edad, animal, color, enfermedad) => {
    try {
        
        const citas = JSON.parse(readFileSync('citas.json', 'utf-8'));

       
        const nuevaCita = { nombre, edad, animal, color, enfermedad };

      
        citas.push(nuevaCita);

       
        writeFileSync('citas.json', JSON.stringify(citas, null, 2));

        console.log(' Cita registrada con éxito.');
    } catch (error) {
        console.error(' Error al registrar la cita:', error.message);
    }
};

const leer = () => {
    try {
        
        const citas = JSON.parse(readFileSync('citas.json', 'utf-8'));
        console.log(' Citas registradas:', citas);
    } catch (error) {
        console.error('❌ Error al leer las citas:', error.message);
    }
};


export default { registrar, leer };
