import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';

import Header from './../Shared/Header';
import Days from './Days';

class Home extends Component {
    constructor() {
        super();

        this.state={
            selectedDays: [],
            userInput: ""
        }
        this.addDay = this.addDay.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.addHabit = this.addHabit.bind(this);
    }

    addDay(day) {
        if (this.state.selectedDays.includes(day)) {
            return this.state.selectedDays;
        }
        else {
            this.setState({
                selectedDays: [...this.state.selectedDays, day]
            });
        }
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    addHabit() {
        axios.post('/api/addHabit', {
            habit_name: this.state.userInput,
            date_created: moment(),
            user_id: 3,
            current_streak_start_date: moment() 
        })
        .then(res => res)
        .catch(console.error, 'Error');
    }

    render() {
        const {userInput, selectedDays} = this.state;
        return (
            <div>
                <Link to='/'><Header title={'Add a habit'}/></Link>
                <Container>
                    <Label>Enter habit name.</Label>
                    <Input value={userInput} onChange={e => this.handleChange(e)}/>
                    <Days days={selectedDays} addDay={this.addDay} />
                    <Link to='/'><Button onClick={this.addHabit}>Add Habit</Button></Link>
                </Container>
            </div>
            
        );
    }
}

export default Home;

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
`
const Input = styled.input`
    width: 90%;
    padding: 10px;
    margin-bottom: 50px;
    font-size: 1.3rem;
    &:focus {
        outline: none;
    }
`
const Label = styled.p`
    color: white;
    margin: 10px 0;
    letter-spacing: .05rem; 
`
const Button = styled.button`
    border-radius: 5px;
    background-color: #7F3826;
    text-transform: uppercase;
    border: none;
    color: white;
    font-size: 1rem;
    padding: 15px;
    width: 225px;
`