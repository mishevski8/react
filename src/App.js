import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person'
import Validation from './Validation/Validation'
import Char from './Char/Char';

class App extends Component {
    state = {
        persons: [
            {id: 'sdf3', name: 'Max', age: 34},
            {id: 'asd3', name: 'John', age: 23},
            {id: 'dfg4', name: 'Doe', age: 12}
        ],
        otherState: 'some other value',
        showPersons: false,
        userInput: ''
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => person.id === id);

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const personsCopy = [...this.state.persons];
        personsCopy[personIndex] = person;

        this.setState({persons: personsCopy});
    };

    deletePerson = (personIndex) => {
        // const personsCopy = this.state.persons.slice();
        const personsCopy = [...this.state.persons];
        personsCopy.splice(personIndex, 1);
        this.setState({persons: personsCopy});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };

    changedInputHandler = (event) => {
        this.setState({
            userInput: event.target.value
        })
    };

    deleteCharHandler = (index) => {
        const charListCopy = this.state.userInput.split('');
        charListCopy.splice(index, 1);
        const updatedText = charListCopy.join('')
        this.setState({
            userInput: updatedText
        });
    };

    render() {
        const btnStyle = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            marginTop: '1rem',
            padding: '8px',
            cursor: 'pointer',
        };

        const assignedClasses = [];

        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red)
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold)
        }

        let person = null;

        if (this.state.showPersons) {
            person = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person name={person.name}
                                       age={person.age}
                                       key={person.id}
                                       changed={(event) => this.nameChangedHandler(event, person.id)}
                                       click1={() => this.deletePerson(index)}/>
                    })}
                </div>
            );

            btnStyle.backgroundColor = 'red';
        }

        const charList = (
            this.state.userInput.split('').map((char, index) => {
                return <Char character={char}
                             clicked={() => this.deleteCharHandler(index)}
                             key={index}/>
            })
        );
        return (
            <div className={classes.App}>
                <button onClick={this.togglePersonsHandler} style={btnStyle}>Click me</button>
                {person}

                <p className={assignedClasses.join(' ')}>This worked!</p>

                <input type="text"
                       value={this.state.userInput}
                       onChange={this.changedInputHandler}/>
                <p>Length: {this.state.userInput}</p>

                <Validation inputLength={this.state.userInput.length}/>
                {charList}
            </div>
        );
    }
}

export default App;
