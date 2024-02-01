import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'reactstrap';
import { incrementOne } from '../../Redux/feature/count/counter';

export default function Counter() {

    let data = useSelector((store) => {
        return store.counterReducer.count
    })
    console.log("🚀 ~ data ~ data:", data)

    let dispatch = useDispatch()

    return (
        <>
            <h1>Count is : {data}</h1>
            <Button onClick={() => {
                dispatch(incrementOne())
            }}>Inc-1</Button>
        </>
    )
}
