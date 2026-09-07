const precios = [123, 124, 234, 2352, 125, 1, 23, 25, 632, 4523]
const preciosConImpuestos = precios.map((precio) => precio * 1.21)
console.log(preciosConImpuestos)


preciosConImpuestos.forEach(precio => (console.log(`El precio es: ${precio}.- IVA incluido.`)))