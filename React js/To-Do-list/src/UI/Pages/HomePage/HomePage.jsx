import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "reactstrap";
import Swal from "sweetalert2";
import "./index.css";
import PendingTask from "./PendingTask";
import DoneTask from "./DoneTask";

export default function HomePage() {
  const [data, setData] = useState("");
  const [toDoData, setToDoData] = useState([]);
  const [getData, setGetData] = useState([]);
  let [editIndex, setEditIndex] = useState(null)

  const addData = (e) => {
    e?.preventDefault();
    if (data === "") {
      Swal.fire({
        text: "Please Enter Data",
        icon: "warning"
      });
    } else {
      const newToDoData = [...toDoData, data];
      setToDoData(newToDoData);
      localStorage.setItem("userdata", JSON.stringify(newToDoData));
      setData("");
    }
  };

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userdata")) || [];
    setToDoData(userData);

    let removeData = JSON.parse(localStorage.getItem("removedata")) || [];
    setGetData(removeData);
  }, []);


  // const editHandler = (editedData, index) => {
  //   console.log("🚀 ~ editHandler ~ index:", index)
  //   console.log("🚀 ~ editHandler ~ editedData:", editedData)
  //   setData(editedData);
  //   setEditIndex(index);
  // }

  // const updateData = () => {
  //   if (editIndex !== null) {
  //     const storeUpdate = [...toDoData]
  //     console.log("🚀 ~ updateData ~ storeUpdate:", storeUpdate)
  //     storeUpdate[editIndex] = data
  //     console.log("🚀 ~ updateData ~ storeUpdate[editIndex]:", storeUpdate[editIndex])
  //     setToDoData(storeUpdate)
  //     localStorage.setItem("userdata", JSON.stringify(storeUpdate));
  //   }
  //   setEditIndex(null)
  //   setData("")
  // }

  const editHandler = (editedData, index) => {
    console.log("Edit Handler - editedData:", editedData);
    console.log("Edit Handler - index:", index);
    setData(editedData);
    setEditIndex(index);
  };

  const updateData = () => {
    if (editIndex || editIndex === 0) {
      toDoData.splice(editIndex, 1, data); // Replace the element at editIndex with the new data
      setToDoData([...toDoData]);
      localStorage.setItem("userdata", JSON.stringify([...toDoData]));
      setEditIndex(null);
      setData("")
    }
  };

  return (
    <>
      <div className="mt-5">
        <Form onSubmit={addData}>
          <div className="d-flex justify-content-center mb-2">
            <div className="w-50">
              <Input
                id="input"
                value={data}
                placeholder="Enter data"
                type="text"
                onChange={(e) => setData(e?.target?.value)}
                style={{
                  height: "50px",
                }}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mb-4">
            {editIndex !== null ? (
              <Button
                style={{
                  backgroundColor: "rgb(60 63 121)",
                }}
                className="w-50"
                id="submit"
                type="submit"
                onClick={updateData}
              >
                Update
              </Button>
            ) : (
              <Button
                style={{
                  backgroundColor: "rgb(60 63 121)",
                }}
                className="w-50"
                id="submit"
                type="submit"
              >
                Add Data
              </Button>

            )
            }
          </div>
        </Form>
      </div>

      <div className="d-flex gap-5">
        <PendingTask toDoData={toDoData} setToDoData={setToDoData} getData={getData} setGetData={setGetData} editHandler={editHandler} />
        <DoneTask getData={getData} setGetData={setGetData} toDoData={toDoData} setToDoData={setToDoData} />
      </div>
    </>
  );
}