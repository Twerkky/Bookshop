let currentCategory = 'all';
let currentPage = 1;
const booksPerPage = 15;
let totalBooks = 0;

function filterBooks(category) {
    currentCategory = category;
    currentPage = 1;
    displayBooks();
}

function changePage(step) {
    const numberOfPages = Math.ceil(totalBooks / booksPerPage);
    currentPage += step;
    currentPage = Math.max(1, Math.min(currentPage, numberOfPages));
    displayBooks();
}

function displayBooks() {
    const books = document.querySelectorAll('.book-item');
    let filteredBooks = Array.from(books).filter(book => currentCategory === 'all' || book.dataset.category === currentCategory);
    totalBooks = filteredBooks.length;

    books.forEach(book => book.style.display = 'none'); // Hide all books

    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    filteredBooks.slice(startIndex, endIndex).forEach(book => book.style.display = 'block');

    // Update button visibility
    document.getElementById('prevButton').disabled = currentPage === 1;
    document.getElementById('nextButton').disabled = currentPage * booksPerPage >= totalBooks;
}

document.addEventListener('DOMContentLoaded', function() {
    filterBooks('all'); // Initialize the display with all books
});

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');

    navToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
