import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    )
  }
}

export default App;