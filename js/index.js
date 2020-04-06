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
    let buttonNewBook = document.getElementById("btnNewBook")
    buttonNewBook.addEventListener("click", () => {
        let form = document.querySelector("#form");
        form.style["display"] = "block";  
          
    })
    let container = document.querySelector(".items-container")
    myLibrary.forEach(obj => {
        console.log(obj)
        container.innerHTML += 
        `
            <div class="item"> 
                <p>${obj.title}</p>
                <p>${obj.author}</p>
                <p>${obj.pages}</p>
                <p>${obj.read}</p>
                
            </div>
        `
    });
    
}

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
        console.log(myLibrary)
    })  
}


render()
addFormValues()  