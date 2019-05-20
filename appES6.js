// Book class
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

// UI class
class UI {

	addBookToList(book) {
		// Get table body
		const UItbody = document.querySelector('#book-list');
		let row = document.createElement('tr');
		row.innerHTML = `
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>
			<td><a href="#" class="delete">X</a></td>
		`;
		// Append new book
		UItbody.appendChild(row);
	}

	removeBook(target) {
		if(target.className === 'delete') {
			target.parentElement.parentElement.remove();
		}
	}

	showAlert(message, className) {
		// Create alert div
		const div = document.createElement('div');
		div.className = `alert ${className}`;
		div.appendChild(document.createTextNode(message));

		// Get UI for insertion
		const UIcontainer = document.querySelector('.container');
		const UIform = document.querySelector('#book-form');
		// Insert alert
		UIcontainer.insertBefore(div, UIform);

		// Remove alert after timeout
		setTimeout(() => {
			document.querySelector('.alert').remove();
		}, 2000);
	}

	clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}
}

// Event listener for add book
document.querySelector('#book-form').addEventListener('submit', e => {
	const title = document.querySelector('#title').value,
				author = document.querySelector('#author').value,
				isbn = document.querySelector('#isbn').value;

	// Instantiate book
	const book = new Book (title, author, isbn);
	// Instantiate UI
	const ui = new UI();

	// Validate
	if(title === '' || author === '' || isbn === '') {
		// Show fail alert
		ui.showAlert('Please fill in all fields', 'failure');
	} else {
		// Add book to list
		ui.addBookToList(book);
		// Show success alert
		ui.showAlert('Book added', 'success');
		// Clear fields
		ui.clearFields();
	}
	
	e.preventDefault();
});

// Event listener for remove book
document.getElementById('book-list').addEventListener('click', e => {
		// Instantiate UI
		const ui = new UI();
		// Remove book
		ui.removeBook(e.target);
		// Show remove alert
		ui.showAlert('Book removed', 'success');

	e.preventDefault();
});