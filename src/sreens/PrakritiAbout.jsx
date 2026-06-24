import React from 'react'
import'../styles/PrakritiAbout.css'
import picture1 from '../assets/new.jpg'
 function PrakritiAbout() {
  return (
    <div className='MainAboutDiv'>
     
     <div className='AboutCard'>
        
        <h5>About us</h5>
        <h1>Crafting Spaces,</h1>
        <h1 style={{color:'#D4AF37'}}>Enriching Lives.</h1>
        <p>At Prakriti Interiors, we believe every home should reflect the people who live in it. Through thoughtful planning, premium materials, and timeless design, we create elegant interiors that combine comfort, functionality, and lasting beauty.</p>
        <ul>
         <li>20 years repalcement warenty</li>
         <li>Project completion in 45 days</li>
         <li>Frist one year free of cost service and maintenance</li>
         <li>Factory Finish</li>


        </ul>
        </div>   
      <div className='imageDiv'>


      <img src={picture1}/>
     <div className='ImageInfo'>
      <h1>Luxury Living</h1>
        <p>Modern • Elegant • Functional</p>



     </div>



      </div>







    </div>
  )
}
export default PrakritiAbout;
