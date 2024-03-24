import React from "react";
import { NavLink } from "react-router-dom";
import "./download.css";
import playmarket from "../../assets/playmarket.svg";
import apple from "../../assets/apple.svg";
import downloadImg from "../../assets/download.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Download = () => {
  return (
    <section className="download container" id="download">
      {document.location.pathname == "/" && (
        <>
          <div className="shadow shadow-1"></div>
          <div className="shadow shadow-2"></div>
        </>
      )}

      <div className="download-container">
        <div className="download-info">
          <h1 className="title">Скачайте наше приложение прямо сейчас</h1>
          <p className="subtitle">
            Установите приложение Fit-lex и откройте дверь к индивидуальным
            тренировкам, персональным рекомендациям и постоянной мотивации.
            Начните свой фитнес-путь уже сегодня и достигните своих целей вместе
            с нами!
          </p>
          <div className="download-btns">
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
        </div>

        <div className="download-img">
          <LazyLoadImage src={downloadImg} alt="download img" effect="blur" />
        </div>
      </div>
    </section>
  );
};

export default Download;
