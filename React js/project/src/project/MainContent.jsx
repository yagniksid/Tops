import React, { Component } from 'react'
import "./index.css"
import ContentCom from './ContentCom'

export default class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <ContentCom />
                <div className="subcontainer2">
                    <h1>Main Content</h1>
                </div>
                <ContentCom />

            </div>
        )
    }
}
