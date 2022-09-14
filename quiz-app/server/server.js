import express from "express";
import cors from "cors";
import request from 'request';
 


const app = express();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5050;


app.use(cors());
app.use(express.json());

let trivia ;
request('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean',
 (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  //trivia = body;
  const trivia = JSON.parse(body);
 console.log('trivia:', trivia); 
  
});
 
app.get('/miatrivia', (req, res) => {
 
  res.send(trivia)
})

// app.get('/miatrivia', (req, res) => {
//   // request needs to be called each time
//   request('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean', 
//  (error, response, body) => {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

//   // convert body to JSON - there are many different types of 
//   const json = JSON.parse(body);
//   console.log('json:', json); // Print the HTML for the Google homepage.

//   //I'm not sure what the `send` does - but this is how you return json
//   res.json(json)
// });
// })

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})