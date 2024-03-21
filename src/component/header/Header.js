import React from 'react'
import { Link } from'react-router-dom'
import "./header.css"
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <Link to='/' className="logo">
        <img src={logo} alt="logo" />
        <span>Fit-lex</span>
      </Link>

      <ul className="navbar">
        <li className='link'>
          <Link to='/'>Главная</Link>
        </li>
        <li className='link'>
          <Link to='/'>Преимущества</Link>
        </li>
        <li className='link'>
          <Link to='/'>Как это работает</Link>
        </li>
        <li className='link'>
          <Link to='/support'>Поддержка</Link>
        </li>
      </ul>

      <button id="download" className='btn btn-primary'>Скачайте сейчас</button>
    </header>
  )
}

export default Header