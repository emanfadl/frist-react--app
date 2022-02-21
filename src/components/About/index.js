import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import './about.css'
import Plane from'./../../imgs/plane.png'
const About = () => {
  useEffect(() => {
    Aos.init({duration:3000});
  },[]) ;
  return (
    <div className="about" dir="rtl" data-aos="fade-up">
    <div className="container">
     <div className="row">
     <div className="col-md-5">
   <h3>من نحن ؟</h3>
     <img src={Plane} alt="plane"  width="600px" />
     </div>
     <div className="col-md-2"> </div>
     <div className="col-md-4">
     <h6> شركه رائده فى حجز التذاكر منذ اكثر من 21 عاما</h6>
     <p>  (R5) وكيل خدمات الطيران الاردني 
     </p>
     <p>أفضل واحد (1) طيران العربية للطيران
     </p>
      <p>أفضل واحد (1) شركة طيران تاركو
      </p>
      <p>افضل واحد (1) طيران ليبيا
      </p>
     </div>
     </div>
     </div>
   </div>
  )

}

export default About
