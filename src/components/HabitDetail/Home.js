import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import axios from 'axios';
import moment from 'moment';

import book from './../../assets/book.svg';
import StatsOverTime from './StatsOverTime';

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
        const d = moment(habit.date_created);
        const cssd = moment(habit.current_streak_start_date);
        const cd = moment(new Date());
        const allTimeAvg = (checkinCount/(cd.diff(d, 'days')))*100; 
        let streakLengthInDays = cd.diff(cssd, 'days');

        return (
            <Container>
                <IconContainer>
                    <Icon path={book}/>
                </IconContainer>
                <Name>{habit.habit_name ? habit.habit_name : 'habit name'}</Name>
                <BasicStats>
                    <Stat>
                        {streakLengthInDays ? streakLengthInDays : 0}
                        <Label>Best Streak</Label>
                    </Stat>
                    <Stat>
                        {allTimeAvg ? `${allTimeAvg.toFixed(1)}%` : '0%'}
                        <Label>All Time</Label>
                    </Stat>
                    <Stat>
                        {checkinCount ? checkinCount : 0}
                        <Label>Completions</Label>
                    </Stat>
                </BasicStats>
                <StatsOverTime />
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
    height: 100px;
    width: 100px;
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
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    text-transform: uppercase;
`
const StartDate = styled.div`
    color: white;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    text-transform: uppercase;
`
const BasicStats = styled.div`
    width: 100%;
    border-top: 1px solid #c95538;
    height: 50px;
    margin-top: 30px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
`
const Stat = styled.div`
    color: white;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Label = styled.h4`
    text-transform: uppercase;
    font-size: .7rem;
    padding-top: 5px;
    letter-spacing: 1px;
`