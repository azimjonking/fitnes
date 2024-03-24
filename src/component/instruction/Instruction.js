import React from 'react';
import "./instruction.css";
import instructionImg1 from "../../assets/instruction1.svg";
import instructionImg2 from "../../assets/instruction2.svg";

const Instruction = () => {
  return (
    <section className='instruction container' id='instruction'>

      <div className="instruction-img">
        <img src={instructionImg1} alt="instruction image" />        
      </div>

      <div className="instruction-info info-1">
        <h1 className="title">Как это работает</h1>
        <p className="subtitle">Эффективный инструмент для достижения лучших результатов.</p>

        <ul className='info-list'>
          <li className='list-item'>Зарегистрируйтесь в приложении, заполнив несколько простых шагов, чтобы создать свой уникальный профиль.</li>
          <li className='list-item'>Определите свои фитнес-цели, предпочтения и уровень подготовки, чтобы мы могли предложить вам наилучшие индивидуальные тренировки.</li>
          <li className='list-item'>На основе ваших данных создайте персонализированный план тренировок, который соответствует вашим целям и графику.</li>
        </ul>
      </div>


      <div className="instruction-info info-2">
        <ul className='info-list'>
          <li className='list-item'>Используйте функцию исследование в реальном времени, чтобы следить за своими достижениями и вносить коррективы в тренировочный план.</li>
          <li className='list-item'>Получайте персональные советы от опытных тренеров, которые помогут вам оптимизировать свои тренировки и поддерживать мотивацию.</li>
          <li className='list-item'>Получайте дополнительные ресурсы, такие как рецепты, статьи и тренировочные видео, чтобы углубить свои знания в области фитнеса и питания.</li>
        </ul>
      </div>

      <div className="instruction-img">
        <img src={instructionImg2} alt="instruction image" />        
      </div>

    </section>
  )
}

export default Instruction