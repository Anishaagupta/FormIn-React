import React from 'react';
import Button from '../ButtonComponent/Button.Component';
import './Sign.style.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const validForm = ({ err, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(err).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      err: {
        username: '',
        email: '',
        password: '',
      },
    };
  }

  // handleUsername = event => {
  //   this.setState({ username: event.target.value });
  //   console.log(event.target.value);
  // };
  // handleEmail = event => {
  //   this.setState({ email: event.target.value });
  //   console.log(event.target.value);
  // };
  // handlePassword = event => {
  //   this.setState({ password: event.target.value });
  //   console.log(event.target.value);
  // };
  handleChangeInAll = event => {
    event.preventDefault();
    //this.setState({ [event.target.name]: event.target.value });
    const { name, value } = event.target;
    let err = { ...this.state.err };

    switch (name) {
      case 'username':
        err.username =
          value.length < 3 && value.length > 20
            ? 'Minimum 3 characaters and maximum 20 required'
            : '';
        break;

      case 'email':
        err.email = emailRegex.test(value) ? '' : 'Invalid email address';
        break;
      case 'password':
        err.password =
          value.length < 6 && value.length > 30
            ? 'Minimum 6 characaters and maximum 30 required'
            : '';
        break;
      default:
        break;
    }
    this.setState({ err, [name]: value }, () => console.log(this.state));
  };
  handleSubmit = event => {
    
    validForm(this.state)
      ? alert('Form is submitted successfully.')
      : alert('Some Errors Occurrred');
  };

  render() {
    const { err } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className={err.username.length > 0 ? 'error' : null}
            type='text'
            name='username'
            placeholder='Enter your username'
            noValidate
            value={this.state.username}
            onChange={this.handleChangeInAll}
          />
          {err.username.length > 0 && (
            <span className='errorMessage'>{err.username}</span>
          )}
          <input
            className={err.email.length > 0 ? 'error' : null}
            type='email'
            name='email'
            placeholder='Enter your email id'
            noValidate
            value={this.state.email}
            onChange={this.handleChangeInAll}
          />
          {err.email.length > 0 && (
            <span className='errorMessage'>{err.email}</span>
          )}
          <input
            className={err.password.length > 0 ? 'error' : null}
            type='password'
            name='password'
            placeholder='Enter your password'
            noValidate
            value={this.state.password}
            onChange={this.handleChangeInAll}
          />
          {err.password.length > 0 && (
            <span className='errorMessage'>{err.password}</span>
          )}
          <Button name='Submit' />
        </form>
      </div>
    );
  }
}

export default SignUp;
