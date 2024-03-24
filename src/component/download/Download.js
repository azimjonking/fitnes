import React from "react";
import "./download.css";
import playmarket from "../../assets/playmarket.svg";
import apple from "../../assets/apple.svg";
import downloadImg from "../../assets/download.svg";

const Download = () => {
  return (
    <section className="download container" id='download'>

      <div className="download-container">
      <div className="download-info">
        <h1 className="title">Скачайте наше приложение прямо сейчас</h1>
        <p className="subtitle">
          Установите приложение Fit-lex и откройте дверь к индивидуальным
          тренировкам, персональным рекомендациям и постоянной мотивации.
          Начните свой фитнес-путь уже сегодня и достигните своих целей вместе с
          нами!
        </p>
        <div className="download-btns">
          <button className="app-link">
            <img src={playmarket} alt="playmarket" />
            <div className="link-info">
              <span>Доступно на</span>
              <span>Google Play</span>
            </div>
          </button>
          <button className="app-link">
            <img src={apple} alt="apple" />
            <div className="link-info">
              <span>Доступно на</span>
              <span>App Store</span>
            </div>
          </button>
        </div>
      </div>

      <div className="download-img">
        <img src={downloadImg} alt="download img" />
      </div>
      </div>

    </section>
  );
};

export default Download;
