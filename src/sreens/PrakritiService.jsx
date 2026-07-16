import '../styles/PrakritiService.css'
import picture1 from '../assets/screen.png'
import picture3 from '../assets/Living.png'
import picture4 from '../assets/bedroom.png'

function PrakritiService() {
  return (
    <div className='MainContainerService'>
      <div className='ServiceHeader animate-fade-in'>
        <h5>Our Offerings</h5>
        <h1>Tailored Design Solutions</h1>
        <p>Bespoke interior spaces crafted with architectural integrity, premium materials, and flawless execution.</p>
      </div>
      
      <div className='ServiceGrid animate-slide-up'>
        <div className='ServiceCard'>
          <div className='ServicePicture'>
            <img src={picture1} className='serviceimg' alt='Kitchen design' />
          </div>
          <div className='ServiceDetails'>
            <h1>Precision Kitchens</h1>
            <p className='ServiceDescription'>Culinary spaces designed with German engineering standards and Italian aesthetic flair.</p>
            <ul>
              <li>Base cabinet configurations</li>
              <li>Overhead soft-close cabinets</li>
              <li>Premium Hettich accessories</li>
            </ul>
          </div>
        </div>

        <div className='ServiceCard'>
          <div className='ServicePicture'>
            <img src={picture3} className='serviceimg' alt='Living room design' />
          </div>
          <div className='ServiceDetails'>
            <h1>Architectural Living</h1>
            <p className='ServiceDescription'>Expansive communal spaces that perfectly balance grand volume with intimate, modern comfort.</p>
            <ul>
              <li>Bespoke TV & custom wash units</li>
              <li>Designer ceiling & custom partitions</li>
              <li>Wall paneling & premium 3-seater sofas</li>
            </ul>
          </div>
        </div>

        <div className='ServiceCard'>
          <div className='ServicePicture'>
            <img src={picture4} className='serviceimg' alt='Bedroom design' />
          </div>
          <div className='ServiceDetails'>
            <h1>Elegant Bedrooms</h1>
            <p className='ServiceDescription'>Modern elegance meets everyday comfort, crafted specifically for peaceful, luxurious living.</p>
            <ul>
              <li>Integrated dressing unit & wardrobes</li>
              <li>Sleek side tables & wall back-paneling</li>
              <li>Premium king-size coat & designer ceilings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrakritiService;