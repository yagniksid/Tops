import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function UseStateFun() {
    let [count, setcount] = useState(200)
    let x = 100;
    function IncHandler() {
        // console.log("-------------->");
        setcount(count + 1)
        // x = x + 1
        // console.log("x:", x)
        // count = count + 1
        // console.log("count:", count)
    }
    function DecHandler() {
        setcount(count - 1)
    }
    return (
        <>
            <h1>useStateFun</h1>
            <h1>x is {x}</h1>
            <h1>count is {count}</h1>

            {/* <Button color="success" onClick={() => IncHandler()}>Inc</Button>
            <hr />
            <Button color="success" onClick={() => DecHandler()}>Dec</Button> */}

            {/* <Button color="primary" onClick={IncHandler}>Inc</Button>
            <hr />
            <Button color="primary" onClick={DecHandler}>Dec</Button> */}

            <Button color="success" onClick={IncHandler}>Inc</Button>
            <hr />
            <Button color="success" onClick={DecHandler}>Dec</Button>


        </>
    )
}
