const form = document.getElementById('form');
const date = document.getElementById('date');
const title = document.getElementById('title');

console.log(date);

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const dateValue = date.value.trim();
	const titleValue = title.value.trim();

	if(dateValue === '') {
		setErrorFor(date, 'Date cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(titleValue === '') {
		setErrorFor(title, 'Title cannot be blank');
	} else {
		setSuccessFor(title);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}