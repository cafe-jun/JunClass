import React from 'react';
import loadable from '@loadable/component';
import { Route } from 'react-router';

const SignIn = loadable(() => import('@pages/SignInForm'));
const Gathering = loadable(() => import('@pages/Gathering'));
const SignUp = loadable(() => import('@pages/SignUpForm'));

const App = () => {
  const isAuth = true;
  return (
    <>
      {/*{isAuth ? <Redirect to="/signin" /> : <Redirect to="/gathering" />}*/}
      {/*<Switch>*/}
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/gathering" component={Gathering} />
      {/*</Switch>*/}
    </>
  );
};

export default App;
