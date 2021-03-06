import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';

import Habit from './Habit';
import CompletedHabit from './CompletedHabit';
import AddHabit from './AddHabit';
import Footer from './Footer';

class Home extends Component {
    constructor() {
        super();
        this.state={
            habits: [],
            today: moment(),
            checkedInHabits: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

componentWillMount() {
    // check streaks for user by id
    // loop through habits and check if last checkin was exactly one day ago
    // if so, do nothing
    // if not, reset the current streak start date

    const {today, checkedInHabits} = this.state;
    axios.get(`api/checkStreaks/${2}`).then(res => {
        const checkInsToChangeTempArr = [];
        const checkedInHabitsTempArr = [];
        res.data.forEach(checkIn => {
            let lastCheckin = moment(checkIn.checkin_at);
            // if the last checkin was not today, change streak start date
            if (!lastCheckin.isSame(today, 'day')) {
                checkInsToChangeTempArr.push(checkIn.habit_id);
            }
            // if the last checkin was today, add it to the checked in array by id
            if (lastCheckin.isSame(today, 'day')) {
                checkedInHabitsTempArr.push(checkIn.habit_id);
                this.setState({checkedInHabits: checkedInHabitsTempArr})
            }
        });
        
        // send reset the current streak start date
        if (checkInsToChangeTempArr.length > 0) {
            axios.put(`/api/updateStreakStartDate`, {checkInsToChangeTempArr, today})
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
    const {today, checkedInHabits} = this.state;
    axios.post(`/api/checkIn/${habitId}`, {today}).then(res => res).catch(console.error, 'Error');
    if (!checkedInHabits.includes(habitId)) {
        this.setState({checkedInHabits: [...checkedInHabits, habitId]})
    }
}

    render() {
        const {habits, checkedInHabits} = this.state;
        const mappedHabits = habits.map((habit, i) => {
            if (!checkedInHabits.includes(habit.id)) {
                return <Habit habit={habit} key={i} handleClick={this.handleClick}/>
            }
            else {
                return <CompletedHabit habit={habit} key={i}/>
            }
        });
        return (
            <div>
                <HabitsContainer>
                    {mappedHabits}
                    {this.state.habits.length < 6 ? <Link to='/add-habit'><AddHabit /></Link>: null}
                </HabitsContainer>
                <Footer/>
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