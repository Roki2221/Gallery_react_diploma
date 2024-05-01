import React from 'react';
import CSS from './EventStats.module.css';

function EventStats() {
  return (
    <div className="container">
      <div className={CSS.event_container}>
        <h2 className={CSS.title_eventStats}>Events '16 in Review</h2>
        <p className={CSS.text_eventStats}>
          The real reason as to why we do not pick and choose or in any other
          way categorize and favor any specific genre on the modern art scene is
          for the sake of diversity.
        </p>
        <p className={CSS.text_eventStats}>
          In fact, over the course of a year we do host a range of personalized
          exhibits by the best modern artists, as a part of our events agenda.
        </p>
        <button type="button" className={CSS.button_eventStats}>
          past events
        </button>
      </div>
      <div className={CSS.eventStats_container}>
        <span>5586</span>
        <span>Events a Year</span>
        <span>9999</span>
        <span>Yearly Visitors</span>
      </div>
    </div>
  );
}

export default EventStats;
