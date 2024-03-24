import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
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
            <Link to="mainSection">
              <img src={logo} alt="logo" />
              <span>Fit-lex</span>
            </Link>
            <p>
              Становись сильнее <span>каждый день</span>
              <br />
              оставайся в форме <span>всегда</span>
            </p>
          </div>

          <ul className="footer-navbar">
            <li>
              <Link
                to="mainSection"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="opportunity"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Преимущества
              </Link>
            </li>
            <li>
              <Link
                to="instruction"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Как это работает
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Поддержка
              </Link>
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
          <NavLink to="/privacy">Политика конфиденциальности</NavLink>
          <NavLink to="/cookie">Политика использования файлов cookie</NavLink>
        </div>
        <ul className="social-network">
          <li>
            <NavLink to="/">
              <img src={whatsup} alt="whatsup" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={vkontakt} alt="vkontakt" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={youtube} alt="youtube" />
            </NavLink>
          </li>
          <li>
            <NavLink to="https://t.me/">
              <img src={telegram} alt="telegram" />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
