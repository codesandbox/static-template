// 3CPO recibió una actualización y está realizando un estudio a los clones de su estado físico. Se desea
// contar con una función que reciba como parametro la altura y el peso de una clon y retorne el IMC

function calculoImc() {
  let altura = Number(prompt("Ingrese la altura en cm del clon: "));
  //se convierte cm a mtrs
  altura = altura / 100;
  let peso = Number(prompt("Ingrese el peso del clon: "));
  //let imc = peso / (altura**2);
  return peso / altura ** 2;
  //return imc;
}

//calculoImc()

alert("El IMC del clon es del: " + Math.round(calculoImc(), 2));
