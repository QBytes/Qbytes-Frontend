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


class Card extends Component {

  render(){
    return (   
    <div className="ui card">
	  <div className="image">
	    <img src={require("../../images/javascript.jpg")} />
	  </div>
	  <div className="content">
	    <a className="header">Create a to-do list app using React, Redux and Rails</a>
	    
	    <div className="description">
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
	  </div>
	  <div className="ui tiny progress success" data-value="15" data-total="20" style={{...progress}}>
		  <div className="bar">
		  	<div className="progress"></div>
		  </div>
	  </div>
	  <div className="ui attached bottoms" >
	  	<button className="ui left attached  button" style={{...attachedButton}}> 
	  	<i className="add icon"></i>
	  	</button>
		<button className="right attached ui  button" style={{...attachedButton}}> 
		<i className="minus icon"></i>
		</button>
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

export default connect(mapStateToProps)(Card);