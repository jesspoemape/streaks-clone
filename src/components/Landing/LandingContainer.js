import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Habit from './Habit';
import Footer from './Footer';

class LandingContainer extends Component {
    constructor() {
        super();
        this.state={
            habits: []
        }
    }

componentDidMount() {
    axios.get('/api/getHabits/1').then(res => {
        this.setState({habits: res.data})
    }).catch(console.error, "Error");
}

    render() {
        return (
            <div>
                <Container>
                    {this.state.habits.map(habit => {
                        return <Habit habit={habit} key={habit.id}/>
                    })}
                </Container>
                <Footer />
            </div>
            
        );
    }
}

export default LandingContainer;

const Container = styled.div`
    background: #FF704C;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`