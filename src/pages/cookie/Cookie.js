import React from 'react';
import Contact from '../../component/contact/Contact';
import CookieInfo from '../../component/cookieInfo/CookieInfo';
import Download from '../../component/download/Download';
import "./cookie.css";

const Cookie = () => {
  return (
    <section className='cookie'>
      <CookieInfo />
      <Download />
      <Contact />
    </section>
  )
}

export default Cookie