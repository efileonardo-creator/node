/** Aca se obtienen los datos desde un archivo de texto. */

import { fileURLToPath } from 'url'; 
import path from 'path'; 
import fs from 'fs'



// Obtener el directorio actual 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
const filePath = path.join(__dirname, 'ejemplo.txt')

console.log('Ruta absoluta:', __dirname); 
// Leemos el archivo ejemplo.txt 
fs.readFile(filePath, 'utf8', (err, data) => { 
    if (err) { 
        console.error('Error al leer el archivo:', err); 
    return; 
    } 
    console.log('Contenido del archivo: ', data); 
}); 

/* Aca se usa process para obtener los datos desde la terminal*/

const args = process.argv.slice(2); 
// Ignoramos los dos primeros elementos con slice 
if (args[0] === 'saludar') { 
    console.log(`¡Hola, ${args[1] || 'mundo'}!`); 
} else if (args[0] === 'despedir') { 
    console.log(`¡Adiós, ${args[1] || 'mundo'}!`); 
} else { 
    console.log('Comando no reconocido. Usa "saludar" o "despedir".'); 
}  

//Se debe de arrancar el script usando por ejemplo: node index.js saludar juan

