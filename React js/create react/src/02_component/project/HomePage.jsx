import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default function HomePage() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ backgroundColor: "#071952", color: "white" }}>HomePage</h1>
            <Header />
            <Body />
            <Footer />
        </div>

    )
}
