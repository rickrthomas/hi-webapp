import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Footer from './components/Footer.js';
import './App.css';

import Contact from './components/Contact.js'
import About from './components/About.js';
import Resources from './components/Resources.js';

class App extends Component{
  
state = {
  title: '',
  body: '',
  last: '',
  gender: '',
  age: '',
  city: '',
  region: '',
  country: '',
  name: '',
  email: '',
  condition: '',
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
    title: this.state.title,
    body: this.state.body,
    last: this.state.last,
    gender: this.state.gender,
    age: this.state.age,
    city: this.state.city,
    region: this.state.region,
    country: this.state.country,
    name: this.state.name,
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
    title: '',
    body: '',
    last: '',
    gender: '',
    age: '',
    city: '',
    region: '',
    country: '',
    name: '',
    email: '',
    yourname: ''
  });
};

displayBlogPost = (posts) => {
  if (!posts.length) return null;

  return posts.map((post, index) => (
    <div key={index}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>{post.last}</p>
      <p>{post.gender}</p>
      <p>{post.age}</p>
      <p>{post.city}</p>
      <p>{post.region}</p>
      <p>{post.country}</p>
      <p>{post.name}</p>
      <p>{post.email}</p>
      <p>{post.yourname}</p>

    </div>
  ));
}
  render(){
   console.log('State: ', this.state);
  
    return (
       <BrowserRouter>
      <div className="App">
      
       
        <header className="App-header">
      <NavBar />
      </header>
      <h2 className=" container">HEALER'S INTENT</h2>
      <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />

  
      
      <form onSubmit={this.submit}>
        <div className="form-input">
          <input
            placeholder="Title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-input">
          <textarea
            placeholder="body"
            name="body"
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.handleChange}
            >
            </textarea>
        </div>
        <div className="form-input">
          <input
            placeholder="Last Name"
            type="text"
            name="last"
            value={this.state.last}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-input">
          <input
            placeholder="Gender"
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
            />
        </div> <div className="form-input">
          <input
            placeholder="age"
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            />
        </div> <div className="form-input">
          <input
            placeholder="City"
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            />
        </div> <div className="form-input">
          <input
            placeholder="State or Region"
            type="text"
            name="region"
            value={this.state.region}
            onChange={this.handleChange}
            />
        </div> <div className="form-input">
          <input
            placeholder="Country"
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
            />
        </div> <div className="form-input">
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
        </div> <div className="form-input">
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
        </div> <div className="form-input">
          <input
            placeholder="Your Name"
            type="text"
            name="yourname"
            value={this.state.yourname}
            onChange={this.handleChange}
            />
        </div>
        <button>Submit</button>
      </form>
      <div className="blog-">
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
