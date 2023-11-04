import React from 'react'
import "./index.css"

export default function Homepage() {
    return (
        <>
            <div className='homepage'>
                <h1>Don't miss amazing glosary deals</h1>
                <p>Sign up for the daily newslatter</p>
                <div style={{
                    display: "flex",
                    paddingLeft: "125px",
                    paddingBottom: "75px",
                    width: "37%",
                }}>
                    <input className="form-control me-2" type="search" placeholder="Your email address" aria-label="Search" style={{
                        padding: "12px",
                        borderRadius: "50px",
                        paddingLeft: "20px"
                    }
                    } />
                    <button className="btn btn-outline-success" type="submit" style={{
                        borderRadius: "30px",
                        width: "180px",
                        marginLeft: "-190px",
                        backgroundColor: "#3bb77e",
                        border: "none",
                        color: "white"
                    }
                    } > Search</button>
                </div>
            </div >
        </>
    )
}
