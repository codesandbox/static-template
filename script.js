// 01- Crie um array que receba 5 itens e exiba no console.

// 02- Utilize um método para adicionar um nome ao inicio do array.

// 03- Utilize um método para remover o último nome do array.

// 04- Utilize um método para adicionar dois nomes ao fim do array.

// 05- Utilize um método para remover o primeiro nome do array.

// 06 Utilize um método para organizar em ordem crescente o seguinte array:
// // let numbers = [7,5,6,3,8,9,2,1,4]

// 07 Crie um objeto que receba ao menos três propriedades sobre você.

// 08 Adicione uma nova propriedade sem alterar seu objeto inicial.

// 09 Remova uma propriedade desse objeto.

// 10-Mostre no console todas as propriedades desse objeto.

// 11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 itens.

// 12- Mostre no console o nome de um amigo de cada lista.

let lista = ["carne", "arroz", "tomate", "feijão", "batata"];
console.log(lista[0]);

lista.unshift("churrasco");

lista.pop();
console.log(lista);

lista.push("refrigerante", "farofa");

console.log(lista);

lista.shift();

console.log(lista);

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
console.log(numbers.sort());
