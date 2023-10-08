import React from 'react'

export default function PropsFunCom(props) {
    return (
        <div>
            <h1>My name is {props.name}</h1>
            <h1>My age is {props.age} </h1>
        </div>
    )
}

// export default function PropsFunCom({ name, age }) {
//     return (
//         <div>
//             <h1>My name is {name}</h1>
//             <h1>My age is {age} </h1>
//         </div>
//     )
// }
