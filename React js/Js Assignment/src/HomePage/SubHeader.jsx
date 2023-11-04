import React from 'react'
import "./index.css"

export default function SubHeader() {
    return (
        <>
            <div className='main'>
                <div >
                    <ul className='mul'>
                        <li>About Us</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>
                <div>
                    <ul className='sul'>
                        <li>Need help?</li>
                        <li> Call Us:
                            1900 - 888</li>
                        <li>English</li>
                        <li>USD</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
