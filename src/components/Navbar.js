import '../App.css';
import React from 'react'
import {Link} from "react-router-dom";



function Navbar() {

  return (
    <div className="App">
        <div className='navbar'>

            <Link to="portfolio/">
            <div className='brand-title'>Portfolio</div>
            </Link>



                <div className='navbar-links'>
                    <ul>


                                <Link to="portfolio/design">
                                    <li>Design</li>
                                </Link>



                                <Link to="portfolio/dev">
                                    <li>Development</li>
                                </Link>





                    </ul>
                </div>
        </div>
    </div>
  );
}

export default Navbar;

/*

<a className='toggle-button'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>



<Link to="portfolio/about">
                                    <li>About</li>
                                </Link>



const toggleButton = document.getElementById('toggle-button')
const navbarLinks = document.getElementById('navbar-links')
if(toggleButton){
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
}
*/