/*eslint-disable */
import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      submit: 'Submit',
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit(event) {
    alert(
      `${this.state.name}, password ****** both submitted successfully :) `
    );
    event.preventDefault();
  }

  render() {
    const style = {
      margin: '40px',
    };
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            style={style}
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleUsernameChange}
          />
        </label>
        <label>
          Password:
          <input
            style={style}
            type='text'
            name='password'
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default Form;
