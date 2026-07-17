import { useState, useEffect, useRef } from 'react'
import '../styles/PrakritiConsultant.css'
import picture from '../assets/screen.png'
import api from '../../Api call/Api'
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"

function PrakritiConsultant() {
  const [Loading, setLoading] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Service: ""
  });

  const sectionRef = useRef(null);
  const [animationClass, setAnimationClass] = useState('');

  // Keep track of scroll direction and page load
  const prevScrollY = useRef(0);
  const scrollDirection = useRef('down');
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        scrollDirection.current = 'down';
      } else if (currentScrollY < prevScrollY.current) {
        scrollDirection.current = 'up';
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play animation if first page load OR if scroll direction is DOWN
          if (isFirstLoad.current || scrollDirection.current === 'down') {
            setAnimationClass('reveal-active');
            isFirstLoad.current = false;
          } else {
            // Upward scroll after first load: load instantly (no animation)
            setAnimationClass('reveal-instant');
          }
        } else {
          // Remove the animation class after leaving the viewport
          setAnimationClass('');
        }
      },
      {
        threshold: 0.15, // Starts when 15% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const HandleRequest = async (e) => {
    e.preventDefault();
    if (formData.Name.trim() === "") {
      toast.error("Please enter your full name.");
      return;
    }
    if (!formData.Email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }
    if (!/^\d{10}$/.test(formData.Phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!emailRegex.test(formData.Email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!formData.Service) {
      toast.error("Please select a project type.");
      return;
    }
    
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

      await api.post("/consultation", formData);
      toast.success("✅ Thank you! We'll contact you within 24 hours.");
      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        Service: ""
      });
    } catch (error) {
      toast.error("❌ Failed to send consultation request.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      ref={sectionRef} 
      className={`MainConsultantContainer ${animationClass}`}
    >
      <div className='FromContainerDiv'>
        <div className='FromContainer1'>
          <img src={picture} alt='Consultation office space' />
          <div className='TextDiv'>
            <h1>Start Your</h1>
            <h1>Project</h1>
            <p>Schedule a private consultation at our design studio</p>
          </div>
        </div>
        
        <div className='FromContainer2'>
          <form onSubmit={HandleRequest}>
            <div className='FromContainer2label stagger-field'>
              <label>Full Name</label>
              <input 
                placeholder='Enter your full name' 
                className='InputGroup' 
                type='text' 
                name='Name' 
                value={formData.Name} 
                onChange={handleChange} 
                 
              />
            </div>
            <div className='FromContainer2label stagger-field'>
              <label>Email Address</label>
              <input 
                placeholder='name@example.com' 
                className='InputGroup' 
                type='email' 
                name='Email' 
                value={formData.Email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className='FromContainer2label stagger-field'>
              <label>Phone Number</label>
              <input 
                placeholder='10-digit mobile number' 
                className='InputGroup' 
                type='tel' 
                name='Phone' 
                maxLength={10} 
                value={formData.Phone} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className='FromContainer2label stagger-field'>
              <label>Project Type</label>
              <select 
                className='InputGroup select-field' 
                name='Service' 
                value={formData.Service} 
                onChange={handleChange}
                required
              >
                <option value="">Select Project Type</option>
                <option value="Modular kitchen">Modular Kitchen</option>
                <option value="Bed Room">Bedroom</option>
                <option value="Kids Room">Kids Room</option>
                <option value="Ceiling">Ceiling & Lighting</option>
                <option value="Tv Unit">TV Unit & Media Console</option>
                <option value="LivingRoom">Living Room</option>
                <option value="other">Other Design Solutions</option>
              </select>
            </div>
            
            <div className="button-wrapper stagger-field">
              <button type='submit' disabled={Loading} className='FormBtn'>
                {Loading ? (
                  <span className="spinner-container">
                    <span className="button-spinner"></span>
                    Sending Request...
                  </span>
                ) : "Schedule Consultation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PrakritiConsultant;