import React, {Component, PropTypes} from 'react';
import Modal from 'react-modal';
// import {changeModal} from '../actions/modal'

const cardStyle = {
  marginTop:'0%',
  marginBottom:'0%'
}

class PostModal extends Component {

    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        const {modal, dispatch} = this.props;
        var action = {type:modal.type,isOpen:false}
        dispatch(changeModal(action));
    }

    setStyle(){
      return ({
        overlay : {
            position          : 'fixed',
            top               : 0,
            left              : 0,
            right             : 0,
            bottom            : 0,
            backgroundColor   : 'rgba(0, 0, 0, 0.8)'
          },
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            overflow              : 'none',
            paddingRight          : '0%',
            paddingLeft           : '0%',
            paddingTop          : '0%',
            paddingBottom           : '0%',
            border              : '0%'
          }
        });
    }

    renderContent() {
          return(
            <div className="card white" style={{...cardStyle}}>
            <div className="card-content dark-text">
              <span className="card-title dark-text">Post a link</span>
              <hr />


            </div>
          </div>
          );
      }

    render() {
        const {isOpen} = this.props;
        console.log(this.props);
        return (
          <Modal style={this.setStyle()} isOpen={isOpen }  onRequestClose={this.closeModal}>
                { this.renderContent()}
               {/*<LoginForm />*/}
          </Modal>
        );
    }
}

export default PostModal;
