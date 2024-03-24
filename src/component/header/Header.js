import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  console.log(document.location.pathname);

  const links = [
    { path: "mainSection", name: "Главная" },
    { path: "opportunity", name: "Преимущества" },
    { path: "instruction", name: "Как это работает" },
    { path: "contact", name: "Поддержка" },
  ];

  return (
    <header>
      {document.location.pathname == "/" ? (
        <Link to="mainSection" className="logo">
          <img src={logo} alt="logo" />
          <span>Fit-lex</span>
        </Link>
      ) : (
        <NavLink to="/" className="logo">
          <img src={logo} alt="logo" />
          <span>Fit-lex</span>
        </NavLink>
      )}

      <ul className="navbar">
        {links.map((link, i) => {
          return (
            <li className="link" key={i}>
              {document.location.pathname == "/" ? (
                <Link
                  to={link.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {link.name}
                </Link>
              ) : (
                <NavLink to="/">{link.name}</NavLink>
              )}
            </li>
          );
        })}
      </ul>

      {document.location.pathname == "/" ? (
        <Link
          to="download"
          className="btn btn-primary"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Скачайте сейчас
        </Link>
      ) : (
        <NavLink to="/" className="btn btn-primary">
          Скачайте сейчас
        </NavLink>
      )}
    </header>
  );
};

export default Header;
