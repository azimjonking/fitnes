import React from "react";
import "./privacyInfo.css";
import privacyData from "./privacyData";

const PrivacyInfo = () => {
  return (
    <section className="privacyInfo container">

      <div className="shadow shadow-1"></div>
      <div className="shadow shadow-2"></div>

      <h1 className="privacy-title">Политика конфиденциальности</h1>
      <p className="privacy-subtitle">
        Данная Политика конфиденциальности описывает, как мы собираем,
        используем и обрабатываем ваши персональные данные при использовании
        нашего веб-сайта fit-lex.ru и связанных с ним услуг.
      </p>

      <ul className="privacy-list">
        {privacyData.map((data, index) => {
          return (
            <li className="list-item" key={index}>
              <p className="list-title">
                <span>{data.id}.</span><span>{data.title}</span>
              </p>
              <p className="list-desc">
                {data.desc}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="privacyData-update">Последнее обновление: 17.01.2024</p>
    </section>
  );
};

export default PrivacyInfo;
