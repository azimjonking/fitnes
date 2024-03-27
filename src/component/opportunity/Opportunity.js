import React from "react";
import { Link } from "react-scroll"
import "./opportunity.css";
import optionsData from "./optionsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Opportunity = () => {
  return (
    <section className="opportunity container" id="opportunity">
      <h1 className="title">
        Уникальные возможности для перевоплощения вашего тела
      </h1>
      <p className="subtitle">
        Раскройте свой потенциал с нашим мобильным приложением, где бы вы не
        находились.
      </p>

      <div className="opportunity-container">
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          // centeredSlides={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {optionsData.map((option, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="option">
                  <img src={option.src} alt={option.title} />
                  <h2 className="option-title">{option.title}</h2>
                  <p className="option-text">{option.text}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Link to='download' className="btn btn-primary">Скачайте сейчас</Link>
    </section>
  );
};

export default Opportunity;
