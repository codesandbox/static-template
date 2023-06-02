let numero1, numero2, resultado;

numero1 = parseInt(prompt("Ingrese un número"));
numero2 = Number(prompt("Ingrese otro número"));

resultado = numero1 > 0 && numero2 > 0;
alert("Ambos números son mayores que cero? -> " + resultado);

resultado = numero1 < 0 && numero2 < 0;
alert("Ambos números son menores que cero? -> " + resultado);
