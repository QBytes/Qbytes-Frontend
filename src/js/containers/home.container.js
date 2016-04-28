import React, { Component } from 'react';
import { Link } from 'react-router'
import PostModal from '../components/PostModal.component'
import Card from '../containers/card.container'

const containerStyle = {
 paddingTop: 100,
 paddingLeft: 100
};


class Home extends Component {
  render(){
    return (
      <div style={{...containerStyle}}>
        <h1>Home</h1>
        
         <Card />
         {/*<PostModal {...modal}/>*/}

      </div>
    );
  }
}

export default Home
