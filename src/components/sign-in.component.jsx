import React from 'react';

import FormInput from './form-input.component';
import CustomButton from './custom-button.component';

import { auth, signInWithGoogle } from '../firebase/firebase.utils';

import {
  SignInContainer,
  SignInTitle,
  SignInSubtitle,
  ButtonsBarContainer,
} from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <SignInSubtitle>Login with your Google account:</SignInSubtitle>
        <ButtonsBarContainer>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
        <SignInSubtitle>
          Or sign in with your email and password:
        </SignInSubtitle>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
