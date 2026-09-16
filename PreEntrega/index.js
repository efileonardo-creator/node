//Solicitud de productos a la API.

async function traerData(){
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok){
            console.log("Error al cargar los productos.")
        } else{
        const data = await response.json();
        const datosFiltrados = await data.slice(0,10);
        return datosFiltrados;
        }
    } catch (error) {
        console.log("Hubo un error en la carga: ", error)

    } finally {
        console.log("")

    }

}

// Recepcion de comandos desde la terminal.
const [accion, ...entrada] = process.argv.slice(2);
console.log(`Acción: ${accion} + Entrada: ${entrada}`);
const args = accion?.toUpperCase();
const data = entrada.join(" ");
const posicionCorte = entrada.indexOf("/");
console.log("posicion del corte: ", posicionCorte);
/**  Me quede aca..... */
if (posicionCorte !== -1) {
    const id = entrada.split(posicionCorte +1);
} else{
    console.log("No hay un ID especificado.");
}
console.log(`Acción: ${args} + Entrada: ${data} + ID: ${id}`);
/* opciones para verificar los datos que se reciben:
console.log(args)
console.log(data)
console.log(id)
npm run start GET products/15 
*/


//Camino de acciones de la app segun comandos recibidos desde la terminal.
switch(args){

    case "GET":
        const productos = await traerData()
        console.log(`Estos son los productos: `);
        productos.map(p => console.log(`${p.id}) ${p.title}`));
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
