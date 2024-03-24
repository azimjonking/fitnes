import React from "react";
import { NavLink } from "react-router-dom";
import "./mainSection.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import playmarket from "../../assets/playmarket.svg";
import apple from "../../assets/apple.svg";
import mainImg from "../../assets/mainImg.svg";

const mainSection = () => {
  return (
    <section className="mainSection container" id='mainSection'>
      <h1 className="main-title">
        Становись сильнее <span>каждый день</span><br /> оставайся в форме{" "}
        <span>всегда</span> вместе с Fit-lex
      </h1>
      <p className="subtitle">
        Разблокируйте здоровье и силу - загрузите сейчас для персональных
        тренировок, отслеживания прогресса и профессиональных советов.
      </p>

      <div className="mainSection-btns">
        <NavLink className="app-link">
          <img src={playmarket} alt="playmarket" />
          <div className="link-info">
            <span>Доступно на</span>
            <span>Google Play</span>
          </div>
        </NavLink>
        <NavLink className="app-link">
          <img src={apple} alt="apple" />
          <div className="link-info">
            <span>Доступно на</span>
            <span>App Store</span>
          </div>
        </NavLink>
      </div>

      <div className="mainSection-img">
        <LazyLoadImage src={mainImg} alt="mobile application" effect="blur" />
      </div>

    </section>
  );
};

export default mainSection;
