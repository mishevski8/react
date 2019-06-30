import React from 'react'

const validation = (props) => {

    let text = null;
    if (props.inputLength > 5) {
        text = (
            <p>Text too long!</p>
        )
    } else {
        text = (
            <p>Text too short!</p>
        )
    }

    return (
        <div>
            {text}
        </div>
    )
};

export default validation;
