import React, { useEffect, useState } from 'react'
import { Button, Input, Label } from "reactstrap";
import "./index.css";
import { EditIcon } from 'lucide-react';

export default function PendingTask({ toDoData, setToDoData, getData, setGetData, editHandler }) {
    // console.log("🚀 ~ file: PendingTask.jsx:8 ~ PendingTask ~ setToDoData:", setToDoData)
    // console.log("🚀 ~ file: PendingTask.jsx:8 ~ PendingTask ~ toDoData:", toDoData)
    let [selectedToDoData, setSelectedToDoData] = useState([]);



    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("userdata")) || [];
        setToDoData(userData);
    }, [])

    const checkedHandlerToDoData = (index) => {
        let match = selectedToDoData.includes(index);
        if (match) {
            setSelectedToDoData(selectedToDoData.filter((e) => e !== index));
        } else {
            setSelectedToDoData([...selectedToDoData, index]);
        }
    };
    const checkAllTodoData = () => {
        if (selectedToDoData.length !== toDoData.length) {
            setSelectedToDoData(toDoData.map((e, index) => index));
        } else {
            setSelectedToDoData([]);
        }
    };

    const submitHandler = () => {
        let notDone = [];
        let done = [];

        toDoData.map((e, i) => {
            if (selectedToDoData?.includes(i)) {
                done.push(e);
            } else {
                notDone.push(e);
            }
        });
        setToDoData(notDone);
        setGetData([...getData, ...done]);
        localStorage.setItem("removedata", JSON.stringify([...getData, ...done]));
        localStorage.setItem("userdata", JSON.stringify(notDone));
        setSelectedToDoData([]);
    };

    const editData = (data, index) => {
        editHandler(data,index)
    }

    return (
        <>
            <div style={{ flex: "1" }}>
                <div className="notebook-page">
                    <div className="input" style={{ height: "100%" }}>
                        <div className="header">
                            <h1
                                className="text-center"
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "45px",
                                    padding: "10px",
                                    color: "#131355",
                                }}
                            >
                                Pending Task
                            </h1>
                        </div>
                        <div className="p-3 d-flex flex-column justify-content-between">
                            <div>
                                {toDoData.length > 0 && (
                                    <div className="d-flex justify-content-end pb-2">
                                        <Input
                                            type="checkbox"
                                            style={{
                                                boxShadow: "none",
                                                borderRadius: "50%",
                                                fontSize: "22px",
                                                border: "none"
                                            }}
                                            onChange={checkAllTodoData}
                                            checked={selectedToDoData.length==toDoData.length}
                                        />
                                        <Label
                                            role="button"
                                            style={{ fontWeight: "bold ", fontSize: "22px", paddingLeft: "10px" }}
                                        >
                                            Select All
                                        </Label>
                                    </div>
                                )}
                                <ul style={{ listStyle: "none" }}>
                                    {toDoData.map((e, i) => (
                                        <>
                                            <li
                                                key={i}
                                                className="w-100 d-flex align-items-center justify-content-between  mt-0 mb-0"
                                                style={{ maxHeight: "10px" }}
                                            >
                                                <div className="list">
                                                    <span
                                                        style={{
                                                            fontWeight: "bold",
                                                            fontSize: "25px",
                                                            paddingRight: "10px",
                                                        }}
                                                    >
                                                        {i + 1}.
                                                    </span>
                                                    <Label
                                                        style={{
                                                            fontWeight: "bold",
                                                            fontSize: "25px",
                                                            paddingRight: "18px",
                                                            paddingTop: "10px",
                                                            marginLeft: "40px",
                                                        }}
                                                    >
                                                        {e}
                                                    </Label>
                                                </div>
                                                <div className='d-flex align-items-center gap-2'>
                                                    <EditIcon onClick={() => editData(e, i)} color='Blue' role='button' />
                                                    <Input
                                                        onChange={() => checkedHandlerToDoData(i)}
                                                        checked={selectedToDoData.includes(i)}
                                                        type="checkbox"
                                                        style={{
                                                            boxShadow: "none",
                                                            borderRadius: "50%",
                                                            fontSize: "22px",
                                                        }}
                                                    />
                                                </div>
                                            </li>
                                            <hr style={{ width: "100%" }} />
                                        </>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className=" d-flex justify-content-center gap-4 h-25"
                                style={{
                                    textAlign: "center",
                                    width: "100"
                                }}
                            >
                                {toDoData.length > 0 && (
                                    <Button
                                        color="danger"
                                        className="me-2"
                                        onClick={submitHandler}
                                    >
                                        Submit
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}