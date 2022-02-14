import AuthForm from '../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeField, initializeForm } from '../modules/auth';
import { check } from '../modules/user';
import { withRouter } from 'react-router-dom';

const SigInForm = ({ history }) => {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.signin,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signin',
        key: name,
        value,
      }),
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(initializeForm('signin'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError(authError);
      console.log(authError);
      return;
    }
    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);
  return (
    <AuthForm
      type="signin"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(SigInForm);
