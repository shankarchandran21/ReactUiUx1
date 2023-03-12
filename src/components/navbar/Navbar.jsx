import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.svg"
import {RiMenu3Line , RiCloseLine} from "react-icons"
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-link'>
        <div className='gpt3__navbar-link-logo'>
            <img src={logo} alt="logo" />
        </div> 
        <div className='gpt3__navbar-link_container'>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT?</a></p>
      <p><a href="#possibility"></a>Open AI</p>
      <p><a href="#features"></a>Case Studies</p>
      <p><a href="#blog"></a>Library</p>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar