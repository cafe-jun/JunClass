import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router';

const SignIn = loadable(() => import('@pages/SignIn'));
const Gathering = loadable(() => import('@pages/Gathering'));
const App = () => {
  const isAuth = true;
  return (
    <>
      <Route path="/signin" component={SignIn} />
      <Route path="/gathering" component={Gathering} />
    </>
  );
};

export default App;
