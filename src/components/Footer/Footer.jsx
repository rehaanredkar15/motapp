import React from 'react'
import './Footer.css';


const Footer = () => {
    return (
        <div className="Footer">
         <div className="FooterTop">
            <h2>MOT</h2>
            <p>we help you ease your life digitally</p>
            <input type="text" className="EmailInput" placeholder="Enter email to get Notifications" />
            <button className="Subcribe">Subscribe</button>
         </div>
         <div className="FooterBottom">
           <div className="FooterSections">
             <h4>Platform</h4>
             <ul className="subsectionlist">
              <li className="subsections">News</li>
              <li className="subsections">Careers</li>
              <li className="subsections">Registration</li>
             </ul>
           </div>
           <div className="FooterSections">
            <h4>Why MoT</h4>
             <ul className="subsectionlist">
              <li className="subsections">Our Story</li>
              <li className="subsections">Expert Solution</li>
             </ul>
           </div>
           <div className="FooterSections">
            <h4>Support</h4>
              <ul className="subsectionlist">
              <li className="subsections">About Us</li>
              <li className="subsections">FAQs</li>
              <li className="subsections">Privacy Policy</li>
              <li className="subsections">help</li>
             </ul>
           </div>
           <div className="FooterSections">
            <h4>Get in Touch</h4>
              <ul className="subsectionlist">
              <li className="subsections">jhondoe@gmail.com</li>
              <li className="subsections">facebook instagram linkedin</li>
             </ul>
           </div>
         
         </div>
        </div>
    )
}

export default Footer
