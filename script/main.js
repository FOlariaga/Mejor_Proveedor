// funcion constructora que se encarga de guardar los datos de cada producto.
function Producto(proveedor, nombre, precio) {
    this.proveedor = proveedor;
    this.nombre = nombre;
    this.precio = precio;
}

//se agrega el provedor a la lista de proveedores cargados con la cantidad de productos.
const AGREGAR_LI = (proveedor, cantidadDeProductos) => {
    let li = document.createElement("li")
    let listaDeProveedores = document.querySelector(".listaDeProveedores")
    li.innerHTML = `<span>"${proveedor}"</span> se cargo con ${cantidadDeProductos} productos`
    listaDeProveedores.append(li)
}

// vaciar el localStorage y eliminar proveedores cargados de la lista
const VACIAR_LI = () => {
    let listaDeProveedores = document.querySelector(".listaDeProveedores")
    let faltaDeDatos = document.querySelector(".ListaDeDescartados")
    let mejoresOpciones = document.querySelector(".listaMejoresOpciones")
    listaDeProveedores.innerHTML = ""
    faltaDeDatos.innerHTML = ""
    mejoresOpciones.innerHTML = ""
    localStorage.clear()
    mejorProveedor = [{ nombre: "" }]
}

//si hay elementos en el localstorage reflejalos en la lista de proveedores cargados
const recuperaElementoLS = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i)
        let productoLS = JSON.parse(localStorage.getItem(clave))
        AGREGAR_LI(productoLS[0].proveedor, productoLS.length)
    }
}

//cargar datos en caso de encontrarse en el localStorage
recuperaElementoLS()

const LIMPIAR_RESULTADOS = () => {
    let faltaDeDatos = document.querySelector(".ListaDeDescartados")
    let mejoresOpciones = document.querySelector(".listaMejoresOpciones")
    faltaDeDatos.innerHTML = ""
    mejoresOpciones.innerHTML = ""
}

//agrega a la lista "falta de datos" un mensaje de que falta el nombre en uno de los productos
const PRODUCTO_SIN_NOMBRE = (e) =>{
    let li = document.createElement("li")
    let faltaDeDatos = document.querySelector(".ListaDeDescartados")
    li.innerHTML = `se agrego un producto sin nombre para el proveedor "<span>${e.proveedor}</span>"`
    faltaDeDatos.append(li)
}

//agrega a la lista "falta de datos" un mensaje de que uno de los productos no tiene un precio definido
const PRODUCTO_SIN_PRECIO = (e) =>{
    let li = document.createElement("li")
    let faltaDeDatos = document.querySelector(".ListaDeDescartados")
    li.innerHTML = `El producto "<span>${e.nombre}</span>" del proveedor "<span>${e.proveedor}</span>" no tiene un precio definido`
    faltaDeDatos.append(li)
}

// agrega a la lista "Mejores Opciones" un mensaje de la alternativa mas barata de un producto con su respectivo proveedor y precio
const MOSTRAR_RESULTADOS = (e) => {
    let li = document.createElement("li")
    let mejoresOpciones = document.querySelector(".listaMejoresOpciones")
    li.innerHTML = `El producto "<span>${e.nombre}</span>" lo tiene mas barato el proveedor "<span>${e.proveedor}</span>" a un precio de "$<span>${e.precio}</span>"`
    mejoresOpciones.append(li)
}

//reflejar resultados en el dom
const LISTAR_RESULTADOS = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nombre == "") {
            PRODUCTO_SIN_NOMBRE(array[i])
        } else if (array[i].precio == null) {
            PRODUCTO_SIN_PRECIO(array[i])
        } else{
            MOSTRAR_RESULTADOS(array[i])
        }
    }
}


// se eliminan inputs para ajustar segun la cantidad de productos por proveedor.
let eliminarProducto = document.getElementById("ELIMINAR_PRODUCTO")
let productosTotales = 3
let alerta1 = false

eliminarProducto.addEventListener("click", () => {
    if (alerta1) {
        //si la alerta esta presente reflejara un "true" por lo que no se eliminara el input y no se generan mas alertas de este tipo.
    } else if (productosTotales <= 1) {
        //si se quiere eliminar el ultimo input de los productos no se ejecutara y mostrara una alerta cambiando su valor a "true".
        let noQuitarMas = document.createElement("div")
        noQuitarMas.innerHTML = `
        <img id ="cruz1" src="https://cdn-icons-png.flaticon.com/512/7269/7269138.png" alt="x">
            <p>no debes tener menos de 1 producto por proveedor</p>`
        noQuitarMas.className = "alerta"
        document.querySelector(".productoPrecio").append(noQuitarMas)
        alerta1 = true

        //se agrega el evento a la cruz de la alerta la cual la eliminara y cambiara su valor a "false".
        let cruz = document.getElementById("cruz1")
        cruz.addEventListener("click", () => {
            noQuitarMas.remove()
            alerta1 = false
        })
    } else {
        // si no hay una alerta presente y no es el ultimo input que queda, se eliminara el ultimo input de la columna
        let tr = document.getElementsByTagName("tr")
        cantidadTr = tr.length - 1
        tr[cantidadTr].remove()
        productosTotales = productosTotales - 1
    }
})

//se agregan inputs para ajustar segun la cantidad de productos por proveedor
let agregarProducto = document.getElementById("AGREGAR_PRODUCTO")
agregarProducto.addEventListener("click", () => {
    let addInputs = document.createElement("tr")
    addInputs.innerHTML = `<td><input class="ingresoProducto" type="text" placeholder="producto"></td>
    <td><input class="ingresoPrecio" type="number" placeholder="$ Precio"></td>`
    document.querySelector("tbody").append(addInputs)
    productosTotales = productosTotales + 1
})


