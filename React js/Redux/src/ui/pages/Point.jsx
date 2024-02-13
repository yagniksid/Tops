import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "reactstrap";
import { decrementTenPiont, incrementTenPoint } from '../../Redux/feature/point/point';
export default function Point() {
    let pointData = useSelector((store) => {
        return store.pointReducer.point
    })

    const dispatch = useDispatch()

    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ height: "200px", width: "300px", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "40px" }}>
                <h1> Point is : {pointData}</h1>
                <div className='p-3'>
                    <Button className='me-2' color='danger' onClick={() => dispatch(incrementTenPoint())}>Inc-10</Button>
                    <Button color='danger' onClick={() => dispatch(decrementTenPiont())}>Inc-10</Button>
                </div>
            </div>
        </div>
    )
}
