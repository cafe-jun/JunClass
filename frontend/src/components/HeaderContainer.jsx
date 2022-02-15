import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { signout } from '../modules/user';

const HeaderContainer = (props) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onSignOut = () => {
    dispatch(signout());
  };
  return <Header user={user} onSignOut={onSignOut} />;
};

export default HeaderContainer;
