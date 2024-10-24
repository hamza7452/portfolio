import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className='navbar'>
        <a className='title'href='/'>Portfolio</a>
        <div className='sidebar'>
            <ul className='sidebar-items'>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#instagram'style={{color:"#F86F03"}}>Instagran</a>
                </li>
                <li>
                    <a href='#linkedin' >linkedin</a>
                </li>
                <li>
                    <a href='#twitter'>Twitter</a>
                </li>
                <li>
                    <a href='#facebook'>facebook</a>
                </li>
            </ul>
        </div>
        <button className='navbtn'>Contact</button>
    </nav>
  )
}

export default Navbar;