import React, { Component } from 'react'

export default class PropsClassCom extends Component {
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <h1>My name is {this?.props?.data?.name} </h1>
                <h1>My age is {this?.props?.data?.age} </h1>
            </div>
        )
    }
}
