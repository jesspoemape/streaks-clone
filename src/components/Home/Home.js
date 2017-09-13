import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';

import Habit from './Habit';
import AddHabit from './AddHabit';
import Footer from './Footer';

class Home extends Component {
    constructor() {
        super();
        this.state={
            habits: [],
            today: moment()
        }
        this.handleClick = this.handleClick.bind(this);
    }

componentWillMount() {
    // check streaks for user by id
    const {today} = this.state;
    axios.get(`api/checkStreaks/${2}`).then(res => {
        const checkInsToChange = [];
        res.data.forEach(checkIn => {
            let lastCheckin = moment(checkIn.checkin_at);
            if (today.diff(lastCheckin, 'days') > 1 ) {
                checkInsToChange.push(checkIn.habit_id);
            }
        });
        
        // send checkinstochange info back to database to update the currentstreskatartdates
        if (checkInsToChange.length > 0) {
            axios.put(`/api/updateStreakStartDate`, {checkInsToChange, today})
            .then(res => {
                axios.get(`/api/getHabits/${2}`).then(res => {
                    this.setState({habits: res.data})
                })
            })
        }
    })
    .catch(console.error, 'Error');
}

componentDidMount() {
    axios.get(`/api/getHabits/${2}`).then(res => {
        this.setState({habits: res.data})
    }).catch(console.error, "Error");
}

handleClick(habitId) {
    // axios.post(`./api/checkIn/${habitId}`, now).then(res => res).catch(console.error, 'Error');
}

    render() {
        const {habits} = this.state;
        return (
            <div>
                <HabitsContainer>
                    {habits.map(habit => {
                        return <Habit habit={habit} key={habit.id} handleClick={this.handleClick}/>
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