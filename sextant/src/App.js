import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IpAddress from './IpAddress';
import PylonConnector from './PylonConnector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant"></Banner>
        <Exhibit name="First exhibit" children={<IpAddress version='v4' />}></Exhibit>
        <Exhibit name="Second exhibit" children={<IpAddress version='v6' />}></Exhibit>
        <Exhibit name="Third exhibit" children={<PylonConnector />}></Exhibit>
      </div>
    );
  }
}

export default App;