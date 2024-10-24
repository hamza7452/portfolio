import React, { useEffect } from 'react';
import './Mid.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic2 from './assets/pic2.png'; // Adjust the path accordingly

const Mid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='mid'>
      <div 
        className='mid-left' 
        data-aos="fade-right" // Animation effect for the text section
      >
        <h3>Hi, it's me</h3>
        <h1>Hamza Khan</h1>
        <h3 className='p'>And I'm a Frontend Developer</h3>
        <p>
          I specialize in crafting visually engaging and user-friendly websites, 
          with a focus on design responsiveness, and seamless interactivity. 
          My expertise lies in bringing ideas to life through modern web technologies 
          like HTML, CSS, and JavaScript, while continuously learning and adapting 
          to the latest frontend trends.
        </p>
        <p>Let's build intuitive digital experiences together.</p>
        <div className='icons'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <button className='midbtn'>Download CV</button>
      </div>
      <img 
        className='image' 
        src={pic2} 
        alt='description' 
        data-aos="fade-left" // Animation effect for the image
      />
    </section>
  );
}

export default Mid;
