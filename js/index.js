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