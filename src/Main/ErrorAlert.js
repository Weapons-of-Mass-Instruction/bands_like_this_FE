import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ErrorAlert extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.wasError}
        onHide={this.props.onErrorClose}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ background: 'rgba(50,0,0,0.5)' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Oh No!</Modal.Title>
        </Modal.Header>
        <Modal.Body>There has been a Server error. Please exit this message and search for a diferent band.</Modal.Body>
      </Modal>
    );
  }
}

export default ErrorAlert;