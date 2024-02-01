import React from 'react'
import { useSelector } from 'react-redux'

export default function Point() {
    let pointData = useSelector((store) => {
        return store.pointReducer.point
    })

    return (
        <>
            <h1> Point is : {pointData}</h1>
        </>
    )
}
