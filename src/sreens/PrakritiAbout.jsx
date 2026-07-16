import '../styles/PrakritiAbout.css'
import picture1 from '../assets/new.jpg'

function PrakritiAbout() {
  return (
    <div className='MainAboutDiv'>
      <div className='AboutCard animate-slide-up'>
        <h5>About Us</h5>
        <h1>Crafting Spaces,</h1>
        <h1 className='GoldHighlight'>Enriching Lives.</h1>
        <p>At Prakriti Interiors, we believe every home should reflect the unique essence of its occupants. Through meticulous architectural planning, premium curated materials, and timeless design paradigms, we create elegant interiors that harmoniously combine bespoke comfort, modern functionality, and enduring beauty.</p>
        
        <ul className='AboutList'>
          <li>
            <svg className="GoldCheck" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
            </svg>
            <span>20-Year Replacement Warranty</span>
          </li>
          <li>
            <svg className="GoldCheck" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
            </svg>
            <span>Seamless Project Completion in 45 Days</span>
          </li>
          <li>
            <svg className="GoldCheck" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
            </svg>
            <span>First Year Free Service & Maintenance</span>
          </li>
          <li>
            <svg className="GoldCheck" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
            </svg>
            <span>Precision Factory Finish Manufacturing</span>
          </li>
        </ul>
      </div>   

      <div className='imageDiv animate-fade-in'>
        <img src={picture1} alt="Bespoke luxury interior design rendering" />
        <div className='ImageInfo'>
          <h2>Luxury Living</h2>
          <p>Modern • Elegant • Functional</p>
        </div>
      </div>
    </div>
  )
}

export default PrakritiAbout;
