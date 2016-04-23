import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SignOutButton } from "redux-auth";

const style = {
  paddingLeft: 50,
  fontWeight:'bold'
};

const logoDiv = {
  width: "auto",
  maxHeight: 50
};


class HeaderContainer extends Component {

  clickLoginButton(){
        this.openModal('login');
    }

    clickSignUpButton(){
        this.openModal('signUp');
    }

  render(){
    return (
      <div className="ui top fixed  menu">
            
            <div className="item">
              {/*<div className="ui fluid image" style={{...logoDiv}}>*/}
                 <img  className="ui mini image"  src={require("../../images/logo.png")} />
            {/*</div>*/}
              
            </div>
            <div className="right menu">
             <div className="item">
                 <div className="ui button" onClick={this.clickLoginButton.bind(this)}>Log-in</div>
               </div>
               <div className="item">
                 <div className="ui primary button" onClick={this.clickSignUpButton.bind(this)}>Sign up</div>
               </div>
           </div>
             {/*<nav className="white">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo red-text accent-3 text-darken-3" style={{...style}}>Q-Bytes</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

            <li ><Link to="/signUp"><button className="waves-effect waves-light  red accent-3 btn">Sign Up</button></Link></li>
            <li><Link to="/signIn"><button className="waves-effect waves-light red accent-3 btn">Log In</button></Link></li>
              <SignOutButton />
          </ul>
        </div>
    </nav>*/}         
      </div>

    );
  }

}

function mapStateToProps (state) {
  return {
    routing: state.routing
  }
}

export default connect(mapStateToProps)(HeaderContainer);
