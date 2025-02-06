function init () {
    localGet();
    renderBooks();
}

function renderBooks() {
    let selector = document.querySelector("article");
    selector.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        selector.innerHTML +=
        bookTemplate(books[i].name, books[i].price, books[i].likes, books[i].liked,
            books[i].author, books[i].publishedYear, books[i].genre, i);
    }

    localSave();
}

function likeIt(count, liked) {
    let temp = document.getElementById("inPut" + count).value;

    if (liked === true) {
        books[count].likes++;
        books[count].liked = false;
    } else {
        books[count].likes--;
        books[count].liked = true;
    }

    renderBooks();
    document.getElementById("inPut" + count).value = temp;
}

function renderComments(count) {
let comments = "";

for (let i = 0; i < books[count].comments.length; i++) {
   comments += books[count].comments[i].name + ": " + books[count].comments[i].comment + "<br><br>";
}

return comments;
}

function addComment(count) {
    let input = document.getElementById("inPut" + count);

    if (input.value !== "") {
        books[count].comments.push({name: "DanieTr", comment: input.value});
        renderBooks();
    }
}

function localSave(){
    localStorage.setItem("books", JSON.stringify(books));
}

function localGet(){
    books = JSON.parse(localStorage.getItem("books"));
}