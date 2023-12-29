import React, { useContext } from 'react'
import { NameContext } from './UseContextCom'
import { Input } from 'reactstrap'

export default function ComA() {
    const data = useContext(NameContext)
    console.log("🚀 ~ file: ComA.jsx:7 ~ ComA ~ data:", data)
    return (
        <div>
            <h1>{data.name}</h1>
            <Input id='name' placeholder='Enter Your Name ' onChange={(e) => data.setName(e?.target?.value)} />
            <h1>ComA</h1>
        </div>
    )
}
