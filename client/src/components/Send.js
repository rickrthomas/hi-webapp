import React, { Component } from 'react';
import axios from 'axios';



class Send extends Component {
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


    render() {
    return (
      <div className="blog-">
      <h3>HEALING CIRCLE</h3>
        {this.displayBlogPost(this.state.posts)}
      </div>
    )
  }
};



export default Send;