class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const button = document.getElementById("btn").value;


let myLibrary = [];


let book1 = new Book(title, author, pages);

myLibrary.push(book1)

let book2 = new Book(title, author, pages);

myLibrary.push(book2)

function render() {
    for (var i = 0; i < myLibrary.length; i++) {
        document.getElementsByTagName("input").innerHTML += "<table>" + myLibrary[i].book + "</table>";
    };

};

button.addEventListener("click", function addBookToLibrary() {
    if (title.value == "" &&
        author.value == "" &&
        pages.value == "") {
        alert("Enter input");
    } else {
        const bookListRow = document.createElement("tr")

        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value;
        bookListRow.appendChild(newTitle);

        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = Author.value;
        bookListRow.appendChild(newAuthor);

        const newPages = document.createElement("th");
        newPages.innerHTML = pages.value;
        bookListRow.appendChild(newPages);
    }
});
