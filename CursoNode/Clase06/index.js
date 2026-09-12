/** Simulacion de asincronismo */

function taskAsync(callback) { 
    setTimeout(function() { 
        console.log('Tarea asincrónica completada.'); 
    callback(); 
    }, 3000) 
}; 
console.log('Inicio de la tarea.'); 
taskAsync(function() { 
console.log('Fin de la tarea.'); 

console.log("----------------")
});


/** Promesas */



function taskAsync2() { 
    return new Promise(function (resolve, reject) { 
        setTimeout(function() { 
            if (Math.random() < 0.5) { 
                //math.random simula una reaspuesta aleatorea
                resolve('Tarea asincrónica completada.') 
            } else { 
                reject(new Error('Tarea asincrónica fallida.')) 
            } 
        }, 3000); 
    }); 
} 


const result = taskAsync2(); 
console.log(result); // Promise { <pending> }

console.log('Inicio de la tarea.'); 

taskAsync2() 
.then((result) => console.log(result)) 
.catch((error) => console.log(error)) 
.finally(() => console.log('Fin de la tarea.')); 


/** Metoro async/await */
async function executeAsyncTask () { 
    console.log('Inicio de la tarea.'); 
    try { 
        const result = await taskAsync(); 
        console.log(result); 
    } catch (error) { 
      console.log(error); 
    } finally { 
        console.log('Fin de la tarea.') 
} 
} 
executeAsyncTask(); 


/** Fetch */ 
fetch ('./datos.json') 
.then((response) => response.json()) 
.then((data) => console.log(data))

/** Otras funcionalidades importantes de Fetch: 
1. Configuración avanzada: Puedes personalizar las solicitudes agregando un objeto 
de configuración. Por ejemplo, configurar los encabezados HTTP, enviar datos en el 
cuerpo de una solicitud POST o definir el método HTTP: 
2. Soporte para cookies y autenticación: Usando la opción credentials, Fetch 
puede manejar cookies o enviar credenciales entre dominios. */

const config = { 
    method: 'POST', 
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer token', 
    }, 
    body: JSON.stringify({ key: 'value' }), 
}; 
fetch('https://api.example.com/data', config) 
.then(response => response.json()) 
.then(data => console.log(data)) 
//  El error debe manejarse verificando manualmente response.ok. 
.catch(error => console.error('Error:', error)); 

