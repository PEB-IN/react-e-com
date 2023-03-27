import React from 'react'
import img from "../../../assets/image/master.png"
import img1 from "../../../assets/image/visa.png"
import img2 from "../../../assets/image/paytm.png"

const Footer = () => {
  return (
    <div className='end'>
      <div className='container gap'>
          <div className='row'>
              <div className='col-md-3'>
                <p id='quality'>high quality. stylish dress</p>
              </div>
              <div className='col-md-2'>
                <h5>SHOP</h5>
                <p>All Collections</p>
                <p>Winter Edition</p>
                <p>Discount</p>
              </div>
              <div className='col-md-2'>
                <h5>COMPANY</h5>
                <p>About Us</p>
                <p>Contact</p>
                <p>Afflicates</p>
              </div>
              <div className='col-md-2'>
                <h5>SUPPORT</h5>
                <p>FAQs</p>
                <p>Cookie POlicy</p>
                <p>Terms of Use</p>
              </div>
              <div className='col-md-3'>
                <h5>PAYMENTMETHODS</h5>
                <div className='row lay'>
                  <div className='column'>
                   <a href='https://www.mastercard.co.in/en-in.html' target="_blank"><img src={img}/></a> 
                  </div>
                  <div className='column'>
                    <a href='https://www.visa.co.in/' target="_blank"><img src={img1}/></a>
                  </div>
                  <div className='column'>
                    <a href='https://paytm.com/' target="_blank"><img src={img2}/></a>
                  </div>
                </div>
              </div>
          </div>
          <hr/>
          <p id='bottom'>Copyright @2022 Nostra.All right reserved</p>
      </div>
    </div>
   
  );
};

export default Footer
