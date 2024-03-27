import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./testimonial.css";
import testimonialData from "./testimonialData";
import markIcon from "../../assets/mark.svg";

import { Navigation } from "swiper/modules";

const Testimonial = () => {
  
  return (
    <section className="testimonial">
      <h1 className="title">
        Отзывы пользователей <br />
        мобильного приложения Fit-lex
      </h1>
      <p className="subtitle">Ваш опыт - наша вдохновляющая история успеха!</p>

      <div className="testimonial-container">
        <Swiper
          slidesPerView={'auto'}
          loop={true}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >

          {testimonialData.map((testi, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="testimonial-item">
                  <img src={markIcon} alt="icon" />
                  <p className="testimonial-text">{testi.text}</p>
                  <p className="testimonial-client">{testi.client}</p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
