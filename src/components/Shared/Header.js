import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import back from './../../assets/back.svg';

const Header = () => {
    return (
        <Container>
            <BackArrow path={back}/>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    background-color: #E56444;
    box-shadow: 0px 3px 13px 0px rgba(191,191,191,1);
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 15px;
`
const BackArrow = styled(ReactSVG)`
    stroke: white;
    fill: white;
    width: 25px;
`
