import React from "react";
import formStyle from "./formStyle";


const Greetings = ({ firstName, lastName}) => (
  <div>
    Hello {firstName} {lastName}!
  </div>
);


export default class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: '',
    lastNameError: '',
  };

  validateName = name => {
    const regex = /[A-Za-z]{3,}/;
    return !regex.test(name) 
    ? "The name must contain at least three letters."
    : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;
    const firstNameError = this.validateName(firstName);
    return this.setState({ firstNameError });
  };

  onLastNameBlur = () => {
    const { lastName } = this.state;
    const lastNameError = this.validateName(lastName);
    return this.setState({ lastNameError });
  };

  onFirstNameChange = event =>
  this.setState ({
    firstName: event.target.value
  });

  onLastNameChange = event =>
  this.setState ({
    lastName: event.target.value
  });

  render () {

    const { firstNameError, firstName, lastName, lastNameError } = this.state;

    return (
      <div style={formStyle.form}>
        <div style={formStyle.inputGroup}>
          <label>
            First name:
            <input
            style={formStyle.input}
            type="text" name="firstName" 
            onChange={this.onFirstNameChange} 
            onBlur={this.onFirstNameBlur}
            />
            {firstNameError && <div style={formStyle.error}>{firstNameError}</div>}
          </label>
        </div>

        <div style={formStyle.inputGroup}>
          <label>
            Last name:
            <input
            style={formStyle.input}
             type="text" name="firstName" 
            onChange={this.onLastNameChange} 
            onBlur={this.onLastNameBlur}
            />
            {lastNameError && <div style={formStyle.error}>{lastNameError}</div>}
          </label>
        </div>

        <Greetings firstName={firstName} lastName={lastName} />
      </div>
    );
  }
} 

  

