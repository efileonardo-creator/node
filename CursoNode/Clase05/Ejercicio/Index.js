const args = process.argv.slice(3);
const data = process.argv.slice(4);
const id = process.argv.slice(4,5);

console.log(args)
console.log(id)

switch(args){
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
