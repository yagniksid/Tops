import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class UseStateClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 10
        }
        console.log("This", this);
    }


    Increment() {
        console.log("----------->");
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <>
                <h1>UseStateClass</h1>
                <h1>count is {this.state.count} </h1>
                <Button color="success" onClick={() => this.Increment()}> Increment </Button>
                <hr />
                <Button color="success" onClick={() => this.setState({ count: this.state.count - 1 })}> Decrement </Button >
            </>
        )
    }
}
