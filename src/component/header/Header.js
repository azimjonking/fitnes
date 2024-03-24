import React from "react";
import { Link } from "react-scroll";
import "./header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <Link to="mainSection" className="logo">
        <img src={logo} alt="logo" />
        <span>Fit-lex</span>
      </Link>

      <ul className="navbar">
        <li className="link">
          <Link
            // activeClass="active"
            to="mainSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Главная
          </Link>
        </li>
        <li className="link">
          <Link to="opportunity" spy={true} smooth={true} offset={-100} duration={500}>
            Преимущества
          </Link>
        </li>
        <li className="link">
          <Link to="instruction" spy={true} smooth={true} offset={-100} duration={500}>
            Как это работает
          </Link>
        </li>
        <li className="link">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
            Поддержка
          </Link>
        </li>
      </ul>

      <Link to='download' className="btn btn-primary" spy={true} smooth={true} offset={-100} duration={500}>
        Скачайте сейчас
      </Link>
    </header>
  );
};

export default Header;
