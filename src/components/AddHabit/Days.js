import React from 'react';
import styled from 'styled-components';

const Days = ({days, addDay}) => {
    return (
        <MainContainer>
            <LabelContainer>
                <Label>Task days: </Label>
                <Label> {days.toString()}</Label>
            </LabelContainer>
            <DaysContainer>
                <Day onClick={() => addDay('Su')}>Su</Day>
                <Day onClick={() => addDay('M')}>M</Day>
                <Day onClick={() => addDay('Tu')}>Tu</Day>
                <Day onClick={() => addDay('W')}>W</Day>
                <Day onClick={() => addDay('Th')}>Th</Day>
                <Day onClick={() => addDay('F')}>F</Day>
                <Day onClick={() => addDay('Sa')}>Sa</Day>
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
    justify-content: space-between;
    padding: 10px 40px;
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    color: #C4573A;
`