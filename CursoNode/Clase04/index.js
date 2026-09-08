const autos =
    [
    {
        "marca": "Toyota",
        "modelo": "Corolla",
        "año": 2022,
        "color": "Blanco"
    },
    {
        "marca": "Ford",
        "modelo": "Focus",
        "año": 2020,
        "color": "Azul"
    },
    {
        "marca": "Volkswagen",
        "modelo": "Golf",
        "año": 2021,
        "color": "Gris"
    },
    {
        "marca": "Chevrolet",
        "modelo": "Cruze",
        "año": 2019,
        "color": "Negro"
    },
    {
        "marca": "Honda",
        "modelo": "Civic",
        "año": 2023,
        "color": "Rojo"
    },
    {
        "marca": "Fiat",
        "modelo": "Cronos",
        "año": 2022,
        "color": "Gris"
    },
    {
        "marca": "Renault",
        "modelo": "Sandero",
        "año": 2020,
        "color": "Blanco"
    },
    {
        "marca": "Peugeot",
        "modelo": "208",
        "año": 2023,
        "color": "Azul"
    },
    {
        "marca": "Nissan",
        "modelo": "Sentra",
        "año": 2021,
        "color": "Negro"
    },
    {
        "marca": "Volkswagen",
        "modelo": "Polo",
        "año": 2024,
        "color": "Amarillo"
    }
    ];

/*
1. Crea un array con 10 objetos, donde cada objeto represente un automóvil con la 
siguiente información: 
○ Marca 
○ Modelo 
○ Año 
○ Color 
2. Usa un método de array para recorrer la lista e imprime por consola todos los datos 
de los automóviles cuyo año sea mayor a 2022. 
*/
    autos.forEach(auto => {(auto.año > 2022 ? console.log(auto) : null)})

/*
1. Crea una función que recorra el array de automóviles. 
2. Usa destructuring dentro de la función para obtener el color de cada automóvil. 
3. La función debe aceptar un color como parámetro y devolver por consola cuántos 
automóviles tienen ese color. 
*/