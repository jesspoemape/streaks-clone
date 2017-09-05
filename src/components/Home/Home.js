import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Habit from './Habit';
import AddHabit from './AddHabit';
import Footer from './Footer';

class Home extends Component {
    constructor() {
        super();
        this.state={
            habits: []
        }
    }

componentDidMount() {
    axios.get('/api/getHabits/2').then(res => {
        this.setState({habits: res.data})
    }).catch(console.error, "Error");
}

    render() {
        return (
            <div>
                <HabitsContainer>
                    {this.state.habits.map(habit => {
                        return <Habit habit={habit} key={habit.id}/>
                    })}
                    {this.state.habits.length < 6 ? <Link to='/add-habit'><AddHabit /></Link>: null}
                </HabitsContainer>
                <Footer />
            </div>
            
        );
    }
}

export default Home;

const HabitsContainer = styled.div`
    background: #FF704C;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    padding-bottom: 40px;
    min-height: 629px;
`