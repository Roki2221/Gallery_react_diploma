import CSS from './Testimonials.module.css';
import img1 from '../../img/mt-2138-about-img-2.png';
import img2 from '../../img/mt-2138-about-img-4.png';
import img3 from '../../img/mt-2138-about-img-5.png';
import img4 from '../../img/mt-2138-about-img-3.png';
import { Autoplay } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

function Testimonials() {
  return (
    <div className={`container ${CSS.testimonials_container}`}>
      <h2 className={CSS.testimonials_title}>
        Our Testimonials<span>Always have something nice to say about us</span>
      </h2>
      <Swiper
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          // Роздільність здатності менше 768px
          768: {
            slidesPerView: 2,
          },
          // Роздільність здатності менше 1440px
          1440: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className={CSS.testimonials_item}>
          <img src={img2} alt="" />
          <h3>Nick Harris</h3>
          <span>
            posted on
            <span className={CSS.yellow_subtitle}> ForsquareYelp</span>
          </span>
          <p>
            Great organization!! Your prompt answer became a pleasant surprise
            for me. You've rendered an invaluable service! Thank you very much!
          </p>
        </SwiperSlide>
        <SwiperSlide className={CSS.testimonials_item}>
          <img src={img1} alt="" />
          <h3>Sarah C.</h3>
          <span>
            posted on
            <span className={CSS.yellow_subtitle}> Yelp</span>
          </span>
          <p>
            While living a few hundred miles away, I travel back and forth
            Virginia and Maryland, very often indeed. So each time I do that I
            always try to visit this museum, either on my own or bringing my
            friends and relatives in…
          </p>
        </SwiperSlide>
        <SwiperSlide className={CSS.testimonials_item}>
          <img src={img4} alt="" />
          <h3>Elias L.</h3>
          <span>
            posted on
            <span className={CSS.yellow_subtitle}> Yelp</span>
          </span>
          <p>
            For all my adult life I have been a devoted fan of the modern art
            scene… For me it meant that whenever a new exhibition was hosted in
            our city I must have been there. This is why I love this art
            gallery!
          </p>
        </SwiperSlide>
        <SwiperSlide className={CSS.testimonials_item}>
          <img src={img3} alt="" />
          <h3>Jane K.</h3>
          <span>
            posted on
            <span className={CSS.yellow_subtitle}> TripAdvisor</span>
          </span>
          <p>
            Learning to paint was always one of my biggest dreams! But when I
            was working, I've never had enough time on my hands to accomplish
            that. Since recently I've retired, making this dream come true
            finally became an option for me!
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
