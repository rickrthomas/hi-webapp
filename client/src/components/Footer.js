import React from 'react';
import IntentionLogo from '../img/Intention_Logo.png'
import {Link} from 'react-router-dom';


function Footer() {
    return (
        <div className="footerdiv">
          <footer className="page-footer">
              <div ></div>
                <img src={IntentionLogo} alt="Healer's Intent Brand Logo" className="footer-logo"></img>
                <br></br>
                <h5 className="white-text">HEALER'S INTENT</h5>
                <ul>
                  <li><Link to="/about" className="white-text" >ABOUT</Link></li>
                  <li><Link to="/resources" className="white-text">RESOURCES</Link></li>
                  <li><Link to="/contact" className="white-text">CONTACT</Link></li>
                </ul>

            
             
          
   
          <div className="footer-copyright">
            <div className="container">
            © 2020 TruBlu Art & Design
            <a className="grey-text text-lighten-4 right" href="#!"></a>
            </div>
          </div>
        </footer>   
        </div>
    );
}

export default Footer; 
           