import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SignInForm from './SignInForm';

const SignInPage = () => {
  return (
    <AuthTemplate>
      <SignInForm />
    </AuthTemplate>
  );
};

export default SignInPage;
