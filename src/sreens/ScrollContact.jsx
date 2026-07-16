import { useState, useEffect, useRef } from 'react'
import "../styles/ScrollContact.css"
import { FaInstagram, FaWhatsapp, FaFacebook, FaPlus } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { BiMessageDetail } from "react-icons/bi"

function ScrollContact() {
  const [ScrollDir, setScrollDir] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const menuRef = useRef(null);

  // Close floating menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id='TopContainer'>
      <div 
        ref={menuRef}
        className={`floating-menu-container ${ScrollDir} ${isOpen ? 'active' : ''}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Child Contact Buttons with Tooltip labels */}
        <button 
          className="contact-btn twitter"
          onClick={() => window.open("https://x.com/", "_blank")}
          data-tooltip="Twitter"
        >
          <FaXTwitter />
        </button>

        <button 
          className="contact-btn Facebook"
          onClick={() => window.open("https://www.facebook.com/", "_blank")}
          data-tooltip="Facebook"
        >
          <FaFacebook />
        </button>

        <button 
          className="contact-btn instagram"
          onClick={() => window.open("https://www.instagram.com/prakritiarchitectsandinteriors?igsh=MTFxeTYxM2JmemdpNA==", "_blank")}
          data-tooltip="Instagram"
        >
          <FaInstagram />
        </button>

        <button 
          className="contact-btn whatsapp"
          onClick={() => window.open("https://wa.me/919061911970", "_blank")}
          data-tooltip="WhatsApp"
        >
          <FaWhatsapp />
        </button>

        {/* Main Floating Trigger Button */}
        <button 
          className="main-fab"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle quick contact channels"
        >
          <div className="fab-icon-wrapper">
            <BiMessageDetail className="message-icon" />
            <FaPlus className="plus-icon" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default ScrollContact;
