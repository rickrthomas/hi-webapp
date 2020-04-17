import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'; 
class DisclaimerModal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
        window.location.assign('/request');
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <BrowserRouter>
        
      <h5>Request Healing through the button below</h5>
        <a
          className="waves-effect waves-light orange btn modal-trigger"
          data-target="modal1"
        >
          REQUEST HEALING
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">
            <h4>DISCLAIMER & CONDITIONS</h4>
            <ul>
              <h5 className="disclaimerheader">Last Updated 4.16.2020</h5>
                <h5 className="disclaimerheader">Posting sensitive information</h5>
                  <li className="disclaimer">Any information you post will be available to anyone that accesses the Healer's Intent WebApp. All requests will be automatically deleted from our databases after 7 days.
                  </li>
                <h5 className="disclaimerheader">Using Healer's Intent in place of Modern Medicine</h5>
                  <li className="disclaimer">Healer's Intent is intended to be supplemental to modern medical practices and does not condone not utilizing professional medical practices.
                  </li>
                  <li className="disclaimer">Rick Thomas ("us", "we", or "our") operates http://www.HealersIntent.com (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. The information contained on HealersIntent website (the "Service") is for general information purposes only. Rick Thomas assumes no responsibility for errors or omissions in the contents on the Service. In no event shall Rick Thomas be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Rick Thomas reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice. Rick Thomas does not warrant that the website is free of viruses or other harmful components. External links disclaimer: HealersIntent website may contain links to external websites that are not provided or maintained by or in any way affiliated with Rick Thomas Please note that the Rick Thomas does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                  </li>
                  <li className="disclaimer">We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
                  </li>
                <h5 className="disclaimerheader">Information Collection And Use</h5>
                  <li className="disclaimer">While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").
                  </li>
                <h5 className="disclaimerheader">Log Data</h5>
                  <li className="disclaimer">Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").
This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.
                  </li>
                <h5 className="disclaimerheader">Communications</h5>
                  <li className="disclaimer">We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information.
                  </li>
                <h5 className="disclaimerheader">Cookies</h5>
                  <li className="disclaimer">Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                  </li>
                <h5 className="disclaimerheader">Security</h5>
                  <li className="disclaimer">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                  </li>
                <h5 className="disclaimerheader">Changes To This Privacy Policy</h5>
                  <li className="disclaimer">This Privacy Policy is effective as of 1.10.20 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
If you have any questions about this Privacy Policy, please contact us.
                  </li>
              </ul>
          </div>
          <div class="modal-footer">
            <Link to="/" className="item">
            <button  className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </button>
            </Link>
            <Link to="/request" className="item">
            <button  className="modal-close waves-effect waves-green btn-flat">
              AGREE
            </button>
            </Link>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default DisclaimerModal;