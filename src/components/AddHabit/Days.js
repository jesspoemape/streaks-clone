import React from 'react';
import styled from 'styled-components';

const Days = ({days}) => {
    return (
        <MainContainer>
            <LabelContainer>
                <Label>Task days:</Label>
                <Label>{days.toString()}</Label>
            </LabelContainer>
            <DaysContainer>
                <Day>S</Day>
                <Day>M</Day>
                <Day>T</Day>
                <Day>W</Day>
                <Day>T</Day>
                <Day>F</Day>
                <Day>S</Day>
            </DaysContainer>
        </MainContainer>
    );
};

export default Days;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
`
const LabelContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0;
`
const Label = styled.h5`
    text-transform: uppercase;
    font-size: .7rem;
    font-weight: 200;
    color: white;
    letter-spacing: 1px;
`
const DaysContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Day = styled.div`
    background-color: #E56544;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    color: #C4573A;
`