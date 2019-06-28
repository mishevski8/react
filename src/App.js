import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 34},
            {name: 'John', age: 23}
        ],
        otherState: 'some other value',
        showPersons: false
    };
    // const [state, setPersonsState] = useState({
    //     persons: [
    //         {name: 'Max', age: 34},
    //         {name: 'John', age: 23}
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
    // });
    //

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 34},
                {name: 'John', age: 45}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 34},
                {name: 'John', age: 45}
            ]
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };
    //
    // const btnStyle = {
    //     backgroundColor: 'white',
    //     font: 'inherit',
    //     border: '1px solid blue',
    //     marginTop: '1rem',
    //     padding: '8px',
    //     cursor: 'pointer'
    // };

    render() {
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
                <button onClick={this.togglePersonsHandler} style={btnStyle}>Click me</button>
                {
                    this.state.showPersons ?
                        <div>
                            <Person name={this.state.persons[0].name}
                                    age={this.state.persons[0].age}
                                    changed={this.nameChangedHandler}
                                    click1={() => this.switchNameHandler('ANam')}/>
                            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                        </div> : null
                }

            </div>
        );
    }
}

export default App;
