import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from "reactstrap";
import { incrementAmount1, incrementAmount5 } from '../../Redux/feature/amount/amount';
import { Plus } from 'lucide-react';
import { incremenByInput } from '../../Redux/feature/count/counter';

export default function Amount() {
    let [num, setNum] = useState()
    console.log("🚀 ~ Amount ~ num:", num)

    let amountData = useSelector((store) => {
        return store
    })
    let dispatch = useDispatch()
    const addNum = () => {
        dispatch(incremenByInput(+num))
        setNum("")
    }

    // console.log("🚀 ~ amountData ~ amountData:", amountData)
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ height: "200px", width: "300px", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "40px" }}>
                <h1>Amount is : {amountData.amountReducer.amount}</h1>
                <div className='p-3'>
                    <Button className='me-2' color='danger' onClick={() => dispatch(incrementAmount5())}>Inc-5</Button>
                    <Button color='danger' onClick={() => dispatch(incrementAmount1(amountData))}>Inc-1</Button>

                    <h1>num is {num}</h1>
                    <div className='d-flex pt-5'>
                        <Input
                            className='rounded-0'
                            value={num}
                            onChange={(e) => setNum(e?.target?.value)}
                        />
                        <Button className='rounded-0' color='danger' onClick={() => addNum()}><Plus /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
