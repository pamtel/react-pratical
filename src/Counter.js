import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
     increaseCount = () => {
         this.setState({counter : this.state.counter + 1})
        }
        decreaseCount = () => {
            this.setState({counter : this.state.counter - 1})
           }
    render() {
        console.log(this.props);
        return (
            <div className="text-center">
                <h1>{this.state.counter}</h1>
                <button onClick={this.increaseCount} className="border-red-400 p-3 bg-red-400 m-3 rounded">+</button>
                <button onClick={this.decreaseCount} className="border-red-400 p-3 bg-red-400 m-3 rounded">-</button>
            </div>
        )
    }
}

export default Counter;