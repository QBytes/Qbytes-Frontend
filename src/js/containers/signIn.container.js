import React, { Component } from 'react';
import { Link } from 'react-router'
import { EmailSignInForm } from "redux-auth";
class SignIn extends Component {
  render(){
    return (
			<div className="row">
				<div className="col s8 offset-s2">
      		<EmailSignInForm/> 
				</div>
    	</div>
		);
  }
}

export default SignIn
