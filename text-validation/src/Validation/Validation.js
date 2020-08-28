import React from 'react';
import './Validation.css'
const validation = (props) => {
    let validationMessage = <p className="Valid">'Text long enough'</p>;
    if (props.inputLength < 5)
    validationMessage = <p className="ValidationError">Text too short!</p>;
    return (
        <div className="Validation">
            {validationMessage} 
        </div>
    );
}

export default validation;