import AuthForm from '../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeField, initializeForm } from '../modules/auth';

const SigInForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.signin,
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
  return (
    <AuthForm
      type="signin"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SigInForm;
