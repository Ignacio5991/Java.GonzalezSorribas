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
let inicio = prompt ("Ingrese nombre de usuario")
function saludar (nombre , apellido){
    alert(`hola ${nombre} ${apellido}`)
}
saludar ("Ignacio", "Gonzalez")
let banca = prompt ("Desea Realizar una operacion")
let dinero = 5000;
let saldo = 60000;
function cajero (dinero, saldo, cajero){
    switch(cajero){
        case"+":
        return dinero + saldo;
        break
        case "-":
        return dinero - saldo;
        break    
    }
}
alert (cajero (60000,5000, "-"));