import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import {Link} from 'react-router-dom';

import trash from './../../assets/trash.svg';
import back from './../../assets/back.svg';

const Footer = ({handleDelete}) => {
    return (
        <Container>
            <Link to='/settings'><MenuItem path={back}/></Link>
            <AppName>Streaks.</AppName>
            <MenuItem path={trash} onClick={handleDelete}/>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 90%;
`
const MenuItem = styled(ReactSVG)`
    width: 35px;
    fill: #E4D8D6;
`
const AppName = styled.h3`
    text-transform: uppercase;
    font-weight: 500;
    color: #70453B;
`