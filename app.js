/**
 *  Carrito de compras - Cybertron
 *  Ignacio Gonzalez Sorribas (igonzalezsorribas@gmail.com)
 *  Octubre 2022
 */

//Aplicando eventos
let ingrese = document.querySelector("form");
const usuario = document.querySelector("#formnombre");
const clave = document.querySelector("#formcontraseña");
ingrese.addEventListener("submit", validaringreso);
function validaringreso(e) {
  e.preventDefault();
  console.log(`${usuario.value}${clave.value}`);
}
//Comienzo del catalogo
/*const inventario = document.querySelector("#seccion-elementos");*/


/* Definicion de clases */

/**
 *   Clase Producto, abstraccion diseñada para modelar un producto del carrito.
 *   Se encuentra compuesta por:
 *       nombre (str)
 *       precio (int)
 *       precio_formateado (str)
 *       img (str)
 *       disponible (bool)
 *       cantidad (int)
 */
class Producto {
  constructor(id, nombre, precio, img) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.precio_formateado = new Intl.NumberFormat("ar-AR", { style: "currency", currency: "ARS"}).format(this.precio)),
      (this.img = img),
      (this.disponible = true);
    this.cantidad = 1;
  }

  /* Genera un objecto producto a partir json */
  static generar_producto_desde_json(product_json) {
    return new Producto(product_json.id, product_json.nombre, product_json.precio, product_json.img);
  }
}

/* ------- definicion de variables  ------- */
function agregar_mercaderia(producto) {
  let content = document.createElement("div");
  content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio_formateado}</p>
  `;
 
  shoppingContenido.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  content.append(comprar);

  /*Dandole Funcionalidad al boton Comprar*/

  comprar.addEventListener("click", () => {
    actualizarLocalStorage()
    const repeticion = carrito.some(
      (repetirProducto) => repetirProducto.id === producto.id
    );
    if (repeticion) {
      carrito.map((prod) => {
        if (prod.id === producto.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push(producto);
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Su Producto se añadio con exito",
      showConfirmButton: true,
      timer: 2000,
    })
    console.log("carrito");
  });
}

fetch("/basededatos.json")
.then((resp)=>resp.json())
.then((data)=>{
  data.forEach((componente)=>{
    agregar_mercaderia(Producto.generar_producto_desde_json(componente))
  })
});

//Materializando el Array de Producto
const shoppingContenido = document.getElementById("shopping");

let carrito = JSON.parse(localStorage.getItem("carrito_static")) || [];

/*Crando el modal del carrito para ver lo comprado */

const verCarrito = document.getElementById("ver-carrito");
const changoCompras = document.getElementById("carrito-de-compras");

/*Funcion de Renderizado del Carrito */
const pintarCarrito = () => {
  changoCompras.innerHTML = "";
  changoCompras.style.display = "flex";
  const modalheader = document.createElement("div");
  modalheader.className = "modal-header";
  modalheader.innerHTML = `
    <h2 class="modal-header-titulo">Sus Compras</h2>

  `;
  actualizarLocalStorage();
  changoCompras.append(modalheader);

  const modalButon = document.createElement("buton");
  modalButon.className = "estilo-boton";
  modalButon.innerText = "X";

  modalButon.addEventListener("click", () => {
    changoCompras.style.display = "none";
  });

  modalheader.append(modalButon);

  carrito.forEach((productoSeleccionados) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "contenido-modal";
    carritoContent.innerHTML = `
    <h3>${productoSeleccionados.nombre}</h3>
    <p>${productoSeleccionados.precio_formateado}</p>
    <p>${productoSeleccionados.cantidad}</p>
  
  `;
    changoCompras.append(carritoContent);

    /*Creando boton para eliminar prodcutos del carrito */

    let eliminar = document.createElement("buton");
    eliminar.innerText = "❌";
    eliminar.className = "eliminar-producto";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
  });
  const total = carrito.reduce((acc, el) => acc + el.precio*el.cantidad, 0);
  const total_formateado = new Intl.NumberFormat("ar-AR", { style: "currency", currency: "ARS"}).format(total);
  const totalPagar = document.createElement("div");
  totalPagar.className = "contenido-total";
  totalPagar.innerHTML = `Total a abonar:${total_formateado}`;
  changoCompras.append(totalPagar);
};
verCarrito.addEventListener("click", pintarCarrito);

/*Funcion de eliminar productos del carrito */
const eliminarProducto = () => {
  const producto_index = carrito.findIndex((element) => element.id);
  /* producto.cantidad-- */
  /* if production cantidad == 0 */
  if(carrito[producto_index].cantidad == 1){
    carrito.splice(producto_index, 1);
  } else {
    carrito[producto_index].cantidad -= 1;
  }

   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Su Producto se elimino con exito",
    showConfirmButton: true,
    timer: 2000,
  })
  pintarCarrito();
};
//Json&Local
function actualizarLocalStorage() {
  localStorage.setItem("carrito_static", JSON.stringify(carrito));
}

