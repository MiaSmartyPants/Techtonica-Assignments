//This function load your books from your backend into the FrontEnd. It must do another GEt request. 

async function loadBooks(){
    const URL = "http://localhost:4000/api/books";
    const response = await fetch(URL);
    const responseBooks = await response.json();
    renderBooks(responseBooks)
}

loadBooks();


async function postBook() {
    const URL = "http://localhost:4000/api/books";
    const data = {
        "image":"https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51dAqNJ1ylL._SX331_BO1,204,203,200_.jpg",
        "isbn": "7890234578901234523457890",
        "title": "Quantum Physics for Hippies",
        "author": "Dr. Lukas Neumeier",
        "description": "The book Quantum Physics for Hippies brings the clarity that many have longed for, by making the true magic of quantum physics accessible to everyone in an entertaining way, while charmingly clearing up the misconceptions circulating in spiritual circles."
    }
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    })
    const responseBooks = await response.json();
    renderBooks(responseBooks)
}

// RE-using the same render method which is what a REACT useSTate would have done for us
function renderBooks(responseBooks) {
    // clear??
    document.getElementById('books').innerHTML = ""
    for (let book of responseBooks){
        const tempCard = `<div class="col-4">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
                <div>Author: ${book.author}</div> 
                <div>Author: ${book.description}</div> 
                <div class="ratings"> Rating: ${book.rating} stars</div>
                <hr>
                <div>image 
                <object data=${book.image} width="300" height="200"></object>
  
                 
                </div>
            </div>
        </div>`
        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + tempCard;
    }
}