//guardar productos en un array de objetos en el localstorage.

let productos = []
let productoInput = document.getElementsByClassName("ingresoProducto");
let precioInput = document.getElementsByClassName("ingresoPrecio");
let proveedor = document.getElementById("NOMBRE_DEL_PROVEEDOR")
let CARGAR_DATOS = document.getElementById("CARGAR_DATOS")
let alerta2 = false
CARGAR_DATOS.addEventListener("click", () => {

    if (alerta2) {
        //si no se elimina la alerta no se cargaran datos ni generaran nuevas alertas de este tipo.
    } else if (proveedor.value == "") {
        //en el caso de no ingresar proveedor se mostrara una alerta cambiando su valor a "true" impidiendo que se ejecute la carga de datos.
        let sinProveedor = document.createElement("div")
        sinProveedor.innerHTML = `
            <img id= "cruz2" src="https://cdn-icons-png.flaticon.com/512/7269/7269138.png" alt="x">
            <p>debes ingresar el nombre del proveedor</p>`
        sinProveedor.className = "alerta"
        document.querySelector(".primerDato").append(sinProveedor)
        alerta2 = true

        //se agrega el evento a la cruz de la alerta la cual la eliminara y cambiara su valor a "false".
        let cruz = document.getElementById("cruz2")
        cruz.addEventListener("click", () => {
            sinProveedor.remove()
            alerta2 = false
        })

    } else {
        //si se ingresaron los datos requeridos y no hay alertas presentes se tomaran los datos almacenandolos en el localstorage.
        for (let i = 0; i < productosTotales; i++) {
            const PRODUCTO = new Producto(proveedor.value, productoInput[i].value, parseFloat(precioInput[i].value));
            productos.push(PRODUCTO);
        }

        //llama la funcion para agregar elementos a la lista de proveedores cargados
        AGREGAR_LI(proveedor.value, productosTotales)

        //se realiza un stringify del array de objetos para agregarlo al localStorage
        let productosJSON = JSON.stringify(productos)
        localStorage.setItem(`${proveedor.value}`, productosJSON)

        //reseteo de la variable para evitar duplicados
        productos = []
    }
})

//boton "Borrar Proveedores" elimina la lista de proveedores cargados y limpia el localStorage
const BORRAR_PROVEEDORES = document.getElementById("BORRAR_PROVEEDORES")
BORRAR_PROVEEDORES.addEventListener("click", () => {
    VACIAR_LI()
})


//extraer datos del localStorage y compararlos
let mejorProveedor = [{ nombre: "" }]
let productoIncompleto = []
const CALCULAR = document.getElementById("CALCULAR")
CALCULAR.addEventListener("click", () => {

    LIMPIAR_RESULTADOS()

    //resetear las variables para no duplicar su contenido
    mejorProveedor = [{ nombre: "" }]
    productoIncompleto = []


    //Extraer datos del localStorage
    for (let LS = 0; LS < localStorage.length; LS++) {
        let clave = localStorage.key(LS)
        let productoRecuperado = JSON.parse(localStorage.getItem(clave))

        //recorrer los elementos extraidos del lcalStorage
        for (let obj = 0; obj < productoRecuperado.length; obj++) {
            
            //recorrer la variable que almacena las "mejores opciones" para poder comparar con lo extraido del localStrage
            for (let i = 0; i < mejorProveedor.length; i++) {
                let nombre1 = mejorProveedor[i].nombre
                let nombre2 = productoRecuperado[obj].nombre

                //verificar que no los productos tengan precio y nombre
                if (productoRecuperado[obj].nombre == "") {
                    productoIncompleto.push(productoRecuperado[obj])
                    break;
                } else if (productoRecuperado[obj].precio === null) {
                    productoIncompleto.push(productoRecuperado[obj])
                    break;

                //verificar si es el ultimo producto del array "mejorProveedor" para pushear si no hay coincidencia
                } else if (mejorProveedor.length - 1 === i) {

                    //verificar si es el mismo producto
                    if (nombre1.toUpperCase() === nombre2.toUpperCase()) {

                        //si ya se encuentra ese producto se compara los precios para guardar la opcion mas economica y descartar el mas caro
                        if (mejorProveedor[i].precio === productoRecuperado[obj].precio) {
                            break;
                        } else if (mejorProveedor[i].precio < productoRecuperado[obj].precio) {
                            break;
                        } else if (mejorProveedor[i].precio > productoRecuperado[obj].precio) {
                            mejorProveedor.splice(i, 1);
                            mejorProveedor.push(productoRecuperado[obj])
                            break;
                        }

                        //se hace un push por compararse con todos los productos y no encontrarse en coincidencia
                    } else {
                        mejorProveedor.push(productoRecuperado[obj])
                        break;
                    }
                } else {

                    //mismo proceso de arriba con la diferencia de que no se hara el push en caso de no encontrarse coincidencia de productos
                    if (nombre1.toUpperCase() === nombre2.toUpperCase()) {

                        if (mejorProveedor[i].precio === productoRecuperado[obj].precio) {
                            break;
                        } else if (mejorProveedor[i].precio < productoRecuperado[obj].precio) {
                            break;
                        }
                        else if (mejorProveedor[i].precio > productoRecuperado[obj].precio) {
                            mejorProveedor.splice(i, 1);
                            mejorProveedor.push(productoRecuperado[obj])
                            break;
                        }
                    }
                }
            }
        }
    }
    mejorProveedor.shift()
    
    //reflejar resultados en el dom con llamado a las funciones
        LISTAR_RESULTADOS(productoIncompleto)
        LISTAR_RESULTADOS(mejorProveedor)
})