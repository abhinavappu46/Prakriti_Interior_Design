import React from 'react'
import '../styles/PrakritiConsultant.css'
import picture from '../assets/screen.png'
function PrakritiConsultant() {
  return (
    <div className='MainConsultantContainer'>
      <div className='FromContainerDiv'>
        <div className='FromContainer1'>

          <img src={picture} alt='photo'></img>
          <div className='TextDiv'>
            <h1>Start Your</h1>
            <h1>Project</h1>
            <p>schedule a private consultation at office</p></div>

        </div>
        <div className='FromContainer2'>




          <form>
            <div className='FromContainer2label'><label>Full Name</label><br />
              <input placeholder='Enter Name' className='InputGroup' type='text'></input><br /></div>
            <div className='FromContainer2label'><label>Email</label><br />
              <input placeholder='Enter Email' className='InputGroup' type='Email'></input><br /></div>
            <div className='FromContainer2label'><label>Phone No</label><br />
              <input placeholder='Enter Phone number' className='InputGroup' type='text'></input><br /></div>
            <div className='FromContainer2label'><label>Project Type</label><br />

              <select className='InputGroup'>
                <option >Resident Villa</option>
                <option >Building Project</option>
                <option >other</option>
              </select>
            </div>
            <button>Sent Request</button>


          </form>



        </div>



      </div>
    </div>
  )
}
export default PrakritiConsultant;