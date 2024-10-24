import React, { useEffect } from 'react'
import './Pro1.css';
import rockpaper from './assets/rockpaper.png'
import AOS from 'aos';


const Pro1 = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className='pro1' data-aos="fade-right">
      <div className='pro1-upper'>
        <h1>RockPaper</h1>
        <h1 className='hh1'></h1>
      </div>
      <div className='pro1-lower' data-aos="fade-right">
        <img className='pic1' src={rockpaper}></img>
        <div>
          <h2>About</h2>
          <p className='ab1'>The To-Do Tracker is a simple yet powerful web application designed to help users organize their tasks efficiently. Built using HTML, CSS, and JavaScript, this project allows users to add, edit, and delete tasks with ease. It also features a status tracking system where tasks can be marked as complete or pending, offering a clear visual representation of progress.</p>
          <p className='ab1'>I focused on creating a clean, intuitive user interface, ensuring the application is fully responsive across all devices.</p>
          <button className='aboutbtn1'>Read More...</button>
        </div>
      </div>
    </div>
  )
}

export default Pro1