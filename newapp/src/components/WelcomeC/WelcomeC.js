import React from 'react';



export default class WelcomeC extends React.Component {
  render() {
    if (this.props.user) {
      return <div>Class Hello, {this.props.user}</div>
    }
    return <h1>Class Hello, Unknown.</h1>;
  }
}

