import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import _books from './books.js';
import pretty from 'express-prettify';

let books = Array.from(_books)

const app = express();
const PORT = 4000;

// to let the server know what directory are we working on 
const __dirname = path.resolve();

// Configuring cors middleware
app.use(cors());

// Configuring express-prettify middleware for working with JSON
app.use(pretty({ query: 'pretty' }));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// to render static files from the client folder
app.use(express.static('client'));


// //creates an endpoint for the route `/api/books` that prints all the books 
app.get("/api/books", (req, res) => {
  console.log("requesting GET api/books")
  res.json(books);
});

// A new GET endpoint, that interprets part of the URL as a parameter 
app.get("/api/book/:isbn", (req, res) => {

    const isbn = req.params.isbn;
    console.log("GET", "BOOK", isbn)
    if (!!isbn && isbn.length > 0 ) {
      const matches = books.filter( (book) => {
        return book.isbn == isbn
      });
      res.json(matches[0]).status(200)
    } else {
      res.status(404).send()
    }
});

// Add a book to API
app.post("/api/books", (req, res) => {
    const body = req.body
    console.log(body)
    books.push(body)

    res.json(books).status(200)
});

app.get("/api/videos", (req, res) => {
  console.log("requesting GET api/videos")
  res.json({ "video_example": "beetlejuice"}).status(200)
});

//creates a route `/` that is the homepage
app.get('/', (req, res) =>{
  //testing that was working
  //res.send("Hello Techtonica, welcome to Cristina's Library");
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
  //this send the response to open the index.html in that directory
}); 



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));