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

	// Add book to list
	ui.addBookToList(book);
	// Clear fields
	ui.clearFields();

	e.preventDefault();
});