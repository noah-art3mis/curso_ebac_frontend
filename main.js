const button = document.getElementById('my-form');

button.addEventListener('submit', (e) => {
	e.preventDefault();
	let number_a = document.getElementById("number-a");
	let number_b = document.getElementById("number-b");
	if (number_b.value > number_a.value) {
		alert("B>A!\n\n:)");
		number_a.value = '';
		number_b.value = '';
	}
	else {
		alert("A>B\n\n:(");
	}
})