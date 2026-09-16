async function traerData(){
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok){
            console.log("Error al cargar los productos.")
        }
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Hubo un error en la carga: ", error)

    } finally {
        console.log("Carga realizada satisfactoriamente.")

    }

}

traerData()
