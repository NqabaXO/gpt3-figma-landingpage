import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { Close, Menu } from '@mui/icons-material';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const MenuItem = () =>(
    <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT-3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
    </>
  )
  return (
    <div className="gpt3__navbar">
        <div className='gpt3__navbar-links'>
          <div className='gpt3__navbar-links__logo'>
            <img src={logo} alt="logo"/>
          </div>
          <div className='gpt3__navbar-links__container'>
            <MenuItem/>         
          </div>
          <div className='gpt3__navbar-sign'>
            <p>Sign In</p>
            <button type='button'>Sign up</button>
          </div>
          <div className='gpt3__navbar-menu'>
            {toggleMenu
            ? <Close color='success' onClick={() => setToggleMenu(false)}/>
          : <Menu color='error' onClick={() => setToggleMenu(true)}/>
             }
             {toggleMenu && (
              <div className='gpt3__navbar-menu__container'>
                <div className='gpt3__navbar-menu__container-links'>
                  <MenuItem/>
                  <div className='gpt3__navbar-menu__container-links-sign'>
                    <p>Sign In</p>
                    <button type='button'>Sign up</button>
                  </div>
                </div>
              </div>
             )}
          </div>
        </div>
    </div>
  )
}

export default Navbar