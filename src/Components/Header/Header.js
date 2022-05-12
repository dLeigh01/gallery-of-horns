import React from 'react';
import './Header.css';
import Filter from '../Filter/Filter.js'

class Header extends React.Component {
  render() {
    return(
      <header>
        <h1>Gallery of Horns</h1>
        <Filter handleSelect={this.props.handleSelect}></Filter>
      </header>
    );
  }
}

export default Header;