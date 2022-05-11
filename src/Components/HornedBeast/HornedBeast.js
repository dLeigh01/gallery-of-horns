import React from 'react';
import './HornedBeast.css'
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }
  }

  likePhoto = () => {
    this.setState({
      likes: this.state.likes + 1,
    })
  }

  render() {
    return(
      <Card
        border='info'
        onClick={() => this.props.displayModal(this.props.title, this.props.imageUrl, this.props.description)}
      >
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle>❤️{this.state.likes}</Card.Subtitle>
          <Card.Img
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            onClick={this.likePhoto}
          />
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;