import React, { Component } from 'react'
import "./index.css"
export default class Body extends Component {
    render() {
        return (
            <div className="container">
                {
                    ["Head 1", "Head 2", "Head 3"].map((e) => {
                        return (<div className="subcontainer"><h1>{e}</h1></div>)
                    })
                }
            </div>
        )
    }
}
