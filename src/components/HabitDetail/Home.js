import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.state={
            habit: {}
        }
    }

componentDidMount() {
    let habitid = this.props.match.params.id;
    axios.get(`/api/getHabit/${habitid}`).then(res => this.setState({habit: res.data[0]})).catch(console.error, 'Error');
}

    render() {
        const {habit} = this.state;
        let d = new Date(habit.date_created);
        

        return (
            <Container>
                <Name>{habit.habit_name}</Name>
                <StartDate>Since {d.toDateString()}</StartDate>
                <BasicStats>
                    <Stat>
                        12
                        <Label>Best Streak</Label>
                    </Stat>
                    <Stat>
                        58.2%
                        <Label>All Time</Label>
                    </Stat>
                    <Stat>
                        368
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