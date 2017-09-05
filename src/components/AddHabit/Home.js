import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './../Shared/Header';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Label>What do you want to do everyday?</Label>
                    <Input />
                    {/*<RemindMeToggle type='checkbox'/>*/}
                    <Button>Add Habit</Button>
                </Container>
            </div>
            
        );
    }
}

export default Home;

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
`
const Input = styled.input`
    width: 90%;
    padding: 10px;
    font-size: 1.3rem;
    &:focus {
        outline: none;
    }
`
const Label = styled.p`
    color: white;
    margin: 10px 0;
    letter-spacing: .05rem; 
`
const Button = styled.button`
    border-radius: 5px;
    background-color: #7F3826;
    text-transform: uppercase;
    border: none;
    width: 50%;
    margin: 20px;
    color: white;
    font-size: 1rem;
    padding: 15px;
`
const RemindMeToggle = styled.input`
    width: 20px;
    height: 20px;
`