import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router';

const SignIn = loadable(() => import('@pages/SignIn'));
const Gathering = loadable(() => import('@pages/Gathering'));
const App = () => {
    const isAuth = true;
    return (
        <div className="App">
            {isAuth ? <Redirect to="/signin" /> : <Redirect to="/gathering" />}
            <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/gathering" component={Gathering} />
            </Switch>
        </div>
    );
};

export default App;
