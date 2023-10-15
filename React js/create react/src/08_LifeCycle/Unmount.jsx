import React, { Component } from 'react'

export default class Unmount extends Component {
    componentWillUnmount() {
        console.log("------COMPONENTWILLUNMOUNTMO------");
        alert("you want to remove")
    }
    render() {
        return (
            <h1>Unmount</h1>
        )
    }
}
