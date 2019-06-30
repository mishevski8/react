import React from 'react';

class Char extends React.Component {
    render() {
        const style = {
            margin: '1rem',
            padding: '1rem',
            border: '1px solid black',
            display: 'inline-block',
            textAlign: 'center',
        };
        return (
            <div style={style} onClick={this.props.clicked}>
                {this.props.character}
            </div>
        );
    }


}

export default Char;
