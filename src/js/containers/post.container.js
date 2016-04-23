import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SignOutButton } from "redux-auth";
import SharePost from "../components/SharePost.component"
const containerStyle = {
 paddingTop: 75
};


class Post extends Component {

  render(){
    return (   
      <SharePost />
    );
  }

}

function mapStateToProps (state) {
  return {
    routing: state.routing
  }
}

export default connect(mapStateToProps)(Post);