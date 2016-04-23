import React, { Component } from 'react';
import { Link } from 'react-router'
import { EmailSignUpForm } from "redux-auth";

const containerStyle = {
 paddingTop: 75
};

class SignUp extends Component {
  render(){
    return (
			<div className="row" style={{...containerStyle}}>
				<div className="col s8 offset-s2">
      		<EmailSignUpForm/> 
				</div>
    	</div>
		);
  }
}

export default SignUp
