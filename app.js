alert ("Bienvenido");
//Aplicando eventos 
let ingreso = document.querySelector("form")
const usuario = document.querySelector("#formnombre")
const clave = document.querySelector("#formcontraseña")
ingreso.addEventListener("submit", validaringreso)
function validaringreso (e){
    e.preventDefault()
    console.log(`${usuario.value}${clave.value}`)
}
//Funcion de iniscio de sesion del usuario antes de comenzar a navegar.
//Aqui esta la funcion de interaccion del usuario para navegar o buscar.
function navegacion(){
    let interaccion = prompt ("Desea ver el catalogo? o ya sabe lo que busca?")
    if (interaccion == "si") {
        alert ("Este es nuestro catalogo")
    } else { 
        alert ("Que estas buscando?");      
    }
}
navegacion();
//Comienzo del catalogo
class Producto{
    constructor(nombre,precio){
    this.nombre=nombre,
    this.precio=precio,
    this.disponible=true
}
}
const producto1= new Producto("Tarjeta Grafica RTX 3080 Ti","$270.000")
const producto2= new Producto("Tarjeta Grafica AMD Readon 580","$186.000")
const producto3= new Producto("Memoria Corsair 2x8gb 3600Mhz","$23.125")
const producto4= new Producto("Gabinete Corsair RGB","$50.000")
const producto5= new Producto("Mother Gigabyte B550M","$38.000")
const producto6= new Producto("Apex 100","$4500",)
const producto7= new Producto("Apex 750","$7800",)
const producto8= new Producto("Corsair 68","$15000",)
const producto9= new Producto("Red Dragon Kumara","$10000")
const producto10= new Producto("Cool Master 750W","$16000")
const producto11= new Producto("Cool Master 800W","$20000")
const producto12= new Producto("Red Dragon 850w","$18000")
const producto13= new Producto("Gygabite 550W","$7500")
let perifericos =[]
function compras(){
    let changuito = Number(prompt ("Seleccione sus productos \n 1-Tarjeta Grafica RTX 3080 \n 2-Tarjeta Grafica AMD Readon 580 \n 3-Memoria Corsair 2x8g \n 4-Gabinete Corsair \n 5-Placa Madre Gigabye  \n 6- Finalizar Compra"))
    switch(changuito){
        case 1:
            perifericos.push(producto1)
            compras()
        break;
        case 2:
            perifericos.push(producto2)
            compras()
        break;
        case 3:
            perifericos.push(producto3)
            compras()
        break;
        case 4:
            perifericos.push(producto4)
            compras()
        break;
        case 5:
            perifericos.push(producto5)
            compras()
        break;
        case 6:
            break;
    }   
    let factura = ""
    perifericos.forEach( producto => factura +=`Tu producto es ${producto.nombre} y el precio es ${producto.precio}\n`)
    alert(factura)
}
compras();
alert("Gracias por su compra")
//DOM
const aliados = document.querySelector("h3").textContent= "Confian en Nosotros";
console.log(aliados);
let teclado = [];
teclado.push(new Producto("Apex 100",4500,"Teclado mecanico",))
teclado.push(new Producto("Apex 750",7800,))
teclado.push(new Producto("Corsair 68",15000,"El mejor compañero del gaming"))
teclado.push(new Producto("Red Dragon Kumara",10000,"Nunca te abandona"))
let teclados = document.getElementById("seccionteclados")
let temp = document.querySelector("template")
let card = temp.content.querySelector("div")
teclado.forEach((producto)=>{
    let cardCopiada = card.cloneNode(true)
    teclados.appendChild(cardCopiada)
    cardCopiada.children[0].innerText = producto.nombre
    cardCopiada.children[1].innerText = producto.precio
    cardCopiada.children[2].innerText = producto.detalle
})
//Crando cards para otra seccion de la pagina
let combos = [];
combos.push(new Producto("Ryzen 5 4600",30000))
combos.push(new Producto("Ryzen 7 5700",60000))
combos.push(new Producto("Ryzen 9 5900",100000))
combos.push(new Producto("Mother Gigabyte A320M-H AM4",12000))
combos.push(new Producto("Mother Gigabyte B450M-DS3H WIFI AM4",22600))
combos.push(new Producto("Mother Gigabyte B450M-DS3H WIFI AM4",41000))
let combo = document.getElementById("combos")
let temps = document.querySelector("template")
let card1 = temps.content.querySelector("div")
combos.forEach((producto)=>{
    let cardcOpiada = card.cloneNode(true)
    combo.appendChild(cardcOpiada)
    cardcOpiada.children[0].innerText=producto.nombre
    cardcOpiada.children[1].innerText=producto.precio
})
let fuentes = [];
fuentes.push(new Producto("Cool Master 750W",16000))
fuentes.push(new Producto("Cool Master 800W",20000))
fuentes.push(new Producto("Red Dragon 850W",18000))
fuentes.push(new Producto("Gigabyte 550W",7500))
let fuente = document.getElementById("alimentacion")
let temps1 = document.querySelector("template")
let card2  = temps1.content.querySelector("div")
fuentes.forEach((producto)=>{
    let cardcoPiada = card.cloneNode(true)
    fuente.appendChild(cardcoPiada)
    cardcoPiada.children[0].innerText=producto.nombre
    cardcoPiada.children[1].innerText=producto.precio
})
//Creando Carrito

