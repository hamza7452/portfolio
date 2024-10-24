import React from 'react'
import './Projects.css';
import rockpaper from './assets/rockpaper.png';
import clothing from './assets/clothing.png';
import currency from './assets/currency.png';

const items=[
    {
        id:'1',
        title:'Rockpaperscissor',
        img:rockpaper,
        description:"The To-Do Tracker is a simple yet powerful web application designed to help users organize their tasks efficiently. Built using HTML, CSS, and JavaScript, this project allows users to add, edit, and delete tasks with ease. It also features a status tracking system where tasks can be marked as complete or pending, offering a clear visual representation of progress."
    },
    {
        id:'2',
        title:'Clothingstore',
        img:clothing,
        description:"This is a fully responsive e-commerce website for a clothing store, developed using React. The platform offers a seamless shopping experience, featuring a dynamic catalog of products with filtering options, detailed product pages, and a shopping cart for easy checkout.I utilized React's component-based architecture to create reusable and maintainable code, ensuring smooth navigation and a fast-loading user interface."
    },    {
        id:'1',
        title:'Currencyconvertor',
        img:currency,
        description:"The Currency Converter is a web application designed to quickly and accurately convert currencies between different countries. Built using HTML, CSS, and JavaScript, the app features a simple and user-friendly interface that allows users to input amounts and select currencies for conversion"
    },
]

const Projects = () => {
  return (
    <div>
        projects
    </div>
  )
}

export default Projects;