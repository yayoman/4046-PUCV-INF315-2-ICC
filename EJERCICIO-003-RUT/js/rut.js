function generaDV(cadena) {

  var digitos = cadena.split("");
  var serie = []; //La inicializo vacía pues depende del largo de "digitos"

  switch (digitos.length) {
    case 6:
      serie = [7,6,5,4,3,2];
      break;
    case 7:
      serie = [2,7,6,5,4,3,2];
      break;
    case 8:
      serie = [3,2,7,6,5,4,3,2];
      break;
    case 9:
      serie = [4,3,2,7,6,5,4,3,2];
      break;
    default:
      return "HA OCURRIDO UN ERROR, EL LARGO DEL RUT DEBE SER ENTRE 6 Y 9.";
      break;
  }

  var suma = 0;
  //Itero:
  for (var i = 0; i < digitos.length; i++) {
    suma = suma + digitos[i] * serie[i];
  }

  var parteEntera = parseInt(suma / 11);
  var resto = suma - (11 *  parteEntera);
  var dv = 11 - resto;

  switch (dv) {
    case 11: dv = 0;
      break;
    case 10: dv = "k";
      break;
  }

  return dv;

}
