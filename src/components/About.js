import React, { useEffect } from 'react'
import './About.css';
import pic4 from './assets/pic4.jpeg';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init({duration: 1500});
  },[]);
  return (
    <div className='about' data-aos="fade-left" data-delay="300">
      <div className='about-upper'>
        <h1>About</h1>
        <h1 className='hh'>Me</h1>
      </div>
      <div className='about-lower'>
        <img src={pic4}></img>
        <div>
          <h2>Frontend Developer</h2>
          <p className='ab'>I’m a passionate frontend developer with a keen eye for design and a love for building interactive web experiences. From wireframes to fully functional websites, I enjoy bringing ideas to life using HTML, CSS, and JavaScript. I believe in writing clean, maintainable code and creating responsive designs that adapt seamlessly to any device.</p>
          <p className='ab'>When I’m not coding, you’ll find me exploring new trends in web design, collaborating on exciting projects, or brainstorming creative solutions to development challenges.</p>
          <button className='aboutbtn'>Read More...</button>
        </div>
      </div>
    </div>
  )
}

export default About
