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
const entradaString = entrada.toString();
const posicionCorte = entradaString.indexOf("/");
console.log("posicion del corte: ", posicionCorte);
let ID = null;
/**  Me quede aca..... */
(posicionCorte !== -1 ? ID =  entradaString.slice(posicionCorte + 1) : console.log("No se especifico un ID."));
    
console.log(`Acción: ${args} + Entrada: ${entradaString} + ID: ${ID}`);
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
        if (ID == null) {
            console.log(`Estos son los productos: `);
            productos.map(p => console.log(`${p.id}) ${p.title}`)) 
            if (productos.ID == undefined) {
                console.log(`No se encontro un producto con el ID ${ID}.`)
            }else{
            console.log(`Este es el producto con ID ${ID}:  `);
            console.log(`${productos.find(p => p.id === parseInt(ID)).id}) ${productos.find(p => p.id === parseInt(ID)).title}`)
          
            
        }}
        break;
    case "POST":
        console.log((entrada.length > 0 ? `Recibimos ${entrada} satisfactoriamente.` : `No se recibieron datos.`));
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
