alert ("Bienvenido");
//Funcion de iniscio de sesion del usuario antes de comenzar a navegar.
function iniciosesion(){
    let  usuario = prompt  ("Ingrese su nombre de usuario");
    let  contraseña = prompt  ("Ingrese su clave alfanumerica de 6 caracteres");
    if (usuario == "" && contraseña =="pcg456"){    
    } else { usuario != "" && contraseña !="pcg456"
        alert("Los datos ingresados son incorrectos")
    }
alert ("Inicio de sesion con exito");
 }
iniciosesion();
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
class producto{
    constructor(nombre,precio){
    this.nombre=nombre,
    this.precio=precio,
    this.disponible=true
}
}
const producto1= new producto("Tarjeta Grafica RTX 3080 Ti","$270.000")
const producto2= new producto("Tarjeta Grafica AMD Readon 580","$186.000")
const producto3= new producto("Memoria Corsair 2x8gb 3600Mhz","$23.125")
const producto4= new producto("Gabinete Corsair RGB","$50.000")
const producto5= new producto("Mother Gigabyte B550M","$38.000")
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

