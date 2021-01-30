import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Ads from '../pages/Ads';
import Form from '../pages/Form';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Ads />
            </Route>
            <Route exact path="/form">
                <Form />
            </Route>
        </Switch>
    );
}

export default Routes;