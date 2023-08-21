import React from 'react'
import './Footer.css'
import gpt3logo from '../../assets/logo.png'

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-heading'>
          <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        </div>

        <a className='gpt3__footer-btn' href='/#'>
          Request Early Access
        </a>
        <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links__logo'>
            <img src={gpt3logo} alt=''/>
            <p>Figma inspired design by Nqaba Sikeyi</p>
          </div>
          <div className='gpt3__footer-links__div'>
            <h4>Links</h4>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-links__div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
           <div className='gpt3__footer-links__div'>
            <h4>Get in Touch</h4>
            <p>Bulawayo, Zimbabwe</p>
            <p>(+263)71 267 9746</p>
            <p>jabuzw1@gmail.com</p>
          </div>
        </div>
        <div className='gpt3__footer-copyright'>
          <p>2023 GPT-3. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer