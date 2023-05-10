var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Los Meses con 31 días
console.log("Meses con 31 días:");
for (var i = 0; i < meses.length; i++) {
  if (diasDelMes[i] === 31) {
    console.log(meses[i]);
  }
}

// Los Meses con 30 días
console.log("Meses con 30 días:");
for (var i = 0; i < meses.length; i++) {
  if (diasDelMes[i] === 30) {
    console.log(meses[i]);
  }
}

