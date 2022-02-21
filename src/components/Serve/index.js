import React from 'react'
import './serve.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './../../components/Navs'
import  Serve1 from './../../imgs/serve1.png'
import  Serve2 from './../../imgs/serve2.png'
import  Serve3 from './../../imgs/serve3.png'
import Whats from './../../imgs/whatsapp.png'
import Call from './../../imgs/call.png'
const serve = () => {
  return (
    <div className="Serve"> 
  
      <Navbar />
      <h1 dir="rtl">احجز الان </h1> 
      <OwlCarousel className='owl-theme' loop  margin={5}  autoplay items="1"  >
    <div className='item'>
        <img src={Serve1}  alt="" />
        <div className="title" dir="rtl">
        <h5>فرنسا</h5>
        </div>
    </div>
    <div className='item'>
    <img src={Serve2}  alt="" />
    <div className="title" dir="rtl">
    <h5>فرنسا</h5>
    </div>
    </div>
    <div className='item'>
    <img src={Serve3}  alt="" />
    <div className="title" dir="rtl">
    <h5>فرنسا</h5>
    </div>
    </div>
   
   
</OwlCarousel>
<div className="contactus">
<button className="whats"> Whats app <img src={Whats} alt="" /></button>
<button className="Call"><img src={Call} alt="" /> اتصال</button>
</div>
    </div>
   
  
  )
}

export default serve
