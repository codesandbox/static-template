let op = "";
let a,
	b = "";

let numberOne = "";
let operatorOne = "";
let numberTwo = "";

function osszeadas(a, b) {
	let sum = parseInt(a) + parseInt(b);
	console.log(`osszeg fv értéke: ${sum}`);
	return sum;
}

function kivonas(a, b) {
	return a - b;
}

function szorzas(a, b) {
	return a * b;
}

function osztas(a, b) {
	return a / b;
}

function operator(a, b, op) {
	if (op == "-") {
		console.log(kivonas(a, b));
	} else if (op == "+") {
		console.log(osszeadas(a, b));
	} else if (op == "*") {
		console.log(szorzas(a, b));
	} else if (op == "/") {
		console.log(osztas(a, b));
	}
}

function feltolt() {
	let feltoltCsoport = document.querySelectorAll(".gombcsoport > div > button");

	let numberResult = feltoltCsoport.forEach((button) => {
		button.addEventListener("click", () => {
			if (button.classList == "szamok") {
				if (operatorOne == "") {
					numberOne += button.textContent;
				} else {
					numberTwo += button.textContent;
				}
			}
			if (button.classList == "operator") {
				operatorOne = button.textContent;
			}
			document.querySelector(".kijelzo").textContent += button.textContent;
			if (button.classList == "clear") {
				document.querySelector(".kijelzo").textContent = "";
				numberOne = "";
				operatorOne = "";
				numberTwo = "";
			}
			if (button.classList.contains("equal")) {
				console.log(
					`If érétkei; NumberOne: ${numberOne}, NumberTwo: ${numberTwo}, OperatorOne: ${operatorOne}`
				);
				operator(numberOne, numberTwo, operatorOne);
			}
		});
	});
}

feltolt();
