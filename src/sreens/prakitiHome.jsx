import React, { useState } from 'react'
import '../styles/prakitiHome.css'
import { Link } from "react-router-dom";
import logo from '../assets/prakriti_logo_transparent.png'
import PrakritiConsultant from './prakritiConsultant';
import PrakritiService from './PrakritiService';
import PrakritiAbout from './PrakritiAbout';
import PrakritiBottom from './PrakritiBottom';
import { FaBars, FaTimes } from "react-icons/fa";
function PrakitiHome() {
const [menuOpen, setMenuOpen] =useState(false);
const scrollToConsultation = ()=>{

    document.getElementById("consultation").scrollIntoView({
        behavior: "smooth"
    });


};






    return (
        <div>
        <div className='Mainconatiner' id='Home'>
            <nav className='Navbar'>
                
                <div className='ImgDiv'>
                    <img src={logo} alt='prakriti logo' className='Logo'></img>
                    <h1>Prakriti</h1>
                </div>

                <div className='LinkDiv'>
                    <a href='#Home' className='Links' onClick={() => setMenuOpen(false)}>Home</a>
                    <a href='#About' className='Links' onClick={() => setMenuOpen(false)}>About</a>
                    <a href='#Contact' className='Links' onClick={() => setMenuOpen(false)}>Contact</a>
                    <a href='#Service' className='Links' onClick={() => setMenuOpen(false)}>Service</a>
                    
                </div>
                <button className='NavBtn' onClick={scrollToConsultation}>Book  Consultation</button>
                <div className="MenuIcon">

    {
        menuOpen ?

        <FaTimes onClick={() => setMenuOpen(false)} />

        :

        <FaBars onClick={() => setMenuOpen(true)} />

    }

</div>
            </nav>
 {menuOpen && (
        <div className="MobileMenu">
            <a href="#Home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#About" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#Services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <button
    onClick={() => {
        setMenuOpen(false);
        scrollToConsultation();
    }}
>
    Book Consultation
</button>
        </div>
    )}
            <div className='Main-Contents'>
                <h1>Defining the Art of</h1><br />
                <h1 style={{ color: "#D4AF37" }}>Refined Living</h1><br />
                <p>
                    We create luxurious interiors that blend timeless elegance,
                    modern functionality, and exceptional craftsmanship to
                    transform every space into a masterpiece.
                </p><br />
                <div className='butn2container'><button>Explore projects </button></div>

            </div>

            <div className='DescriptionDiv'>
                <div className='InsideCard1'>
                    <h1>3+ </h1>
                    <p>Years of Mastery</p></div>
                <div>
                    <h1>50+ </h1>
                    <p>project completed</p>
                </div>
                <div>
                    <h1>25</h1>
                    <p>designers</p>
                </div>

            </div>

        </div>
        <div id='Service'><PrakritiService/></div>
        <div id='About'><PrakritiAbout/></div>
        <div id='consultation'><PrakritiConsultant/></div>
        <div id='Contact'><PrakritiBottom/></div>
        </div>
    )
}
export default PrakitiHome;