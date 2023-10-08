import { Fragment } from "react"
import "./App.css"
import ClassCom from "./02_component/ClassCom"
import Funcom from "./02_component/FunCom"
import HomePage from "./02_component/project/HomePage"
import PropsChange from "./03_Props/PropsChange"
import PropsClassCom from "./03_Props/PropsClassCom"
import PropsFunCom from "./03_Props/PropsFunCom"
import Fragmentt from "./Map-key.jsx/Fragmentt"
import MapKey from "./Map-key.jsx/MapKey"
import CityTable from "./Map-key.jsx/CityTable"
import ConditionCom from "./04_ConditionalREndering/ConditionFunCom"
import ConditionFunCom from "./04_ConditionalREndering/ConditionFunCom"
import UseStateFun from "./06_useState/useStateFun"
import UseStateClass from "./06_useState/UseStateClass"

function App() {


  return (
    <div className="app">
      {/* -------------------------------------------COMPONENT--------------------------------------------- */}
      {/* <ClassCom />
      <Funcom /> */}
      {/* <HomePage /> */}
      {/* -------------------------------------------PROPS--------------------------------------------- */}
      {/* <PropsFunCom name={"Yagnik"} age={25} />
      <PropsFunCom name={"Divyesh"} age={25} /> */}
      {/* <PropsClassCom data={{ name: "Yagnik", age: 25 }} />
      <PropsClassCom /> */}
      {/* <PropsChange name={"Yagnik"} /> */}
      {/* <PropsChange /> */}
      {/* -------------------------------------------FRAGMENT--------------------------------------------- */}
      {/* <Fragmentt />
      <Fragmentt /> */}

      {/* -------------------------------------------MAPKEY--------------------------------------------- */}
      {/* <MapKey /> */}
      {/* -------------------------------------------CONDITIONAL RENDERING--------------------------------------------- */}
      {/* <ConditionFunCom /> */}
      {/* -------------------------------------------USE STATE--------------------------------------------- */}
      {/* <UseStateFun /> */}
      <UseStateClass />

    </div>

  )
}

export default App
