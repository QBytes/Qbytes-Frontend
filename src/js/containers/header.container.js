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

const searchStyle = {
  width: "50%"
};

class HeaderContainer extends Component {

  
  render(){
    return (
      <div className="ui top fixed  menu">
            
            <div className="item">
              {/*<div className="ui fluid image" style={{...logoDiv}}>*/}
                 <Link to="/"><img  className="ui mini image"  src={require("../../images/logo.png")} /></Link>
            {/*</div>*/}
              
            </div>
            <div className="item" style={{...searchStyle}}>
            <div className="ui icon input" >
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
            <div className="right menu">
              <div className="item">
                 <Link to="/post"><div className="ui button">Post</div></Link>
               </div>
             <div className="item">
                 <Link to="/signIn"><div className="ui button" >Log-in</div></Link>
               </div>
               <div className="item">
                 <Link to="/signUp"><div className="ui primary button" >Sign up</div></Link>
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
