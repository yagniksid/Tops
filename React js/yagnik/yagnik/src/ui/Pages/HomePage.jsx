import { Button, Input } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Features/todo";
import PendingTask from "./PendingTask";

export default function HomePage() {
  let [todo, setTodo] = useState("");
  let dispatch = useDispatch();

  let submitHandler = () => {
    if (todo === "") {
      alert("Please add Todo First")
    } else {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <div style={{ backgroundColor: "#CBC3E3", paddingTop: "20px" }}>
      <h1 className="d-flex justify-content-center" style={{ color: "#000000c4" }}>TODO List</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ height: "200px", width: "70%", boxShadow: "0px 0px 5px", borderRadius: "10px", backgroundColor: "white" }} className="mb-5 mt-3">
          <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
            <div className=" w-50 " >
              <Input
                id="todo"
                name="todod"
                placeholder="Add todo here"
                type="text"
                value={todo}
                onChange={(e) => {
                  setTodo(e?.target?.value);
                }}
                style={{ borderBottom: "2px solid gray", borderTop: "none", borderRight: "none", borderLeft: "none", borderRadius: "0px", boxShadow: "none" }}
              />
              <div className="d-flex justify-content-center mt-3">
                <Button style={{ width: "200px", backgroundColor: "rgb(222 39 0 / 78%) " }} onClick={submitHandler}>Add</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PendingTask />
    </div>
  );
}
