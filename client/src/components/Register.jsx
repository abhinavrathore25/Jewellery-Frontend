import React, { useCallback, useEffect, useState } from 'react';
import '../Styles/Register.css';
import axios from 'axios';
import config from '../commonFiles/config';

const Register = () => {

  const [avatar, setAvatar] = useState(null);
  const [registerForm, setRegisterForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;

    if (value !== '') {
      document.getElementById(name).className = 'placeholderStatic';
    } else {
      document.getElementById(name).className = 'placeholderDynamic';
    }

    setRegisterForm({
      ...registerForm,
      [name]: value
    });

  }

  const handleImageChange = (event) => {
    const uploadedImage = event.target.files[0];
    (uploadedImage) && setAvatar(uploadedImage);
  }

  const preview = useCallback(() => {
    const frame = document.getElementById('frame');

    frame && (frame.src = avatar !== null && URL.createObjectURL(avatar));
  }, [avatar]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('avatarImage', avatar);
    formData.append('registerationDetails', JSON.stringify(registerForm));

    axios.post('http://localhost:8080/register', formData, config)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data));
  }

  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    preview();
  }, [avatar, preview]);

  return (
    <form className='registerForm'>

      <div className="placeholderContainer registerAvatarContainer">

        <label htmlFor='avatarFile'>

          {
            avatar === null
              ?
              <i className="fa-regular fa-circle-user" />
              :
              (<div className='userAvatar'>
                <img src='' alt='profile' id='frame' />
              </div>)
          }

        </label>

        <input type='file' id='avatarFile' onChange={handleImageChange} style={{ display: 'none' }} />
      </div>

      <div className="placeholderContainer">
        <input type='text'
          className="form-control"
          name='name'
          id="registerFullName"
          onChange={inputHandler} 
            value={registerForm.name}
          />

        <label className='placeholderDynamic' id='name' htmlFor='registerFullName'>Name</label>
      </div>

      <div className="placeholderContainer">
        <input type="text"
          className="form-control"
          name='username'
          id="registerUsername"
          onChange={inputHandler} 
            value={registerForm.username}
          />

        <label className='placeholderDynamic' id='username' htmlFor='registerUsername'>Username</label>
      </div>

      <div className="placeholderContainer">

        <input type="email"
          className="form-control"
          name='email'
          id="loginEmail"
          aria-describedby="emailHelp"
          onChange={inputHandler} 
            value={registerForm.email}
          />

        <label className='placeholderDynamic' id='email' htmlFor='loginEmail'>Email</label>
      </div>

      <div className="placeholderContainer">
        <input type="text"
          className="form-control"
          //  pattern={passwordRegex}
          //  pattern={`/^[a-zA-Z0-9!@#$%^&*()_+-=]{8,20}$/g`}
            // onInvalid={(event) =>
              // event.target.setCustomValidity('Password Should Be 8-20 Characters long, with 1 uppercase 1 lowercase and 1 special character (!@#$%^&*()-_+=)')
          // }
          name='password'
          id="registerPassword"
          onChange={inputHandler} 
            value={registerForm.password}
          />

        <label className='placeholderDynamic' id='password' htmlFor='registerPassword'>Password</label>
      </div>

      <div className="placeholderContainer">
        <input type="text"
          className="form-control"
          name='confirmPassword'
          id="retypePassword"
          onChange={inputHandler} 
            value={registerForm.confirmPassword}
          />

        <label className='placeholderDynamic' id='confirmPassword' htmlFor='retypePassword'>Confirm Password</label>
      </div>

      <div className="placeholderContainer">
        <input
          type="text"
          className="form-control"
          // pattern='/^[6789][0-9]{9}$/'
          // onInvalid={(event) => event.target.setCustomValidity('Please Enter valid Number')}
          name='phoneNumber'
          id="mobileNumber"
          onChange={inputHandler} 
            value={registerForm.phoneNumber}
          />

        <label className='placeholderDynamic' id='phoneNumber' htmlFor='mobileNumber'>Mobile Number</label>
      </div>

      <div className="mb-3 placeholderContainer">
        <input type="text"
          className="form-control"
          name='address'
          id="shippingAddress"
          onChange={inputHandler} 
            value={registerForm.address}
          />

        <label className='placeholderDynamic' id='address' htmlFor='shippingAddress'>Shipping Address</label>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleFormSubmit}>Submit</button>
    </form>
  )
}

export default Register