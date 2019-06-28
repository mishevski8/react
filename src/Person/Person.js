import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click1}>I',m {props.name}, and I'm {props.age} years old!</p>
            {/*two way data binding*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
