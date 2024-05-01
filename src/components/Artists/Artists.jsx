import React from 'react';
import art1 from '../../img/mt-2138-home-img-3s.jpg';
import art2 from '../../img/mt-2138-home-img-4s.jpg';
import art3 from '../../img/mt-2138-home-img-5s.jpg';
import art4 from '../../img/mt-2138-home-img-6s.jpg';
import CSS from './Artists.module.css';
function Artists() {
  return (
    <div className={CSS.artists_container}>
      <h2>Artists</h2>
      <div className={CSS.artist_item}>
        <img src={art1} alt="" />
        <div>
          <h3>Isabelle Bellagio</h3>
          <p>Abstract Art</p>
        </div>
      </div>
      <div className={CSS.artist_item}>
        <img src={art2} alt="" />
        <div>
          <h3>Mary Cameron</h3>
          <p>Art Installation</p>
        </div>
      </div>
      <div className={CSS.artist_item}>
        <img src={art3} alt="" />
        <div>
          <h3>Alice Nixon</h3>
          <p>NAture Photography</p>
        </div>
      </div>
      <div>
        <img src={art4} alt="" />
        <div className={CSS.artist_item}>
          <h3>MArie Steady</h3>
          <p>Modern Art</p>
        </div>
      </div>
    </div>
  );
}

export default Artists;
