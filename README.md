# Mejor Proveedor
el proposito de este proyecto es comparar el precio que tiene un listado de productos entre distintos proveedores, no hay un limite para la carga de proveedores ni productos por proveedor con el unico detalle de que no se puede agregar datos a un proveedor luego de ser cargados, en el caso de cargar 2 proveedores con el mismo nombre se reemplazara el ya existente con los datos cargados posteriormente.

Los datos son extraidos de inputs y almacenados en un array de objetos para posteriormente ser guardados en el localStorage.

una vez cargados todos los productos de todos los proveedores y ejecutar el boton "Calcular Proveedor" se empieza a recorrer proveedor por provedor, producto por producto, el primer proveedor casi automaticamente se agregara a un array con las "mejores opciones" de compra, una vez llegado al segundo proveedor en adelante se verifica si ese producto ya se encuentra en el array con las "mejores opciones", en caso de no estar se hace un push para incluir ese producto, en caso de que si este se verifica el de menor precio para que sea el que se quede en el mismo y descartando al otro.

Una vez terminada todas las comparaciones y teniendo un array con todos los productos al menor precio entre los proveedores se muestran en la pantalla para que el usuario vea la compilacion de productos con el respectivo proveedor y el precio estipulado. 

En simultaneo se verifico si algun producto carece de datos (nombre o precio)
para ser agregado a otra lista y mostrar al usuario que uno de los productos no se a tenido en consideracion en dicha comparacion.