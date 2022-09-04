//simulador primer entrega//
// function saludar (nombre , apellido) {
//     alert(`hola ${nombre} ${apellido}` )
// }
// saludar ("Ignacio", "Gonzalez")
// let cajero = prompt ("Desea realizar una operacion")
// let dinero 
// if (cajero == "si") {
//    prompt  ("Ingrese el monto a depositar")
// } else (dinero == "") 
// for (let dinero = 4000; dinero < 60000; dinero++) {
//     if (dinero === "");
//     break
// }
// alert (`El dinero actual es ${64000}`)
// let inicio = prompt ("Ingrese nombre de usuario")
// function saludar (nombre , apellido){
//     alert(`hola ${nombre} ${apellido}`)
// }
// saludar ("Ignacio", "Gonzalez")
// let banca = prompt ("Desea Realizar una operacion")
// let dinero = 5000;
// let saldo = 60000;
// function cajero (dinero, saldo, cajero){
//     switch(cajero){
//         case"+":
//         return dinero + saldo;
//         break
//         case "-":
//         return dinero - saldo;
//         break    
//     }
// }
// alert (cajero (60000,5000, "-"));
let identifiquese;
let ingreseclavedevalidacion;
let carrito=0;
let valorcarrito=0;
let cantidaddecomponentescomprados="";
let numerorandom=Math.round(Math.random()=10000000);
let letrarandom=Math.random().toString(24).replace(/[^a-z]+/g,"");
let idaleatorio=(letrarandom.toUpperCase())+numerorandom;
function atenderalcomprador(){
            let mostrarcatalogo = prompt("Quieres ver el catalogo? Responde si o no");
            if (mostrarcatalogo == "si" || mostrarcatalogo=="no"){
                if (mostrarcatalogo == "si"){
                alert("Antes debes iniciar sesion");
                iniciarsesion();
                mostrarmenu();
                }
                else{
                alert("no inicio sesion");
                }
            }
            else{
            alert("Datos incorrector");
            atenderalcomprador();
            }
        }
alert("Bienvenido!!!");
atenderalcomprador();

