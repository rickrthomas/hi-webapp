import React, { Component } from 'react';
//import axios from 'axios';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
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
       <Router >
       
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

      <div className="footer">
          <Footer />
        </div>
      
      </div>
      
      </Router>
    );
  }
}

export default App;
