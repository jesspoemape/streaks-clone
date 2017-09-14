import React from 'react';
import styled from 'styled-components';

const BasicStats = ({streakLengthInDays, allTimeAvg, checkinCount}) => {
    return (
        <Container>
            <Stat>
                {streakLengthInDays ? streakLengthInDays : 0}
                <Label>Best Streak</Label>
            </Stat>
            <Stat>
                {allTimeAvg ? `${allTimeAvg.toFixed(1)}%` : '0%'}
                <Label>All Time</Label>
            </Stat>
            <Stat>
                {checkinCount ? checkinCount : 0}
                <Label>Completions</Label>
            </Stat>
        </Container>
    );
};

export default BasicStats;
const Container = styled.div`
    width: 100%;
    border-top: 2px solid #ff987c;
    height: 50px;
    margin-top: 30px;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
`
const Stat = styled.div`
    color: white;
    font-size: 1.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Label = styled.h4`
    text-transform: uppercase;
    font-size: .7rem;
    padding-top: 5px;
    letter-spacing: 1px;
    color: #fcd6cc;
`