import React from 'react'
import '../styles/PrakritiBottom.css'
import { FaHouse ,FaPhone,FaPlus } from "react-icons/fa6";
 function PrakritiBottom() {
  return (
    <div className='MainBottomContainer'>
      <div className='DetailCard'>
        <img src="/prakriti_logo_transparent.png" alt="photo" />
        <p>Crafting architectural legacies through the lens of quiet luxury and artisanal precision since 2012.</p>
      </div>

     
      <div className="DetailCard">
        <h3>Connect</h3>
        <span id="Phone"><FaPhone size={12}/>  +91 9061911970</span>
        <a className='Link' href="https://www.instagram.com/prakritiarchitectsandinteriors?igsh=MTFxeTYxM2JmemdpNA==">Instagram</a>
        <a className='Link' href="https://www.facebook.com/">Facebook</a>
        <a className='Link' href="https://x.com/">Twitter</a>
        <a className='Link' href="https://wa.me/919061911970">WhatsApp</a>
        <a
  href="mailto:prakritiarchitectsandinteriors@gmail.com?subject=Interior%20Design%20Consultation&body=Hello%20Prakriti%20Interiors,%20I%20would%20like%20to%20discuss%20my%20project."
className='Link' >
  Contact On Email
</a>
      </div>
    
<div className='DetailCard'>
        <FaHouse className='contact-icon'/>
        <p id='Address'>CVC HOMES, GROUND FLOOR FLAT NO . GB OPPOSITE
14 AIRMEN SELECTION CENTER . OLIMUGAL MASJID
SEAPORT AIRPORT ROAD,THRIKKAKARA,KAKKANAD
KERALA, 682030</p>
      </div>

    
    </div>
  )
}
export default PrakritiBottom;
