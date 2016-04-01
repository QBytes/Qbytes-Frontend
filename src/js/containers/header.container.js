import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SignOutButton } from "redux-auth";

class HeaderContainer extends Component {

  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Q-Byte</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/signUp">Sign Up</Link></li>
            <li><Link to="/signIn">Sign In</Link></li>
            <SignOutButton />
          </ul>
        </div>
    </nav>
    );
  }
}

function mapStateToProps (state) {
  return {
    routing: state.routing
  }
}

export default connect(mapStateToProps)(HeaderContainer);
