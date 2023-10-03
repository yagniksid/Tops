import React, { Component } from 'react'
import "./index.css"

export default class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="subcontainer1">
                    <h1>Content</h1>
                </div>
                <div className="subcontainer2">
                    <h1>Main Content</h1>
                </div>
                <div className="subcontainer3">
                    <h1>Content</h1>
                </div>
            </div>
        )
    }
}
