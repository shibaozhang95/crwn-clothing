import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';
import { SignUpUserCredentials } from '../../redux/user/user.types';

type DispatchProps = {
  signUpStart: (userCredential: SignUpUserCredentials) => void
}

type Props = DispatchProps

const SignUp = ({ signUpStart }: Props) => {
  const [userCredentials, setuserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't mathc");
      return;
    }

    signUpStart({ displayName, email, password })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setuserCredentials({ 
      ...userCredentials,
      [name]: value }
    );
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          label='Display Name'
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='Email'
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          label='confirmPassword'
        />

        <CustomButton
          type='submit'
        >Sign up</CustomButton>
      </form>
    </div>
  )
  
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);