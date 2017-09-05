import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import AddHabit from './components/AddHabit/Home';


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/add-habit' component={AddHabit}/>
    </Switch>
);