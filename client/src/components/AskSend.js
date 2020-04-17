import React, { Component } from 'react';
//import ask from '../img/ask.png';
//import send from '../img/send.png';
//import { BrowserRouter, Link } from 'react-router-dom';
//import DisclaimerModal from './DisclaimerModal.js';

class AskSend extends Component {
  render() {
    return (
      <div className="container">
      <h4 >Welcome to Healer's Intent!</h4>
      <p >
        Healer's Intent is a community of healers. We strive to join people together for the purpose of healing each other through distance healing.
      </p>
      </div>
      
//      <BrowserRouter>
//    
//      <div className="askSendContainer">
//      <div className="askDiv">  
//      <Link to="/disclaimer" className="askSendText hoverable"  >
//        REQUEST HEALING
//      </Link>
//     </div> 
//      <div className="space">
//      <p></p>
//      </div>
//      <div className="sendDiv">
//      <Link to="/instructions" className="askSendText hoverable" style={{ textDecoration: 'none' }}>
//      SEND HEALING
//        </Link>
//        </div>
//
//
//
//      <div className="askSendContainer">
//      <div className="sendDiv askSendPic">
//        <a href="/disclaimer" className="askSendText" style={{ textDecoration: 'none' }}> <img src ={ask}  alt="Request Healing"></img>
//        </a>
//      </div>
//       <div className="askDiv askSendPic">
//        <a href="/instructions" className="askSendText" style={{ textDecoration: 'none' }}><img src={send}  alt="Send Healing"></img>
//        </a>
//        </div>
//      </div>
//      
//    </div>
//    </BrowserRouter>
  

    )
  }
};



export default AskSend;