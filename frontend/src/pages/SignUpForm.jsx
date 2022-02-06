import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../modules/auth';
import { useEffect } from 'react';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.signup,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        value,
      }),
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      //Todo 오류 처리
    }
    dispatch({ email, password });
  };
  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  // 회원 가입 성공/ 실패시
  useEffect(() => {
    if (authError) {
      //TODO 오류 발생
      return;
    }
    if (auth) {
      // 회원가입 성공
    }
  }, [auth, authError]);

  return (
    <AuthForm
      type="signup"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpForm;
