let sum = document.querySelector(".sum-btn");
let sub = document.querySelector(".sub-btn");
let div = document.querySelector(".div-btn");
let mul = document.querySelector(".mul-btn");
let mod = document.querySelector(".mod-btn");
const output = document.getElementById("output");
const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");
const clearBtn = document.getElementsByClassName("clear-btn")[0];

// let inputValue1 = firstInput.value;
// let inputValue2 = secondInput.value;

sum.addEventListener("click", function (inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	ourSum = calculate("sum", inputValue1, inputValue2);
	console.log(ourSum);
	output.innerText = "";

	output.innerText += ourSum;
});

sub.addEventListener("click", function (inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	ourSub = calculate("sub", inputValue1, inputValue2);

	output.innerText = "";

	output.innerText += ourSub;
});

div.addEventListener("click", function (inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	ourDiv = calculate("div", inputValue1, inputValue2);

	output.innerText = "";

	output.innerText += ourDiv;
});

mul.addEventListener("click", function (inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	ourMul = calculate("mul", inputValue1, inputValue2);

	output.innerText = "";

	output.innerText += ourMul;
});

mod.addEventListener("click", function (inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	ourMod = calculate("mod", inputValue1, inputValue2);

	output.innerText = "";

	output.innerText += ourMod;
});

function calculate(action, value1, value2) {
	value1 = parseInt(value1);
	value2 = parseInt(value2);
	let result = 0;
	switch (action) {
		case "sum":
			result = value1 + value2;
			break;
		case "sub":
			result = value1 - value2;
			break;
		case "div":
			result = value1 / value2;
			break;
		case "mul":
			result = value1 * value2;
			break;
		case "mod":
			result = value1 % value2;
			break;
	}

	return result;
}

clearBtn.addEventListener("click", () => {
	firstInput.value = "";
	secondInput.value = "";
});
