import React, { Component } from 'react';
import styled from 'styled-components';

class Home extends Component {
    render() {
        return (
            <Container>
                <Label>What do you want to do everyday?</Label>
                <Input />
                <Button>Add Habit</Button>
            </Container>
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
`
const Input = styled.input`
    width: 90%;
    padding: 10px;
    border: 2px solid #FF704C;
    font-size: 1.3rem;
    &:focus {
        outline: none;
    }
`
const Label = styled.p`
    color: #aaaaaa;
    margin: 10px 0;
    letter-spacing: .05rem; 
`
const Button = styled.button`
    border-radius: 5px;
    background-color: #FF704C;
    text-transform: uppercase;
    border: none;
    width: 90%;
    margin: 20px;
    color: white;
    font-size: 1.2rem;
`