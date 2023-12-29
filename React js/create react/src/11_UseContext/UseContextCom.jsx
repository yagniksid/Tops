import React, { createContext, useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'

export const NameContext = createContext(null)
export default function UseContextCom() {
    let [name, setName] = useState("Yagnik")
    return (
        <div>
            <NameContext.Provider value={{ name, setName }}>
                <ComA />
                <ComB name={name} />
            </NameContext.Provider>
        </div>
    )
}

