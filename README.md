# Mejor Proveedor
el proposito de este proyecto es comparar el precio que tiene un producto entre distintos proveedores, en un principio no hay limites para la cantidad de proveedores pero la idea es ir mejorando el proyecto para poder aumentar la cantidad de productos que se puede comparar y no que se haga de uno en uno.

En lineas generales se determina la cantidad de proveedores para poder repetir la cantidad de veces que el bucle debe preguntar el precio.

El primer precio se determinara autometicamente como la mejor opcion de compra ya que es la unica hasta el momento, luego de ingresar el segundo precio se compara con el mejor precio del momento para determinar si es mayor o menos que el, en el caso de ser menor se pregunta el nombre de ese proveedor para poder asignarlo como el nuevo mejor precio y en caso contrario se descartara directamente pasando a preguntar un precio nuevo hasta llegar al limite de proveedores.

luego de ello se ejecuta un alert para informar cual es el proveedor con el producto al precio mas barato para posteriormente preguntar si se quiere repetir el proceso con otro producto.