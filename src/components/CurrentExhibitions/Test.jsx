import React, { useState } from 'react';
import './CurrentExhibitions.css';
const SimpleLightbox = ({ images }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openLightbox = image => {
    setSelectedImage(image);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setSelectedImage('');
    setShowLightbox(false);
  };

  return (
    <div>
      <div
        className={`lightbox ${showLightbox ? 'active' : ''}`}
        onClick={closeLightbox}
      >
        <img src={selectedImage} alt="Lightbox" />
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery"
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleLightbox;
