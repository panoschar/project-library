


let myLibrary = [
    { book: "harry potter" },
    { book: "spider man" }
];

function Book(title, author, pages,) {
    this.title = title,
        this.author = author,
        this.pages = pages
    this.info = function () {
        return this.title + " " + "by" + " " + this.author + "," + " " + this.pages + " " + "pages";
    }
};



function addBookToLibrary() {
    let titleInput = document.querySelector(".title").value
    let authorInput = document.querySelector(".author").value
    let pagesInput = document.querySelector(".pages").value

    let book1 = new Book("titleInput", "authorInput", "pagesInput");
    myLibrary.push(book1);
};

function render() {
    for (var i = 0; i < myLibrary.length; i++) {
        document.getElementsByTagName("input") .innerHTML += "<table>" + myLibrary[i].book + "</table>";
    };

};








