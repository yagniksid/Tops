import React, { useContext } from 'react'
import { NameContext } from './UseContextCom'

export default function ComB3(name) {

    const data = useContext(NameContext)
    return (
        <div>
            <h1>
                My Name is {data.name}
                My Name is {name}
            </h1>
        </div>
    )
}

