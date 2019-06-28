import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = () => {
    const [state, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 34},
            {name: 'John', age: 23}
        ],
        otherState: 'some other value',
        showPersons: false
    });

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                {name: newName, age: 34},
                {name: 'John', age: 45}
            ]
        })
    };

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: event.target.value, age: 34},
                {name: 'John', age: 45}
            ]
        })
    };

    const togglePersonsHandler = () => {
        const doesShow = state.showPersons;
        setPersonsState({
            persons: [
                {name: 'Max', age: 34},
                {name: 'John', age: 23}
            ],
            otherState: 'some other value',
            showPersons: !doesShow
        });
    };

    const btnStyle = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        marginTop: '1rem',
        padding: '8px',
        cursor: 'pointer'
    };


    return (
        <div className="App">
            <button onClick={togglePersonsHandler} style={btnStyle}>Click me</button>
            {
                state.showPersons ?
                    <div>
                        <Person name={state.persons[0].name}
                                age={state.persons[0].age}
                                changed={nameChangedHandler}
                                click1={() => switchNameHandler('ANam')}/>
                        <Person name={state.persons[1].name} age={state.persons[1].age}/>
                    </div> : null
            }

        </div>
    );

};

export default app;
