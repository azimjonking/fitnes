import React from 'react';
import "./cookieInfo.css";

const CookieInfo = () => {
  return (
    <section className='cookieInfo container'>
      <h1 className="cookieInfo-title">Политика использования файлов cookie</h1>
      <p className="cookieInfo-update">Последнее обновление: 17.01.2024</p>

      <p className="cookie-info__desc mt-4">Добро пожаловать на Fit-lix!</p>

      <h4 className="cookie-info__title mt-4">Что такое файлы cookie?</h4>
      <p className="cookie-info__desc">Файлы cookie - это небольшие текстовые файлы, которые веб-сайт помещает на вашем устройстве при его посещении. Они широко используются для обеспечения корректной работы веб-сайта, а также для сбора информации о ваших предпочтениях.</p>

      <h4 className="cookie-info__title mt-4">Как мы используем файлы cookie</h4>
      <p className="cookie-info__desc">Мы используем файлы cookie для следующих целей:</p>
      <ul className="cookie-info__list mt-4">
        <li className="cookie-info__list-item">Обеспечение корректной работы веб-сайта</li>
        <li className="cookie-info__list-item">Анализа тенденций использования и улучшение наших услуг</li>
        <li className="cookie-info__list-item">Предоставление персонализированного контента и рекламы</li>
        <li className="cookie-info__list-item">Сбор анонимной статистики</li>
        <li className="cookie-info__list-item">Типы файлов cookie, которые мы используем</li>
        <li className="cookie-info__list-item">Строго необходимые cookie: Обеспечивают основные функции веб-сайта, такие как навигация и доступ к защищенным областям.</li>
      </ul>

      <h4 className="cookie-info__title mt-4">Аналитические cookie: <span> Позволяют нам анализировать использование веб-сайта, чтобы улучшить его работу и предложить более качественный контент.</span></h4>

      <h4 className="cookie-info__title mt-4">Функциональные cookie: <span>Используются для запоминания ваших предпочтений, например, языковых настроек.</span></h4>

      <h4 className="cookie-info__title mt-4">Рекламные cookie: <span>Используются для предоставления более релевантной рекламы на основе ваших интересов.</span></h4>

      <h4 className="cookie-info__title mt-4">Как управлять файлами cookie</h4>
      <p className="cookie-info__desc">Вы можете управлять настройками файлов cookie через настройки вашего веб-браузера. Обратите внимание, что отключение некоторых файлов cookie может повлиять на функциональность веб-сайта.</p>

      <h4 className="cookie-info__title mt-4">Изменения в Политике использования файлов cookie</h4>
      <p className="cookie-info__desc">Мы можем обновлять нашу политику использования файлов cookie. Последнюю версию всегда можно найти на этой странице.</p>

      <h4 className="cookie-info__title mt-4">Связь с нами</h4>
      <p className="cookie-info__desc">Если у вас есть вопросы или предложения относительно нашей политики использования файлов cookie, свяжитесь с нами по адресу</p>
      


    </section>
  )
}

export default CookieInfo