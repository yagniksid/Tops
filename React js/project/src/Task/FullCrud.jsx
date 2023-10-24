import React, { useState } from 'react'
import { Pencil, XCircle } from "lucide-react";
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import "./index.css"

export default function FullCrud() {
    let [carData, setCardata] = useState({ carName: "", carColor: "" })
    let [index, setIndex] = useState(null)
    let [updateMode, setUpdateMode] = useState(false)
    const [userArr, setUserArr] = useState([])

    // INPUT

    let addDataToArr = () => {

        if (carData.carName === "" || carData.carColor === "") {
            alert("Please fill the form first")
        } else {
            setUserArr([...userArr, carData])
            setCardata({ carName: "", carColor: "" })
        }
    }

    // DELETE

    let deleteHandler = (index) => {
        const deleteData = window.confirm("Do you want to delete?");
        if (deleteData) {
            let filterData = userArr.filter((e, i) => {
                return i !== index
            })
            setUserArr(filterData)
        }
    }

    // UPDATE

    function updateHandler(data, index) {
        setCardata({ ...data })
        setIndex(index)
        setUpdateMode(true)
    }

    function updateDataToArray() {
        if (index || index === 0)
            userArr.splice(index, 1, { ...carData })
        setUserArr([...userArr])
        setIndex(null)
        setCardata({ carName: '', carColor: '' })
        setUpdateMode(false)
    }

    function deleteAll() {
        const allDelete = window.confirm("Do you want to delete all data?");
        if (allDelete) {
            const allDeleteData = window.confirm("Are you sure delete all data?");
            if (allDeleteData) {
                setUserArr([]);
            }
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
                            value={carData.carName}
                            id="exampleEmail"
                            name="carName"
                            placeholder="Enter Car Name"
                            type="text"
                            onChange={(element) => setCardata({ ...carData, carName: element?.target?.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">
                            <b>Car Color</b>
                        </Label>
                        <Input
                            value={carData.carColor}
                            id="examplePassword"
                            name="password"
                            placeholder="Enter Car Color"
                            type="text"
                            onChange={(element) => setCardata({ ...carData, carColor: element?.target?.value })}
                        />
                    </FormGroup>
                    {
                        // index || index === 0 ?
                        updateMode ?
                            (<Button color='success' style={{
                                width: "100%"
                            }} onClick={() => updateDataToArray()}>Update</Button>)
                            : (<Button color='success' style={{
                                width: "100%"
                            }} onClick={() => addDataToArr()}>Submit</Button>)
                    }
                </Form>
            </div>
            <div className="tablecss">
                {userArr.length === 0 ? ("data not found") :
                    (<Table hover className='subtable'>
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
                    </Table>)}
            </div>
            <div className='d-flex justify-content-center mt-3 ' >
                <Button color='danger' className='buttoncss' onClick={() => deleteAll()} >Delete all</Button></div>
        </>
    )
}