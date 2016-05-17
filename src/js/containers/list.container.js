import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SignOutButton } from "redux-auth";
import SharePost from "../components/SharePost.component"

const containerStyle = {
 paddingTop: 75
};

const attachedButton = {
 width: '50%',
 textAlign: 'center'
};

const progress = {
 marginTop: '0%',
 marginBottom: '0%'
};

const headerDivStyle = {
	width: '100%',
  marginTop: 30,
  padding:'1%'
}


class List extends Component {

  render(){
    return (
      <div className="ui raised very padded container segment" style={{...headerDivStyle}}>
      	 <div className="ui grid">
      	 	 <div className="three wide column">
      	 	 	<img className="ui top aligned small image" src={require("../../images/react-logo.png")} />
      	 	 </div>
      	 	 <div className="twelve wide column">
      	 	 	 <h1 className="ui header">How to build a simple React, Redux and Rail application</h1>

      	 	 	 <h3 className="sub header"> <span style={{fontWeight:'normal'}}>React is a JavaScript library for creating user interfaces by Facebook and Instagram.
      	 	 	 	Many people choose to think of React as the V in MVC.
  					We built React to solve one problem: building large applications with data that changes over time. </span></h3>
            <div className="ui image label">
              React.js
          <i className="delete icon"></i>
          </div>
          <div className="ui image label">
              Redux.js
          <i className="delete icon"></i>
          </div>
          <div className="ui image label">
              Rails
          <i className="delete icon"></i>
          </div>
      	 	 </div>
        \
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

export default connect(mapStateToProps)(List);
