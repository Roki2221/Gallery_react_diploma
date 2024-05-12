import React from 'react';
import img from '../../img/mt-2138-events-img-1.jpg';
import CSS from './EventsPicture.module.css';
function EventsPicture() {
  return (
    <div className={`container ${CSS.events_container}`}>
      <h2 className={CSS.events_title}>
        Every Single Year We Host Hundreds of Events
      </h2>
      <img src={img} alt="" />
    </div>
  );
}

export default EventsPicture;
