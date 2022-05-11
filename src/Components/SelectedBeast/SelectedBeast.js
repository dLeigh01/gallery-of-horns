import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css'

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.isModalDisplaying}
        onHide={this.props.hideModal}
      >
        <Modal.Title>{this.props.name}</Modal.Title>
        <img src={this.props.img} alt={this.props.description}/>
      </Modal>
    )
  };
}

export default SelectedBeast;