import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SignOutButton } from "redux-auth";

const style = {
  paddingLeft: 50,
  fontWeight:'bold'
};

class HeaderContainer extends Component {

  render(){
    return (
      <nav className="blue-grey lighten-5">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo red-text accent-3 text-darken-3" style={{...style}}>Q-Bytes</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

            <li ><Link to="/signUp"><button className="waves-effect waves-light  red accent-3 btn">Sign Up</button></Link></li>
            <li><Link to="/signIn"><button className="waves-effect waves-light red accent-3 btn">Log In</button></Link></li>
            {  /*<SignOutButton />*/}
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
