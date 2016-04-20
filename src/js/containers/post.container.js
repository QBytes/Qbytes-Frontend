import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SignOutButton } from "redux-auth";

const containerStyle = {
 paddingTop: 75
};


class Post extends Component {

  render(){
    return (   
      <div className="ui text container" style={{...containerStyle}}>
      <div className="ui one column grid">
        {/*<div className="column"> 
              <button className="ui labeled icon button">
                <i className="pause icon"></i>
                Share a link
              </button>
              <button className="ui right labeled icon button">
                <i className="right arrow icon"></i>
                Create a post
              </button>
        </div>
        <div className="column">
            <div className="ui fluid action input">
              <input type="text" placeholder="Search..." />
              <div className="ui button">Search</div>
            </div>
        </div>*/}
        <div className="column"> 
              <h1 className="ui center text">Share a link with the World </h1>     
        </div>
        <div className="column"> 
              <p className="ui center text">
                    Enter a link to a post/article/tutorial to import and share it on Qbytes.
              </p>     
        </div>
        <div className="column">
            <div className="ui fluid action input">
              <input type="text" placeholder="https://www.yourlink.com/your-post" />
              <button className="ui  right labeled icon button">
                Next
                <i className="right arrow  icon"></i>
              </button>
            </div>
        </div>
        <div className="column">
            <p className="ui center text">
                    Click next to add tags and images.
            </p> 
        </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {
    routing: state.routing
  }
}

export default connect(mapStateToProps)(Post);