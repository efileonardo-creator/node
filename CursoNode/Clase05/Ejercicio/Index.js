const args = process.argv.slice(5);

console.log(args)


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
