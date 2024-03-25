import React, { useRef } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.svg";

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
  console.log(document.location.pathname);

  const links = [
    { path: "mainSection", name: "Главная" },
    { path: "opportunity", name: "Преимущества" },
    { path: "instruction", name: "Как это работает" },
    { path: "contact", name: "Поддержка" },
  ];

  return (
    <header>
      {document.location.pathname === "/" ? (
        <LinkRouter id="mainSection" className="logo">
          <img src={logo} alt="logo" />
          <span>Fit-lex</span>
        </LinkRouter>
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

      {document.location.pathname === "/" ? (
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
