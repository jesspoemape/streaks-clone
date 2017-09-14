import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const DeleteModal = ({modal, deleteHabit, closeModal}) => {
    console.log('MODAL',modal);
    return (
        <Container modal={modal}>
            <Content>
                Are you sure you want to delete this habit?
                <Link to='/'><Button onClick={deleteHabit}>Yes, Delete it</Button></Link>
                <Button onClick={closeModal}>No, keep my habit</Button>
            </Content>
        </Container>
    );
};

export default DeleteModal;

const Container = styled.div`
    display: ${props => props.modal ? 'block' : 'none'}; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`

const Content = styled.div`
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 45px 20px;
    width: 80%; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    border-radius: 5px;
    background-color: #FF704C;
    text-transform: uppercase;
    border: none;
    color: white;
    font-size: 1rem;
    padding: 15px;
    margin-top: 20px;
    width: 225px;
`