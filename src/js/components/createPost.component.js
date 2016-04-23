import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SignOutButton } from "redux-auth";
import Dropzone from 'react-dropzone'

const containerStyle = {
 paddingTop: 100
};

const gridStyle = {
 paddingLeft: 0,
 paddingRight: 0
};

class CreatePost extends Component {

  next(){
    console.log("button pressed");
  }

  render(){
    return (   
      <div className="ui text container" style={{...containerStyle}}>
      <div className="ui one column stackable center aligned page grid" style={{...gridStyle}}>
        <div className="column"> 
              <h1 className="">Modify and Share </h1>     
        </div>
        <div className="row"> 
            <div className="ten wide column">
              <form className="ui form">
                <div className="field">
                  <label>Title</label>
                  <input type="text" name="" placeholder="Title" />
                </div>
                <div className="field">
                  <label>Description</label>
                  <textarea></textarea>
                </div>
              </form>
            </div>
            <div className="six wide column">
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            </div>
        </div>
        <div className="column">
            <div className="ui fluid action input">
            <input type="text" placeholder="Search..." />
            <div className="ui button">Tags</div>
          </div>
        </div>
        <div className="column">
            <div className="ui button">Submit</div>
        </div> 
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

export default connect(mapStateToProps)(CreatePost);