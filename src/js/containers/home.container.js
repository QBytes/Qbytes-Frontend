import React, { Component } from 'react';
import { Link } from 'react-router'
import PostModal from '../components/PostModal.component'

const modal = {
  isOpen: true
};


class Home extends Component {
  render(){
    return (
      <div>
        <h1>Home</h1>
        <Link to="/signUp">post</Link>
         {/*<PostModal {...modal}/>*/}
      </div>
    );
  }
}

export default Home
