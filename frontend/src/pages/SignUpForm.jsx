import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const SignUpForm = () => {
  return (
    <>
      <AuthTemplate>
        <AuthForm type="signup" />
      </AuthTemplate>
    </>
  );
};

export default SignUpForm;
