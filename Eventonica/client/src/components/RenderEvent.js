import react from 'react'

function RenderEvent({event}) {
    // console.log("event", !event)
    // console.log("event title", event?.title)
//loop or map here
// events.map((event, index)=>
// {

// }
//  const tempCard = 
//conditional rendering for when the event variable is not empty
if(!event){
    return null;
}
        return(
       
        <div>
            Event
            <ul>
                <li>$Title{event.title}</li>
                <li>${event.event_date}</li>
                <li>${event.description}</li> 
               
                {/* <object data=${book.image} width="300" height="200"></object> */}
  
            </ul>   
               
        </div>
       
    );
}
    export default RenderEvent;