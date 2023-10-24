import React, { useState } from 'react'
import { Pencil, XCircle } from "lucide-react";
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import "./index.css"

export default function AddDeleteUpdate() {
    let [carName, setCarName] = useState("")
    let [carColor, setCarColor] = useState("")
    let [index, setIndex] = useState(null)
    let [updateMode, setUpdateMode] = useState(false)
    const [userArr, setUserArr] = useState([])

    // INPUT

    let addDataToArr = () => {

        if (carName === "" ||
            carColor === "") { alert("Please fill the form first") } else {
            setUserArr([...userArr, { carName, carColor }])
            setCarName("")
            setCarColor("")
        }
    }

    // DELETE

    let deleteHandler = (index) => {
        let filterData = userArr.filter((e, i) => {
            return i !== index
        })
        setUserArr(filterData)
    }

    // UPDATE

    function updateHandler(data, index) {
        setCarName(data.carName)
        setCarColor(data.carColor)
        setIndex(index)
        setUpdateMode(true)
    }

    function UpdateDataToArray() {
        if (index || index === 0)
            userArr.splice(index, 1, { carName, carColor })
        setUserArr([...userArr])
        setIndex(null)
        setCarName("")
        setCarColor("")
        setUpdateMode(false)
    }

    function deleteAll() {
        const allDelete = window.confirm("Do you want to delete all data?");
        if (allDelete) {
            setUserArr([]);
        }
    }
    return (
        <>
            <div className='formcss'>
                <Form className='mainclass' >
                    <FormGroup>
                        <Label for="exampleEmail">
                            <b>Car Name</b>
                        </Label>
                        <Input
                            value={carName}
                            id="exampleEmail"
                            name="carName"
                            placeholder="Enter Car Name"
                            type="text"
                            onChange={(element) => setCarName(element?.target?.value)}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">
                            <b>Car Color</b>
                        </Label>
                        <Input
                            value={carColor}
                            id="examplePassword"
                            name="password"
                            placeholder="Enter Car Color"
                            type="text"
                            onChange={(element) => setCarColor(element?.target?.value)}
                        />
                    </FormGroup>
                    {
                        // index || index === 0 ?
                        updateMode ?
                            (<Button color='success' style={{
                                width: "100%"
                            }} onClick={() => UpdateDataToArray()}>Update</Button>)
                            : (<Button color='success' style={{
                                width: "100%"
                            }} onClick={() => addDataToArr()}>Submit</Button>)
                    }
                </Form>
            </div>
            <div className="tablecss">
                <Table hover className='subtable'>
                    <thead>
                        <tr>
                            <th>
                                SR NO.
                            </th>
                            <th>
                                Car Name
                            </th>
                            <th>
                                Car Color
                            </th>
                            <th
                            >Delete
                            </th>
                            <th>
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userArr.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">
                                            {i + 1}
                                        </th>
                                        <td>
                                            {e.carName}
                                        </td>
                                        <td>
                                            {e.carColor}
                                        </td>
                                        <td><XCircle color="#f50000" role='button' onClick={() => deleteHandler(i)} />
                                        </td>
                                        <td> <Pencil color="#f50000" role='button' onClick={() => updateHandler(e, i)} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className='d-flex justify-content-center mt-3 ' >
                <Button color='danger' className='buttoncss' onClick={() => deleteAll()} >Delete all</Button></div>

        </>
    )
}
