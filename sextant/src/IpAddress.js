import { Component } from 'react';

export default class IpAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAddress: 'loading...',
    }
  }

  componentDidMount() {
    let url = 'https://api.ipify.org?format=json';
    if (this.props.version === 'v6') url = 'https://api64.ipify.org?format=json';

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ ipAddress: data.ip }));
  }

  render() {
    return <span>{this.state.ipAddress}</span>
  }
};