import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ClassCom from './02_component/ClassCom.jsx'
import Funcom from './02_component/FunCom.jsx'


// const name = "Yagnik"
// let array = ["yagnik", "neel", "divyesh", "tejas", "shubham"]
// let obj = {
//   name: "yagnik",
//   age: 25
// }
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <div>
//     {/* <h1>Hello my name is yagnik</h1> */}
//     {/* <h1>{name}</h1> */}
//     {
//       array.map((e) => {
//         // console.log("name :", e);
//         return <h1>My name is : {e}</h1>
//       })

//     }
//     <h1>{obj.name}</h1>
//     <h1>{obj.age}</h1>
//     {/* <h1>{array[1]}</h1> */}
//     <h1>{array}</h1>
//   </div>
// )


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClassCom />
    <ClassCom></ClassCom>
    <Funcom />
  </React.StrictMode>
)
