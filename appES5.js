// Book constructor
function Book (title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
};

// UI constructor
function UI () {};

// Add book to list
UI.prototype.addBookToList = function(book) {
	// Get table body
	const UItbody = document.getElementById('book-list');
	let row = document.createElement('tr');
	row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete">X</a></td>
	`;
	// Append new book
	UItbody.appendChild(row);
};

UI.prototype.showAlert = function(message, className) {
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
	setTimeout(function(){
		document.querySelector('.alert').remove();
	}, 2000);
}

// Clear fields
UI.prototype.clearFields = function() {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
};

// Event listener
document.getElementById('book-form').addEventListener('submit', function(e) {
	const title = document.getElementById('title').value,
				author = document.getElementById('author').value,
				isbn = document.getElementById('isbn').value;

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