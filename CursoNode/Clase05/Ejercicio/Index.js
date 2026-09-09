const args = process.argv.slice(2);
const data = process.argv.slice(3);
const id = process.argv.slice(3,4);

/* opciones para verificar los datos que se reciben:
console.log(args)
console.log(data)
console.log(id)
*/

switch(args[0]){

    case "GET":
        console.log("Toma un dato.");
        break;
    case "POST":
        console.log(`Recibimos ${data} sagtisfactoriamente.`);
        break;
    case "PUT":
        console.log(`Modificamos el item con id: ${id} satisfactoriamente.`);
        break;
    case "DELETE":
        console.log(`El item con el id: ${id} se eliminó con éxito`);
        break;
    default:
        console.log("Opción elejida incorrecta.");
    }


