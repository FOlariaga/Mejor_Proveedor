const CANTIDAD_DE_PROVEEODORES = parseInt(prompt("¿Cuantos proveedores desea comparar?"));
let otroProducto = false;
do {
    const PRODUCTO = prompt("¿Cual es el nombre del producto a comparar?");
    let mejorPrecio = Infinity;
    let mejorProveedor = "";

    for (let i = 1; i <= CANTIDAD_DE_PROVEEODORES; i++) {
        let precio = parseInt(prompt("¿Cual es el precio de el/la " + PRODUCTO + " determinado por su proveedor N° " + i + "?"));

        if (mejorPrecio > precio) {
            mejorPrecio = precio;
            mejorProveedor = prompt("¿Como se llama su proveedor N° " + i + "?");
            console.log("Actualmente el mejor proveedor es " + mejorProveedor + " a un precio de " + mejorPrecio);

        } else {
            console.log("el mejor proveedor sigue siendo " + mejorProveedor + " a un precio de " + mejorPrecio);
        }
    }

    alert("El proveedor " + mejorProveedor + " tiene el/la " + PRODUCTO + " mas barato a un precio de $" + mejorPrecio + ", en comparacion con los demas.");

    mejorPrecio = Infinity;
    mejorProveedor = "";

    otroProducto = prompt("¿Quiere comparar otro producto con su misma cantidad de proveedores?" + "\n (ingrese si o no)").trim()
    if (otroProducto.toUpperCase() === "SI") {
        otroProducto = true
    } else {
        otroProducto = false
    }

} while (otroProducto);