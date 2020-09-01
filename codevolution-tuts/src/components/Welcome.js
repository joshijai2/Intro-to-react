import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div className='Welcome'>
                Welcome {this.props.name}!
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Welcome
