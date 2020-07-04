import React from 'react';
import './Login.style.css'
const Login = () => {
  return (
    <div>
      <input type='text' name='username' placeholder='Enter your username' />
      <input type='email' name='email' placeholder='Enter your email id' />
      <input
        type='password'
        name='password'
        placeholder='Enter your password'
      />
    </div>
  );
};

export default Login;
