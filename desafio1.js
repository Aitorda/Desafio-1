/* // la idea es primero filtrar por la cantidad de noches a hospedarse en en donde se exige un minimo
 a partir de 3 noches para poder reservar, y una vez realizado el el primer filtro calcular el total 
 a pagar en funcion de la cantidad de noches a reservar, en caso, que se reserven 6 noches o mas 
 se aplica un descueto
 */

let nombre = prompt ("Ingrese su nombre y apellido");
    alert (`Mucho gusto ${nombre} `)

let noche = parseInt(prompt("Ingrese la cantidad de noches que quiere hospedarse"));
let precioPorNoche= 2000; 
let descuento = 500;

if (noche <=2){
    alert ("el minimo de noches a reservar es a partir de 3")
    noche =parseInt(prompt("Ingrese la cantidad de noches que quiere hospedarse"));
    
}else if ( 3<= noche <= 5){
    alert ("cantidad de noches ok, se procede a cotizar");
    function calculadora (noche, precioPorNoche){
        return noche *precioPorNoche
    }
    alert ("Reserva confirmada");
    
} else {
    alert ("accede a un descuento ya que alquila minimo 6 noches");

    function calculadora (noche, precioPorNoche){
        return (noche *precioPorNoche) - descuento
    }
    alert ("Reserva confirmada");
}

 


    
    







