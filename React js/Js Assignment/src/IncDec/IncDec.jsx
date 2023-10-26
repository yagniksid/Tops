
// Create Increment decrement state change by button click

import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function IncDec() {
    let [count, setcount] = useState(0)
    let x = 100;
    function IncHandler() {
        setcount(count + 1)
    }
    function DecHandler() {
        setcount(count - 1)
    }
    function Reset() {
        setcount(0)
    }

    return (
        <>
            <div style={{
                backgroundColor: "#3737ec",
                height: "700px "
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center"

                }}>
                    <h1>React Web</h1>
                    <h1>{count}</h1>
                    <div style={{
                        display: "flex",
                        gap: "30px"
                    }}>
                        <Button color="success" onClick={IncHandler} style={{
                            height: "40px",
                            width: '150px'
                        }}>Inc</Button>
                        <Button color="success" onClick={DecHandler} style={{
                            height: "40px",
                            width: '150px'
                        }}>Dec</Button>
                    </div>
                    <Button color='dark' onClick={Reset} style={{
                        height: "40px",
                        width: '150px',
                        marginTop:"20px"
                    }}>Reset</Button>
                </div>
            </div>
        </>
    )
}
