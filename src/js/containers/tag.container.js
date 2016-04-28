import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SignOutButton } from "redux-auth";
import SharePost from "../components/SharePost.component"
import Card from '../containers/card.container'

const containerStyle = {
 paddingTop: 85,
 background: "#F4F7F9"
};

const categoryStyle = {
 paddingLeft: 100
};

const headerDivStyle = {
	width: '75%',
	marginLeft: '10%',
	marginRight: '10%'
}

const buttonStackStyle = {
	paddingLeft: '20%',
}

class TagPage extends Component {

  render(){
    return ( 
    <div style={{...containerStyle}}>
    <div className="ui raised very padded container  stacked segment" style={{...headerDivStyle}}>
    	 <div className="ui grid">
    	 	 <div className="three wide column">
    	 	 	<img className="ui top aligned small image" src={require("../../images/react-logo.png")} />
    	 	 </div>
    	 	 <div className="twelve wide column">
    	 	 	 <h1 className="ui header">React.js <a className="ui label">
				  React.js
				</a></h1>

    	 	 	 <h3 className="sub header"> <span style={{fontWeight:'normal'}}>React is a JavaScript library for creating user interfaces by Facebook and Instagram. 
    	 	 	 	Many people choose to think of React as the V in MVC.
					We built React to solve one problem: building large applications with data that changes over time. </span></h3>
    	 	 </div>
    	 </div>
	</div>
	<div className="ui pointing menu">
	  <a className="active item">
	    Articles
	  </a>
	  <a className="item">
	    Courses
	  </a>
	  <a className="item">
	    Github
	  </a>
	  <a className="item">
	    Cool Project
	  </a>
	  <a className="item">
	    Best Practises
	  </a>
	  <a className="item">
	    Youtube Channels
	  </a>
	  <a className="item">
	    Beginner
	  </a>
	  <a className="item">
	    Discussion
	  </a>
	
	  
	  <div className="right menu">
	    <div className="item">
	      <div className="ui transparent icon input">
	        <input type="text" placeholder="Search..." />
	        <i className="search link icon"></i>
	      </div>
	    </div>
	  </div>
	</div>
	<div className="ui grid">

       	 <div className="two wide column ">
    	 	 <div className="ui vertical buttons" style={{...buttonStackStyle}}>
			  <button className="ui button">Featured</button>
			  <button className="ui button">Top Voted</button>
			  <button className="ui button">New Posts</button>
			  <button className="ui button">Popular</button>
			</div>

    	 </div>
		<div className="twelve wide column">
			<div className="ui grid">
			<div className="four wide column">
				<Card />
			</div>
    	 	<div className="four wide column">
				<Card />
			</div>
			<div className="four wide column">
				<Card />
			</div>
			<div className="four wide column">
				<Card />
			</div>
			</div>
    	 </div>
    	 <div className="two wide column ">
    	 	 <div className="ui vertical buttons" style={{...buttonStackStyle}}>
			  <button className="ui button">Card Mode</button>
			  <button className="ui button">List Mode</button>
			</div>

    	 </div>
         {/*<PostModal {...modal}/>*/}

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

export default connect(mapStateToProps)(TagPage);