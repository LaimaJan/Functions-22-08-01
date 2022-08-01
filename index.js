let sum = document.querySelector(".sum-btn");
let sub = document.querySelector(".sub-btn");
let div = document.querySelector(".div-btn");
let mul = document.querySelector(".mul-btn");
let mod = document.querySelector(".mod-btn");
const output = document.getElementById("output");
const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");

// let inputValue1 = firstInput.value;
// let inputValue2 = secondInput.value;

sum.addEventListener("click", function (inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	ourSum = parseInt(inputValue1) + parseInt(inputValue2);
	console.log(ourSum);
	output.innerText = "";

	output.innerText += ourSum;
});

sub.addEventListener("click", function (inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	ourSum = parseInt(inputValue1) - parseInt(inputValue2);

	output.innerText = "";

	output.innerText += ourSum;
});

div.addEventListener("click", function (inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	ourSum = parseInt(inputValue1) / parseInt(inputValue2);

	output.innerText = "";

	output.innerText += ourSum;
});

mul.addEventListener("click", function (inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	ourSum = parseInt(inputValue1) * parseInt(inputValue2);

	output.innerText = "";

	output.innerText += ourSum;
});

mod.addEventListener("click", function (inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	ourSum = parseInt(inputValue1) % parseInt(inputValue2);

	output.innerText = "";

	output.innerText += ourSum;
});
