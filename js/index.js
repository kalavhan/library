let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push( new Book(title, author, pages, read));
}

addBookToLibrary("Book 1", "Denis", 800, 0);
addBookToLibrary("Book 2", "Josue", 500, 0);

function render(){
    let container = document.querySelector(".items-container");
    let count = 0;
    container.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {
        let obj = myLibrary[i];
        console.log(obj);
        container.innerHTML += 
        `
            <div class="item"> 
                <p>${obj.title}</p>
                <p>${obj.author}</p>
                <p>${obj.pages}</p>
                <p><button onclick="updateReadStatus(${i})">
                ${obj.read == 0 ? 'Not read' : 'Read' }
                </button></p>
                <p><button onclick="deleteBook(${i})">Delete</button></p>
            </div>
        `
    }
    
}

let buttonNewBook = document.getElementById("btnNewBook")
buttonNewBook.addEventListener("click", () => {
    let form = document.querySelector("#form");
    form.style["display"] = "block";  
})

function addFormValues(){

  let form = document.getElementById("form")
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);
  const btnAddBook = document.getElementById("addBook")
  btnAddBook.addEventListener("click", () => {
    let title = document.getElementById("title")
    let author = document.getElementById("author")
    let read = document.getElementById("read").checked ? 1 : 0;
    console.log(read)
    const pages = document.getElementById("pages")
    addBookToLibrary(title.value, author.value, parseInt(pages.value), read);
    title.value = ""
    author.value = ""
    pages.value = ""
    document.getElementById("read").checked = false
    render(); 
    console.log(myLibrary)
  }) 
}

function deleteBook(position) {
  myLibrary.splice(position, 1);
  render();
}

function updateReadStatus(position) {
  myLibrary[position].read == 0 ? myLibrary[position].read = 1 : myLibrary[position].read = 0;
  render();
  console.log("here")
}

render()
addFormValues()  