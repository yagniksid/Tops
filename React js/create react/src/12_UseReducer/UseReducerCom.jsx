import React, { useReducer, useState } from 'react'
import { Button } from 'reactstrap'


export default function UseReducerCom() {
  let [obj, setObj] = useReducer(reducer, { ans: "" })
  function reducer(state, action) {
    if (action.actionType === "sum") {
      return { ans: action.a + action.b }
    } else {
      return state
    }
  }
  return (
    <div>
      <h1>Ans is {obj.ans}</h1>
      <Button onClick={() => setObj({ actionType: "sum", a: 20, b: 10 })}>INC-1</Button>
      <Button onClick={() => setObj("sub")}>INC-2</Button>
      <Button onClick={() => setObj("mul")}>INC-2</Button>
      <Button onClick={() => setObj("div")}>INC-2</Button>
    </div>
  )
}















// export default function UseReducerCom() {
//   let [obj, setObj] = useReducer(reducer, { count: 0 })
//   function reducer(state, action) {
//     if (action === "INC_1") {
//       return { count: state.count + 1 }
//     } else {
//       return state
//     }
//   }
//   return (
//     <div>
//       <h1>{obj.count}</h1>
//       <Button onClick={() => setObj("INC_1")}>INC-1</Button>
//       <Button onClick={() => setObj("INC_2")}>INC-2</Button>
//     </div>
//   )
// }



// export default function UseReducerCom() {
//   let [count, setCount] = useReducer(reducer, 0)
//   function reducer(state, action) {
//     if (action === "INC_1") {
//       return state + 1
//     } else if (action === "INC_2") {
//       return state + 2
//     } else if (action === "INC_5") {
//       return state + 5
//     } else if (action === "DEC_4") {
//       return state - 4
//     } else {
//       return state
//     }
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <Button onClick={() => setCount("INC_1")}>INC-1</Button>
//       <Button onClick={() => setCount("INC_2")}>INC-2</Button>
//       <Button onClick={() => setCount("INC_5")}>INC-5</Button>
//       <Button onClick={() => setCount("DEC_4")}>DEC-4</Button>
//       <Button onClick={() => setCount("DEC_5")}>DEC-5</Button>
//     </div>
//   )
// }
