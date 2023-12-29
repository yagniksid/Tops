import React, { useReducer, useState } from 'react'
import { Button } from 'reactstrap'


function reducer(state, action) {
    console.log("🚀 ~ file: UseReducer.jsx:6 ~ reducer ~ action:", action)
    if (action.actionType === "add") {
        return +action.num1 + +action.num2
    } else if (action.actionType === "multy") {
        return +action.num1 * +action.num2
    }
    else {
        return state;

    }
}

 
export default function IncDec()  {

    const [count, dispatch] = useReducer(reducer, 0)
    const [value, setvalue] = useState({
        a: 0,
        b: 0,
    })
  


    return (
        <>
            <div className='d-flex w-100 justify-content-center'>
                <h1>{count}</h1>
                <label htmlFor="">Enter First Value</label>
                <input type="text"
                    onChange={(e) => setvalue({ ...value, a: e?.target?.value })}
                />
                <label htmlFor="">Enter Second Value</label>
                <input type="text"
                    onChange={(e) => setvalue({ ...value, b: e?.target?.value })}
                />
                <Button onClick={() => dispatch({ actionType: "add", num1: value.a, num2: value.b })}>Add</Button>
                <Button onClick={() => dispatch({ actionType: "multy", num1: value.a, num2: value.b })}>Multiplication</Button>

            </div>
        </>
    )
}