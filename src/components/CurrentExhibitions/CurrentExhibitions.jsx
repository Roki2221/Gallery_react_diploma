import React, { useEffect } from 'react';
import './CurrentExhibitions.css';
import exhImg1 from '../../img/mt-2138-home-gal-img-1-s.jpg';
import exhImg2 from '../../img/mt-2138-home-gal-img-2-s.jpg';
import exhImg3 from '../../img/mt-2138-home-gal-img-3-s.jpg';
import exhImg4 from '../../img/mt-2138-home-gal-img-4-s.jpg';
import exhImg5 from '../../img/mt-2138-home-gal-img-5-s.jpg';
import exhImg6 from '../../img/mt-2138-home-gal-img-6-s.jpg';

import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

function CurrentExhibitions() {
  const images = [exhImg1, exhImg2, exhImg3, exhImg4, exhImg5, exhImg6];

  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {
      nav: true, // Дозволяє навігаційні кнопки
    });
    return () => lightbox.destroy();
  }, []);

  return (
    <div className="currgallery_containere">
      <h2 className="currgallery_title">Current Exhibitions</h2>

      <div className="gallery">
        {images.map((image, index) => (
          <a href={image} key={index} className="gallery-image">
            <img src={image} alt="Gallery" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default CurrentExhibitions;
