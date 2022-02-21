import React, { useEffect } from 'react'
import './offerhome.css'
import Aos from "aos";
import "aos/dist/aos.css"
import Offer1 from './../../imgs/offer1.png'
import Offer2 from './../../imgs/offer2.png'
import Offer3 from './../../imgs/offer3.png'
import Offer4 from './../../imgs/offer4.png'
import Offer5 from './../../imgs/offer5.png'
import Offer6 from './../../imgs/offer6.png'
import Offer7 from './../../imgs/offer7.png'
import Offer8 from './../../imgs/offer8.png'
const Offershome = () => {
  useEffect(() => {
    Aos.init({duration:3000});
  },[]) ;
  return (
    <div className="offershome" dir="rtl" data-aos="fade-up">
    <div className="container">
    <h1>العروض</h1>
    <p>لدينا عروض سفر لجميع دول العالم ,يمكنك مشاهده دول  العالم الان</p>
   <div className="box" >
   <div className="row">
<div className="col-md-3" data-aos="zoom-in" >
<img src={Offer1} alt="offer1" />
<div className="title">
<h5>الكويت</h5>
</div>
</div>
<div className="col-md-3" data-aos="zoom-in">
<img src={Offer2} alt="offer1" />
<div className="title">
<h5>السعوديه</h5>
</div>
</div>
<div className="col-md-3" data-aos="zoom-in">
<img src={Offer3} alt="offer1" />
<div className="title">
<h5>قطر</h5>
</div>
</div>
<div className="col-md-3 " data-aos="zoom-in">
<img src={Offer4} alt="offer1" />
<div className="title">
<h5>البحرين</h5>
</div>
</div>
   </div>
   <div className="row">
<div className="col-md-3" data-aos="zoom-in" >
<img src={Offer5} alt="offer1" />
<div className="title">
<h5>فرنسا</h5>
</div>
</div>
<div className="col-md-3" data-aos="zoom-in">
<img src={Offer6} alt="offer1" />
<div className="title">
<h5>ماليزيا</h5>
</div>
</div>
<div className="col-md-3" data-aos="zoom-in">
<img src={Offer7} alt="offer1" />
<div className="title">
<h5>روسيا</h5>
</div>
</div>
<div className="col-md-3 " data-aos="zoom-in">
<img src={Offer8} alt="offer1" />
<div className="title">
<h5>جزر المالديف</h5>
</div>
</div>
   </div>
  </div>
  </div>
  
    </div>
  )
}

export default Offershome
