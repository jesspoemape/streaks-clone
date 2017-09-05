import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import AddHabit from './components/AddHabit/Home';
import Settings from './components/Settings/Home';
import Detail from './components/HabitDetail/Home';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/add-habit' component={AddHabit}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/habit-detail/:id' component={Detail}/>
    </Switch>
);