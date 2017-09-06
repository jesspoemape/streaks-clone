import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import axios from 'axios';
import moment from 'moment';

import book from './../../assets/book.svg';
import StatsOverTime from './StatsOverTime';
import BasicStats from './BasicStats';
import StatsByDay from './StatsByDay';
import StatsByTime from './StatsByTime';

class Home extends Component {
    constructor() {
        super();
        this.state={
            habit: {},
            checkinCount: null
        }
    }

componentDidMount() {
    let habitid = this.props.match.params.id;
    axios.get(`/api/getHabit/${habitid}`).then(res => this.setState({habit: res.data[0]})).catch(console.error, 'Error');
    axios.get(`/api/getCheckins/${habitid}`).then(res => this.setState({checkinCount: res.data})).catch(console.error, 'Error');
}

    render() {
        const {habit, checkinCount} = this.state;
        const startDate = moment(habit.date_created).format('ll');
        const currentStreakStartDate = moment(habit.current_streak_start_date);
        const currentDate = moment();
        const allTimeAvg = (checkinCount/(currentDate.diff(startDate, 'days')))*100; 
        const streakLengthInDays = currentDate.diff(currentStreakStartDate, 'days');
        const totalDays = currentDate.diff(startDate, 'days');

        return (
            <Container>
                <IconContainer>
                    <Icon path={book}/>
                </IconContainer>
                <Name>{habit.habit_name ? habit.habit_name : 'habit name'}</Name>
                <BasicStats streakLengthInDays={streakLengthInDays} allTimeAvg={allTimeAvg} checkinCount={checkinCount}/>
                <StatsOverTime startDate={startDate} totalDays={totalDays}/>
                <Label>Completions</Label>
                <StatsContainer>
                    
                    <StatsByDay />
                    <StatsByTime />
                </StatsContainer>
            </Container>
        );
    }
}

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
`
const IconContainer = styled.div`
    background-color: white;
    border-radius: 50%;
    height: 120px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Icon = styled(ReactSVG)`
    fill: #5e1200;
    width: 50px;
`
const Name = styled.div`
    color: white;
    font-size: 1.1rem;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    text-transform: uppercase;
`
const Label = styled.h5`
    text-transform: uppercase;
    font-size: .7rem;
    padding-top: 5px;
    letter-spacing: 1px;
    color: #fcd6cc;
`
const StatsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`