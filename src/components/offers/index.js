import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css"
import Navbar from './../../components/Navs'
import Offer1 from './../../imgs/offer1.png'
import Offer2 from './../../imgs/offer2.png'
import Offer3 from './../../imgs/offer3.png'
import Offer4 from './../../imgs/offer4.png'
import Offer5 from './../../imgs/offer5.png'
import Offer6 from './../../imgs/offer6.png'
import Offer7 from './../../imgs/offer7.png'
import Offer8 from './../../imgs/offer8.png'
import Img from './../../imgs/img.png'
import './offers.css'
const Offers = () => {
  useEffect(() => {
      Aos.init({duration:3000});
    },[]) ;
  return (
    <div dir="rtl">
      <Navbar />
      <div className="offershome" dir="rtl">
    <div className="container">
     <h1>العروض</h1>
     <p>لدينا عروض سفر لجميع دول العالم ,يمكنك مشاهده دول  العالم الان</p>
    <div className="box">
    <div className="row">
 <div className="col-md-3" data-aos="zoom-in-left" >
 <img src={Offer1} alt="offer1" />
 <div className="title">
 <h5>الكويت</h5>
 </div>
 </div>
 <div className="col-md-3" data-aos="zoom-in-left">
 <img src={Offer2} alt="offer1" />
 <div className="title">
 <h5>السعوديه</h5>
 </div>
 </div>
 <div className="col-md-3" data-aos="zoom-in-left">
 <img src={Offer3} alt="offer1" />
 <div className="title">
 <h5>قطر</h5>
 </div>
 </div>
 <div className="col-md-3 " data-aos="zoom-in-left">
 <img src={Offer4} alt="offer1" />
 <div className="title">
 <h5>البحرين</h5>
 </div>
 </div>
    </div>
    <div className="row">
 <div className="col-md-3"  data-aos="zoom-in-down">
 <img src={Offer5} alt="offer1" />
 <div className="title">
 <h5>فرنسا</h5>
 </div>
 </div>
 <div className="col-md-3"  data-aos="zoom-in-down">
 <img src={Offer6} alt="offer1" />
 <div className="title">
 <h5>ماليزيا</h5>
 </div>
 </div>
 <div className="col-md-3"  data-aos="zoom-in-down">
 <img src={Offer7} alt="offer1" />
 <div className="title">
 <h5>روسيا</h5>
 </div>
 </div>
 <div className="col-md-3 "  data-aos="zoom-in-down">
 <img src={Offer8} alt="offer1" />
 <div className="title">
 <h5>جزر المالديف</h5>
 </div>
 </div>
    </div>
    <div className="row">
 <div className="col-md-3" data-aos="zoom-in-up" >
 <img src={Offer5} alt="offer1" />
 <div className="title">
 <h5>فرنسا</h5>
 </div>
 </div>
 <div className="col-md-3" data-aos="zoom-in-up">
 <img src={Offer6} alt="offer1" />
 <div className="title">
 <h5>ماليزيا</h5>
 </div>
 </div>
 <div className="col-md-3" data-aos="zoom-in-up">
 <img src={Offer7} alt="offer1" />
 <div className="title">
 <h5>روسيا</h5>
 </div>
 </div>
 <div className="col-md-3 " data-aos="zoom-in-up">
 <img src={Offer8} alt="offer1" />
 <div className="title">
 <h5>جزر المالديف</h5>
 </div>
 </div>
    </div>
    <div className="row">
 <div className="col-md-3" data-aos="zoom-in-up" >
 <img src={Offer5} alt="offer1" />
 <div className="title">
 <h5>فرنسا</h5>
 </div>
 </div>
 <div className="col-md-3" data-aos="zoom-in-up">
 <img src={Offer6} alt="offer1" />
 <div className="title">
 <h5>ماليزيا</h5>
 </div>
 </div>
 <div className="col-md-3" data-aos="zoom-in-up">
 <img src={Offer7} alt="offer1" />
 <div className="title">
 <h5>روسيا</h5>
 </div>
 </div>
 <div className="col-md-3 " data-aos="zoom-in-up">
 <img src={Offer8} alt="offer1" />
 <div className="title">
 <h5>جزر المالديف</h5>
 </div>
 </div>
    </div>
   </div>
 <div  className="Details">
   <div className="row">
   <div className="col-md-4" data-aos="zoom-in-up">
   <img src={Img} alt="" />
   <div className="title">
   <h5>فرنسا</h5>
   </div>
   <Link to="/Serve">
   <button>احجز الان</button> </Link>
   </div>
   <div className="col-md-6" data-aos="fade-up">
   <h4>من و إلي القاهرة والاسكندرية</h4>
   <h3> تفاصيل الرحلة :</h3>
   <h6>
     البرنامج يشمل التالي : <br />
 . الإقامة الفندقية مع الإفطار  <br />
 …...05  ليالي <br />
 …… 02 ليلة في  <br />
 …..  02 ليلة في <br/>
 الاستقبال و التوديع في المطار <br />
 سيارة خاصة مع سائق خاص . <br />
 الجولات السياحية ( 7 أيام فقط . من دون اليوم الحر)
 <br/>
  عدد 2 شريحة انترنت مع كل سيارة . <br />
  … سعر الشخصين في الغرفة المزدوجة يبدأ من 6900 ريال سعودي  <br/> 
 يمكنك استخراج التأشيرات من خلالنا عند حجز البرنامج
 <br />
كما يتوفر لدينا خدمه عملاء بالعربي في * 

</h6>
   </div>

   </div>
   </div>
     </div>
     </div>
     </div>
   
  )
}

export default Offers
