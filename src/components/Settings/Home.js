import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import axios from 'axios';
import {Link} from 'react-router-dom';

import notify from './../../assets/notify.svg';
import plus from './../../assets/plus.svg';
import help from './../../assets/help.svg';
import support from './../../assets/support.svg';
import Header from './../Shared/Header.js';


class Home extends Component {
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
            <Header />
            <Divider />
            <Container>
                {this.state.habits.map(habit => {
                    return (<Link to={`/habit-detail/${habit.id}`} key={habit.id}><Card>
                        <IconContainer>
                            <Icon path={help} />
                        </IconContainer>
                        {habit.habit_name}
                    </Card></Link>)
                })}
                <Divider />
                <Link to='/add-habit'><Card>
                    <IconContainer>
                        <Icon path={plus} />
                    </IconContainer>
                    Add a habit
                </Card></Link>
                <Divider />
                <Card>
                    <IconContainer>
                        <Icon path={notify} />
                    </IconContainer>
                    Notifications
                </Card>
                <Divider />
                <Card>
                    <IconContainer>
                        <Icon path={help} />
                    </IconContainer>
                    Help
                </Card>
                <Card>
                    <IconContainer>
                        <Icon path={support} />
                    </IconContainer>
                    Support@streaksapp.com
                </Card>
            </Container>
        </div>
        );
    }
}

export default Home;

const Container = styled.div`
    
`
const Card = styled.div`
    background-color: #E56444;
    height: 50px;
    width: 100%;
    color: #FDFCFB;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    border: 1px solid #c95538;
    padding-left: 15px;
`
const Divider = styled.div`
    background-color: #FF704C;
    height: 25px;
`
const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #CD5A3D;
    margin-right: 15px;
`
const Icon = styled(ReactSVG)`
    fill: #FDFCFB;
    height: 20px;
`