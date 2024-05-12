import React from 'react';
import { Link } from 'react-router-dom';
import CSS from './UpcomingEvents.module.css';
import art1 from '../../img/mt-2138-home-img-3s.jpg';
import art2 from '../../img/mt-2138-home-img-4s.jpg';
import art3 from '../../img/mt-2138-home-img-5s.jpg';
import art4 from '../../img/mt-2138-home-img-6s.jpg';

function UpcomingEvents() {
  return (
    <div className="container">
      <h2 className={CSS.artists_title}>Upcoming Events</h2>
      <p className={CSS.event_text}>
        As the modern art galleries compete to win over more and more crowds of
        visitors, we also fight for the honor of hosting events and
        installations of the works by the most celebrated artists of our time.
        Luckily, our art gallery manages to book most of the best ones for you,
        purely due to how highly reputable our art venue is!
      </p>
      <div className={CSS.artists_container}>
        <Link className={CSS.artist_item} to="/events">
          <div className={CSS.artist_img_container}>
            <img className={CSS.artist_img} src={art1} alt="" />
          </div>
          <div style={{ paddingBottom: '16px' }}>
            <h3>Isabelle Bellagio</h3>
            <p>Abstract Art</p>
          </div>
        </Link>
        <Link className={CSS.artist_item} to="/events">
          <div className={CSS.artist_img_container}>
            <img className={CSS.artist_img} src={art2} alt="" />
          </div>
          <div style={{ paddingBottom: '16px' }}>
            <h3>Mary Cameron</h3>
            <p>Art Installation</p>
          </div>
        </Link>
        <Link className={CSS.artist_item} to="/events">
          <div className={CSS.artist_img_container}>
            <img className={CSS.artist_img} src={art3} alt="" />
          </div>
          <div style={{ paddingBottom: '16px' }}>
            <h3>Alice Nixon</h3>
            <p>Nature Photography</p>
          </div>
        </Link>
        <Link className={CSS.artist_item} to="/events">
          <div className={CSS.artist_img_container}>
            <img className={CSS.artist_img} src={art4} alt="" />
          </div>
          <div style={{ paddingBottom: '16px' }}>
            <h3>Marie Steady</h3>
            <p>Modern Art</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UpcomingEvents;
