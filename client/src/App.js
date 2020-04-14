import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Footer from './components/Footer.js';
import './App.css';
import TextareaAutosize from 'react-autosize-textarea';
import { Modal, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

import Contact from './components/Contact.js'
import About from './components/About.js';
import Resources from './components/Resources.js';
import Instructions from './components/Instructions.js';

// import AskSend from './components/AskSend.js';

class App extends Component{
  
state = {
  first: '',
  last: '',
  condition: '',
  gender: '',
  age: '',
  city: '',
  region: '',
  country: '',
  description: '',
  email: '',

  yourname: '',
  posts: []
}

componentDidMount = () => {
  this.getBlogPost();
  
};

getBlogPost = () => {
  axios.get('/api')
  .then((response) => {
    const data = response.data;
    this.setState({ posts: data});
    console.log('Data has been received');
  })
  .catch(() => {
    alert('Error retrieving data');
  });
}


//handleChange = (event) => {
//  const target = event.target;
//  const name = target.name;
//  const value = target.value;

handleChange = ({ target }) => {
  const { name, value } = target;
  this.setState({ [name]: value }); 
};
 
//form submit
submit = (event) => {
  event.preventDefault();
  //current state
  const payload = {
    first: this.state.first,
    last: this.state.last,
    condition: this.state.condition,
    gender: this.state.gender,
    age: this.state.age,
    city: this.state.city,
    region: this.state.region,
    country: this.state.country,
    description: this.state.name,
    email: this.state.email,
    yourname: this.state.yourname
};

axios({
  url: '/api/save',      //url where sever is waiting for request
  method: 'POST',  //request type
  data: payload   //data being sent
})
  .then(() => {
    console.log('Data has been sent to the server');
    this.resetUserInputs();
    this.getBlogPost();
  })
  .catch(() => {
    console.log('Internal server error')
  })

};

resetUserInputs = () => {
  this.setState({
    first: '',
    last: '',
    condition: '',
    gender: '',
    age: '',
    city: '',
    region: '',
    country: '',
    description: '',
    email: '',
    yourname: ''
  });
};

displayBlogPost = (posts) => {
  if (!posts.length) return null;

  return posts.map((post, index) => (
    
      <div key={index} className="col s12 m6 container z-depth-2">
        
                    <div className="card">
                        <div className="card-image">
                        <p></p>
                        </div> 
                        <p></p>
                        <p></p>    
                        <h4 className="col s12 m12">{post.first} {post.last}</h4>
                        <hr></hr>
                        <div className="card-content">
                            <div className="row">
                            <div className="col s12 m12 l12">    
                            <p>ADDED BY</p>
                            <hr></hr>
                            <p>{post.yourname}</p>
                            </div>
                                </div>
                                <h5 className="col s12 m12">ABOUT THE PERSON TO BE HEALED</h5>
                                <p></p>
                                <div className="row">
                                <div className="col s12 m6">
                                    <p>GENDER</p>
                                    <hr></hr>
                                <p>{post.gender}</p>
                                </div>
                                <p></p>
                                <div className="col s12 m6">
                                
                                <hr></hr>
                                <p>{post.age}</p>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col s12 m4">
                                <p>CITY</p>
                                <p></p>
                                <hr></hr>
                                <p>{post.city}</p>
                                </div>
                                <div className="col s12 m4">
                                <p>REGION</p>
                                <p></p>
                                <hr></hr>
                                <p>{post.region}</p>
                                </div>
                                <div className="col s12 m4">
                                <p>COUNTRY</p>
                                <p></p>
                                <hr></hr>
                                <p>{post.country}</p>
                                </div>
                                </div>
                                <h5 className="col s12 m12">CONDITIONS</h5>
                                 <p></p>
                                <hr></hr>
                                <div className="col s12 m12">
                                <p>{post.condition}</p>
                                </div>
                              
                                
                        
                        </div>
                     
                    </div>
                </div>
  
  ));

  
}
  render(){
   console.log('State: ', this.state);
   
   const trigger = <Button className="orange">REQUEST HEALING</Button>;
    
    return (
       <BrowserRouter>
      <div className="App">
      
       
        <header className="App-header">
      <NavBar />
      </header>
      
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route path="/instructions" component={Instructions} />
        

  {/* <AskSend />  */}
        <div className="container">
                <h3>HEALING REQUEST</h3>
                
    <div>
    <Modal header="DISCLAIMER & PRIVACY POLICY" trigger={trigger}>
    <div className="Disclaimer container">
    <div className="flow-text">
    
        <h5 className="disclaimerheader">Last updated: 1.10.20</h5>
        <ul>
            <h5 className="disclaimerheader">Posting sensitive information</h5>
            <li className="disclaimer">Any information you post will be available to anyone that accesses the Healer's Intent WebApp. All requests will be automatically deleted from our databases after 7 days.
            </li>
<h5 className="disclaimerheader">Using Healer's Intent in place of Modern Medicine</h5>
<li className="disclaimer">Healer's Intent is intended to be supplemental to modern medical practices and does not condone not utilizing professional medical practices.
</li>
<li className="disclaimer">Rick Thomas ("us", "we", or "our") operates http://www.HealersIntent.com (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. The information contained on HealersIntent website (the "Service") is for general information purposes only. Rick Thomas assumes no responsibility for errors or omissions in the contents on the Service. In no event shall Rick Thomas be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Rick Thomas reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice. Rick Thomas does not warrant that the website is free of viruses or other harmful components. External links disclaimer: HealersIntent website may contain links to external websites that are not provided or maintained by or in any way affiliated with Rick Thomas Please note that the Rick Thomas does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
</li>
<li className="disclaimer">
We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
</li>
<h5 className="disclaimerheader">Information Collection And Use</h5>
<li className="disclaimer">
While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").
</li>
<h5 className="disclaimerheader">Log Data</h5>
<li className="disclaimer">
Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").
This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.
</li>

<h5 className="disclaimerheader">Communications</h5>
<li className="disclaimer">
We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information.
</li>
<h5 className="disclaimerheader">Cookies</h5>
<li className="disclaimer">
Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.

Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
</li>
<h5 className="disclaimerheader">Security</h5>
<li className="disclaimer">
The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
</li>
<h5 className="disclaimerheader">Changes To This Privacy Policy</h5>
<li className="disclaimer">This Privacy Policy is effective as of 1.10.20 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
If you have any questions about this Privacy Policy, please contact us.
</li>
</ul>
    </div>
    <h5 className="disclaimerheader">By clicking the following button you agree to the previous Conditions and Disclaimer</h5>
    <Link className="btn waves-effect waves-light" to="/" >Request Healing</Link>
    <p></p>
</div>

    </Modal>

    </div>

                <h4>About the Person in Need of Healing</h4>
                    <form onSubmit={this.submit}>
                        <div className="row">          
                            </div>
                            <div className="row">
                            <div className="col s6 m6">
                            <div className="form-group">
                                <label>
                                First Name
                                    <input
                                        type="text" 
                                        className="validate" 
                                        value={this.state.first} 
                                        onChange={this.handleChange}
                                        name="first"
                                        placeholder="First Name"
                                    />
                                </label>
                                
                            </div>
                            </div>
                            <div className="col s6 m6">
                            <div className="form-group">
                                <label>
                                Last Name
                                    <input 
                                        type="text" 
                                        className="validate" 
                                        value={this.state.last} 
                                        onChange={this.handleChange} 
                                        name="last" 
                                        placeholder="Last Name"
                                    />
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m6">
                            <div className="form-group">
                                <label>
                                Age
                                    <input 
                                        type="text" 
                                        className="validate" 
                                        value={this.state.age} 
                                        onChange={this.handleChange} 
                                        name="age" 
                                        placeholder="Age"
                                    />
                                </label>
                            </div>  
                            </div>
                            <div className="col s12 m6">
                            <div className="form-group">  
                                <label>
                                Gender
                                    <input 
                                        type="text" 
                                        className="validate" 
                                        value={this.state.gender} 
                                        onChange={this.handleChange}
                                        name="gender"
                                        placeholder="Gender"
                                    />
                                </label>
                            </div>
                            </div>
                        </div>
                        <h4>Where They Live</h4>
                        <div className="row">
                            <div className="col s12 m4">
                            <div className="form-group">
                                <label>
                                City
                                <input 
                                    type="text" 
                                    value={this.state.city} 
                                    onChange={this.handleChange} 
                                    name="city" 
                                    placeholder="City"
                                />
                                </label>
                            </div>
                            </div>
        <div className="col s12 m4">
        <div className="form-group">
            <label>
              State or Region
              <input 
              type="text" 
              value={this.state.region}
              onChange={this.handleChange} 
              name="region" 
              placeholder="State or Region"
              />
            </label>
        </div>
        </div>
        <div className="col s12 m4">
        <div className="form-group">
            <label>
              Country
              <input 
              type="text" 
              value={this.state.country} 
              onChange={this.handleChange} 
              name="country" 
              placeholder="Country"
              />
            </label>
        </div>
        </div>
        </div>
    <h4>Conditions Requested To Heal</h4>
    <div className="col s12 m12">
        <div className="form-group">
            <label>
            
            </label>
    
            <TextareaAutosize 
            type="text" 
            value={this.state.condition} 
            onChange={this.handleChange} 
            name="condition"
            placeholder="Conditions to Heal" >
            </TextareaAutosize>
        </div>
        </div>
    <h4>Healing Requester Contact</h4>
    <div className="row">
    <div className="col s6 m6">
        <div className="form-group">
            <label>
              Your Name
              <input 
              type="text" 
              value={this.state.yourname} 
              onChange={this.handleChange} 
              name="yourname" 
              placeholder="Your Name"
              />
            </label>
        </div>
        </div>
        <div className="col s6 m6">
        <div className="form-group">
            <label>
              Your Email
              <input 
              type="email" 
              value={this.state.email} 
              onChange={this.handleChange} 
              name="email" 
              placeholder="Your Email"
              />
            </label>
        </div>          
        </div>
        
        </div>
        <div className="form-group col s12 m12">
                            <label>Description Of How You Know This Person: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    placeholder="Please give us a description of how you know this person."
                                    />
                        </div>
                        <div>
                          <p></p>
                            <input 
                                type="submit" 
                                value="Submit to HEALING CIRCLE" 
                                className="btn orange btn-primary"
                                />
                        </div>
                    </form>
                    <div>
                        <p></p>
                    </div>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        
      
      <div className="blog-">
      <h3>HEALING CIRCLE</h3>
        {this.displayBlogPost(this.state.posts)}
      </div>
      <div className="footer">
          <Footer />
        </div>
      </div>
    
      </BrowserRouter>
    );
  }
}

export default App;
