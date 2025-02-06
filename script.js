function renderBooks() {
    let selector = document.querySelector("article");
    selector.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        selector.innerHTML +=
        bookTemplate(books[i].name, books[i].price, books[i].likes, books[i].liked,
            books[i].author, books[i].publishedYear, books[i].genre, i);
    }
}

// TODO - more? make template better

function likeIt(count, liked) {
    if (liked === true) {
        books[count].likes++;
        books[count].liked = false;

    } else {
        books[count].likes--;
        books[count].liked = true;
    }

    renderBooks()
}

// TODO - ... add comments function

function renderComments(count) {
let comments = "";

for (let i = 0; i < books[count].comments.length; i++) {
   comments += books[count].comments[i].name + ": " + books[count].comments[i].comment + "<br><br>";
}

return comments;
}

// TODO - ... local storage saving?