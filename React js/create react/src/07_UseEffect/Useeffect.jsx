import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';

export default function Useeffect() {
    const [count, setcount] = useState(0)
    const [Amount, setAmount] = useState(0)
    useEffect(() => {
        console.log("-----Use Effect Every Time-----1 ");
    })
    useEffect(() => {
        console.log("-----Use Effect First Time-----2 ");
    }, [])
    useEffect(() => {
        console.log("-----Use Effect Update on count-----3 ");
    }, [count])
    useEffect(() => {
        console.log("-----Use Effect Update on count and Amount-----4 ");
    }, [count, Amount])
    return (
        <>
            <h1>UseEffect</h1>
            <h1>count is {count}</h1>
            <h1>Amount is {Amount}</h1>
            <Button color='primary' onClick={() => setcount(count + 1)} > Inc Count</Button>
            <hr />
            <Button color='primary' onClick={() => setAmount(Amount + 1)} > Inc Amount </Button>

        </>
    )
}
