// A- CONTROL REMOTO
// Como sabemos, Dipli funciona a batería, la cual, si está cargada al 100%, posee 30 unidades de energía. Pero lo que no sabías es que, por suerte, tiene un modo Control Remoto.
// Cada movimiento consume una cantidad determinada de niveles de energía. Esta es la tabla de consumo:

// COMANDO	ACCIÓN	CONSUMO EN UNIDADES
// #1	Saltito	5 unidades
// #2	Patada Ninja	7 unidades
// #3	Pasito de Baile	4 unidades
// #4	Hacerse el muertito	6 unidades
// #5	Autodestrucción nuclear	30 unidades. Tu misión consiste en desarrollar un módulo llamado actualizarEnergia(energiaActual, codigoComando) que retorna la cantidad de unidades de energía
// restante. Por ejemplo, si invocamos a actualizarEnergia(30, 5) nos retorna 0, porque el comando #5 consume 30 unidades de energía y se restan a la cantidad actual que ingresó como parámetro
// (30 unidades actuales - 30 unidades que consume el comando #5).

function mensajeCodigo() {
  let mensaje = `Cada moviemiento consume energía de dipli.
Te dejamos la lista de consumos:

COMANDO	ACCIÓN	CONSUMO EN UNIDADES
#1	Saltito	5 unidades
#2	Patada Ninja	7 unidades
#3	Pasito de Baile	4 unidades
#4	Hacerse el muertito	6 unidades
#5	Autodestrucción nuclear	30 unidades
`;
  alert(mensaje);
}

mensajeCodigo();

let energiaDipli = 30;
