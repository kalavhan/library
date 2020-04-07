const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary('Book 1', 'Denis', 800, 0);
addBookToLibrary('Book 2', 'Josue', 500, 0);

function render() {
  const container = document.querySelector('.items-container');
  container.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i = i + 1) {
    const obj = myLibrary[i];
    container.innerHTML
    +=`
      <div class='item card'> 
          <p class='title'><span>Title: </span>${obj.title}</p>
          <p class='pages'>${obj.pages}<span> Pages</span></p>
          <p class='author'><span>By: </span>${obj.author}</p>
          
          <div class='action-btns'>
            <button class='btn read-btn' onclick='updateReadStatus(${i})'>
            ${obj.read === 0 ? 'Not read' : 'Read'}
            </button>
            <button class='btn delete-btn' onclick='deleteBook(${i})'>Delete</button>
          </div>
      </div>
    `;
  }
}
const buttonNewBook = document.getElementById('btnNewBook');
buttonNewBook.addEventListener('click', () => {
  const form = document.querySelector('#form');
  form.style.display = 'block';
});

function addFormValues() {
  const form = document.getElementById('form');
  function handleForm(event) { event.preventDefault(); }
  form.addEventListener('submit', handleForm);
  const btnAddBook = document.getElementById('addBook');
  btnAddBook.addEventListener('click', () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const read = document.getElementById('read').checked ? 1 : 0;
    const pages = document.getElementById('pages');
    if (title.value === null || title.value === '' ) {
      window.alert('Title must not be empty!');
    } else if (author.value === null || author.value === '') {
      window.alert('Author must not be empty!');
    } else if (pages.value === null || pages.value === '') {
      window.alert('Pages must not be empty!');
    } else {
      addBookToLibrary(title.value, author.value, parseInt(pages.value, 10), read);
      title.value = '';
      author.value = '';
      pages.value = '';
      document.getElementById('read').checked = false;
      render();
      window.alert('Book added!');
    }
  });
}

function deleteBook(position) { // eslint-disable-line no-unused-vars
  myLibrary.splice(position, 1);
  render();
}

function updateReadStatus(position) { // eslint-disable-line no-unused-vars
  myLibrary[position].read === 0 ? myLibrary[position].read = 1 : myLibrary[position].read = 0;
  render();
}

render();
addFormValues();