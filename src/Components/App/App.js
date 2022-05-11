import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import data from '../../data.json';
import './App.css';
import SelectedBeast from '../SelectedBeast/SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      modalName: '',
      modalImg: '',
      modalDescription: '',
    }
  }

  displayModal = (name, img, description) => {
    this.setState({
      isModalDisplaying: true,
      modalName: name,
      modalImg: img,
      modalDescription: description,
    });
  }

  hideModal = () => {
    this.setState({
      isModalDisplaying: false,
    });
  }

  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
          displayModal={this.displayModal}
        />
        <Footer/>
        <SelectedBeast
          isModalDisplaying={this.state.isModalDisplaying}
          name={this.state.modalName}
          img={this.state.modalImg}
          description={this.state.modalDescription}
          hideModal={this.hideModal}
        />
      </>
    )
  }
}

export default App;