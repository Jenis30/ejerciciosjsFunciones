// ejercicio1

function saludar(nombre) {
    console.log(nombre)
}
saludar("jennys");


// ejercicio2
function multiplicar(x, y) {
    console.log(x * y)
}
multiplicar(4, 5);


// ejercicio3
function areatriangulo(b, a) {
    console.log(b * a / 2)
}
areatriangulo(8, 5);


// ejercicio4
function calcularPrecio(precio, cantidadProducto) {
    let total = cantidadProducto * precio
    if (cantidadProducto >= 10 && cantidadProducto < 20) {
        let descuento10 = total * 0.1
        total -= descuento10
    }
    if (cantidadProducto >= 20) {
        let descuento20 = total * 0.2
        total -= descuento20
    }
    return total
}
console.log(calcularPrecio(1000, 20))


// ejercici5
function esMayorDeEdad(edad) {
    return edad >= 18 ? "es mayor de edad" : "es menor de edad"

}
console.log(esMayorDeEdad(23))



// ejercicio6
function calcularImpuesto(ingreso) {
    let impuesto
    if (ingreso <= 10000) {
        impuesto = ingreso * 0.10
    } else {
        if (ingreso <= 20000) {
            impuesto = ingreso * 0.15
        } else {
            if (ingreso > 20000) {
                impuesto = ingreso * 0.20
            }
        }
    }
    return impuesto
}
console.log(calcularImpuesto(15000))



// ejercicio7
function verificarDia(dia){
   let mensaje 
   switch (dia) {
    case 1:
        mensaje = "es un dia de semana"
        break;
    case 2:
        mensaje = "es un dia de semana"
        break;
    case 3: 
    mensaje = "es un dia de semana"
    break;
    case 4:
        mensaje = "es un dia de semana"
        break;
    case 5:   
        mensaje = "es un dia de semana"
        break;
     case 6:
        mensaje = "es fin de semana"
        break;
        case 7:
        mensaje = "es fin de semana"
        break;
    default:
        mensaje = "numero invalido"
        break;
   }
   return mensaje
}
console.log(verificarDia(2))