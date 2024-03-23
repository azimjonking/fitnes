import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../assets/logo.svg";
import playmarket from "../../assets/playmarket.svg";
import apple from "../../assets/apple.svg";
import whatsup from "../../assets/whatsup.svg";
import vkontakt from "../../assets/vkontakt.svg";
import youtube from "../../assets/youtube.svg";
import telegram from "../../assets/telegram.svg";

const Footer = () => {
  return (
    <footer className="container">

      <div className="footer-container">

        <div className="footer-left">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
              <span>Fit-lex</span>
            </Link>
            <p>Становись сильнее <span>каждый день</span><br />оставайся в форме <span>всегда</span></p>
          </div>

          <ul className="footer-navbar">
            <li>
              <Link to='/'>Главная</Link>
            </li>
            <li>
              <Link to='/'>Преимущества</Link>
            </li>
            <li>
              <Link to='/'>Как это работает</Link>
            </li>
            <li>
              <Link to='/'>Поддержка</Link>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <p>Загрузите наше мобильное приложение</p>
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

      <div className="footer-bottom">
        <p className="copyright">© Fit-lex. Все права защищены</p>
        <div className="center">
          <Link to='/privacy'>Политика конфиденциальности</Link>
          <Link to='/cookie'>Политика использования файлов cookie</Link>
        </div>
        <ul className="social-network">
          <li>
            <Link to='/'>
              <img src={whatsup} alt="whatsup" />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <img src={vkontakt} alt="whatsup" />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <img src={youtube} alt="whatsup" />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <img src={telegram} alt="whatsup" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
