import AuthForm from '../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signup } from '../modules/auth';
import { useEffect, useState } from 'react';
import { check } from '../modules/user';
import { withRouter } from 'react-router-dom';

const SignUpForm = ({ history }) => {
  console.log('withRouter Test');
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.signup,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
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
    if ([email, password, passwordConfirm].includes('')) {
      setError('빈칸을 모두 입력하세요');
      return;
    }
    if (password !== passwordConfirm) {
      //Todo 오류 처리
      setError('패스워드가 일치하지 않습니다.');
      dispatch(changeField({ form: 'signup', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'signup', key: 'passwordConfirm', value: '' }),
      );
      return;
    }
    dispatch(signup({ email, password }));
  };
  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  // 회원 가입 성공/ 실패시
  useEffect(() => {
    if (authError) {
      setError('회원가입에 실패했습니다');
      //TODO 오류 발생
      return;
    }
    if (auth) {
      // TODO 회원가입 성공 메세지
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);
  useEffect(() => {
    if (user) {
      console.log('check API 성공');
      console.log(user);
      history.push('/'); // 홈 화면으로 이동
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (err) {
        console.log('localStorage is not working');
      }
    }
  }, [user, history]);
  return (
    <AuthForm
      type="signup"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(SignUpForm);
