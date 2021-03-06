function calc() {
  var a = parseFloat(telo.a.value);
  var b = parseFloat(telo.b.value);
  var c = parseFloat(telo.c.value);
  var error, x1, x2, d;
  var result = "";

  error = a;
  d = b * b - 4 * a * c;

  if (error == 0) {
    error = "неправильный коэффициент";
    alert(error);
    breake;
  } else if (d < 0) {
    result = "Уравнение не имеет действительных корней";
    alert(result);
    breake;
  }

  if ((d = 0)) {
    result = "Уравнение имеет 1 корень";
  }
  if (d > 0) {
    result = "Уравнение имеет 2 корня";
  }

  alert(" Результат: ", result);
  x1 = (-b - Math.sqrt(d)) / (2 * a);
  x2 = (-b + Math.sqrt(d)) / (2 * a);
  alert("x1 = " + x1);
  alert("x2 = " + x2);
}
