import React from 'react';
import img1 from '../../img/mt-2138-blog-img-1.jpg';
import img2 from '../../img/mt-2138-blog-img-2.jpg';
import img3 from '../../img/mt-2138-blog-img-3.jpg';
import CSS from './BlogHome.module.css';
import { Link } from 'react-router-dom';

function BlogHome() {
  return (
    <div className={`container ${CSS.blog_container}`}>
      <h2 className={CSS.blog_title}>Follow Our Art Blog</h2>
      <div className={CSS.blog_list}>
        <div className={CSS.blog_item}>
          <img src={img1} alt="" />
          <Link>
            <h3 className={CSS.blog_text_title}>
              The most common mistakes when managing personal finances
            </h3>
          </Link>
          <p className={CSS.blog_text}>
            The ability to manage money competently is especially valuable
            quality in the conditions of financial crisis, when the purchasing
            power of the population is shrinking, inflation is rising, and
            currency exchange rates.
          </p>
        </div>
        <div className={CSS.blog_item}>
          <img src={img2} alt="" />
          <Link>
            <h3 className={CSS.blog_text_title}>Methods of the recruitment</h3>
          </Link>
          <p className={CSS.blog_text}>
            Search of staff is not an easy task. According to the departmental
            heads' of personnel management words, in order to find a personnel
            who will correspond to the relevant customer needs and requirements,
            it is necessary to carry out a great job.
          </p>
        </div>
        <div className={CSS.blog_item}>
          <img src={img3} alt="" />
          <Link>
            <h3 className={CSS.blog_text_title}>
              Overalls with logo as a method of advertising
            </h3>
          </Link>
          <p className={CSS.blog_text}>
            Overalls bearing the company's logo are related to economy and
            practicality. A preference of corporate style involves a significant
            increase of costs for development of design solutions, customized
            tailoring, selection of necessary materials and so on.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogHome;
