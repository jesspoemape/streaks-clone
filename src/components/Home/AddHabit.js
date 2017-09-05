import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import plus from './../../assets/plus.svg';

const Habit = () => {
    
    return (
        <Container>
            <HabitWrapper>
                <Icon path={plus}/>
            </HabitWrapper>
            <Name>Add a task</Name>
        </Container>    
    );
};

export default Habit;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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