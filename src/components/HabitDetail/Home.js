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
import Footer from './Footer';
import DeleteModal from './DeleteModal';

class Home extends Component {
    constructor() {
        super();
        this.state={
            habit: {},
            checkinCount: 0,
            checkins: [],
            checkInsByDay: [],
            checkInsByHour: [],
            modal: false
        }

        this.countOccurences = this.countOccurences.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.deleteHabit = this.deleteHabit.bind(this);
    }

componentDidMount() {
    let habitid = this.props.match.params.id;
    axios.get(`/api/getHabit/${habitid}`).then(res => this.setState({habit: res.data[0]})).catch(console.error, 'Error');
    axios.get(`/api/getCheckins/${habitid}`)
    .then(res => {

        // for checkins by day
        const checkInsByDay = res.data.map(checkin => {
            return moment(checkin.checkin_at).day();
        });

        // for checkins by hour
        const checkInsByHour = res.data.map(checkin => {
            return moment(checkin.checkin_at).hour();
        });

        // .length for number of completions
        this.setState({checkInsByHour, checkInsByDay, checkinCount: res.data.length, checkins: res.data});

    }).catch(console.error, 'Error');   
}

countOccurences(arr) {
    const obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    return obj;
}
openModal() {
    this.setState({modal: true});
}

closeModal() {
    this.setState({modal: false});
}

deleteHabit() {
    const habitid = this.props.match.params.id;
    axios.put(`/api/archiveHabit/${habitid}`).then(res => res).catch(console.error, 'Error');
}

    render() {
        const {habit, checkinCount, checkInsByDay, checkInsByHour, modal} = this.state;
        const startDate = moment(habit.date_created).format('ll');
        const currentStreakStartDate = moment(habit.current_streak_start_date);
        const currentDate = moment();
        const allTimeAvg = (checkinCount/(currentDate.diff(startDate, 'days')))*100; 
        const streakLengthInDays = currentDate.diff(currentStreakStartDate, 'days');
        const totalDays = currentDate.diff(startDate, 'days');
        const statsByDayObj = this.countOccurences(checkInsByDay);
        const statsByTimeObj = this.countOccurences(checkInsByHour);

        return (
            <MainContainer>
            <Container>
                <DeleteModal modal={modal ? true : false} deleteHabit={this.deleteHabit} closeModal={this.closeModal}/>
                <IconContainer>
                    <Icon path={book}/>
                </IconContainer>
                <Name>{habit.habit_name ? habit.habit_name : 'habit name'}</Name>
                <BasicStats streakLengthInDays={streakLengthInDays} allTimeAvg={allTimeAvg} checkinCount={checkinCount}/>
                <StatsOverTime startDate={startDate} totalDays={totalDays}/>
                <Label>Completions</Label>
                <StatsContainer>
                    <StatsByDay stats={statsByDayObj}/>
                    <StatsByTime stats={statsByTimeObj}/>
                </StatsContainer>
            </Container>
            <Footer openModal={this.openModal}/>
            </MainContainer>
        );
    }
}

export default Home;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 15px;
`