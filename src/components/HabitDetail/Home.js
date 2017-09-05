import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

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
        const cd = moment(new Date());
        const allTimeAvg = (checkinCount/(cd.diff(d, 'days')))*100; 

        return (
            <Container>
                <Name>{habit.habit_name}</Name>
                <StartDate>Since {d.format('LL')}</StartDate>
                <BasicStats>
                    <Stat>
                        12
                        <Label>Best Streak</Label>
                    </Stat>
                    <Stat>
                        {`${allTimeAvg.toFixed(1)}%`}
                        <Label>All Time</Label>
                    </Stat>
                    <Stat>
                        {checkinCount ? checkinCount : 0}
                        <Label>Completions</Label>
                    </Stat>
                </BasicStats>
            </Container>
        );
    }
}

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.div`
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
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
    border-top: 1px solid #c95538;
    height: 50px;
    margin-top: 20px;
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