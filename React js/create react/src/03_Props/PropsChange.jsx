import React from 'react'
import { Button } from 'reactstrap'
export default function PropsChange(props) {
    function changefun() {
        console.log("---------->");
        // props.name = "divyesh"
    }

    return (
        <div>
            <h1>Hello World {props.name}</h1>
            <Button color="success" onClick={() => {
                changefun()
            }}>click here</Button>
        </div>
    )
}
