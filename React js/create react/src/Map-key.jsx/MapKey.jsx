import React from 'react'
const array = ["Yagnik", "neel", "divyesh"]
export default function MapKey() {
    return (
        <div>
            {
                array.map((e, i) => {
                    return (
                        <div key={i}>
                            <h1>My name is {e}</h1>
                        </div>
                    )
                })
            }
            {/* <h1>My name is {array[0]}</h1>
            <h1>My name is {array[1]}</h1>
            <h1>My name is {array[2]}</h1> */}
        </div>
    )
}
