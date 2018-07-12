import React, { Component } from 'react';
import Header from './Header/Header';
import Title from './Title/Title';
import Layout from './Layout/Layout';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Title/>
        <Layout/>
        <Footer/>
      </div>
    );
  }
}

export default App;
