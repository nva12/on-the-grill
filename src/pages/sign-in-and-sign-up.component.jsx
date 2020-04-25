import React from 'react';

import SignIn from '../components/sign-in.component';
import SignUp from '../components/sign-up.component';
import CustomButton from '../components/custom-button.component';
import {
  LogInContainer,
  SignInAndSignUpContainer,
  ButtonsBarContainer,
} from './sign-in-and-sign-up.styles';
import { SignInTitle, SignInSubtitle } from '../components/sign-in.styles';
import { signInWithGoogle } from '../firebase/firebase.utils';

const SignInAndSignUpPage = () => (
  <>
    <LogInContainer>
      <SignInTitle>Login with your Google account</SignInTitle>
      <ButtonsBarContainer>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
          Login with Google
        </CustomButton>
      </ButtonsBarContainer>
      <SignInSubtitle>Or create an account with us:</SignInSubtitle>
    </LogInContainer>
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  </>
);

export default SignInAndSignUpPage;
