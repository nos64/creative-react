import React from 'react';



export default class WelcomeC extends React.Component {
  render() {
    if (this.props.user) {
      return <div> Hello, {this.props.user}</div>
    }
    return <h1>Hello, Unknown.</h1>;
  }
}

