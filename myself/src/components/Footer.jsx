import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className='footer-container py-5 text-white flex flex-col md:flex-row justify-between md:px-96 md:mt-16' style={{backgroundColor:"rgb(0, 10, 45)"}}>
          <div>
              <p>@2024 Prakash Kamble</p>
              <span>All rights reserved</span>
          </div>
          <div className="mt-3 md:mt-0">
              <p><i className="fas fa-phone"></i>&nbsp; &nbsp;Contact : +91 8766421550</p>
              <span><i className="fas fa-envelope"></i>&nbsp; &nbsp;prakashkamble591254@gmail.com</span>
          </div>
      </div>
    </>
  );
}

export default Footer;
