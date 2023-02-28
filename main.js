const form = document.getElementById('my-form');
const error_message = document.querySelector(".error-message");

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const number_a = document.getElementById("number-a");
	const number_b = document.getElementById("number-b");

	if (number_b.value > number_a.value) {
		alert("B>A!\n\n:)");
		number_a.value = '';
		number_b.value = '';
	}
})

form.addEventListener('keyup', (e) => {
	const number_a = document.getElementById("number-a");
	const number_b = document.getElementById("number-b");
	if (number_b.value > number_a.value) {
		error_message.style = '';
	}
	else {
		error_message.style.display = 'block';
	}
})