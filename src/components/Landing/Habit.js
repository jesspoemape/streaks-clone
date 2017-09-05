import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import book from './../../assets/book.svg';

const Habit = ({habit: {current_streak_start_date, habit_name}}) => {
    let d = new Date(current_streak_start_date);
    let cd = new Date();
    let timeDiff = Math.abs(cd.getTime() - d.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    
    return (
        <Container>
            <HabitWrapper>
                <Icon path={book}/>
                <StreakLength>{diffDays}</StreakLength>
            </HabitWrapper>
            <Name>{habit_name}</Name>
        </Container>    
    );
};

export default Habit;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HabitWrapper = styled.div`
    width: 125px;
    height: 125px;
    border-radius: 50%;
    border: 9px solid #70453B;
    margin: 30px 25px 10px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Name = styled.h4`
    text-transform: uppercase;
    color: white;
    font-weight: 200;
    width: 75%;
    text-align: center;
    letter-spacing: 1px;
    line-height: 1.3rem;
`

const Icon = styled(ReactSVG)`
    fill: white;
    height: 55px;
    margin-bottom: 5px;
`
const StreakLength = styled.h5`
    font-size: .7rem;
    color: #70453B;
`