import React, { useState } from 'react';
import "../Styles/Login.css";
import axios from 'axios';
import config from '../commonFiles/config';

const Login = () => {

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;

    if (value !== '') {
      document.getElementById(name).className = 'placeholderStatic';
    } else {
      document.getElementById(name).className = 'placeholderDynamic';
    }

    setLoginDetails({
      ...loginDetails,
      [name]: value
    })

  }

  const handleLogin = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/userLogin',loginDetails, config)
    .then(res => {
      if(res.data === 'success')
        window.location.href ='http://localhost:3000/';
    })
    .catch(err => console.log(err));
  }

  return (
    <form className='loginForm'>
      <div className="placeholderContainer">

        <input
          type="email"
          className="form-control"
          name='email'
          style={{ borderRadius: '5px 5px 0 0' }}
          id="loginEmail"
          value={loginDetails.email}
          aria-describedby="emailHelp"
          onChange={inputHandler}
        />

        <label className='placeholderDynamic' id='email' htmlFor='loginEmail'>Email</label>
      </div>

      <div className="mb-3 placeholderContainer">

        <input
          type="password"
          className="form-control"
          name='password'
          style={{ borderRadius: '0 0 5px 5px' }}
          id="loginPassword"
          value={loginDetails.password}
          onChange={inputHandler}
        />

        <label className='placeholderDynamic' id='password' htmlFor='loginPassword'>Password</label>

      </div>
      <div className="mb-3 form-check">

        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1" />

        <label
          className="form-check-label"
          htmlFor="exampleCheck1">Remember Me</label>

      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleLogin}>
        Submit
      </button>

      <a
        className="btn btn-danger"
        href="http://localhost:8080/auth/google"
        // onClick={handleLogin}
        name='google'>
        Google
      </a>

      <button
        className="btn btn-info"
        // onClick={handleLogin}
        name='facebook'>
        Facebook
      </button>

    </form>
  )
}

export default Login;