import React from 'react'

const Greet = (props) => {
    return (
        <div className='Greet'>
            Hi {props.name}
            <div>{props.children}</div>
        </div>

    )
}

export default Greet
