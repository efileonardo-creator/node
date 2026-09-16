async function traerData(){
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok){
            console.log("Error al cargar los productos.")
        } else{
        const data = await response.json();
        return data;
        }
    } catch (error) {
        console.log("Hubo un error en la carga: ", error)

    } finally {
        console.log("")

    }

}



const args = process.argv.slice(2);
console.log(`args ${args}`)
const data = process.argv.slice(3);
console.log(`data ${data}`)
const id = process.argv.slice(3,4);
console.log(`id ${id}`)
/* opciones para verificar los datos que se reciben:
console.log(args)
console.log(data)
console.log(id)
*/

switch(args[0]){

    case "GET":
        const productos = await traerData()
        console.log(`Estos son los productos: `);
        productos.map(p => console.log(productos));
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
