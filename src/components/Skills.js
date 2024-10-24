import React, { useEffect } from 'react'
import './Skills.css';
import AOS from 'aos';

const Projects = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    },[])
  return (
    <div className='projects' data-aos="fade-up">
        <div className='projects-upper'>
            <h1>My</h1>
            <h1 className='pp'>Skills</h1>
        </div>
        <div className='projects-lower'>
            <div className='card'>
                <span></span>
            <i id='pro' class="fa-brands fa-html5"></i>
                <h3 id='one'>HTML</h3>
                <p id='two'>HTML (HyperText Markup Language) is the standard markup language used to create web pages. </p>
            </div>
            <div className='card'>
            <span></span>
            <i id='pro' class="fa-brands fa-css3-alt"></i>
                <h3 id='one'>CSS</h3>
                <p id='two'>CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of HTML documents.</p>
            </div>
            <div className='card'>
            <span></span>
            <i id='pro' class="fa-brands fa-js"></i>
                <h3 id='one'>Javascript</h3>
                <p id='two'>JavaScript is a versatile, high-level programming language primarily used for enhancing interactivity.</p>
            </div>
            <div className='card'>
            <span></span>
            <i id='pro' class="fa-brands fa-react"></i>
                <h3 id='one'>React</h3>
                <p id='two'>React is a popular JavaScript library for building user interfaces, primarily for single-page applications (SPAs).</p>
            </div>
        </div>
    </div>
  )
}

export default Projects