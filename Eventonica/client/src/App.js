import {useState, useEffect} from 'react';
import "./App.css";
import react from "react";
import RenderEvent from './components/RenderEvent'

function App() {
let n = 0;
  const [event, setEvent] = useState();

  async function getData() {
    await fetch("http://localhost:5050/events")
    
    //return the response
      .then((response) => response)
      .then((data) => {
        return data.json();
      })
      .then((data)=> {
        console.log("data", data)
        setEvent(data[0])
        
            let displayEvent = data[0].title;
       //console.log(displayEvent)
        
  
  })
     }

     useEffect(() => {
      // CALL here
       getData() 
   
     },[])


     const [title, setTitle] = useState('');
     const updateTitle = (e) => {
      setTitle(e.target.value);
      console.log(title)
    };
    const [event_date, setDate] = useState('');
     const updateDate = (e) => {
      setDate(e.target.value);
      console.log(event_date)
    };

     function addEvent() {
       console.log(title)
       console.log(event_date)
      fetch('http://localhost:5050/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title,event_date}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
           console.log(data)
           getData();
         })
         .catch((error) => {
          console.error('Error:', error);
       });
    }


    const [id, setId] = useState('');
    const updateId = (e) => {
     setId(e.target.value);
   };
    function deleteEvent() {
      console.log(id)
      fetch(`http://localhost:5050/events/${id}`, {
        method: 'DELETE',
        
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          console.log(data);
          getData();
        })
        .catch((error) => {
          console.error('Error:', error);
       });
    }





  return (
    <div className="App">
      <header>
     
        <h1>Eventonica</h1>
      </header>

      <main>      

          <section className="event-management">
            <h2>Event Management</h2>
            <div>
              <h3>All Events</h3>
              <ul id="events-list">
                <li>{event?.title}</li>
                {/*  for each event inside object call function where n=i+1*/}
              <li>
              <RenderEvent event={event}  />
              </li>
                {/* {!!event && <li><RenderEvent event={event}  /></li>} */}
              </ul>

              <h3>Add Event</h3>
              {/* {event ? event : 'There is no merchant data available'} */}
              <form id="add-event" action="#"
               onSubmit={addEvent}
              >
                <fieldset>
                  <label>Title</label>
                  <input
                    type="text"
                    id="add-event-name"
                     onChange={updateTitle}
                  />
                  <label>Date</label>
                  <input
                    type="datetime-local"
                    id="add-event-name"
                     onChange={updateDate}/>
                </fieldset>
                <input type="submit" 
             />
              </form >
            </div>
          </section>
        

        <div>
          <h3>Delete Event</h3>
          <form id="delete-event" action="#"
          onSubmit={deleteEvent}>
            <fieldset>
              <label>Event ID</label>
              <input type="number" min="1" id="delete-event-id" onChange={updateId} />
            </fieldset>
            <input type="submit" 
             />
          </form>
        </div>

       
      </main>

      <footer>
       
      </footer>
    </div>
  );
}

export default App;
