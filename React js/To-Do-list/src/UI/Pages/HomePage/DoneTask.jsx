import React, { useEffect, useState } from "react";
import { Button, Input, Label } from "reactstrap";
import { MinusSquare, Trash } from "lucide-react";
import Swal from "sweetalert2";
import "./index.css";

export default function DoneTask({ getData, setGetData, toDoData, setToDoData }) {
    let [selectedGetData, setSelectedGetData] = useState([]);

    useEffect(() => {
        let removeData = JSON.parse(localStorage.getItem("removedata")) || [];
        setGetData(removeData);
    }, []);

    const checkedHandlerGetData = (index) => {
        let match = selectedGetData.includes(index);
        if (match) {
            setSelectedGetData(selectedGetData.filter((e) => e !== index));
        } else {
            setSelectedGetData([...selectedGetData, index]);
        }
    };

    const checkAllGetData = () => {
        if (selectedGetData.length !== getData.length) {
            setSelectedGetData(getData.map((e, index) => index));
        } else {
            setSelectedGetData([]);
        }
    };

    const removeHandler = (index) => {
        let notDone = [];
        console.log("🚀 ~ file: HomePage.jsx:90 ~ removeHandler ~ notDone:", notDone)
        let done = [];
        console.log("🚀 ~ file: HomePage.jsx:92 ~ removeHandler ~ done:", done)
        getData.filter((e, i) => {
            if (i === index) {
                notDone.push(e);
            } else {
                done.push(e);
            }
        });

        setGetData(done);
        setToDoData([...toDoData, ...notDone]);
        localStorage.setItem("removedata", JSON.stringify(done));
        localStorage.setItem("userdata", JSON.stringify([...toDoData, ...notDone]));
        setSelectedGetData([]);
    };

    const singleDeleteHandler = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                let deleteData = getData.filter((e, i) => {
                    return i !== index;
                });

                setGetData(deleteData);
                setSelectedGetData([]);

                console.log("--------->", deleteData);
                localStorage.setItem("removedata", JSON.stringify(deleteData));
            } else {
                Swal.fire({
                    title: "Not selected data",
                    text: "Please select data",
                    icon: "question"
                });
            }
        });

    };

    const deleteAllHandler = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
                setGetData([])
                localStorage.removeItem("removedata");
            }
        });
    };

    const deleteSelected = () => {
        let notDone = [];
        getData.map((e, i) => {
            if (!selectedGetData?.includes(i)) {
                notDone.push(e);
            }
        });

        setGetData(notDone);
        localStorage.setItem("removedata", JSON.stringify(notDone));
        setSelectedGetData([]);
    }

    const selectedRestore = () => {

        let notDone = [];
        let done = [];

        getData.map((e, i) => {
            if (selectedGetData?.includes(i)) {
                notDone.push(e);
            } else {
                done.push(e);
            }
        });

        setGetData(done);
        setToDoData([...toDoData, ...notDone]);
        localStorage.setItem("removedata", JSON.stringify(done));
        localStorage.setItem("userdata", JSON.stringify([...toDoData, ...notDone]));
        setSelectedGetData([]);
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
                                Done Task
                            </h1>
                        </div>
                        <div className="p-3 d-flex flex-column justify-content-between">
                            <div>
                                {getData.length > 0 && (
                                    <div className="d-flex justify-content-end pb-2">
                                        <Input
                                            type="checkbox"
                                            style={{
                                                boxShadow: "none",
                                                borderRadius: "50%",
                                                fontSize: "22px",
                                            }}
                                            onChange={checkAllGetData}
                                        />
                                        <Label
                                            role="button"
                                            style={{ fontWeight: "bold ", fontSize: "22px" }}
                                        >
                                            Select All
                                        </Label>
                                    </div>
                                )}
                                <ul style={{ listStyle: "none" }}>
                                    {getData.map((e, i) => (
                                        <>
                                            <li
                                                key={i}
                                                className="w-100 d-flex align-items-center justify-content-between mt-0 mb-0"
                                                style={{ maxHeight: "10px" }}
                                            >
                                                <div>
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
                                                <div className="d-flex align-items-center gap-3">
                                                    <Input
                                                        onChange={() => checkedHandlerGetData(i)}
                                                        checked={selectedGetData.includes(i)}
                                                        type="checkbox"
                                                        style={{
                                                            boxShadow: "none",
                                                            borderRadius: "50%",
                                                            fontSize: "22px",
                                                        }}
                                                    />

                                                    <MinusSquare
                                                        color="#ec0909"
                                                        style={{ marginLeft: "10px" }}
                                                        role="button"
                                                        onClick={() => removeHandler(i)}
                                                    />

                                                    <Trash
                                                        role="button"
                                                        onClick={() => singleDeleteHandler(i)}
                                                        color="#ec0909"
                                                    />
                                                </div>
                                            </li>
                                            <hr style={{ width: "100%" }} />
                                        </>
                                    ))}
                                </ul>
                                <div className="d-flex justify-content-center gap-3">
                                    {selectedGetData.length > 1 && (
                                        <div
                                            style={{
                                                textAlign: "center",
                                                width: "100"
                                            }}
                                        >
                                            <Button color="danger" className="ms-2 me-3" onClick={deleteSelected}>Selected Delete</Button>
                                            <Button color="danger" onClick={selectedRestore}>Remove Selected</Button>
                                        </div>
                                    )}
                                    <div style={{
                                        textAlign: "center",
                                        width: "100"
                                    }}> <Button color="danger" onClick={deleteAllHandler}>
                                            Delete All
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
