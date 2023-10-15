import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Unmount from './Unmount';

export default class LifeCycle extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        console.log("------constructor------");
    }
    componentDidMount() {
        console.log("-----componentDidMount-----");
    }
    componentDidUpdate(prvProps, prvState) {
        if (this.state.count === prvState.count) {
            alert("both are same")
        }
        console.log("-----componentDidUpdate-----");
    }

    render() {
        console.log("-----render-----");
        return (
            <div>
                <h1> LifeCycle</h1>
                <h1>count is {this.state.count}</h1>
                <Button color='success' onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</Button>
                <hr />
                <Button color='success' onClick={() => this.setState({ count: this.state.count })}>Increment same</Button>
                {
                    this.state.count < 10 && <Unmount />
                }
            </div >
        )
    }

}
