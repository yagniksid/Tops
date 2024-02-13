import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'reactstrap';
import { incrementFive, incrementOne } from '../../Redux/feature/count/counter';

export default function Counter() {

    let data = useSelector((store) => {
        return store.counterReducer.count
    })
    // console.log("🚀 ~ data ~ data:", data)

    let dispatch = useDispatch()

    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ height: "200px", width: "300px", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "40px" }}>
                <h1>Count is : {data}</h1>
                <div className='p-3'>
                    <Button color='danger' className='me-2' onClick={() => {
                        dispatch(incrementFive())
                    }}>Inc-5</Button>
                    <Button color='danger' onClick={() => {
                        dispatch(incrementOne())
                    }}>Inc-1</Button>
                </div>
            </div>
        </div>
    )
}
