import React from 'react'
import '../styles/PrakritiService.css'
import picture1 from '../assets/screen.png'
import picture3 from '../assets/Living.png'
import picture4 from '../assets/bedroom.png'
 function PrakritiService() {
  return (
    <div className='MainContainerService'>
      
  <div className='ServiceCard'>
    <div className='ServicePicture'>
    <img src={picture1} className='serviceimg' alt='kitchen picture' /></div>
    <h1>precision kitchens </h1>
    <p className='ServiceDescription'>Culinary spaces designed with German engineering standards and 
        Italian aesthetic flair.</p>
    <h2></h2>
    <ul>
        <li>Base cabinet</li>
        <li>over Head Cabinet</li>
        <li>Hettich Accessories</li>
    </ul>
  </div>

  <div className='ServiceCard'>
    <div className='ServicePicture'>
    <img src={picture3} className='serviceimg' alt='kitchen picture' /></div>
    <h1>Architectural Living </h1>
    <p className='ServiceDescription'>Expansive communal spaces that balance grand volume with intimate comfort.
    </p>
    <h2></h2>
    <ul>
        <li>Tv Unit & wash unit</li>
        <li>ceiling & Partition</li>
        <li>Wall Paneling & 3 Seater Sofa</li>
    </ul>
  </div>

  <div className='ServiceCard'>
    <div className='ServicePicture'>
    <img src={picture4} className='serviceimg' alt='kitchen picture' /></div>
    <h1>Elegant Bedrooms </h1>
    <p className='ServiceDescription'>Modern elegance meets everyday comfort.
Crafted for peaceful, luxurious living.</p>
    <h2></h2>
    <ul>
        <li>Dressing unit & Waldrop</li>
        <li>Side Table & Wall Back paneling</li>
        <li>King Size Coat & celing</li>
    </ul>
  </div>
    </div>
  )
}
export default PrakritiService;