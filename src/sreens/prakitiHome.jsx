import { useState, useEffect } from 'react'
import '../styles/prakitiHome.css'
import PrakritiConsultant from './prakritiConsultant';
import PrakritiService from './PrakritiService';
import PrakritiProjects from './PrakritiProjects';
import PrakritiAbout from './PrakritiAbout';
import PrakritiBottom from './PrakritiBottom';
import { FaBars, FaTimes } from "react-icons/fa";
import ScrollContact from './ScrollContact';
import logo from "../assets/prakriti.jpeg"
import LuxuryLoader from './LuxuryLoader';

function PrakitiHome() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Play intro loader only once per page load/session.
    const [showLoader] = useState(() => {
        if (typeof window !== 'undefined') {
            const played = window.prakritiIntroPlayed;
            window.prakritiIntroPlayed = true;
            return !played;
        }
        return true;
    });

    const [isRevealing, setIsRevealing] = useState(false);
    const [isLoaderVisible, setIsLoaderVisible] = useState(showLoader);

    useEffect(() => {
        if (!showLoader) return;

        // STEP 5: Reveal page contents starting at 2100ms as the loader fades out
        const revealTimeout = setTimeout(() => {
            setIsRevealing(true);
        }, 2100);

        return () => clearTimeout(revealTimeout);
    }, [showLoader]);

    const scrollToConsultation = () => {

        document.getElementById("consultation").scrollIntoView({
            behavior: "smooth"
        });


    };






    return (
        <div>
            {isLoaderVisible && <LuxuryLoader onComplete={() => setIsLoaderVisible(false)} />}
            <div className={`Mainconatiner ${!showLoader ? 'no-intro' : isRevealing ? 'intro-revealed' : 'intro-active'}`} id='Home'>
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
                <div className='Main-Contents'>
                    <span className="HeroEyebrow">INTERIOR DESIGN STUDIO</span>
                    <h1>
                        Defining the Art of <br />
                        <span className="GoldHighlight">Refined Living</span>
                    </h1>
                    <div className="HeroDecorativeLine"></div>
                    <p>
                        We create luxurious interiors that blend timeless elegance,
                        modern functionality, and exceptional craftsmanship to
                        transform every space into a masterpiece.
                    </p>
                    <div className='butn2container'>
                        <button className="CTA-Primary" onClick={() => document.getElementById("Projects").scrollIntoView({ behavior: "smooth" })}>
                            Explore Our Work <span className="CTA-Arrow">↗</span>
                        </button>
                        <button className="CTA-Secondary" onClick={scrollToConsultation}>
                            Book a Consultation
                        </button>
                    </div>
                </div>

                <div className='HeroStats'>
                    <div className='StatItem'>
                        <h2>3+</h2>
                        <div className="StatLine"></div>
                        <span>Years of Mastery</span>
                    </div>
                    <div className='StatItem'>
                        <h2>50+</h2>
                        <div className="StatLine"></div>
                        <span>Projects Completed</span>
                    </div>
                    <div className='StatItem'>
                        <h2>25</h2>
                        <div className="StatLine"></div>
                        <span>Designers</span>
                    </div>
                </div>

                <div className="ScrollIndicator">
                    <span>SCROLL TO EXPLORE</span>
                    <div className="ScrollIndicatorLine"></div>
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