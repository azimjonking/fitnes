import React, { useRef } from "react";

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

export const LinkRouter = ({ children, id, href, as, ...props }) => {
  const ref = useRef(null);

  if (as) {
    return (
      <NavLink
        {...props}
        to={href}
        ref={ref}
        onClick={() => {
          if (ref.current.scrollTo && as) {
            setTimeout(() => {
              ref.current.scrollTo(id);
            }, 500);
          }
        }}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <Link {...props} to={id} ref={ref}>
      {children}
    </Link>
  );
};

const Footer = () => {
  const links = [
    { path: "mainSection", name: "Главная" },
    { path: "opportunity", name: "Преимущества" },
    { path: "instruction", name: "Как это работает" },
    { path: "contact", name: "Поддержка" },
  ];

  return (
    <footer className="container">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            {document.location.pathname === "/" ? (
              <Link to="mainSection">
                <img src={logo} alt="logo" />
                <span>Fit-lex</span>
              </Link>
            ) : (
              <NavLink to="/">
                <img src={logo} alt="logo" />
                <span>Fit-lex</span>
              </NavLink>
            )}

            <p>
              Становись сильнее <span>каждый день</span>
              <br />
              оставайся в форме <span>всегда</span>
            </p>
          </div>

          <ul className="footer-navbar">
            {links.map((link, i) => {
              return (
                <li className="link" key={i}>
                  {document.location.pathname === "/" ? (
                    <LinkRouter
                      id={link.path}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      {link.name}
                    </LinkRouter>
                  ) : (
                    <LinkRouter id={link.path} as={NavLink} href="/">
                      {link.name}
                    </LinkRouter>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer-right">
          <p>
            Загрузите наше <br />
            мобильное приложение
          </p>
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
