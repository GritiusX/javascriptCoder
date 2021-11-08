/* stringify y parse */

/* almacenar en storage la info que da el usuario */

const productos = [] //sumar todos los precios de productos

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

productos.push(new Producto(1, prompt('Ingresar Nombre de producto:'), 200));
productos.push(new Producto(2, prompt('Ingresar Nombre de producto:'), 200));
productos.push(new Producto(3, prompt('Ingresar Nombre de producto:'), 200));

localStorage.setItem('productos', JSON.stringify(productos)); //guardamos en el localStorage


const productosObtenidos = JSON.parse(localStorage.getItem('productos')); //creamos una variable para recuperarlo desde localStorage
console.log('recuperamos esto: ', productosObtenidos); //recuperamos y lo mostramos con este log