import React from 'react';

const person = (props) => {
     
    return (
    <div>
    <p>I am {props.name}!!</p>
    <p>My age is {props.age}</p>
    </div>
    );
}
 
export default person;