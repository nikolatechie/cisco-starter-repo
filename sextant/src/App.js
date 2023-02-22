import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant"></Banner>
        <Exhibit name="First exhibit"></Exhibit>
        <Exhibit name="Second exhibit"></Exhibit>
        <Exhibit name="Third exhibit"></Exhibit>
      </div>
    );
  }
}

export default App;