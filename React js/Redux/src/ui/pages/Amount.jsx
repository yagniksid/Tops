import React from 'react'
import { useSelector } from 'react-redux'

export default function Amount() {

    let amountData = useSelector((store) => {
        return store
    })
    console.log("🚀 ~ amountData ~ amountData:", amountData)
    return (
        <div>
            <h1>Amount is : {amountData.amountReducer.amount}</h1>
        </div>
    )
}
