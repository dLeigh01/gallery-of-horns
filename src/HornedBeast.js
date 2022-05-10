import React from 'react';
import './HornedBeast.css'

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
      <article>
        <h2>{this.props.title}</h2>
        <p id='likes'>❤️{this.state.likes}</p>
        <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} onClick={this.likePhoto}/>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;