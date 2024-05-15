import React from 'react';
import CSS from './FindUs.module.css';
function FindUs() {
  return (
    <div className={` container ${CSS.contacts_container}`}>
      <h2 className={CSS.contacts_title}>Find us</h2>
      <p className={CSS.contacts_text}>
        Visit us for a memorable tour into the world of art!
      </p>
      <span className={CSS.contacts_address}>
        9401 N Meridian St, Indianapolis,
      </span>
      <span className={CSS.contacts_address}>IN 46260, United States</span>

      <iframe
        className={CSS.contacts_map}
        title="gal_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20321.678798724217!2d30.457452804513768!3d50.455816852562705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce63f371ae41%3A0x1a30d198623e09f5!2sBRUCIE%20COLLECTIONS%20GALLERY!5e0!3m2!1suk!2sua!4v1715702361466!5m2!1suk!2sua"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default FindUs;
