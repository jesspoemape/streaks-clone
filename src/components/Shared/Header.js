import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import {Link} from 'react-router-dom';

import back from './../../assets/back.svg';

const Header = ({title}) => {
    return (
        <Container>
            <Link to='/'><BackArrow path={back}/></Link>
            <Title>{title}</Title>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    background-color: #E56444;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    position: relative;
`
const BackArrow = styled(ReactSVG)`
    stroke: white;
    fill: white;
    width: 25px;
    position: absolute;
    left: 15px;
    top: 19px;
`
const Title = styled.h2`
    font-size: 1.5rem;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
`
