
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5050;


app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
    console.log("server");
     res.send("this will be data")
   })

//    app.get('/events', (req, res) => {
//     console.log(db.getEvents);
//      res.send(db.getEvents)
//    })
//    app.get('/events/:id', (req, res) => {
//     console.log(db.getEventsById);
//      res.send(db.getEventsById)
//    })

app.get('/events', db.getEvents)
app.get('/events/:id', db.getEventsById)
app.post('/events', db.addEvent)
app.delete('/events/:id',db.deleteEvent)




app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })