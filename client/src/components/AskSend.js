import React, { Component } from 'react';
import ask from '../img/ask.png';
import send from '../img/send.png';
import {Link} from 'react-router-dom';


class AskSend extends Component {
  render() {
    return (
      <div>
      
      <div className="askSendContainer">
     
        <Link to="/disclaimer" className="askSendText" style={{ textDecoration: 'none' }}> <img src ={ask} className="askSendPic" alt="Ask for Healing"></img></Link>
      </div>  
      
       
        <Link to="/instructions" className="askSendText" style={{ textDecoration: 'none' }}><img src={send} className="askSendPic" alt="Send Healing"></img></Link>
      </div>
    
    
    )
  }
};



export default AskSend;