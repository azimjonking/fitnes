import React from 'react';
import "./opportunity.css";
import optionsData from "./optionsData";


const Opportunity = () => {
  return (
    <section className='opportunity container'>
      <h1 className="title">Уникальные возможности для перевоплощения вашего тела</h1>
      <p className="subtitle">Раскройте свой потенциал с нашим мобильным приложением, где бы вы не находились.</p>

      <div className="opportunity-container">
        {optionsData.map((option, index) => {
          return (
            <div className="option" key={index}>
              <img src={option.src} alt={option.title} />
              <h2 className="option-title">{option.title}</h2>
              <p className="option-text">{option.text}</p>
            </div>
          )
        })}
      </div>

      <button className="btn btn-primary">Скачайте сейчас</button>

    </section>
  )
}

export default Opportunity