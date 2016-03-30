import React, { Component } from 'react';
import { Link } from 'react-router'

class Post extends Component {
  render(){
    return (
      <div>
        <h1>Post</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Post
