const button = document.getElementById('my-form');

button.addEventListener('submit', (e) => {
	e.preventDefault();
	let number_a = document.getElementById("number-a").value;
	let number_b = document.getElementById("number-b").value;
	if (number_b === number_a) {
		alert("A = B\n\n:|");
	}
	else if (number_b > number_a) {
		alert("B>A!\n\n:)");
	}
	else {
		alert("A>B\n\n:(");
	}
})