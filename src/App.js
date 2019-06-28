import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 34},
            {name: 'John', age: 23}
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: 'Maximilian', age: 34},
                {name: 'John', age: 45}
            ]
        })
    };

    const [otherState, setOtherState] = useState('some other state')


    console.log(personsState, otherState);


    return (
        <div className="App">
            <button onClick={switchNameHandler}>Click me</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        </div>
    );

};

export default app;
