# Mejor Proveedor
el proposito de este proyecto es comparar el precio que tiene un producto entre distintos proveedores, en un principio no hay limites para la cantidad de proveedores y con la implementacion de arrays y objetos ya no hay limites para la cantidad de productos.

En lineas generales se determina la cantidad de proveedores para posteriormente ir agregando TODOS los productos de ese proveedor (una vez confirmado que no desea agregar mas productos de un proveedor no se podra agregar mas productos para dicho proveedor).

una vez cargados todos los productos de todos los proveedores se empieza a recorrer proveedor por provedor, producto por producto, el primer proveedor casi automaticamente se agregara a un array con las "mejores opciones" de compra, una vez llegado al segundo proveedor en adelante se verifica si ese producto ya se encuentra en el array con las "mejores opciones", en caso de no estar se hace un push para incluir ese producto, en caso de que si este se verifica el de menor precio para que sea el que se quede en el mismo y descartando al otro.

Una vez terminada todas las comparaciones y teniendo un array con todos los productos al menor precio entre los proveedores se recorre con un forEach para ejecutar el metodo que se encuentra en el objeto, mostrando en la consola un mensaje con las mejores opciones.