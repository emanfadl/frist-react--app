import React, { useEffect } from 'react'
import './services.css'
import Aos from "aos";
import "aos/dist/aos.css"
import { Figure } from 'react-bootstrap'
import Booking from './../../imgs/booking.png'
import Delivery from './../../imgs/delivery.png'
import Discount from './../../imgs/discount.png'
const Services = () => {
  useEffect(() => {
    Aos.init({duration:3000});
  },[]) ;
  return (
    <div className="services" dir="rtl" data-aos="fade-right">
    <div className="container">
     <h1>خدماتنا</h1>
     
     <Figure>
     <Figure.Image
      
       alt="171x180"
       src={Booking}
     />
     <Figure.Caption>
     حجز تذاكر الطيران
     </Figure.Caption>
   </Figure>
   <Figure>
     <Figure.Image
      
       alt="171x180"
       src={Delivery}
     />
     <Figure.Caption text-center>
     وصول التذاكر إلى المنزل
     </Figure.Caption>
   </Figure>
   <Figure>
   <Figure.Image
    
     alt="171x180"
     src={Discount}
   />
   <Figure.Caption >
  عروض اليوم
   </Figure.Caption>
 </Figure>
    </div>
    </div>
 
  )
}

export default Services
