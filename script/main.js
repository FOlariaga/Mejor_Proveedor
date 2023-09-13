// declaracion de la funcion que dara el resultado
function conclusion(proveedor, producto, precio) {
    return "El proveedor " + proveedor + " tiene el/la " + producto + " mas barato a un precio de $" + precio + ", en comparacion con los demas.";
}


const CANTIDAD_DE_PROVEEODORES = parseInt(prompt("¿Cuantos proveedores desea comparar?"));
let otroProducto = false;
console.log(CANTIDAD_DE_PROVEEODORES)
do {
    if (CANTIDAD_DE_PROVEEODORES.toString() == "NaN" || CANTIDAD_DE_PROVEEODORES < 1) {
        alert("Debe ingresar un numero valido mayor a 0")
        break
    }
    const PRODUCTO = prompt("¿Cual es el nombre del producto a comparar?");
    let mejorPrecio = Infinity;
    let mejorProveedor = "";

    for (let i = 1; i <= CANTIDAD_DE_PROVEEODORES; i++) {
        let precio = parseFloat(prompt("¿Cual es el precio de el/la " + PRODUCTO + " determinado por su proveedor N° " + i + "?"));

        if (mejorPrecio > precio) {
            mejorPrecio = precio;
            mejorProveedor = prompt("¿Como se llama su proveedor N° " + i + "?");
            console.log("Actualmente el mejor proveedor es " + mejorProveedor + " a un precio de " + mejorPrecio);

        } else {
            console.log("el mejor proveedor sigue siendo " + mejorProveedor + " a un precio de " + mejorPrecio);
        }
    }

    //     llamado a la funcion
    alert(conclusion(mejorProveedor,PRODUCTO,mejorPrecio));

    mejorPrecio = Infinity;
    mejorProveedor = "";

    otroProducto = prompt("¿Quiere comparar otro producto con su misma cantidad de proveedores?" + "\n (ingrese si o no)").trim()
    if (otroProducto.toUpperCase() === "SI") {
        otroProducto = true
    } else {
        otroProducto = false
    }

} while (otroProducto);