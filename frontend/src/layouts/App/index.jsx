import React from 'react';
import loadable from '@loadable/component';
import { Route } from 'react-router';

const SignInPage = loadable(() => import('../../pages/SignInPage'));
const GatheringList = loadable(() => import('../../pages/GatheringList'));
const SignUpPage = loadable(() => import('../../pages/SignUpPage'));
const App = () => {
  return (
    <>
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/" component={GatheringList} />
    </>
  );
};

export default App;
