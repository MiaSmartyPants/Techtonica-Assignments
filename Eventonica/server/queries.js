const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'eventonica_events',
  password: 'password',
  port: 5432,
})
const getEvents = (request, response) => {
  pool.query('SELECT * FROM events ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getEventsById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM events WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addEvent = (request, response) => {
  
  const { title, event_date} = request.body; //, event_date, description
  console.log(request.body)

  pool.query('INSERT INTO events (title, event_date) VALUES ($1, $2) RETURNING *', [title, event_date], (error, results) => {//, event_date, description//, event_date, description
    if (error) {
      throw error
    }
    // response.status(201).send(`Event added with ID: ${results.insertId}`)
    response.status(200).json(results.rows)
  })
}

const deleteEvent = (request, response) => {
  const id = (request.params.id)
  console.log(request.params.id)

  pool.query('DELETE FROM events WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    //response.send + request.query("Id")//.send(`User deleted with ID: ${id}`)
  })
}
module.exports = {
    getEvents,
    getEventsById,
    addEvent,
    deleteEvent,
}
