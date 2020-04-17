import React, { Component } from 'react';
//import axios from 'axios';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Footer from './components/Footer.js';
import './App.css';
// import TextareaAutosize from 'react-autosize-textarea';


import Contact from './components/Contact.js'
import About from './components/About.js';
import Resources from './components/Resources.js';
import Instructions from './components/Instructions.js';
import DisclaimerModal from './components/DisclaimerModal.js';
import Request from './components/Request.js';
import Send from './components/Send.js';
import AskSend from './components/AskSend.js';

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

// componentDidMount = () => {
//  this.getBlogPost();
  
//};

// getBlogPost = () => {
//   axios.get('/api')
//   .then((response) => {
//     const data = response.data;
//     this.setState({ posts: data});
//     console.log('Data has been received');
//   })
//   .catch(() => {
//     alert('Error retrieving data');
//   });
// }


//handleChange = (event) => {
//  const target = event.target;
//  const name = target.name;
//  const value = target.value;

// handleChange = ({ target }) => {
//  const { name, value } = target;
//  this.setState({ [name]: value }); 
// };
 
//form submit
//submit = (event) => {
//  event.preventDefault();
  //current state
//  const payload = {
//    first: this.state.first,
 //   last: this.state.last,
 //   condition: this.state.condition,
 //   gender: this.state.gender,
//    age: this.state.age,
//    city: this.state.city,
//    region: this.state.region,
//    country: this.state.country,
//    description: this.state.description,
//    email: this.state.email,
//    yourname: this.state.yourname
//};

//axios({
//  url: '/api/save',      //url where sever is waiting for request
//  method: 'POST',  //request type
//  data: payload   //data being sent
//})
//  .then(() => {
//    console.log('Data has been sent to the server');
//    this.resetUserInputs();
//    this.getBlogPost();
//  })
//  .catch(() => {
//    console.log('Internal server error')
//  })
//
//};

//resetUserInputs = () => {
//  this.setState({
//    first: '',
//    last: '',
//    condition: '',
//    gender: '',
//    age: '',
//    city: '',
//    region: '',
//    country: '',
//    description: '',
//    email: '',
//    yourname: ''
//  });
//};

/* displayBlogPost = (posts) => {
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
*/
  render(){
   console.log('State: ', this.state);
   
   
    
    return (
       <BrowserRouter>
      <div className="App">
      
       
        <header className="App-header">
      <NavBar />
      <p></p>
  

      </header>
      
<Route exact path="/" component={AskSend} />   
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route path="/instructions" component={Instructions} />
        
<Route path="/request" component={Request} />
<Route path="/send" component={Send} />
<Route path="/disclaimer" component={DisclaimerModal} />
 
  
  {/*     <div className="card">
        <div className="card-content">
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
        
     </div>
  
      <div className="blog-">
      <h3>HEALING CIRCLE</h3>
        {this.displayBlogPost(this.state.posts)}
      </div>
      */}

      <div className="footer">
          <Footer />
        </div>
      
      </div>
    
      </BrowserRouter>
    );
  }
}

export default App;
