import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

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

const Header = () => {
  const links = [
    { path: "mainSection", name: "Главная" },
    { path: "opportunity", name: "Преимущества" },
    { path: "instruction", name: "Как это работает" },
    { path: "contact", name: "Поддержка" },
  ];

  const [nav, setNav] = useState(false);

  const navBtn = () => setNav(!nav);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setNav(false);
      }
    });
  }, []);

  return (
    <header>
      <div className="header-container">
        <img src={nav ? close : menu} alt="menuBtn" className="menuBtn" onClick={navBtn} />

        {document.location.pathname === "/" ? (
          <LinkRouter id="mainSection" className="logo" onClick={navBtn}>
            <img src={logo} alt="logo" />
            <span>Fit-lex</span>
          </LinkRouter>
        ) : (
          <NavLink to="/" className="logo" onClick={navBtn}>
            <img src={logo} alt="logo" />
            <span>Fit-lex</span>
          </NavLink>
        )}

        <nav className={nav ? "active" : ""} onClick={navBtn}>
          <ul className="navbar">
            {links.map((link, i) => {
              return (
                <li className="link" key={i} onClick={navBtn}>
                  {document.location.pathname === "/" ? (
                    <LinkRouter
                      id={link.path}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={navBtn}
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
        </nav>

        {document.location.pathname === "/" ? (
          <Link
            to="download"
            className="btn btn-primary"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={navBtn}
          >
            Скачайте сейчас
          </Link>
        ) : (
          <NavLink to="/" className="btn btn-primary" onClick={navBtn}>
            Скачайте сейчас
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
