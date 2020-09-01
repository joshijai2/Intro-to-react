import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    onClickIncrease() {
        const currCount = this.state.count
        currCount < 10 ?
        this.setState({
            count: currCount + 1
        }) : alert("Max limit reached : "+ currCount)
    }
    
    onClickDecrease() {
        const currCount = this.state.count
        currCount > 0 ?
        this.setState({
            count: currCount - 1
        }) : alert("Min limit reached : "+ currCount)
    }
    render() {
        return (
            <div>
                <p className='Counter'>count: {this.state.count}</p>
                <button onClick={()=> this.onClickIncrease()}>+</button>
                <button onClick={()=> this.onClickDecrease()}>-</button>
            </div>
        )
    }
}

export default Counter
