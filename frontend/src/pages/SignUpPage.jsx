import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SignUpForm from './SignUpForm';
// rsi
const SignUpPage = () => {
  return (
    <AuthTemplate>
      <SignUpForm />
    </AuthTemplate>
  );
};

export default SignUpPage;
