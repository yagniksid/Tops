import React, { Component } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import NavigationMenu from './NavigationMenu'
import Footer from './Footer'
import "./index.css"

export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <Header />
                <NavigationMenu />
                <MainContent />
                <Footer />
            </div>
        )
    }
}
