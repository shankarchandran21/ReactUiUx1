import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.svg"
import {FaBars} from "react-icons/fa"
import {RxCross1} from "react-icons/rx"

const Menu = ()=>{
  return<>
     <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT?</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
  </>
}
const Navbar = () => {
  const [toggleMenu,setToggleMenu] =React.useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-link'>
        <div className='gpt3__navbar-link-logo'>
            <img src={logo} alt="logo" />
        </div> 
        <div className='gpt3__navbar-link_container'>
            <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ?<RxCross1 color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
        :<FaBars  color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>  
      }
      {
        toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-link'>
                <Menu/>
                   <div className='gpt3__navbar-menu_container-link-sign'>
                       <p>Sign in</p>
                       <button type='button'>Sign up</button>
                   </div>
              </div>
          </div>  
        )
      }
      </div>
    </div>
  )
}

export default Navbar