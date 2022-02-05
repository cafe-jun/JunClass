import React from 'react';
import loadable from '@loadable/component';
import { Route } from 'react-router';

const SignInPage = loadable(() => import('@pages/SignInPage'));
const Gathering = loadable(() => import('@pages/Gathering'));
const SignUpPage = loadable(() => import('@pages/SignUpPage'));
const App = () => {
  const isAuth = true;
  return (
    <>
      {/*{isAuth ? <Redirect to="/signin" /> : <Redirect to="/gathering" />}*/}
      {/*<Switch>*/}
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/gathering" component={Gathering} />
      {/*</Switch>*/}
    </>
  );
};

export default App;
