import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person'
import Validation from './Validation/Validation'
import Char from './Char/Char';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
        const updatedText = charListCopy.join('');
        this.setState({
            userInput: updatedText
        });
    };

    render() {
        let btnStyle = '';

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
                        return <ErrorBoundary key={person.id}>
                            <Person name={person.name}
                                    age={person.age}
                                    changed={(event) => this.nameChangedHandler(event, person.id)}
                                    click1={() => this.deletePerson(index)}/>
                        </ErrorBoundary>
                    })}
                </div>
            );

            btnStyle = classes.Red;
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
                <button className={btnStyle} onClick={this.togglePersonsHandler}>Click me</button>
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
