import React, { useEffect } from 'react'
import './Pro3.css';
import currency from './assets/currency.png';
import AOS from 'aos';


const Pro3 = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className='pro3' data-aos="fade-up">
      <div className='pro3-upper' data-aos="fade-down">
        <h1>Currency</h1>
        <h1 className='hh3'>Convertor</h1>
      </div>
      <div className='pro3-lower' data-aos="fade-down">
        <img className='pic3' src={currency}></img>
        <div>
          <h2>About</h2>
          <p className='ab3'>The Currency Converter is a web application designed to quickly and accurately convert currencies between different countries. Built using HTML, CSS, and JavaScript, the app features a simple and user-friendly interface that allows users to input amounts and select currencies for conversion</p>
          <p className='ab3'>The app fetches real-time exchange rates using an API, ensuring up-to-date and accurate conversions. With its responsive design, the Currency Converter works seamlessly on various devices, from desktops to mobile phones.</p>
          <button className='aboutbtn3'>Read More...</button>
        </div>
      </div>
    </div>
  )
}

export default Pro3