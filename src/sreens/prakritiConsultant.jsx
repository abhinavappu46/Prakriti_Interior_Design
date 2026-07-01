import React from 'react'
import { useState } from 'react';
import '../styles/PrakritiConsultant.css'
import picture from '../assets/screen.png'
import api from '../../Api call/Api';
import emailjs from "@emailjs/browser";
function PrakritiConsultant() {
  const [Loading,setLoading]=useState(false);
const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Service: ""
});
const handleChange = (e) => {

    setFormData({

        ...formData,

        [e.target.name]: e.target.value

    });

};

const HandleRequest= async(e)=>{

   e.preventDefault();
   setLoading(true);
   try {
    await emailjs.send(

            "service_6g1m4ob",

            "template_jwrydm4",

            {

                Name: formData.Name,

                Email: formData.Email,

                Phone: formData.Phone,

                Service: formData.Service

            },

            "cpyOUbfmFj-L3e-U3"

        );

    
const res= await api.post("/consultation",formData);
alert(res.data.message);
setFormData({
    Name: "",
    Email: "",
    Phone: "",
    Service: ""
});



   } catch (error) {
    alert(error.response?.data?.message || error.message ||
        "Something went wrong");
        console.log(error);
   } finally{
    setLoading(false);
   }


}






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




          <form onSubmit={HandleRequest}>
            <div className='FromContainer2label'><label>Full Name</label><br />
              <input placeholder='Enter Name' className='InputGroup' type='text' name='Name' value={formData.Name} onChange={handleChange}></input><br /></div>
            <div className='FromContainer2label'><label>Email</label><br />
              <input placeholder='Enter Email' className='InputGroup' type='Email' name='Email' value={formData.Email} onChange={handleChange}></input><br /></div>
            <div className='FromContainer2label'><label>Phone No</label><br />
              <input placeholder='Enter Phone number' className='InputGroup' type='text' name='Phone' value={formData.Phone} onChange={handleChange}></input><br /></div>
            <div className='FromContainer2label'><label>Project Type</label><br />

              <select className='InputGroup' name='Service' value={formData.Service} onChange={handleChange}>
                <option value="">Select Project Type</option>
                <option value="Resident Villa">Resident Villa</option>
                <option value="Building Project" >Building Project</option>
                <option value="other">other</option>
              </select>
            </div>
            <button type='submit' disabled={Loading}>{Loading ? "sending..":"Sent Request"}</button>


          </form>



        </div>



      </div>
    </div>
  )
}
export default PrakritiConsultant;