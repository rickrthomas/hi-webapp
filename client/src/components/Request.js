import React, { Component } from 'react';
import axios from 'axios';

//import { BrowserRouter, Route } from 'react-router-dom'; 
import TextareaAutosize from 'react-autosize-textarea';


class Request extends Component {
  
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
      description: this.state.description,
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
    window.location.assign('/send');
  };
  
    render() {
    return (
       <div className="card">
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
    )
  }
};



export default Request;