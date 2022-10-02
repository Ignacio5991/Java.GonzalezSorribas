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
class Producto {
  constructor(id, nombre, precio, img, cantidad) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.img = img),
      (this.disponible = true);
    this.cantidad = cantidad;
  }
}
const mercaderia = [
  new Producto("1", "Tarjeta Grafica RTX 3080 Ti", "$270.000"),
  new Producto("2", "Tarjeta Grafica AMD Readon 580", "$186.000"),
  new Producto("3", "Memoria Corsair 2x8gb 3600Mhz", "$23.125"),
  new Producto("4", "Gabinete Corsair RGB", "$50.000"),
  new Producto("5", "Mother Gigabyte B550M", "$38.000"),
  new Producto("6", "Apex 100", "$4500", "imagenes/apex100.jpg"),
  new Producto("7", "Apex 750", "$7800", "/imagenes/apex750.jpg"),
  new Producto("8", "Corsair 68", "$15000", "imagenes/corsair68.jpg"),
  new Producto("9", "Red Dragon Kumara", "$10000", "imagenes/redragonkumara"),
  new Producto("10", "Cool Master 750W", "$16000"),
  new Producto("11", "Cool Master 800W", "$20000"),
  new Producto("12", "Red Dragon 850w", "$18000"),
  new Producto("13", "Gygabite 550W", "$7500"),
];
document.addEventListener("click", (evento) => {
  if (evento.target.matches("button")) {
    agregarCarrito(evento);
  }
});
//Creando listado
const perifericos = document.getElementById("seccion-elementos");
const template = document.getElementById("temp");
mercaderia.forEach((componentesElectronicos) => {
  const copia = template.content.cloneNode(true);
  copia.querySelector("h3").textContent = componentesElectronicos.nombre;
  copia.querySelector("img").setAttribute =
    ("src", componentesElectronicos.img);
  copia.querySelector(".billete").textContent = componentesElectronicos.precio;
  copia.querySelector("button").dataset.id = componentesElectronicos.id;
  perifericos.appendChild(copia);
});
//Ver carrito lleno
let carrito = JSON.parse(localStorage.getItem("Carrito")) || [];
const almacen = document.getElementById("chango");
const templater = document.getElementById("temps");
function changolleno() {
  carrito.forEach((compus) => {
    almacen.innerHTML = "";
    const replica = templater.content.cloneNode(true);
    replica.querySelector("h3").textContent = compus.nombre;
    replica.querySelector(".billete").textContent = compus.precio;
    replica.querySelector("span").textContent = compus.cantidad;
    almacen.appendChild(replica);
  });
}
function agregarCarrito(producto) {
  const compra = producto.target.dataset.id;
  const existeid = carrito.findIndex((compre) => compre.id === compra);
  const existecomponentesElectronicos = mercaderia.find(
    (pague) => pague.id === compra
  );
  console.log("hola", existeid);
  console.log("chau", existecomponentesElectronicos);
  if (existeid === -1) {
    carrito.push(
      new Producto(
        existecomponentesElectronicos.id,
        (existecomponentesElectronicos.cantidad = 1)
      )
    );
    actualizarLocalStorage();
  } else {
    carrito[existeid].cantidad++;
    actualizarLocalStorage();
  }
  console.log(carrito);
  changolleno();
}
//Crando Alert que confirme que el producto se añadio.
const botondecompra = document.querySelector("#id-compra");
botondecompra.addEventListener("click", () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Tu Producto se añadido con exito",
    showConfirmButton: false,
    timer: 1500,
  });
});
//Eliminar productos del carrito
function eliminarPeriferico(quitar) {
  const noLoQuiero = this.id.indexOF(quitar);
  this.cantidad[noLoQuiero] -= 1;
  actualizarLocalStorage();
}
document.addEventListener("click", (quitarproducto) => {
  if (quitarproducto.target.matches("eliminarProducto")) {
    eliminarPeriferico(quitarproducto);
  }
});

//Crando el codigo para el precio final del carrito

//Json&Local
function actualizarLocalStorage() {
  localStorage.setItem("Carrito", JSON.stringify(carrito));
}
