import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {id: 'sdf3', name: 'Max', age: 34},
            {id: 'asd3', name: 'John', age: 23},
            {id: 'dfg4', name: 'Doe', age: 12}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 34},
                {name: 'John', age: 45}
            ]
        })
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

    render() {
        const btnStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            marginTop: '1rem',
            padding: '8px',
            cursor: 'pointer'
        };

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
                    {/*<Person name={this.state.persons[0].name}*/}
                    {/*        age={this.state.persons[0].age}*/}
                    {/*        changed={this.nameChangedHandler}*/}
                    {/*        click1={() => this.switchNameHandler('ANam')}/>*/}
                    {/*<Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>*/}
                    {/*<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>*/}
                </div>
            )
        }
        return (
            <div className="App">
                <button onClick={this.togglePersonsHandler} style={btnStyle}>Click me</button>
                {person}

            </div>
        );
    }
}

export default App;
