/** 
punto 1
1. Utiliza la API pública de Rick and Morty (docs) para obtener la lista de personajes. 
2. Con las herramientas then, catch y finally, procesa la respuesta y devuelve por 
consola un array con los primeros 5 resultados de los 20 personajes recibidos. */

function traerCaracteres(){
fetch('https://rickandmortyapi.com/api/character') 
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Error al obtener los personajes');
    }
})
.then(data => {
    const personajes = (data.results.slice(0,5))
    console.log(personajes.map(p => p.name));}
) 
//  El error debe manejarse verificando manualmente response.ok. 

.catch(error => console.error('Error:', error))
.finally(() => console.log('Fin de la tarea.'));
}
traerCaracteres();
/** punto 2

1. Realiza el mismo ejercicio anterior, pero esta vez usa una función asíncrona con 
async y await para consumir la API. 
2. Asegúrate de manejar errores correctamente con un bloque try/catch. 

*/

async function traerCaracteresAsync(){
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character') 
        const data = await response.json();
        const personajes = data.results.slice(0,5);
        console.log(personajes.map(p => p.name));
    } catch (error){
        console.log("Error al cargar los personajes ", error)

    } finally {
        console.log("Personajes traidos con exito.")
    }
}

traerCaracteresAsync();