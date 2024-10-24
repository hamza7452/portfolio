import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-upper'>
            <h1>Contact</h1>
        </div>
        <div className='contact-lower'>
            <div className='contact-left'>
                <div className='field'>
                <i class="fa-solid fa-phone"></i>
                <p>7452002272</p>
                </div>
                <div className='field'>
                <i class="fa-solid fa-envelope"></i>
                <p>mhkhamza989@gmail.com</p>
                </div>
                <div className='field'>
                <i class="fa-solid fa-location-crosshairs"></i>
                <p>Rajpura,Punjab,India</p>
                </div>
            </div>
            <div className='contact-right'>
                <form>
                    <div className='form-left'>
                        <input type='text' placeholder='Full Name'></input>
                        <input type='text' placeholder='Phone No'></input>
                    </div>
                    <div className='form-right'>
                        <input type='text' placeholder='Email Address'></input>
                        <input type='text' placeholder='Subject'></input>
                    </div>
                    <div className='form-message'>
                        <textarea type='text' placeholder='Your Message' id='message'></textarea>
                    </div>
                    <button className='contactbtn'>
                        Send..
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact