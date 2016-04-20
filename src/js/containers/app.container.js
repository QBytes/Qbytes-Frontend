import React, { Component } from 'react';
import { Link } from 'react-router'
import HeaderContainer from './header.container'
import { AuthGlobals } from "redux-auth/material-ui-theme";
import 'materialize-css/dist/css/materialize.min.css'
import 'semantic-ui/dist/semantic.min.css'

class App extends Component {

  render(){
    const {children} = this.props
    return (
      <div>
        <AuthGlobals/>
        <HeaderContainer/>
        {children}
      </div>
    );
  }
}

export default App;
