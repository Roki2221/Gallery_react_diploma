import React from 'react';
import art1 from '../../img/mt-2138-home-img-7.jpg';
import art2 from '../../img/mt-2138-home-img-8.jpg';
import art3 from '../../img/mt-2138-home-img-9.jpg';
import CSS from './PlanningVisitSchedule.module.css';
import { Link } from 'react-router-dom';
function PlanningVisitSchedule() {
  return (
    <div className="container">
      <h2 className={CSS.schedule_title}>PlanningVisitSchedule</h2>
      <div className={CSS.schedule_container}>
        <Link className={CSS.artist_item} to="/events">
          <div className={CSS.artist_img_container}>
            <img className={CSS.artist_img} src={art1} alt="" />
          </div>
          <div className={CSS.gallery_item_text}>
            <h3>Abstract Art</h3>
            <p>Friday, 2:00 pm - 11:00 pm</p>
          </div>
        </Link>
        <Link className={CSS.artist_item} to="/events">
          <div className={CSS.artist_img_container}>
            <img className={CSS.artist_img} src={art2} alt="" />
          </div>
          <div className={CSS.gallery_item_text}>
            <h3>Portraits</h3>
            <p>Monday, 2:00 pm - 11:00 pm</p>
          </div>
        </Link>
        <Link className={CSS.artist_item} to="/events">
          <div className={CSS.artist_img_container}>
            <img className={CSS.artist_img} src={art3} alt="" />
          </div>
          <div className={CSS.gallery_item_text}>
            <h3>Modern Art</h3>
            <p>Tuesday, 2:00 pm - 11:00 pm</p>
          </div>
        </Link>
      </div>
      <Link
        style={{ textDecoration: 'none' }}
        to="/exhibitions"
        className={CSS.button_eventStats}
      >
        view all
      </Link>
    </div>
  );
}

export default PlanningVisitSchedule;
