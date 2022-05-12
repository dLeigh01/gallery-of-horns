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
      list: data,
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

  handleSelect = (event) => {
    let selected = event.target.value;
    console.log(selected);
    console.log(this.state.list);

    if (selected === '1') {
      let filteredList = data.filter(li => li.horns === 1);
      this.setState({list: filteredList});
    } else if (selected === '2') {
      let filteredList = data.filter(li => li.horns === 2);
      this.setState({list: filteredList});
    } else if (selected === '3') {
      let filteredList = data.filter(li => li.horns === 3);
      this.setState({list: filteredList});
    } else if (selected === 'other') {
      let filteredList = data.filter(li => li.horns > 3);
      this.setState({list: filteredList});
    } else {
      this.setState({list: data});
    }
  }

  render() {
    return (
      <>
        <Header handleSelect={this.handleSelect}/>
        <Main
          data={this.state.list}
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