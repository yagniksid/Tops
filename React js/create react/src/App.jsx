import { Fragment } from "react"
import "./App.css"
import ClassCom from "./02_component/ClassCom"
import Funcom from "./02_component/FunCom"
import HomePage from "./02_component/project/HomePage"
import PropsChange from "./03_Props/PropsChange"
import PropsClassCom from "./03_Props/PropsClassCom"
import PropsFunCom from "./03_Props/PropsFunCom"
import Fragmentt from "./04_Map-key/Fragmentt"
import MapKey from "./04_Map-key/MapKey"
import ConditionCom from "./05_ConditionalREndering/ConditionFunCom"
import ConditionFunCom from "./05_ConditionalREndering/ConditionFunCom"
import UseStateFun from "./06_useState/useStateFun"
import UseStateClass from "./06_useState/UseStateClass"
import LifeCycle from "./08_LifeCycle/lifeCycle"
import CityTable from "./04_Map-key/CityTable"
import Useeffect from "./07_UseEffect/Useeffect"
import InputData from "./09_Input/InputData"
import DeleteData from "./09_Input/DeleteData"
import Router from "./10_Router/Router"
import { BrowserRouter } from "react-router-dom"
import UseContextCom from "./11_UseContext/UseContextCom"
import { User } from "lucide-react"
import UseReducerCom from "./12_UseReducer/UseReducerCom"
import UseReducer from "./12_UseReducer/UseReducer"
import InputValue from "./12_UseReducer/InputValue"
import Task from "./12_UseReducer/task"
import CheckBox from "./13_CheckBox/CheckBox"
import DisplayInput from "./Task/DisplayInput/DisplayInput"

function App() {


  return (
    <div className="app">
      {/* -------------------------------------------COMPONENT--------------------------------------------- */}
      {/* <ClassCom /> */}
      {/* <Funcom /> */}
      {/* <HomePage /> */}
      {/* -------------------------------------------PROPS--------------------------------------------- */}
      {/* <PropsFunCom name={"Yagnik"} age={25} />
      <PropsFunCom name={"Divyesh"} age={25} /> */}
      {/* <PropsFunCom/> */}
      {/* <PropsClassCom data={{ name: "Yagnik", age: 25 }} />
      <PropsClassCom /> */}
      {/* <PropsChange name={"Yagnik"} /> */}
      {/* <PropsChange /> */}
      {/* -------------------------------------------FRAGMENT--------------------------------------------- */}
      {/* <Fragmentt />
      <Fragmentt /> */}
      {/* <CityTable /> */}
      {/* -------------------------------------------MAPKEY--------------------------------------------- */}
      {/* <MapKey /> */}

      {/* -------------------------------------------CONDITIONAL RENDERING--------------------------------------------- */}
      {/* <ConditionFunCom /> */}
      {/* -------------------------------------------USE STATE--------------------------------------------- */}
      {/* <UseStateFun /> */}
      <UseStateClass />
      {/* -------------------------------------------LIFE-CYCLE--------------------------------------------- */}
      {/* <LifeCycle /> */}
      {/* -------------------------------------------HOOKS--------------------------------------------- */}
      {/* <Useeffect /> */}
      {/* <UseContextCom /> */}
      {/* <UseReducerCom /> */}
      {/* <InputValue /> */}
      {/* <Task /> */}
      {/* -------------------------------------------INPUT--------------------------------------------- */}
      {/* <InputData /> */}
      {/* < DeleteData /> */}
      {/* <CheckBox /> */}
      {/* -------------------------------------------ROUTER--------------------------------------------- */}
      {/* <Router /> */}
      {/* <UseReducer /> */}
      {/* <DisplayInput /> */}
    </div>

  )
}

export default App
