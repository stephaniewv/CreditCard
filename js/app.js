 var isValidCard = function(cardNumber) {
  if (cardNumber === undefined) {
    alert("Invalid card number");
    return false;
  }

  if (containletters(cardNumber)) {
  alert("No puede contener letras");
  return false;
}

  if (typeof cardNumber === 'string') {
    if (cardNumber.length === 0) {
      alert("No puede ingresar un dato vacio");
      return false;
    }
  }
  // transformar numero a String
  var cardNumberStr = cardNumber + "";
  var digits = [];

  // pasar los numeros a un array en orden inverso
  for (var i = cardNumberStr.length - 1; i >= 0 ; i--) {
      digits.push(cardNumberStr.charAt(i));
  }

  // sumar los valores pares del array
  for (var j = 1; j < digits.length; j+=2) {
      // multiplicar *2 los pares
      digits[j] = digits[j] * 2;
      // en caso se mayor a 10 sumar los digitos
      if (digits[j] >= 10) {
          digits[j] -= 9;
      }
  }

  var sumaTotal = 0;
  // sumar los digitos y nuevos digitos
  for (var k = 0; k < digits.length; k++) {
    // transformar a entero para poder sumar
    sumaTotal += parseInt(digits[k]);
  }

  return (sumaTotal % 10 === 0);
}


//Creando una función para verificar si hay letras en mi string
var letters="abcdefghyjklmnñopqrstuvwxyz";

var containletters = function (text){
   text = text.toLowerCase();
   for(i=0; i<text.length; i++){
      if (text.charAt(i) >= 'a' && text.charAt(i) <='z') {
         return true;
      }
   }
   return false;
}


var card = prompt("Ingrese su numero de tarjeta");
document.write(isValidCard(card));
//console.log(isValidCard(4083952015263));
