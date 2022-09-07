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
 let valorcarrito=[0];
 let cantidaddecomponentescomprados="";
 let numerorandom=Math.round(Math.random()*2000000);
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
             alert("Datos incorrectos");
             atenderalcomprador();
             }
         }
 function iniciarsesion(){
    let identifiquese = prompt("Ingrese nombre de usuario");
    let ingreseclavedevalidacion = prompt("Ingrese contraseña");
     if (identifiquese == "" && ingreseclavedevalidacion == "")
    alert ("Ingreso con exito");
 }
 function menu(){
     let producto=prompt("Seleccione los perifericos para armar su transformer \n 1-Placa de Video rtx 3090 \n 2-Mother Gigabyte B550M Aorus Pro AX AM4 \n 3-Gabinete Corsair iCUE 5000T RGB Black \n 4-.Volver")
         let precioperiferico=0;
         const preciortx=999999;
         const preciomother=38851;
         const preciogabinete=85100;
             switch(producto){
                 case"1":
                 function sumaralcarro(){
                     if(carrito >=3){
                     alert("carro lleno")
                     menu()
                 }else{
                  carrito++
                 valorcarrito+precioperiferico;
                 cantidaddecomponentescomprados=cantidaddecomponentescomprados+producto
                 alert(`Se añadio al carrito ${producto} ${precioperiferico}`)
                 return menu()
                }
             }
                 producto="Placa de Video rtx 3090,";
                 precioperiferico=preciortx;
                 sumaralcarro();
                 break;
                 case "2": 
                         producto="Mother Gigabyte B550M Aorus Pro AX AM,";
                         precioperiferico=preciomother;
                         sumaralcarro();
                         break;
                 case "3": 
                         producto="Gabinete Corsair iCUE 5000T RGB Black";
                         precioperiferico=preciogabinete;
                         sumaralcarro();
                         break;
                 case "4": 
                         mostrarMenu();
                         break;
 }}
 
 function totalgastado(ars){
    suma=0;
    for (let carrito = 0; carrito<ars.length; carrito ++){
        carrito.push(ars[i])
    }
    for (let valorcarrito = 0; a < valorcarrito.length; valorcarrito ++)
    suma = suma + carrito [valorcarrito];
}
    return suma;

    menu();
    alert("Bienvenido!!!");
    atenderalcomprador();
    totalgastado();
