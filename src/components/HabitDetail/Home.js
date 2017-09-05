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
        return (
            <div>
                {habit.habit_name}
            </div>
        );
    }
}

export default Home;