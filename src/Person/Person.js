import React from 'react';
import Radium from 'radium'
import './Person.css'

const person = (props) => {
    /*import StyleRoot*/
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click1}>I',m {props.name}, and I'm {props.age} years old!</p>
            {/*two way data binding*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);
