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
const inventario = document.querySelector("#seccion-elementos");
fetch("/basededatos.json")
.then((resp)=>resp.json())
.then((data)=>{
  data.forEach((componentes)=>{
    const li = document.createElement ("Productos")
    li.innerHTML=`
              <h5>${componentes.id}</h5>
              <h4>${componentes.nombre}</h4>
              <img src"${componentes.img}">
              <p>${componentes.precio}</p>
              <button>${componentes.button}</button>
    `
    inventario.append(li)
  })
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
  copia.querySelector("button").addEventListener("click",()=>{
    console.log(componentesElectronicos)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Su Producto se añadio con exito",
      showConfirmButton: true,
      timer: 2000,
    })
    
  })
  perifericos.appendChild(copia);


});



//Ver carrito lleno
let carrito = JSON.parse(localStorage.getItem("Carrito")) || [];
const almacen = document.getElementById("chango");
const templater = document.getElementById("temps");
function changoLleno() {
  carrito.forEach((compus) => {
    almacen.innerHTML = "";
    const replica = templater.content.cloneNode(true);
    replica.querySelector("h3").textContent = compus.nombre;
    replica.querySelector(".billete").textContent = compus.precio;
    replica.querySelector("span").textContent = compus.cantidad;
    almacen.appendChild(replica);
    actualizarLocalStorage();
  });
}



//Json&Local
function actualizarLocalStorage() {
  localStorage.setItem("Carrito", JSON.stringify(carrito));
}

