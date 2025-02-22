import React from 'react';
import './Navbar.css';
import images from "../../constants/images";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () =>{
  const [toggle,setToggle] = React.useState(false);
  return  (
  <div className='app__navbar' >
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="gericht" />
    </div>
    <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#pages">Pages</a></li>
        <li className='p__opensans'><a href="#contact">Contact Us</a></li>
        <li className='p__opensans'><a href="#blog">Blogs</a></li>
        <li className='p__opensans'><a href="#landing">Landing</a></li>
    </ul>
    <div className='app__navbar-login' >
        <a className='p__opensans' href="#signIn">Sign In / Register</a>
        <div />
        <a className='p__opensans' href="#bookTable">Book Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu className='hamburgerMenu' fontSize={27} color='#fff' onClick={()=> {setToggle(true)}} />
          {toggle && (
            <div className='app__navbar-smallscreen_overlay slide-bottom' >
            <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} color='#fff' onClick={()=> {setToggle(false)}} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#pages">Pages</a></li>
              <li className='p__opensans'><a href="#contact">Contact Us</a></li>
              <li className='p__opensans'><a href="#blog">Blog</a></li>
              <li className='p__opensans'><a href="#landing">Landing</a></li>
            </ul>
          </div>
          )}
    </div>
  </div>
)};

export default Navbar;
