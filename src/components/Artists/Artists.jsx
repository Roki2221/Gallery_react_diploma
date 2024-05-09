import React from 'react';
import art1 from '../../img/mt-2138-home-img-3s.jpg';
import art2 from '../../img/mt-2138-home-img-4s.jpg';
import art3 from '../../img/mt-2138-home-img-5s.jpg';
import art4 from '../../img/mt-2138-home-img-6s.jpg';
import CSS from './Artists.module.css';
import { Link } from 'react-router-dom';
function Artists() {
  return (
    <div style={{ backgroundColor: `#f7f7f7` }}>
      <h2 className={CSS.artists_title}>Artists</h2>
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

export default Artists;
