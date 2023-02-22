import React, { Component } from 'react';
import './Exhibit.css';

class Exhibit extends Component {
  render() {
    return (
      <div className='exhibit'>
        <h2 className='exhibitHeading'>{this.props.name}</h2>
        <div className='exhibitContent'>{this.props.children}</div>
      </div>
    )
  }
}

export default Exhibit;