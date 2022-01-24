import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router';

const SignIn = loadable(() => import('@pages/SignIn'));
const Gathering = loadable(() => import('@pages/Gathering'));
const App = () => {
    console.log(Gathering);
    return (
        <>
            <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/gathering" component={Gathering} />
            </Switch>
        </>
    );
};

export default App;
