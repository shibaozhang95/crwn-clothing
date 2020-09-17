import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

type DispatchProps = {
  emailSignInStart: (email: string, password: string) => void
  googleSignInStart: () => void
}

type Props = DispatchProps

const SignIn = ({ emailSignInStart, googleSignInStart }: Props) => {
  const [userCredentials, setCredentials] = useState({ 
    email: '', 
    password: '' 
  });
  
  const { email, password } = userCredentials;

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    
    emailSignInStart(email, password)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setCredentials({
      ...userCredentials,
      [name]: value
    })
  }
  
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form action="">
        <FormInput 
          name="email" 
          type="email" 
          value={email} 
          label='email'
          handleChange={handleChange}
          required 
        />
        <FormInput 
          name="password" 
          type="password" 
          value={password} 
          label='password'
          handleChange={handleChange}
          required 
        />

        <div className='buttons'>
          <CustomButton 
            type='submit'
            onClick={handleSubmit}
          > Sign in </CustomButton>
          <CustomButton 
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          > SIGN IN WITH GOOGLE </CustomButton>
        </div>
      </form>
    </div>
  )
  
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);