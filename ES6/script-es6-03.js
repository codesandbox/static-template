// Declare variables in different ways

const title = document.getElementsByClassName("title-of-learn");
const output = document.getElementById("output");
title[0].textContent = "declare variables in different ways";

// var - variable can accessible locally and it is changeable as well

let result =
  "var variableName = Var variable is the old way to declare a variable in javascript; var variable has the function scope, But global scope when it is declared outside the function./ let VariableName = Let variable introduce a special feature that does not allow re-declaration of variables, if you remember, re-declaration was a problem in var variable but let variable solve this problem./ const variableName = Const variable can't be updated or re-declared; this behavior of const variable helps us to write the error-free code.";
result = result.split("/");
for (let i = 0; i < result.length; i++) {
  result[i] = result[i] + "<br /><br />";
}

result = result.join("");
output.innerHTML = result;
