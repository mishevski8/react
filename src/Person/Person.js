import React from 'react';
import classes from './Person.css'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 60%;
    margin: 1rem auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 1rem;
    text-align: center;
`

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.onDeletePerson}>I',m {props.name}, and I'm {props.age} years old!</p>
            {/*two way data binding*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
};

export default person;
