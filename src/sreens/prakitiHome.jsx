import { useState } from 'react'
import '../styles/prakitiHome.css'
import PrakritiConsultant from './prakritiConsultant';
import PrakritiService from './PrakritiService';
import PrakritiProjects from './PrakritiProjects';
import PrakritiAbout from './PrakritiAbout';
import PrakritiBottom from './PrakritiBottom';
import { FaBars, FaTimes } from "react-icons/fa";
import ScrollContact from './ScrollContact';
import logo from "../assets/prakriti.jpeg"
function PrakitiHome() {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollToConsultation = () => {

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
                        <a href='#Projects' className='Links' onClick={() => setMenuOpen(false)}>Projects</a>

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
                        <a href='#Service' className='Links' onClick={() => setMenuOpen(false)}>Service</a>
                        <a href='#Projects' className='Links' onClick={() => setMenuOpen(false)}>Projects</a>
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
                <div className='Main-Contents animate-slide-up'>
                    <h1>Defining the Art of</h1>
                    <h1 className="GoldHighlight">Refined Living</h1>
                    <p>
                        We create luxurious interiors that blend timeless elegance,
                        modern functionality, and exceptional craftsmanship to
                        transform every space into a masterpiece.
                    </p>
                    <div className='butn2container'>
                        <button onClick={() => document.getElementById("Projects").scrollIntoView({ behavior: "smooth" })}>Explore Projects</button>
                    </div>
                </div>

                <div className='DescriptionDiv animate-fade-in'>
                    <div className='InsideCard1'>
                        <h1>3+</h1>
                        <p>Years of Mastery</p>
                    </div>
                    <div className='InsideCard2'>
                        <h1>50+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <div className='InsideCard3'>
                        <h1>25</h1>
                        <p>Designers</p>
                    </div>
                </div>

            </div>
            <div id='Service'><PrakritiService /></div>
            <div id='Projects'><PrakritiProjects /></div>
            <div id='About'><PrakritiAbout /></div>
            <div id='consultation'><PrakritiConsultant /></div>
            <div id='Contact'><PrakritiBottom /></div>
            <ScrollContact />
        </div>
    )
}
export default PrakitiHome;