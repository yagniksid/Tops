import React, { useState } from 'react'
import Input1 from '../Input1/Input1'
import Input2 from '../Input2/Input2'

export default function DisplayInput() {
    let [data, setData] = useState({ email: "", password: "" })

    return (
        <div>
            <Input1 data={data} setData={setData} />
            <Input2 data={data} setData={setData} />
        </div>
    )
}
