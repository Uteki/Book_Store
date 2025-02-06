function bookTemplate(title, price, likeCount, liked, author, publishedYear, genre, count) {
        return `<div>
        <h1>${title}</h1>
        <img src="../img/book-store.png" alt="the store of books">
        <h2>${price} €</h2>
        <span>${likeCount}</span><button class="likey${count}" onclick="likeIt(${count}, ${liked})">liken</button>
        <h3>Author</h3><span>${author}</span>
        <h3>Erscheinungsjahr</h3><span>${publishedYear}</span>
        <h3>Genre</h3><span>${genre}</span>
        <h2>Kommentare:</h2>
        <output>` + renderComments(count) + `</output>
        <input id="inPut${count}" type="text" placeholder="Kommentar eingeben"><button onclick="addComment(${count})">senden</button>
        </div>`;
}