import React from 'react';
import CSS from './EventStats.module.css';
import { Link } from 'react-router-dom';
function EventStats() {
  return (
    <div className={`${CSS.eventStats_container} container`}>
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
        <Link
          style={{ textDecoration: 'none' }}
          to="/events"
          className={CSS.button_eventStats}
        >
          past events
        </Link>
      </div>
      <div className={CSS.number_container}>
        <div>
          <span className={CSS.stats_number}>124</span>
          <span className={CSS.stats_text}>Events a Year</span>
        </div>
        <div>
          <span className={CSS.stats_number}>9999</span>
          <span className={CSS.stats_text}>Yearly Visitors</span>
        </div>
      </div>
      <div className={CSS.gal_photo}></div>
    </div>
  );
}

export default EventStats;
