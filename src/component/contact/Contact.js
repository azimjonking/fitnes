import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className='contact container' id='contact'>
      <h1 className="title">Напишите нам</h1>
      <p className="subtitle">Мы всегда готовы ответить на ваши вопросы, предоставить дополнительную информацию и поддержать вас.</p>

      <form action="#" className="contact-form">
        <input type="text" placeholder='Имя' id='name' name='name' />
        <input type="email" placeholder='E-mail' id='email' name='email' />
        <input type="tel" placeholder='Номер телефона' id='phone' name='phone' />
        <textarea name="message" id="message" placeholder='Сообщение' ></textarea>

        <button className="btn btn-primary">Отправить</button>
      </form>

    </section>
  )
}

export default Contact