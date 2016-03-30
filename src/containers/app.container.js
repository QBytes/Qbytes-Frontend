import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {

  render(){
    const {children} = this.props
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default App;
