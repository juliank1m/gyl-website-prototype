import React from "react"
import "./Events.css"
import event_1 from "../../assets/ForumEvent.png"
import event_2 from "../../assets/ChristmasEvent.png"
import event_3 from "../../assets/TreeEvent.png"

const Events = () => {
  return (
    <div className="events" id="events">
      <h2>Our Events</h2>
      <div className="events-grid">
        <div className="event-card">
          <img src={event_1} alt="Forum Event" />
          <div className="overlay">
            <p>Annual Forum — Reviewing past initiatives and planning future projects.</p>
          </div>
        </div>

        <div className="event-card">
          <img src={event_2} alt="Christmas Event" />
          <div className="overlay">
            <p>Christmas Concerts — Supporting senior homes during the holidays.</p>
          </div>
        </div>

        <div className="event-card">
          <img src={event_3} alt="Tree Planting" />
          <div className="overlay">
            <p>Tree Planting — Promoting sustainability and environmental awareness.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
