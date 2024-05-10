import React from 'react';
import img1 from '../../img/mt-2138-about-img-1.jpg';
import CSS from './ExhibitionDescription.module.css';
function ExhibitionDescription() {
  return (
    <div className={`container ${CSS.description_container}`}>
      <h2 className={CSS.description_title}>
        A Place Where Any <span>Art is Sacred</span>
      </h2>
      <img className={CSS.description_img} src={img1} alt="statue" />
      <div className={CSS.description_text}>
        <div>
          <h3 className={CSS.description_subtitle}>
            What Kind of Art Do We Exhibit?
          </h3>
          <p>
            The modern art scene (either when we talk about the US, or globally
            speaking) is incredibly diverse…
          </p>
          <p>
            But how do you define the genres of the modern art that ought to be
            showcased to avid art lovers?
          </p>
          <p>In fact, we do not.</p>
          <p>
            The truth is that our art gallery does exhibit absolutely all kinds
            of what can be considered a contemporary type of paintings,
            installations, etc…
          </p>
        </div>
        <div>
          <h3 className={CSS.description_subtitle}>
            What Kind of Art Do We Exhibit?
          </h3>
          <p>
            As we've mentioned before, the real reason as to why we do not pick
            and choose or in any other way categorize and favor any specific
            genre on the modern art scene is for the sake of diversity.
          </p>
          <span
            style={{
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            The same applies to artists.
          </span>
          <p>
            In fact, over the course of a year we do host a range of
            personalized exhibits by the best modern artists, as a part of our
            events agenda.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExhibitionDescription;
