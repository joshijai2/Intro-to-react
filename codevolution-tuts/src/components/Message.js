import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Jai Joshi',
            buttonText: 'Click to greet'
        }
    }

    clickHandler = () => {
        return(
            alert('Hi there'),
            this.setState({
                buttonText: 'Click again to greet'
            }))
    };

    render() {
        return (
            <div className='Message'>
                Welcome {this.state.name}!
                Let's greet our visitors.
                <button onClick={this.clickHandler}>{this.state.buttonText}</button>

            </div>
        )
    }
}

export default Message
