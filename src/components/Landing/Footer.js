import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import settings from './../../assets/settings.svg';
import star from './../../assets/star.svg';


const Footer = () => {
    return (
        <Container>
            <MenuItem path={settings}/>
            <MenuItem path={star}/>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`

const MenuItem = styled(ReactSVG)`
    height: 35px;
    fill: #E4D8D6;
`