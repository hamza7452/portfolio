import React, { useEffect } from 'react'
import './Pro2.css';
import clothing from './assets/clothing.png';
import AOS from 'aos';


const Pro2 = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className='pro2' data-aos="fade-down">
      <div className='pro2-upper' data-aos="fade-left">
        <h1>Clothing</h1>
        <h1 className='hh2'>Store</h1>
      </div>
      <div className='pro2-lower' data-aos="fade-right">
        <img className='pic2' src={clothing}></img>
        <div>
          <h2>About</h2>
          <p className='ab2'>This is a fully responsive e-commerce website for a clothing store, developed using React. The platform offers a seamless shopping experience, featuring a dynamic catalog of products with filtering options, detailed product pages, and a shopping cart for easy checkout.I utilized React's component-based architecture to create reusable and maintainable code, ensuring smooth navigation and a fast-loading user interface.</p>
          <p className='ab2'>This project helped me deepen my knowledge of React, routing, and API integration, preparing me for future e-commerce projects.</p>
          <button className='aboutbtn2'>Read More...</button>
        </div>
      </div>
    </div>
  )
}

export default Pro2