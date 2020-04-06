let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(title, author, pages) {
  let tempObj = {}
  tempObj.title = title;
  tempObj.author = author;
  tempObj.pages = pages;
  tempObj.read = 0;
  myLibrary.push(tempObj);
}

addBookToLibrary("Book 1", "Denis", 800);
addBookToLibrary("Book 2", "Josue", 500);

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
                <p>${obj.read}</p>
                <p><input type="button" onclick="deleteBook(${i})"</p>
                
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

    let title = document.getElementById("title")
    let author = document.getElementById("author")
    const pages = document.getElementById("pages")
    const btnAddBook = document.getElementById("addBook")
    btnAddBook.addEventListener("click", () => {
        addBookToLibrary(title.value, author.value, parseInt(pages.value));
        title.value = ""
        author.value = ""
        pages.value = ""
        render(); 
        console.log(myLibrary)
    }) 
}

function deleteBook(position) {
  myLibrary.splice(position, 1);
  render();
}


render()
addFormValues()  