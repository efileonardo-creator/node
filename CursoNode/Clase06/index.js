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


