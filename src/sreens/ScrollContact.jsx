import React, { useState, useEffect, useRef } from 'react'
import "../styles/ScrollContact.css"
import { FaInstagram, FaWpforms, FaWhatsapp ,FaFacebook, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md";
function ScrollContact() {
    const [ScrollDir, setScrollDir] = useState("");
    const lastScrollY = useRef(window.scrollY);

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
        <div id='TopContainer' >
            <div className={`floating-container ${ScrollDir}`} >
               
<button className="contact-btn whatsapp"
  onClick={() =>
    window.open("https://wa.me/919061911970", "_blank")
  }>
<FaWhatsapp/>
</button>
<button className="contact-btn instagram"
  onClick={() =>
    window.open("https://www.instagram.com/prakritiarchitectsandinteriors?igsh=MTFxeTYxM2JmemdpNA==", "_blank")
  }>
<FaInstagram/>
</button>
<button className="contact-btn Facebook"
  onClick={() =>
    window.open("https://www.facebook.com/", "_blank")
  }>
<FaFacebook/>
</button>
<button className="contact-btn twitter"
  onClick={() =>
    window.open("https://x.com/", "_blank")
  }>
<FaXTwitter/>
</button>
      
            </div>
        </div>
    )
}
export default ScrollContact;
