let num1 = document.getElementById("Num1");
let num2 = document.getElementById("Num2");
let num3 = document.getElementById("Num3");
let num4 = document.getElementById("Num4");
let num5 = document.getElementById("Num5");
let num6 = document.getElementById("Num6");
let num7 = document.getElementById("Num7");
let num8 = document.getElementById("Num8");
let num9 = document.getElementById("Num9");
let num0 = document.getElementById("Num0");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMultiplicacion = document.getElementById("btnMultiplicacion");
let btnAC = document.getElementById("btnAC");
let btnEliminar = document.getElementById("btnEliminar");
let btnPorcentaje = document.getElementById("btnPorcentaje");
let btnDivison = document.getElementById("btnDivison");
let btnDobleCero = document.getElementById("btnDobleCero");
let btnPunto = document.getElementById("btnPunto");
let btnIgual = document.getElementById("btnIgual");
//
let resultado = document.getElementById("resultado");
let guardarOperaciones, numero1, numero2;

num0.addEventListener("click", (ev) => {
  resultado.value = resultado.value + 0;
});

num1.addEventListener("click", (ev) => {
  resultado.value = resultado.value + 1;
});

num2.addEventListener("click", (ev) => {
  resultado.value = resultado.value + 2;
});

num3.addEventListener("click", (ev) => {
  resultado.value = resultado.value + 3;
});

num4.addEventListener("click", (ev) => {
  resultado.value = resultado.value + 4;
});

num5.addEventListener("click", (ev) => {
  resultado.value = resultado.value + 5;
});

num6.addEventListener("click", (ev) => {
  resultado.value = resultado.value + 6;
});

num7.addEventListener("click", (ev) => {
  resultado.value = resultado.value + 7;
});

num8.addEventListener("click", (ev) => {
  resultado.value = resultado.value + 8;
});

num9.addEventListener("click", (ev) => {
  resultado.value = resultado.value + 9;
});

// Operadores

function numerosOperacion(num) {
  if (numero1 == 0) {
    numero1 = num;
  } else {
    numero2 = num;
  }

  if ((numero1 != 0) & (numero2 != 0)) {
    alert("Calcular operacion anterior");
  }
}

btnSuma.addEventListener("click", (ev) => {
  numerosOperacion(resultado.value);
});

btnResta.addEventListener("click", (ev) => {
  numerosOperacion(resultado.value);
});

btnMultiplicacion.addEventListener("click", (ev) => {
  numerosOperacion(resultado.value);
});

btnDivison.addEventListener("click", (ev) => {
  numerosOperacion(resultado.value);
});

btnEliminar.addEventListener("click", (ev) => {
  numerosOperacion(resultado.value);
});

btnPorcentaje.addEventListener("click", (ev) => {
  numerosOperacion(resultado.value);
});

