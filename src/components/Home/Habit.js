import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import moment from 'moment';
import IconFinder from './../Shared/IconFinder';

import book from './../../assets/book.svg';
import cat from './../../assets/cat.svg';
import dog from './../../assets/dog.svg';
import feet from './../../assets/feet.svg';
import tooth from './../../assets/tooth.svg';
import hand from './../../assets/hand.svg';
import star from './../../assets/star.svg';

const Habit = ({habit: {current_streak_start_date, habit_name, id}, handleClick}) => {
    function iconFinder(habit_name) {
        let name = habit_name.toLowerCase();
            if (name.includes('cat')) {
                return cat;
            }
            else if (name.includes('dog')) {
                return dog;
            }
            else if (name.includes('hand') || name.includes('finger')) {
                return hand;
            }
            else if (name.includes('foot') || name.includes('feet') || name.includes('walk') || name.includes('run')) {
                return feet;
            }
            else if (name.includes('book') || name.includes('read')) {
                return book;
            }
            else if (name.includes('tooth') || name.includes('teeth') || name.includes('floss')) {
                return tooth;
            }
            else {
                return star;
            }
    }

    let icon = iconFinder(habit_name);
    let cssd = moment(current_streak_start_date);
    let cd = moment(new Date());
    let streakLengthInDays = cd.diff(cssd, 'days');
    
    return (
        <Container onClick={() => handleClick(id)}>
            <HabitWrapper>
                <Icon path={icon}/>
                <StreakLength>{streakLengthInDays}</StreakLength>
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
    width: 50%;
    position: relative;
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