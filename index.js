let btn = document.querySelector(".calculator-buttons");
const output = document.getElementById("output");
const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");
const clearBtn = document.getElementsByClassName("clear-btn")[0];

btn.addEventListener("click", function (event, inputValue1, inputValue2) {
	inputValue1 = firstInput.value;
	inputValue2 = secondInput.value;
	console.log(event);
	action = event.target.id;
	console.log(action);

	ourResult = calculate(action, inputValue1, inputValue2);

	output.innerText = ourResult;
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
		case "clear":
			firstInput.value = "";
			secondInput.value = "";
			output.value = "";
			break;
	}

	return result;
}
