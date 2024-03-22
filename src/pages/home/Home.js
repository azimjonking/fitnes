import React from 'react'
import "./home.css";
import MainSection from "../../component/mainSection/MainSection";
import Opportunity from "../../component/opportunity/Opportunity";
import Instruction from "../../component/instruction/Instruction";
import Application from "../../component/application/Application";
import Testimonial from "../../component/testimonial/Testimonial";
import Download from "../../component/download/Download";
import Contact from "../../component/contact/Contact";

const Home = () => {
  return (
    <div className='home'>
      <MainSection />
      <Opportunity />
      <Instruction />
      <Application />
      <Testimonial />
      <Download />
      <Contact />
    </div>
  )
}

export default Home