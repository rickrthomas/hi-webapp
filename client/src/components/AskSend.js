import React, { Component } from 'react';
import ask from '../img/ask.png';
import send from '../img/send.png';



class AskSend extends Component {
  render() {
    return (
      <div className="askSendContainer">
      <div className="askDiv">  
      <a href="/disclaimer" className="askSendText hoverable"  style={{ textDecoration: 'none' }}>
        REQUEST HEALING
      </a>
     </div> 
      <div className="space">
      <p></p>
      </div>
      <div className="sendDiv">
      <a href="/instructions" className="askSendText hoverable" style={{ textDecoration: 'none' }}>
      SEND HEALING
        </a>
        </div>
      {/* <div className="askSendContainer">
      <div className="sendDiv askSendPic">
        <a href="/disclaimer" className="askSendText" style={{ textDecoration: 'none' }}> <img src ={ask}  alt="Request Healing"></img>
        </a>
      </div>
       <div className="askDiv askSendPic">
        <a href="/instructions" className="askSendText" style={{ textDecoration: 'none' }}><img src={send}  alt="Send Healing"></img>
        </a>
        </div>
      </div>
      */}
    </div>
    
    )
  }
};



export default AskSend;