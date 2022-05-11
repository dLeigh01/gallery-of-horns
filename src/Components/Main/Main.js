import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast, idx) =>
      <HornedBeast
        title={beast.title}
        description={beast.description}
        imageUrl={beast.image_url}
        key={idx}
        displayModal={this.props.displayModal}
      />
    );

    return(
      <main>
        {beasts}
      </main>
    );
  }
}

export default Main;