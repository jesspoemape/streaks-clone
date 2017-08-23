import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingContainer from './components/Landing/LandingContainer';

export default (
    <Switch>
        <Route exact path='/' component={LandingContainer}/>
    </Switch>
);