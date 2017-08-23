import React, { Component } from 'react';
import styled from 'styled-components';

import Habit from './Habit';
import Footer from './Footer';

class LandingContainer extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                </Container>
                <Footer />
            </div>
            
        );
    }
}

export default LandingContainer;

const Container = styled.div`
    background: #FF704C;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`