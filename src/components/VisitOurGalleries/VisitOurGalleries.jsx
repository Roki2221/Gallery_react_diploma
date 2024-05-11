import React from 'react';
import { Link } from 'react-router-dom';
import CSS from './VisitOurGalleries.module.css';
import img1 from '../../img/mt-2138-exhibitions-img-1.jpg';
import img2 from '../../img/mt-2138-exhibitions-img-2.jpg';
import img3 from '../../img/mt-2138-exhibitions-img-3.jpg';
import img4 from '../../img/mt-2138-exhibitions-img-4.jpg';
import img5 from '../../img/mt-2138-exhibitions-img-5.jpg';
import img6 from '../../img/mt-2138-exhibitions-img-6.jpg';

function VisitOurGalleries() {
  return (
    <div>
      <div style={{ backgroundColor: `#f7f7f7` }} className="container">
        <h2 className={CSS.exhibitions_title}>
          Visit Either of Our Galleries to Witness the True Art!
        </h2>
        <div className={CSS.exhibitions_container}>
          <Link className={CSS.exhibitions_item} to="/events">
            <div className={CSS.exhibitions_img_container}>
              <img className={CSS.exhibitions_img} src={img1} alt="" />
            </div>
            <div className={CSS.exhibitions_text_container}>
              <h3>Moder Art</h3>
            </div>
          </Link>
          <Link className={CSS.exhibitions_item} to="/events">
            <div className={CSS.exhibitions_img_container}>
              <img className={CSS.exhibitions_img} src={img2} alt="" />
            </div>
            <div className={CSS.exhibitions_text_container}>
              <h3>Experimental Art</h3>
            </div>
          </Link>
          <Link className={CSS.exhibitions_item} to="/events">
            <div className={CSS.exhibitions_img_container}>
              <img className={CSS.exhibitions_img} src={img3} alt="" />
            </div>
            <div className={CSS.exhibitions_text_container}>
              <h3>Art Installation</h3>
            </div>
          </Link>
          <Link className={CSS.exhibitions_item} to="/events">
            <div className={CSS.exhibitions_img_container}>
              <img className={CSS.exhibitions_img} src={img4} alt="" />
            </div>
            <div className={CSS.exhibitions_text_container}>
              <h3>Expressionist Paintings</h3>
            </div>
          </Link>
          <Link className={CSS.exhibitions_item} to="/events">
            <div className={CSS.exhibitions_img_container}>
              <img className={CSS.exhibitions_img} src={img5} alt="" />
            </div>
            <div className={CSS.exhibitions_text_container}>
              <h3>Best New Arts</h3>
            </div>
          </Link>
          <Link className={CSS.exhibitions_item} to="/events">
            <div className={CSS.exhibitions_img_container}>
              <img className={CSS.exhibitions_img} src={img6} alt="" />
            </div>
            <div className={CSS.exhibitions_text_container}>
              <h3>Performances</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VisitOurGalleries;
