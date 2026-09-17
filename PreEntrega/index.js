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
(posicionCorte !== -1 ? ID =  parseInt(entradaString.slice(posicionCorte + 1)) : console.log("No se especifico un ID."));
    
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
        await funcionGet(ID)
        break;
    case "POST":
        await funcionPost(entradaString)
        break;
    case "PUT":
        console.log(`Modificamos el item con id: ${id} satisfactoriamente.`);
        break;
    case "DELETE":
        await funcionDelete(id)
        console.log(`El item con el id: ${id} se eliminó con éxito`);
        break;
    default:
        console.log("Opción elejida incorrecta.");
    }

    async function funcionGet(id) {
        const productos = await traerData();

        if (!productos) {
            return;
        }

        if (id === null) {
            console.log("Estos son los productos:");
            productos.forEach(producto => console.log(`${producto.id}) ${producto.title}`));
            return;
        }

        const producto = productos.find(producto => producto.id === id);
        if (producto === undefined) {
            console.log(`No se encontro un producto con el ID ${id}.`);
            return;
        }

        console.log(`Este es el producto con ID ${id}:`);
        console.log(producto);
    }

    async function funcionPost(entrada){
        console.log((entrada.length > 0 ? await enviarDatos(entrada) : `No se recibieron datos.`));
    }

    //npm run start POST products <title> <price> <category>
    function enviarDatos(entrada) {
        const [titulo, precio, categoria] = [...entrada.split(",")]
        const product = { title: titulo, price: precio, category:categoria };
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        }
       fetch('https://fakestoreapi.com/products', config )
            .then(response => response.json())
            .then(data => console.log(data));
            return (`Recibimos ${entrada} satisfactoriamente.`)
    }

    //npm run start DELETE products/7

    //CORREGIR DESDE ACA
    function funcionDelete(id){
        fetch(`https://fakestoreapi.com/products/${id}`, {
              method: 'DELETE'
        })
        
        .then(response => response.json())
        .then(data => console.log(data))
    }   
