import React from 'react'
import './footer.css'
import Location from './../../imgs/location.png'
import Call from './../../imgs/call.png'
import Email from './../../imgs/email.png'
const Footer = () => {
  return (
    <div className="footer" dir="rtl">
      <div className="container">
      <div className="row">
     <div className="col-md-4 ">
    <ul className="location" >
       <li>
          <img src={Location} alt="" />
              القاهرة - ۲٦ش شريف -ش قصر النيل - بجوار البنك المركزي - عمارة الايموبليا
         
          </li>
          <li>
  المنصورة- ۳ش فخر الدين خالد امام مصر الطيران
            Egypt , Mansoura , Cairo
            
          </li>
          <li>
          المحلة - 23 ش يوليو بجوار قسم ثان - ميدان الشون
            Egypt , Mansoura , Cairo 
          </li>
          
        </ul>
      </div>
  <div className="col-md-4 ">
          <ul >
          <li>
          <img src={Call} alt="" />
            Cairo
          </li>
          <li>
            23909084-0223909081(+2)
              </li>
          <li>
         01006969678(+2)
           </li>
          <li>
          Mansoura
          </li>
          <li>
            0502338860-0502330389(+2)
           </li>
          <li>
            01000002279-01000007446(+2)
            </li>
          <li>
            01000733402-01000733409(+2)
           </li>
          <li>
         01000257337-01000257331(+2)
          </li>
        <li>
     01018032221 - 01013196767(+2)
         </li>
      <li>
      01000580236 - 01000580231(+2)
      </li>
    <li>
    01000580323 - 01000580424(+2)
    </li>
  <li>
  01000580301 - 01006969678
</li>
        </ul>
      </div>
      <div className="col-md-4">
      <ul>
      <li>
      <img src={Email} alt="" />
      info@elmageed-tours.com
      </li>
      
      <li style={{paddingTop:"20px"}}> - Elmageed Tours 
      </li>

      <li>المجيد للسياحة الوكيل العام
      </li>
      <li>  (R5)للاردنية للطيران في مصر </li>
      </ul>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
