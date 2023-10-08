import React from 'react'

export default function ConditionFunCom() {
    const newUser = !true
    return (
        <>
            <h1>ConditionFunCom</h1>
            {newUser && <h1>Welcome admin</h1>}
        </>
    )
}

// export default function ConditionFunCom() {
//     const newUser = true
//     if (!newUser) {
//         return (
//             <>
//                 <h1>ConditionFunCom</h1>
//                 <h1>Welcome admin  </h1>
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <h1>ConditionFunCom</h1>
//                 <h1>Wellcome back admin</h1>
//             </>
//         )
//     }

// }


// export default function ConditionFunCom() {
//     const newUser = true
//     return (
//         <>
//             <h1>ConditionFunCom</h1>
//             {!newUser ? <h1>Welcome admin  </h1> : <h1>Wellcome back admin</h1>
//             }
//         </>
//     )
// }
