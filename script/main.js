// funcion constructora que se encarga de guardar los datos de cada producto
function Producto(proveedor, nombre, precio) {
    this.proveedor = proveedor;
    this.nombre = nombre;
    this.precio = precio;
    this.mensaje = function () { console.log("La mejor opcion para comprar " + nombre + " es tu proveedor " + proveedor + " a un precio de $" + precio) }
}

// declaracion de variables globales
let proveedores = []
let mejorProveedor = [{ nombre: "" }]
let otroProducto

const CANTIDAD_DE_PROVEEDORES = parseInt(prompt("ingrese la cantidad de proveedores"))

if (CANTIDAD_DE_PROVEEDORES.toString() == "NaN" || CANTIDAD_DE_PROVEEDORES < 1) {
    alert("Debe ingresar un numero valido mayor a 0")
}

// recoleccion y almacenamiento de datos en arrays
for (let i = 1; i <= CANTIDAD_DE_PROVEEDORES; i++) {

    //declaracion de variables locales
    let productos = []
    let proveedor = prompt("ingrese el nombre de su proveedor numero " + i).trim()

    do {
        let producto = prompt("ingrese el nombre del producto").trim()

        let precio = parseFloat(prompt("ingrese el precio de: " + producto + "\n( ingrese el precio sin el simbolo ¨$¨ y un (punto) para seprar centavos )"))

        const PRODUCTO = new Producto(proveedor, producto, precio)

        productos.push(PRODUCTO)

        otroProducto = prompt("¿Quiere agregar otro producto al proveedor " + proveedor + "?" + "\n (ingrese ¨si¨ en caso de querer agregar otro producto)").toUpperCase().trim()

        switch (otroProducto) {
            case "SI":
                otroProducto = true
                break;

            default:
                otroProducto = false
                break;
        }

    } while (otroProducto);

    //una vez que se ingresan todos los productos de un mismo proveedor se hace un push de ese array para dar lugar a un nuevo proveedor.
    proveedores.push(productos)
}

//comprobacion de existencia de un mismo producto y eleccion del producto mas barato en comparacion
for (let prov = 0; prov < proveedores.length; prov++) {

    for (let producto = 0; producto < proveedores[prov].length; producto++) {

        for (let i = 0; i < mejorProveedor.length; i++) {

            let nombre1 = mejorProveedor[i].nombre
            let nombre2 = proveedores[prov][producto].nombre

            // se verifica que sea el ultimo elemento del array y en caso de no hallar coincidencia se hace el push
            if (i === mejorProveedor.length - 1) {

                // se busca coincidencia en el nombre de lo productos para comparar sus precios.
                if (nombre1.toUpperCase() === nombre2.toUpperCase()) {

                    // se verifica si el proveedor nuevo o el ya existente tiene ese producto a un menor precio.
                    if (mejorProveedor[i].precio < proveedores[prov][producto].precio) {
                        break;
                    }
                    // si el proveedor nuevo tiene el precio mas barato para ese producto se elimina el ya existente del array y se agrega al nuevo.
                    else if (mejorProveedor[i].precio > proveedores[prov][producto].precio) {
                        mejorProveedor.splice(i, 1);
                        mejorProveedor.push(proveedores[prov][producto])
                        break;
                    }

                    // este producto no se encuentra asi que de momento es el unico proveedor que cuenta con este producto por lo que se debe agregar.
                } else {
                    mejorProveedor.push(proveedores[prov][producto])
                    break;
                }
            }


            // no es el ultimo elemento de array asi que no se deberia hacer un push hasta verificar si se encuentra entre los demas elementos.
            else {

                if (nombre1.toUpperCase() === nombre2.toUpperCase()) {

                    if (mejorProveedor[i].precio < proveedores[prov][producto].precio) {
                        break;
                    }
                    else if (mejorProveedor[i].precio > proveedores[prov][producto].precio) {
                        mejorProveedor.splice(i, 1);
                        mejorProveedor.push(proveedores[prov][producto])
                        break;
                    }
                }
            }
        }
    }
}

//elimina el primer elemento que se declaro en la linea 11 de codigo
mejorProveedor.shift()

//muestra en la consola el array resultante con las mejores opciones de cada producto
console.log(mejorProveedor)

//recorre el array con los mejores productos para ejecutar el metodo "mensaje"
mejorProveedor.forEach((x) => {x.mensaje()})