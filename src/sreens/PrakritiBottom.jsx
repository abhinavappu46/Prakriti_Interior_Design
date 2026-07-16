import '../styles/PrakritiBottom.css'
import { FaHouse, FaPhone, FaInstagram, FaFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import logo from "../assets/prakriti.jpeg"

function PrakritiBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='MainBottomContainer'>
      <div className='FooterGrid'>
        
        {/* Brand Column */}
        <div className='FooterColumn BrandColumn'>
          <div className='FooterLogoDiv'>
            <img src={logo} alt="Prakriti Interiors Logo" />
            <h2>Prakriti</h2>
          </div>
          <p className='BrandDesc'>
            Crafting architectural legacies through the lens of quiet luxury, meticulous design, and artisanal precision since 2012.
          </p>
        </div>

        {/* Links Column */}
        <div className='FooterColumn LinksColumn'>
          <h3>Quick Links</h3>
            <ul className='FooterLinks'>
              <li><a href='#Home'>Home</a></li>
              <li><a href='#About'>About Us</a></li>
              <li><a href='#Service'>Services</a></li>
              <li><a href='#Projects'>Projects</a></li>
              <li><a href='#consultation'>Book Consultation</a></li>
            </ul>
        </div>

        {/* Contact Column */}
        <div className='FooterColumn ContactColumn'>
          <h3>Connect</h3>
          <div className='ContactItem'>
            <FaPhone className='FooterIcon' />
            <a href='tel:+919061911970' className='ContactLink'>+91 90619 11970</a>
          </div>
          <div className='ContactItem'>
            <MdEmail className='FooterIcon' />
            <a href='mailto:prakritiarchitectsandinteriors@gmail.com?subject=Interior%20Design%20Consultation' className='ContactLink'>prakritiarchitectsandinteriors@gmail.com</a>
          </div>
          
          {/* Social Icons row */}
          <div className='SocialRow'>
            <a href="https://wa.me/919061911970" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="SocialCircle">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/prakritiarchitectsandinteriors?igsh=MTFxeTYxM2JmemdpNA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="SocialCircle">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="SocialCircle">
              <FaFacebook />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="SocialCircle">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Location Column */}
        <div className='FooterColumn LocationColumn'>
          <h3>Our Studio</h3>
          <div className='AddressBox'>
            <FaHouse className='FooterIcon location-icon' />
            <p id='Address'>
              CVC Homes, Ground Floor Opp. 14 Airmen Selection Center, Olimugal Masjid Opp., Seaport-Airport Road, Thrikkakara, Kakkanad, Kerala, 682030
            </p>
          </div>
        </div>

      </div>

      {/* Footer Bottom copyright bar */}
      <div className='FooterCopyrightBar'>
        <p>&copy; {currentYear} Prakriti Architects & Interiors. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default PrakritiBottom;
